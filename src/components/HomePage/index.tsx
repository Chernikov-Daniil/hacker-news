import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getLoadingNews,
	homePageIntervalId,
	homePageUpdateState,
} from '../../store/HomePage/actions';
import { stateType } from '../../store/store';
import { hackerNews } from '../types';
import { CardNews } from './components/CardNews/CardNews';

import styles from './HomePage.module.scss';

export const HomePage: FC = () => {
	const news = useSelector<stateType, hackerNews[]>(
		(state) => state.homePage.news
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLoadingNews());
		let interval = setInterval(() => {
			dispatch(homePageUpdateState());
			dispatch(getLoadingNews());
		}, 60000);
		dispatch(homePageIntervalId(interval));
		return () => {
			clearInterval(interval);
			dispatch(homePageUpdateState());
		};
	}, []);

	return (
		<div className={styles.container}>
			{news?.map(({ title, by, score, time }, i) => (
				<CardNews
					key={i}
					numberNews={i + 1}
					title={title}
					author={by}
					score={score}
					publicationDate={time}
				/>
			))}
		</div>
	);
};
