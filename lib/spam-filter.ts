/**
 * Spam filtering utilities for form submissions
 */

// In-memory rate limiting store
// In production, consider using Redis or Upstash for distributed rate limiting
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 requests per hour per IP

// Common spam keywords to detect
const SPAM_KEYWORDS = [
  "viagra",
  "cialis",
  "casino",
  "poker",
  "lottery",
  "winner",
  "congratulations",
  "click here",
  "limited time",
  "act now",
  "buy now",
  "cheap",
  "discount",
  "free money",
  "make money",
  "work from home",
  "get rich",
  "guaranteed",
  "no credit check",
  "debt consolidation",
  "weight loss",
  "lose weight",
  "diet pills",
  "enlargement",
  "penis",
  "sex",
  "porn",
  "xxx",
  "adult",
  "dating",
  "singles",
  "meet singles",
  "hot singles",
  "bitcoin",
  "crypto",
  "investment opportunity",
  "forex",
  "trading",
  "binary options",
  "mlm",
  "multi-level marketing",
  "pyramid scheme",
  "nigerian prince",
  "inheritance",
  "lottery winner",
  "urgent",
  "asap",
  "immediate action",
  "expires",
  "limited offer",
  "special promotion",
];

/**
 * Verify reCAPTCHA token with Google's API
 */
export async function verifyRecaptcha(token: string): Promise<{
  success: boolean;
  score?: number;
  error?: string;
}> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.warn("reCAPTCHA secret key is not configured");
    // Fail open - allow submission but log warning
    return { success: true, score: 0.5 };
  }

  if (!token) {
    return { success: false, error: "reCAPTCHA token is missing" };
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const data = await response.json();

    if (!data.success) {
      return {
        success: false,
        error: data["error-codes"]?.join(", ") || "reCAPTCHA verification failed",
      };
    }

    return {
      success: true,
      score: data.score || 0.5,
    };
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    // Fail open - allow submission if reCAPTCHA service is down
    return {
      success: true,
      score: 0.5,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Check if content contains spam keywords
 */
export function checkSpamKeywords(content: string): boolean {
  if (!content) return false;

  const lowerContent = content.toLowerCase();
  const keywordCount = SPAM_KEYWORDS.filter((keyword) =>
    lowerContent.includes(keyword.toLowerCase())
  ).length;

  // If 2 or more spam keywords found, consider it spam
  return keywordCount >= 2;
}

/**
 * Validate form fill time (should take at least 3 seconds for humans)
 */
export function isValidFormFillTime(startTime: number): boolean {
  if (!startTime) return false;

  const fillTime = Date.now() - startTime;
  const minimumTime = 3000; // 3 seconds in milliseconds

  return fillTime >= minimumTime;
}

/**
 * Check rate limit for an IP address
 */
export function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
} {
  if (!ip) {
    // If IP cannot be determined, allow but log warning
    console.warn("IP address not available for rate limiting");
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS, resetTime: Date.now() + RATE_LIMIT_WINDOW };
  }

  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    // No record or window expired, create new record
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });

    // Clean up old entries periodically
    if (rateLimitStore.size > 1000) {
      for (const [key, value] of rateLimitStore.entries()) {
        if (now > value.resetTime) {
          rateLimitStore.delete(key);
        }
      }
    }

    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX_REQUESTS - 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    };
  }

  // Check if limit exceeded
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: record.resetTime,
    };
  }

  // Increment count
  record.count++;
  rateLimitStore.set(ip, record);

  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - record.count,
    resetTime: record.resetTime,
  };
}

/**
 * Get client IP address from request
 */
export function getClientIP(request: Request): string {
  // Try various headers that proxies/load balancers might use
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  const realIP = request.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }

  const cfConnectingIP = request.headers.get("cf-connecting-ip");
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  return "unknown";
}

