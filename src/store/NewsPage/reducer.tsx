import { hackerNews } from '../../components/types';
import {
	NEWSPAGE_DOWNLOAD,
	NEWSPAGE_UPDATE_COMMENTS,
	NEWSPAGE_UPDATE_STATE,
	tNewsPageActions,
} from './actions';

export type tNewsPageInititalState = typeof newsPageinititalState;

const newsPageinititalState = {
	story: {} as hackerNews,
};

export const newsPageReducer = (
	state: tNewsPageInititalState = newsPageinititalState,
	action: tNewsPageActions
) => {
	switch (action.type) {
		case NEWSPAGE_DOWNLOAD:
			return { story: action.payload } as tNewsPageInititalState;
		case NEWSPAGE_UPDATE_COMMENTS:
			return { ...state, story: { ...state.story, kids: action.payload } };
		case NEWSPAGE_UPDATE_STATE:
			return newsPageinititalState;
		default:
			return state;
	}
};
