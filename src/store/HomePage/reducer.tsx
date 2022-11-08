import { hackerNews } from '../../components/types';
import {
	HOMEPAGE_DOWNLOAD,
	HOMEPAGE_INTERVAL_ID,
	HOMEPAGE_SPINNER,
	HOMEPAGE_UPDATE_STATE,
	tHomePageActions,
} from './actions';

export type tHomePageInitialState = typeof inititalStateHomePage;

export const inititalStateHomePage = {
	news: [] as hackerNews[],
	statusPage: '' as string,
	spinner: false as boolean,
	intervalId: undefined as any,
};

export const homePageReducer = (
	state: tHomePageInitialState = inititalStateHomePage,
	action: tHomePageActions
) => {
	switch (action.type) {
		case HOMEPAGE_DOWNLOAD:
			return {
				...state,
				news: action.payload,
				statusPage: 'Success',
			} as tHomePageInitialState;

		case HOMEPAGE_SPINNER:
			return { ...state, spinner: action.payload } as tHomePageInitialState;
		case HOMEPAGE_INTERVAL_ID:
			return { ...state, intervalId: action.payload } as tHomePageInitialState;
		case HOMEPAGE_UPDATE_STATE:
			return inititalStateHomePage;
		default:
			return { ...state };
	}
};
