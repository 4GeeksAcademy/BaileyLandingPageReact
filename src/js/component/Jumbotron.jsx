import React from "react";

const Jumbotron = () => {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="jumboContainer">
				<h1 className="jumboTitle">A Warm Welcome!</h1>
				<p className="jumboText">In marketing, a call to action (CTA) is an instruction to the audience 
					designed to provoke an immediate response, usually using an imperative verb such as "call now", 
					"find out more" or "visit a store today". - Wikipedia</p>
				<a className="btn btn-primary btn-lg" href="https://en.wikipedia.org/wiki/Call_to_action_(marketing)"
					role="button">Call to action!</a>
			</div>
		</div>
	);
};

export default Jumbotron;