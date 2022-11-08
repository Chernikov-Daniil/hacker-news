import { Button } from 'antd';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
	const spinner = useSelector<stateType, boolean>(
		(state) => state.homePage.spinner
	);
	const intervalId = useSelector<stateType, any>(
		(state) => state.homePage.intervalId
	);

	const dispatch = useDispatch();

	const handleClickUpdate = () => {
		if (!spinner) {
			dispatch(homePageUpdateState());
			dispatch(getLoadingNews());
			clearInterval(intervalId);
			let interval = setInterval(() => {
				dispatch(homePageUpdateState());
				dispatch(getLoadingNews());
			}, 60000);
			dispatch(homePageIntervalId(interval));
		}
	};

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
			<Button
				className={styles.btnUpdate}
				onClick={handleClickUpdate}
				disabled={spinner}
				loading={spinner}>
				Update
			</Button>
			{news?.map(({ title, by, score, time, id }, i) => (
				<Link to={`/${id}`} style={{ textDecoration: 'none' }} key={i}>
					<CardNews
						numberNews={i + 1}
						title={title}
						author={by}
						score={score}
						publicationDate={time}
					/>
				</Link>
			))}
		</div>
	);
};
