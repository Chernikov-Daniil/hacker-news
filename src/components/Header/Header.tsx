import { Button, Space } from 'antd';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getLoadingNews,
	homePageIntervalId,
	homePageUpdateState,
} from '../../store/HomePage/actions';
import { stateType } from '../../store/store';

import styles from './Header.module.scss';

export const Header: FC = () => {
	const spinner = useSelector<stateType, boolean>(
		(state) => state.homePage.spinner
	);
	const intervalId = useSelector<stateType, number | undefined>(
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

	return (
		<div className={styles.header}>
			Hacker News
			<Button
				className={styles.btnUpdate}
				onClick={handleClickUpdate}
				disabled={spinner}
				loading={spinner}>
				Update
			</Button>
		</div>
	);
};
