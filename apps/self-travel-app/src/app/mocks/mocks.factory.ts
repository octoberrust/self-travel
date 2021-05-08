import { TravelPlace } from "../trip/faker/TravelPlace";
import * as f from 'faker';
import { Travel } from "../trip/model/trip-entity.model";
import { Ticket } from "../trip/model/ticket.entity.model";
import { Wallet } from "../trip/model/wallet.entity.model";
import { Lodging } from "../trip/model/lodging.entity.model";
import { Tours } from "../trip/model/tours.entity.model";


export function mocksFactory<T>(count: number, mackFactory: () => T) {
  const places: T[] = [];
  for (let index = 0; index < count; index++) {
    const element = mackFactory();
    places.push(element);
  }
  return places
}
export const mock_TravelPoint_factory = (): TravelPlace => ({

  place: f.lorem.word(10),
  longitude: f.address.longitude(),
  latitude: f.address.latitude(),
  postCode: f.address.zipCode(),
  city: f.address.city(),
  country: f.address.country(),
  state: f.address.state(),
});
export const mock_Ticket_factory = (): Ticket => ({
  id: f.datatype.uuid(),
  type: f.lorem.word(10),
  serialNumber: f.lorem.word(10),
  carrier: f.lorem.word(10),
  departure: f.date.soon(),
  arrival: f.date.soon(),
  link: f.internet.url()
});
export const mock_Wallet_factory = (): Wallet => ({
  id: f.datatype.uuid(),
  established: f.commerce.price(100, 1000)
});
export const mock_Lodging_factory = (): Lodging => ({
  name: f.lorem.word(10),
  type: 'hotel',
  postCode: f.address.zipCode(),
  city: f.address.city(),
  country: f.address.country(),
  state: f.address.state(),
  streetAddress: f.address.streetAddress()
});
export const mock_Tours_factory = (): Tours => ({
  name: f.lorem.word(10),

});
export const mock_Travel_factory = (): Travel => ({

  id: f.datatype.uuid(),
  name: f.lorem.word(10),
  from: mock_TravelPoint_factory(),
  to: mock_TravelPoint_factory(),
  ticket: mock_Ticket_factory(),
  wallet: mock_Wallet_factory(),
  tours: mocks_Tours(4),
  lodging: mock_Lodging_factory(),
  notes: f.lorem.word(100),
  tripStart: f.date.future(),
  tripEnd: f.date.future()
});
export const mocks_TravelPlaces = (count: number) => mocksFactory(count, mock_TravelPoint_factory)
export const mocks_Tours = (count: number) => mocksFactory(count, mock_Tours_factory)
export const mocks_Travel = (count: number) => mocksFactory(count, mock_Travel_factory)

//mocks_TravelPlaces(10) /*?*/
