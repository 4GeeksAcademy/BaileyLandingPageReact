import React from "react";
import canva1 from "../../img/canva1.jpg";

const Card = () => {
	return (
		<div className="cardDeck flex">
			<div className="card">
                <img className="card-img-top" src={canva1} />
                <div className="card-body">
				    <h5 className="cardTitle text-center">Marketing Materials</h5>
				    <p className="cardText text-center">Call to action (CTA) is a marketing term for any design to prompt 
                        an immediate response or encourage an immediate sale -Wikipedia. 
                        Photo credit Canva Studio.</p>
                </div>
                <div className="cardFooter text-center bg-light">
				    <a className="btn btn-primary btn-lg text-center" href="https://en.wikipedia.org/wiki/Call_to_action_(marketing)">
					    Find Out More!
                    </a>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src={canva1} />
                <div className="card-body">
				    <h5 className="cardTitle text-center">Marketing Materials</h5>
				    <p className="cardText text-center">Call to action (CTA) is a marketing term for any design to prompt 
                        an immediate response or encourage an immediate sale -Wikipedia. 
                        Photo credit Canva Studio.</p>
                </div>
                <div className="cardFooter text-center bg-light">
				    <a className="btn btn-primary btn-lg text-center" href="https://en.wikipedia.org/wiki/Call_to_action_(marketing)">
					    Find Out More!
                    </a>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src={canva1} />
                <div className="card-body">
				    <h5 className="cardTitle text-center">Marketing Materials</h5>
				    <p className="cardText text-center">Call to action (CTA) is a marketing term for any design to prompt 
                        an immediate response or encourage an immediate sale -Wikipedia. 
                        Photo credit Canva Studio.</p>
                </div>
                <div className="cardFooter text-center bg-light">
				    <a className="btn btn-primary btn-lg text-center" href="https://en.wikipedia.org/wiki/Call_to_action_(marketing)">
					    Find Out More!
                    </a>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src={canva1} />
                <div className="card-body">
				    <h5 className="cardTitle text-center">Marketing Materials</h5>
				    <p className="cardText text-center">Call to action (CTA) is a marketing term for any design to prompt 
                        an immediate response or encourage an immediate sale -Wikipedia. 
                        Photo credit Canva Studio.</p>
                </div>
                <div className="cardFooter text-center bg-light">
				    <a className="btn btn-primary btn-lg text-center" href="https://en.wikipedia.org/wiki/Call_to_action_(marketing)">
					    Find Out More!
                    </a>
                </div>
            </div>



		</div>
	);
};

export default Card;