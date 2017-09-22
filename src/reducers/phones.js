import { createSelector } from "reselect";

export default function phones(state = {}, action = {}){
	switch(action.type){
		default: 
			return state;
	}
}

//selectors
export const phonesSelector = state => state.phones;

export const allPhonesSelector = createSelector(
	phonesSelector,
	phoneHash => Object.values(phoneHash)
);