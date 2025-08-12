import { LectionaryData, LectionaryError } from "@/types/lectionary";

// Cache for lectionary data to avoid repeated API calls
const lectionaryCache = new Map<string, LectionaryData>();

export const lectionaryService = {
  /**
   * Fetch lectionary data for a specific date
   * @param date - Date in YYYY/MM/DD format
   * @param series - Series number (1 for one-year, 3 for three-year, default: 3)
   * @returns Promise<LectionaryData | LectionaryError>
   */
  async getLectionaryForDate(
    date: string,
    series: number = 1
  ): Promise<LectionaryData | LectionaryError> {
    const cacheKey = `${date}-${series}`;
    
    // Check cache first
    if (lectionaryCache.has(cacheKey)) {
      return lectionaryCache.get(cacheKey)!;
    }

    try {
      const url = `/api/lectionary?getDate=${date}&series=${series}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const xmlText = await response.text();
      
      // Parse XML and extract data using regex patterns
      const lectionaryData: LectionaryData = {
        date: date,
        liturgicalDay: this.extractFromXml(xmlText, "dayname") || "Sunday",
        liturgicalColor: this.extractFromXml(xmlText, "color") || "Green",
        firstReading: this.extractFromXml(xmlText, "OldTestament") || "",
        secondReading: this.extractFromXml(xmlText, "Epistle") || "",
        gospel: this.extractFromXml(xmlText, "Gospel") || "",
        psalm: this.extractFromXml(xmlText, "Psalm") || "",
        series: series,
      };
      
      // Cache the result
      lectionaryCache.set(cacheKey, lectionaryData);
      
      return lectionaryData;
    } catch (error) {
      console.error("Error fetching lectionary data:", error);
      return {
        error: "fetch_error",
        message: "Failed to fetch lectionary data. Please try again later.",
      };
    }
  },

  /**
   * Helper function to extract text from XML using regex
   */
  extractFromXml(xmlText: string, elementName: string): string {
    const regex = new RegExp(`<${elementName}[^>]*>(.*?)</${elementName}>`, 's');
    const match = xmlText.match(regex);
    return match ? match[1].trim() : "";
  },

  /**
   * Get today's date in YYYY/MM/DD format
   */
  getTodayFormatted(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  },

  /**
   * Get the nearest Sunday (today if it's Sunday, otherwise the next Sunday)
   */
  getNearestSunday(fromDate?: string): string {
    const date = fromDate ? new Date(fromDate.replace(/\//g, '-')) : new Date();
    const daysUntilSunday = (7 - date.getDay()) % 7;
    const nearestSunday = new Date(date);
    nearestSunday.setDate(date.getDate() + daysUntilSunday);
    
    const year = nearestSunday.getFullYear();
    const month = String(nearestSunday.getMonth() + 1).padStart(2, '0');
    const day = String(nearestSunday.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  },

  /**
   * Format a date for display
   */
  formatDateForDisplay(dateString: string): string {
    const [year, month, day] = dateString.split('/');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  },

  /**
   * Get the next Sunday from a given date
   */
  getNextSunday(fromDate: string): string {
    const [year, month, day] = fromDate.split('/');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    
    // If the current date is already a Sunday, go to next Sunday
    // Otherwise, go to the next Sunday
    const daysToAdd = date.getDay() === 0 ? 7 : (7 - date.getDay());
    const nextSunday = new Date(date);
    nextSunday.setDate(date.getDate() + daysToAdd);
    
    const newYear = nextSunday.getFullYear();
    const newMonth = String(nextSunday.getMonth() + 1).padStart(2, '0');
    const newDay = String(nextSunday.getDate()).padStart(2, '0');
    return `${newYear}/${newMonth}/${newDay}`;
  },

  /**
   * Get the previous Sunday from a given date
   */
  getPreviousSunday(fromDate: string): string {
    const [year, month, day] = fromDate.split('/');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    
    // If the current date is already a Sunday, go to previous Sunday
    // Otherwise, go to the previous Sunday
    const daysToSubtract = date.getDay() === 0 ? 7 : date.getDay();
    const previousSunday = new Date(date);
    previousSunday.setDate(date.getDate() - daysToSubtract);
    
    const newYear = previousSunday.getFullYear();
    const newMonth = String(previousSunday.getMonth() + 1).padStart(2, '0');
    const newDay = String(previousSunday.getDate()).padStart(2, '0');
    return `${newYear}/${newMonth}/${newDay}`;
  },

  /**
   * Add days to a date string
   */
  addDaysToDate(dateString: string, days: number): string {
    const [year, month, day] = dateString.split('/');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    date.setDate(date.getDate() + days);
    
    const newYear = date.getFullYear();
    const newMonth = String(date.getMonth() + 1).padStart(2, '0');
    const newDay = String(date.getDate()).padStart(2, '0');
    return `${newYear}/${newMonth}/${newDay}`;
  },

  /**
   * Clear the cache (useful for testing or when data might be stale)
   */
  clearCache(): void {
    lectionaryCache.clear();
  },
};
