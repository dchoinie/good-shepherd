import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Home, Calendar } from "lucide-react";
import SEO from "@/components/custom/SEO";

export default function SermonsNotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Page Not Found - Sermons"
        keywords="Good Shepherd Lutheran Church, sermons, not found, 404, Mankato, MN, Minnesota, Church"
        canonical="https://goodshepherdmankato.org/sermons"
      />
      
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="max-w-md mx-auto w-full">
          <Card className="text-center shadow-xl border-gray-200">
            <CardHeader className="pb-6">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-lcms-navy to-lcms-navy/80 rounded-full flex items-center justify-center mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                Page Not Found
              </CardTitle>
              <p className="text-gray-600 text-lg">
                The sermons page you&apos;re looking for doesn&apos;t exist.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  You may have followed a broken link, or the page may have been moved or removed. 
                  Please check the URL and try again, or use the navigation options below.
                </p>
              </div>
              
              <div className="space-y-3">
                <Link href="/sermons" className="block">
                  <Button className="w-full bg-lcms-navy hover:bg-lcms-navy/80 text-white">
                    <Calendar className="h-4 w-4 mr-2" />
                    Browse All Sermons
                  </Button>
                </Link>
                
                <Link href="/" className="block">
                  <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50">
                    <Home className="h-4 w-4 mr-2" />
                    Return to Home
                  </Button>
                </Link>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-500 text-sm">
                  Need help?{" "}
                  <Link href="/contact" className="text-lcms-navy hover:underline font-medium">
                    Contact us
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 