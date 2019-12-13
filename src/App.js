import React, { createContext, useReducer } from 'react';
import Navbar from './component/Navbar';
import { Route } from 'react-router-dom';

import Home from './routes/home';
import About from './routes/about';
import AboutEdit from './routes/about/about-edit';

let reducer = (state, action) => {
	switch (action.type) {
	  	case "EDIT_NAME":
			return { name: action.value };
		default:
			return;
	}
};

const initState = { name: 'Jack John' }

export const RootContext = createContext();

const Provider = RootContext.Provider;

function App() {

	const [state, dispatch] = useReducer(reducer, initState);

	return (
		<div className="App">
			<Provider value={{ state, dispatch }}>
				<h1>Context + Hooks (useContext, useReducer)</h1>
				<Navbar />

				<Route path="/" component={Home} exact />
				<Route path="/about" component={About} exact />
				<Route path="/about/edit" component={AboutEdit} />
			</Provider>
		</div>
	);
}

export default App;
