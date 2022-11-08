import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { FC, useEffect, useState } from 'react';
import { baseUrl } from '../../../../utils/baseUrl';
import { getDate } from '../../../HomePage/components/CardNews/CardNews';
import { Comment } from '../../../types';
import { KidsComments } from '../KidsComments/KidsComments';
import styles from './MainComments.module.scss';

interface MainCommentsProps {
	commentId: number;
}

export const MainComments: FC<MainCommentsProps> = ({ commentId }) => {
	const [comment, setComment] = useState<Comment>();
	const [kidsComments, setKidsComments] = useState<Comment[]>([]);

	const getComment = async (id: number) => {
		try {
			const response = await fetch(`${baseUrl}/item/${id}.json`);
			const result = await response.json();
			setComment(result);
		} catch (err) {
			console.log(err);
		}
	};

	const handleAddKidsComments = () => {
		if (
			comment?.kids &&
			comment?.kids.length !== 0 &&
			kidsComments.length === 0
		) {
			comment?.kids?.forEach(async (item) => {
				const response = await fetch(`${baseUrl}/item/${item}.json`);
				const result = await response.json();
				setKidsComments((prevState) => [...(prevState as Comment[]), result]);
			});
		}
	};

	useEffect(() => {
		getComment(commentId);
	}, []);

	return (
		<>
			<div className={styles.boxForComments} onClick={handleAddKidsComments}>
				<div className={styles.left}>
					<Avatar icon={<UserOutlined />} />
					<p className={styles.author}>{comment?.by}</p>
				</div>
				<div className={styles.right}>
					<p className={styles.textComment}>{comment?.text}</p>
					<div className={styles.date}>{getDate(comment?.time)}</div>
				</div>
			</div>
			{kidsComments &&
				kidsComments.map((kid, i) => (
					<KidsComments key={i} kidsComment={kid} />
				))}
		</>
	);
};
