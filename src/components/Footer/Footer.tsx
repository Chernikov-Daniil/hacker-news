import { GithubOutlined } from '@ant-design/icons';
import { FC } from 'react';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.wrpContent}>
				<a
					className={styles.link}
					target='_blank'
					href='https://github.com/Chernikov-Daniil'>
					Link on my GitHub
				</a>
				<GithubOutlined />
			</div>
		</div>
	);
};
