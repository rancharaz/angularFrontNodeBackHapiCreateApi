import { fakeListings } from "./fake-data";
import { db } from "../database";
export const getAllListingsRoute = {
    //define fake database and get method
    method: 'GET',
    path: '/api/listings',
    handler: (req, h)=> {
        return fakeListings;
    }
}