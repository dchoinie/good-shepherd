"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight, Calendar, Search } from "lucide-react";
import { lectionaryService } from "@/lib/lectionary";
import { LectionaryData, LectionaryError } from "@/types/lectionary";

interface LectionaryDisplayProps {
  initialDate?: string;
  series?: number;
}

export default function LectionaryDisplay({ 
  initialDate, 
  series = 1 
}: LectionaryDisplayProps) {
  const [lectionaryData, setLectionaryData] = useState<LectionaryData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(initialDate || lectionaryService.getNearestSunday());
  const [currentSeries, setCurrentSeries] = useState(series);
  const [dateInput, setDateInput] = useState("");

  const fetchLectionary = async (date: string, seriesNum: number) => {
    setLoading(true);
    setError(null);
    
    const result = await lectionaryService.getLectionaryForDate(date, seriesNum);
    
    if ('error' in result) {
      setError(result.message);
      setLectionaryData(null);
    } else {
      setLectionaryData(result);
      setError(null);
    }
    
    setLoading(false);
  };

  useEffect(() => {
    fetchLectionary(currentDate, currentSeries);
  }, [currentDate, currentSeries]);

  const navigateDate = (direction: 'prev' | 'next') => {
    if (direction === 'next') {
      const newDate = lectionaryService.getNextSunday(currentDate);
      console.log(`Navigating next: ${currentDate} -> ${newDate}`);
      setCurrentDate(newDate);
    } else {
      const newDate = lectionaryService.getPreviousSunday(currentDate);
      console.log(`Navigating prev: ${currentDate} -> ${newDate}`);
      setCurrentDate(newDate);
    }
  };

  const goToToday = () => {
    setCurrentDate(lectionaryService.getNearestSunday());
  };

  const setSeries = (series: number) => {
    setCurrentSeries(series);
  };

  const handleDateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (dateInput.trim()) {
      // Convert date input to YYYY/MM/DD format
      const date = new Date(dateInput);
      if (!isNaN(date.getTime())) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${year}/${month}/${day}`;
        
        // Find the nearest Sunday to the selected date
        const nearestSunday = lectionaryService.getNearestSunday(formattedDate);
        setCurrentDate(nearestSunday);
        setDateInput("");
      }
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading lectionary...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="border-red-200 bg-red-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <Button onClick={() => fetchLectionary(currentDate, currentSeries)}>
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!lectionaryData) {
    return (
      <div className="text-center py-12 text-gray-500">
        No lectionary data available for this date.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Navigation Controls */}
      <div className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-sm border">
        {/* Sunday Navigation */}
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateDate('prev')}
            className="flex items-center gap-1"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous Sunday
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={goToToday}
            className="flex items-center gap-1"
          >
            <Calendar className="h-4 w-4" />
            Nearest Sunday
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateDate('next')}
            className="flex items-center gap-1"
          >
            Next Sunday
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Date Picker and Series Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <form onSubmit={handleDateSubmit} className="flex items-center gap-2">
            <Label htmlFor="date-picker" className="text-sm font-medium">
              Go to Sunday near:
            </Label>
            <Input
              id="date-picker"
              type="date"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
              className="w-auto"
            />
            <Button type="submit" size="sm" className="flex items-center gap-1">
              <Search className="h-4 w-4" />
              Go
            </Button>
          </form>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 font-medium">Series:</span>
            <div className="flex border rounded-md overflow-hidden shadow-sm">
              <Button
                variant={currentSeries === 1 ? "default" : "outline"}
                size="sm"
                onClick={() => setSeries(1)}
                className="rounded-none border-r-0 px-4 py-2 text-sm font-medium transition-all duration-200"
              >
                One-Year
              </Button>
              <Button
                variant={currentSeries === 3 ? "default" : "outline"}
                size="sm"
                onClick={() => setSeries(3)}
                className="rounded-none px-4 py-2 text-sm font-medium transition-all duration-200"
              >
                Three-Year
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Current Date Display */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          {lectionaryService.formatDateForDisplay(currentDate)}
        </h2>
      </div>

      {/* Lectionary Card */}
      <Card className="border-blue-400 border-2">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-700">
            {lectionaryData.liturgicalDay}
          </CardTitle>
          <div className="text-sm text-gray-500">
            Liturgical Color:{" "}
            <span className="font-semibold text-gray-700 capitalize">
              {lectionaryData.liturgicalColor}
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {lectionaryData.firstReading && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Old Testament Reading</h3>
              <p className="text-gray-700">{lectionaryData.firstReading}</p>
            </div>
          )}
          
          {lectionaryData.psalm && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Psalm</h3>
              <p className="text-gray-700">{lectionaryData.psalm}</p>
            </div>
          )}
          
          {lectionaryData.secondReading && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Epistle Reading</h3>
              <p className="text-gray-700">{lectionaryData.secondReading}</p>
            </div>
          )}
          
          {lectionaryData.gospel && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Gospel Reading</h3>
              <p className="text-gray-700">{lectionaryData.gospel}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Additional Info */}
      <div className="text-center text-sm text-gray-500">
        <p>
          Data provided by{" "}
          <a 
            href="https://yaag.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            yaag.org
          </a>
        </p>
      </div>
    </div>
  );
}
