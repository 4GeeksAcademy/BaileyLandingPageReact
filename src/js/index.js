//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Navbar from "./component/Navbar.jsx";
import Jumbotron from "./component/jumbotron.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

//render Jumbotron
// ReactDOM.render(
// 	<Jumbotron
// 		title="Welcome to react"
// 		description="React is the most popular rendering library in the world"
// 		buttonLabel="Go to the official website"
// 		buttonURL="https://reactjs.org/"
// 	/>,

// 	document.querySelector("#app")
// );

export {Navbar}