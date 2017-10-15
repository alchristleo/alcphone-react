import { createSelector } from "reselect";
import { BOOKS_FETCHED, BOOKS_CREATED } from '../types';

export default function books(state = {}, action = {}){
	switch(action.type){
		case BOOKS_FETCHED: 
		case BOOKS_CREATED:
			return { ...state, ...action.data.entities.books }; 
		default: 
			return state;
	}
}

// selectors
export const booksSelector = state => state.books;

export const allBooksSelector = createSelector(
	booksSelector,
	bookHash => Object.values(bookHash)
);