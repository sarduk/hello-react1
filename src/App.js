import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppDescription from "./components/AppDescription.js";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeView from "./components/HomeView.js";
import AboutView from "./components/AboutView.js";

class App extends Component {
	  render() {
		return (
		  <div className="App">
			<header className="App-header">
			  <img src={logo} className="App-logo" alt="logo" />
			  <h1 className="App-title">Welcome to React!</h1>
			</header>
			<AppDescription text="Benvenuto nella mia prima applicazione React!" />
			<BrowserRouter>
			  <div>

			  	<NavBar />

				<Route exact path="/" component={HomeView}/>
				<Route exact path="/about" component={AboutView}/>
			  </div>
			</BrowserRouter>
		  </div>
		);
	  }
}

export default App;