export interface ExternalLectionaryResponse {
  date: string;
  liturgicalDay: string;
  liturgicalColor: string;
  readings: {
    firstReading: string;
    secondReading: string;
    gospel: string;
  };
  psalm?: string;
  series?: number;
}

export interface LectionaryData {
  date: string;
  liturgicalDay: string;
  liturgicalColor: string;
  firstReading: string;
  secondReading: string;
  gospel: string;
  psalm?: string;
  series: number;
}

export interface LectionaryError {
  error: string;
  message: string;
}
