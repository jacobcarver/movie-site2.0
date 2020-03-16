import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<div id="home">
				<main>
					<h1>Explore thousands of movies</h1>
					<h2>All movie trailers in one spot</h2>
				</main>
				<div className="container">
					<section className="pricing">
						<h3>Choose your pricing plan</h3>
						<div className="prices">
							<div className="col">
								<div className="price">
									<h4>Free</h4>
									<p>$0.00 <span>/Monthly</span></p>
									<ul>
										<li>HD available</li>
										<li>Ultra HD available</li>
										<li>Watch on any device</li>
										<li>Unlimited Movies / TV Shows</li>
										<li>Cancel anytime</li>
									</ul>
									<button>Choose Plan</button>
								</div>
							</div>
							<div className="col">
								<div className="price">
									<h4>Premium</h4>
									<p>$9.99 <span>/Monthly</span></p>
									<ul>
										<li>HD available</li>
										<li>Ultra HD available</li>
										<li>Watch on any device</li>
										<li>Unlimited Movies / TV Shows</li>
										<li>Cancel anytime</li>
									</ul>
									<button>Choose Plan</button>
								</div>
							</div>
							<div className="col">
								<div className="price">
									<h4>Exclusive</h4>
									<p>$14.99 <span>/Monthly</span></p>
									<ul>
										<li>HD available</li>
										<li>Ultra HD available</li>
										<li>Watch on any device</li>
										<li>Unlimited Movies / TV Shows</li>
										<li>Cancel anytime</li>
									</ul>
									<button>Choose Plan</button>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		)
	}
}

export default Home;