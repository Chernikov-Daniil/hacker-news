import { FC } from 'react';
import { Avatar, Card } from 'antd';
import { StarTwoTone, UserOutlined } from '@ant-design/icons';
import styles from './CardNews.module.scss';

interface CardNewsProps {
	numberNews?: number;
	title?: string;
	score?: number;
	author?: string;
	publicationDate?: number;
}

export const CardNews: FC<CardNewsProps> = ({
	numberNews,
	title,
	score,
	author,
	publicationDate,
}) => {
	const getDate = (date: number | undefined): string =>
		date ? new Date(date * 1000).toLocaleString() : '';

	return (
		<Card
			title={`${numberNews}. ${title}`}
			bordered={false}
			className={styles.boxCard}>
			<div className={styles.cardBody}>
				<div className={styles.wrp}>
					<p className={styles.author}>
						<Avatar
							size='small'
							icon={<UserOutlined />}
							style={{ marginRight: '5px' }}
						/>
						{author}
					</p>
					<p className={styles.date}>{getDate(publicationDate)}</p>
				</div>
				<p className={styles.score}>
					<StarTwoTone style={{ marginRight: '5px' }} />
					{score}
				</p>
			</div>
		</Card>
		// <div className={styles.boxCard}>
		//     <div className={styles.title}>
		//         {title}
		//     </div>
		// </div>
	);
};
