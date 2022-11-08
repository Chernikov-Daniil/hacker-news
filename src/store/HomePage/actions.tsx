import { Dispatch } from 'redux';
import { hackerNews } from '../../components/types';
import { baseUrl } from '../../utils/baseUrl';

export const HOMEPAGE_DOWNLOAD = 'HOMEPAGE_DOWNLOAD';
export const HOMEPAGE_UPDATE_STATE = 'HOMEPAGE_UPDATE_STATE';
export const HOMEPAGE_SPINNER = 'HOMEPAGE_SPINNER';
export const HOMEPAGE_INTERVAL_ID = 'HOMEPAGE_INTERVAL_ID';

export type tHomePageActions =
	| tHomePageDownload
	| tHomePageUpdatePage
	| tHomePageSpinner
	| tHomePageIntervalId;

export const homePageDownload = (news: hackerNews[]) =>
	({ type: HOMEPAGE_DOWNLOAD, payload: news } as const);
type tHomePageDownload = ReturnType<typeof homePageDownload>;

export const homePageUpdateState = () =>
	({ type: HOMEPAGE_UPDATE_STATE } as const);
type tHomePageUpdatePage = ReturnType<typeof homePageUpdateState>;

export const homePageSpinner = (value: boolean) =>
	({ type: HOMEPAGE_SPINNER, payload: value } as const);
type tHomePageSpinner = ReturnType<typeof homePageSpinner>;

export const homePageIntervalId = (id: any) =>
	({
		type: HOMEPAGE_INTERVAL_ID,
		payload: id,
	} as const);
type tHomePageIntervalId = ReturnType<typeof homePageIntervalId>;

export const getLoadingNews = () => (dispatch: Dispatch) => {
	dispatch(homePageSpinner(true));
	fetch(`${baseUrl}newstories.json`)
		.then((response) => {
			response.json().then((list) => {
				const newStories = list.slice(0, 100);
				let news: hackerNews[] = [];
				newStories.forEach(async (el: number, i: number) => {
					const responce = await fetch(`${baseUrl}/item/${el}.json`);
					const result = await responce.json();
					news.push(result);
					if (i === newStories.length - 1) {
						dispatch(homePageDownload(news));
						dispatch(homePageSpinner(false));
					}
				});
			});
		})
		.catch((err) => console.log(err));
};
