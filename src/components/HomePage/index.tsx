import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoadingNews } from '../../store/HomePage/actions';
import { stateType } from '../../store/store';
import { hackerNews } from '../types';

export const HomePage: FC = () => {
	const news = useSelector<stateType, hackerNews[]>(
		(state) => state.homePage.news
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLoadingNews());
	}, []);

	return (
		<ol>
			{news?.map((el, i) => (
				<li key={i}>{el.title}</li>
			))}
		</ol>
	);
};
