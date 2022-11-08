import styles from './App.module.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HomePage } from './components/HomePage';

function App() {
	return (
		<div className={styles.page}>
			<Header />
			<HomePage />
			<hr style={{ background: 'purple' }} />
			<Footer />
		</div>
	);
}

export default App;
