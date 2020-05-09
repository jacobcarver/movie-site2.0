import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div id="home">
			<main>
				<h1>Explore thousands of movies</h1>
				<h2>View popular movies, watch trailers, and browse TV shows all in one place</h2>
				<div className="overlay"></div>
			</main>
			<div className="container">
				<section className="info">
					<div className="row">
						<div className="image"><div className="overlay"></div></div>
						<div className="text">
							<h2>New Movies</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivendum intellegat et qui, ei denique consequuntur vix. Ridens nostro perfecto ad cum, debet omnes splendide sit eu, vix an iisque dissentias. Pri posse graeco definitiones cu.</p>
						</div>
					</div>
					<div className="row reverse">
						<div className="image"><div className="overlay"></div></div>
						<div className="text">
							<h2>TV Shows</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivendum intellegat et qui, ei denique consequuntur vix. Ridens nostro perfecto ad cum, debet omnes splendide sit eu, vix an iisque dissentias. Pri posse graeco definitiones cu.</p>
						</div>
					</div>
				</section>
				<section className="poster">
					<div className="overlay"></div>
					<div className="text">
						<h1>Movies. TV Shows. Trailers</h1>
						<p>Get started discovering multiple categories of movies</p>
						<Link to="/discover">Discover Movies</Link>
					</div>
				</section>
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
									<li>Movie trailers</li>
									<li>Cancel anytime</li>
									<li>With ads</li>
									<li>One profile</li>
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
									<li>Tv & movie trailers</li>
									<li>Cancel anytime</li>
									<li>No ads</li>
									<li>Up to 3 profiles</li>
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
									<li>Tv & movie trailers</li>
									<li>Cancel anytime</li>
									<li>No ads</li>
									<li>Up to 5 profiles</li>
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

export default Home;