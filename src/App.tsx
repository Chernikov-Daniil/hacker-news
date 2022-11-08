import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HomePage } from './components/HomePage';
import { NewsPage } from './components/NewsPage/NewsPage';

function App() {
	return (
		<BrowserRouter>
			<div className={styles.page}>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/:newsId?' component={NewsPage} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
