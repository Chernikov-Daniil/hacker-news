import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { FC } from 'react';
import { getDate } from '../../../HomePage/components/CardNews/CardNews';
import { Comment } from '../../../types';
import styles from '../MainComments/MainComments.module.scss';
import s from './KidsComments.module.scss';

interface KidsCommentsProps {
	kidsComment: Comment;
}

export const KidsComments: FC<KidsCommentsProps> = ({ kidsComment }) => {
	return (
		<div className={s.kidsComments}>
			<div className={styles.left}>
				<Avatar icon={<UserOutlined />} />
				<p className={styles.author}>{kidsComment?.by}</p>
			</div>
			<div className={styles.right}>
				<p className={styles.textComment}>{kidsComment?.text}</p>
				<div className={styles.date}>{getDate(kidsComment?.time)}</div>
			</div>
		</div>
	);
};
