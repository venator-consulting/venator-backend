export class PaymentAnalysis {
    data: PaymentData[];
    dateRange: DateRange[]
}

export class PaymentData {
    monthName: string;
    yearName: string;
    blue: Bar;
    red: Bar;
    green: Bar;
}

export class DateRange {
    maxdate: Date;
    mindate: Date;
}

class Bar {
    value: number;
    accounts: Account[];
}

class Account {
    value: number;
    accountNumber: string;
    accountName: string;
}

export class PaymentAnalysisDetails {

}