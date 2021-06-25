import { getDb } from 'db';
import { Collection } from 'mongo/collection';
import { Trip, User } from 'models';

export interface Note {
	_id: { $oid: string };
	title: string;
	content: string;
	createdBy: User;
	createdAt: string;
	updatedAt: string;
	trip: Trip;
}

const notes = (): Collection<Note> =>
	getDb().collection<Note>('notes') as Collection<Note>;

export default notes;
