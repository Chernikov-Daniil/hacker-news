import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoadingNews } from '../../store/HomePage/actions';
import { stateType } from '../../store/store';
import { hackerNews } from '../types';

// import styles from './HomePage.module.scss';

export const HomePage: FC = () => {
	const news = useSelector<stateType, hackerNews[]>(
		(state) => state.homePage.news
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLoadingNews());
	}, []);

	return (
		// <div className={styles.container}>
		<ol>
			{news?.map((el, i) => (
				<li key={i}>{el.title}</li>
			))}
		</ol>
		// </div>
	);
};
