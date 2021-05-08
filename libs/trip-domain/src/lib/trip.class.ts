export interface TravelPoint{
  longitude: string;
  latitude: string;
  name: string;
  country: string;
  type: 'city' | 'village' | 'other';
}
export interface Money{
  value: number;
  currency: string;
}
export interface Expense{
  type: string;
  value: Money;
  description: string;
  for:string//id
}
export interface Budget{
  relatedTo: string;//id
  expenses: Expense[];
  addExpense(expense: Expense): void;
  setPlannedValue(money: Money): void;

}
export interface Transportation{
  id: string;
  type: 'bus' | 'airplane' | 'vehicle' | 'other';
  requireTicket: boolean;
  budget: Budget;
  relatedTo: string;//id
}
export interface Tour{
  id: string;
  name: string;
  place: string;
  requireTicket: boolean;
  relatedTo: string;//id
}
export interface Travel {
  id: string;
  addTravelPoint(): void;
  addTravelStartDate(date: Date): void;
  travelStartDateFrom(date: Date): void;
  travelStartDateTo(date: Date): void;
  addTravelEndDate(date: Date): void;
  addTravelStartPoint(date: Date): void;
  addTravelEndPoint(date: Date): void;
  addTransportation(transportation: Transportation): void;
  transportFrom(transportation: Transportation, TravelPoint: TravelPoint):void;
  transportTo(transportation: Transportation, TravelPoint: TravelPoint):void;
  addTour(travelPoint: TravelPoint, tour: Tour): void;
  setBudget(budget:Budget): void;
}
