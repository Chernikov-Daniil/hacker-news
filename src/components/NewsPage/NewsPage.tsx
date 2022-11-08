import { CommentOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import {
	getLoadingStory,
	newsPageUpdateState,
} from '../../store/NewsPage/actions';
import { tNewsPageInititalState } from '../../store/NewsPage/reducer';
import { stateType } from '../../store/store';
import { getDate } from '../HomePage/components/CardNews/CardNews';

import styles from './NewsPage.module.scss';
import s from '../HomePage/HomePage.module.scss';
import { MainComments } from './components/MainComments/MainComments';

export type NewsPageProps = {
	newsId?: string;
};

export const NewsPage: FC<RouteComponentProps<NewsPageProps>> = (props) => {
	const { story } = useSelector<stateType, tNewsPageInititalState>(
		(state) => state.newsPage
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLoadingStory(props.match.params.newsId, 'story'));
		return () => {
			dispatch(newsPageUpdateState());
		};
	}, []);

	const handleUpdateComments = () => {
		dispatch(getLoadingStory(props.match.params.newsId, 'comment'));
	};

	return (
		<>
			<Link
				to='/'
				className={s.btnUpdate}
				style={{ padding: '10px', textDecoration: 'none' }}>
				Home page
			</Link>
			<div className={styles.container}>
				<h3 className={styles.title}>{story.title}</h3>
				<a href={story.url} target='_blank' className={styles.link}>
					Read more...
				</a>
				<div className={styles.wrpBotContent}>
					<div className={styles.author}>
						<Avatar
							size='small'
							icon={<UserOutlined />}
							style={{ marginRight: '5px' }}
						/>
						{story.by}
					</div>
					<div className={styles.date}>{getDate(story.time)}</div>
					<div className={styles.comments}>
						<CommentOutlined className={styles.iconComment} />
						{story.descendants}
					</div>
				</div>
			</div>
			<button
				className={s.btnUpdate}
				style={{ padding: '10px' }}
				onClick={handleUpdateComments}>
				Update Comments
			</button>
			{story?.kids ? story?.kids?.map((item, i) => (
				<MainComments key={i} commentId={item} />
			)) : <h3 className={styles.noComments}>No comments yet</h3>}
		</>
	);
};
