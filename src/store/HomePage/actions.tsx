import { Dispatch } from 'redux';
import { hackerNews } from '../../components/types';
import { baseUrl } from '../../utils/baseUrl';

export const HOMEPAGE_DOWNLOAD = 'HOMEPAGE_DOWNLOAD';
export const HOMEPAGE_UPDATE_STATE = 'HOMEPAGE_UPDATE_STATE';

export type tHomePageActions = tHomePageDownload | tHomePageUpdatePage;

export const homePageDownload = (news: hackerNews) =>
	({ type: HOMEPAGE_DOWNLOAD, payload: news } as const);
type tHomePageDownload = ReturnType<typeof homePageDownload>;

export const homePageUpdateState = () =>
	({ type: HOMEPAGE_UPDATE_STATE} as const);
type tHomePageUpdatePage = ReturnType<typeof homePageUpdateState>;

export const getLoadingNews = () => (dispatch: Dispatch) => {
	fetch(`${baseUrl}newstories.json`)
		.then((response) => {
			response.json().then((list) => {
				const newStories = list.slice(0, 100);
				newStories.forEach(async (el: number) => {
					const responce = await fetch(`${baseUrl}/item/${el}.json`);
					const result = await responce.json();
					dispatch(homePageDownload(result));
				});
			});
		})
		.catch((err) => console.log(err));
};
