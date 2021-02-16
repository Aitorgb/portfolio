import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Screens/Home'
import About from './components/Screens/About'
import Projects from './components/Screens/Projects'
import Menu from './components/Menu';
import Contact from './components/Screens/Contact';

function App() {
  return (
    <div className="App">
    <Menu />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/projects" component={Projects} />
				<Route exact path="/contact" component={Contact} />
				<Redirect to="/" />
			</Switch>
	
    </div>
  );
}

export default App;
