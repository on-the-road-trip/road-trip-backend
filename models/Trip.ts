import { getDb } from 'db';
import { Collection } from 'mongo/collection';
import { User } from './User.ts';
import { Note } from './Note.ts';
import { TripPlan } from './TripPlan.ts';

export interface Trip {
	_id: { $oid: string };
	name: string;
	slug: string;
	description: string;
	image: { src: string; alt: string };
	participants: User[];
	notes: Note[];
	plan: TripPlan;
	invitees: User[];
}

const trips = (): Collection<Trip> =>
	getDb().collection<Trip>('trips') as Collection<Trip>;

export default trips;
