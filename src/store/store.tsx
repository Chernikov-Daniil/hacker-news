import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { homePageReducer } from './HomePage/reducer';

const reducers = combineReducers({
	homePage: homePageReducer,
});

export const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(thunk))
);

export type stateType = ReturnType<typeof reducers>;