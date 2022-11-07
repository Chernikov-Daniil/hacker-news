import { hackerNews } from '../../components/types';
import {
	HOMEPAGE_DOWNLOAD,
	HOMEPAGE_UPDATE_STATE,
	tHomePageActions,
} from './actions';

export type tHomePageInitialState = typeof inititalStateHomePage;

export const inititalStateHomePage = {
	news: [] as hackerNews[],
	statusPage: '' as string,
};

export const homePageReducer = (
	state: tHomePageInitialState = inititalStateHomePage,
	action: tHomePageActions
) => {
	switch (action.type) {
		case HOMEPAGE_DOWNLOAD:
			return {
				news: [...state.news, action.payload],
				statusPage: 'Success',
			} as tHomePageInitialState;
		case HOMEPAGE_UPDATE_STATE:
			return inititalStateHomePage;
		default:
			return { ...state };
	}
};
