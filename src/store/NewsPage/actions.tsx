import { Dispatch } from 'redux';
import { hackerNews } from '../../components/types';
import { baseUrl } from '../../utils/baseUrl';

export const NEWSPAGE_DOWNLOAD = 'HOMEPNEWSPAGE_DOWNLOADAGE_DOWNLOAD';
export const NEWSPAGE_UPDATE_STATE = 'NEWSPAGE_UPDATE_STATE';
export const NEWSPAGE_UPDATE_COMMENTS = 'NEWSPAGE_UPDATE_COMMENTS';

export type tNewsPageActions =
	| tNewsPageDownload
	| tNewsPageUpdatePage
	| tNewsPageUpdateComments;

export const newsPageDownload = (news: hackerNews) =>
	({ type: NEWSPAGE_DOWNLOAD, payload: news } as const);
type tNewsPageDownload = ReturnType<typeof newsPageDownload>;

export const newsPageUpdateState = () =>
	({ type: NEWSPAGE_UPDATE_STATE } as const);
type tNewsPageUpdatePage = ReturnType<typeof newsPageUpdateState>;

export const newsPageUpdateComments = (kids: number[]) =>
	({ type: NEWSPAGE_UPDATE_COMMENTS, payload: kids } as const);
type tNewsPageUpdateComments = ReturnType<typeof newsPageUpdateComments>;

export const getLoadingStory =
	(storyId: string | undefined, type: 'story' | 'comment') =>
	async (dispatch: Dispatch) => {
		const response = await fetch(`${baseUrl}/item/${storyId}.json`);
		const result = await response.json();
		type === 'story'
			? dispatch(newsPageDownload(result))
			: dispatch(newsPageUpdateComments(result.kids));
	};
