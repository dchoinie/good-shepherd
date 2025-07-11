import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText } from "lucide-react";

export default function SermonNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-gray-400" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Sermon Not Found
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              The sermon you&apos;re looking for doesn&apos;t exist or may have
              been moved.
            </p>
            <Link href="/sermons">
              <Button className="w-full">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Sermons
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
