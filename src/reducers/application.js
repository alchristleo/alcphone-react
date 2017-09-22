import { createSelector } from "reselect";

export default function application(state = {}, action = {}){
	switch(action.type){
		default: 
			return state;
	}
}

//selectors
export const applicationSelector = state => state.application;

export const allApplicationSelector = createSelector(
	applicationSelector,
	appHash => Object.values(appHash)
);