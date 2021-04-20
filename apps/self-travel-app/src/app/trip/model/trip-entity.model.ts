import { Url } from "url";
import { mocks_Travel } from "../../mocks/mocks.factory";
import { TravelPlace } from "../faker/trip-mock.faker";

export interface Travel {
  id: string;
  from: TravelPlace;
  to: TravelPlace;
  ticket: Ticket;
  wallet: Wallet;
  tours: Tours[];
  lodging: Lodging;
  notes: string;
  tripStart: Date;
  tripEnd: Date;

}
export interface Ticket {
  id: string;
  type: string;//train,car, airplane,
  departure: Date
  arrival: Date
  link: string
}
export interface Wallet {
  id: string;
  established: string;
}
export interface Lodging {
  name: string;
  postCode: string;
  city: string;
  country: string;
  state: string;
  streetAddress: string;
}
export interface Tours{
  name:string;
}
// export interface TravelPoint{
// place:string;
// longitude:string;
// latitude:string;
// postCode:string;
// city:string;
// }

export const sampleTrips: Travel[] = mocks_Travel(20);
