import { mocks_Travel } from "../../mocks/mocks.factory";
import { TravelPlace } from "../faker/TravelPlace";
import { Lodging } from "./lodging.entity.model";
import { Ticket } from "./ticket.entity.model";
import { Tours } from "./tours.entity.model";
import { Wallet } from "./wallet.entity.model";

export interface Travel {
  id: string;
  name: string;
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




// export interface TravelPoint{
// place:string;
// longitude:string;
// latitude:string;
// postCode:string;
// city:string;
// }

export const sampleTrips: Travel[] = mocks_Travel(20);
