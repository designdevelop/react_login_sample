import React, { Component } from 'react';
import Login from './containers/login';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

const MainComponent = () =>(
    <div>MainComponent</div>
)

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<Route exact path="/" component={Login}/>
						<Route exact path="/main" component={MainComponent}/>
					</div>
		 		</Router>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		auth : state
	}
}

export default connect(mapStateToProps, null)(App);
