export interface Ticket {
    id: string;
    serialNumber: string;
    carrier: string;
    type: string; //train,car, airplane,
    departure: Date;
    arrival: Date;
    link: string;
}
