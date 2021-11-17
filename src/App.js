import './App.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Screens/Home';
import About from './components/Screens/About';
import Projects from './components/Screens/Projects';
import Menu from './components/Menu';
import Contact from './components/Screens/Contact';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { pdfjs } from 'react-pdf';
import Layout from './components/Layout';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function App() {
	return (
		<div className="App">
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/contact" component={Contact} />
					<Redirect to="/" />
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
