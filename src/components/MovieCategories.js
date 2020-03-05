import React, { Component } from 'react';

var categories = ['Upcoming Movies', 'Popular Movies', 'R Movies', 'Kids Movies'];

class MovieCategories extends Component {
	constructor() {
		super();
		this.selectMovie = this.selectMovie.bind(this);
	}
	selectMovie(id) {
		this.props.handleMovieModal(true);
		this.props.chooseMovie(id);
	}
	render() {
		const { upcomingMovies, popularMovies, rMovies, kidsMovies } = this.props;
		const propArray = [upcomingMovies, popularMovies, rMovies, kidsMovies];
		return (
			<div className="categories">
				{categories.map((cat, i) => {
					return (
						<div className="row" key={i}>
							<h1 style={{fontSize: '1.5rem'}}>{cat}</h1>
							<div className="movies">
								{propArray[i].map((movie) => {
									return (
										<div key={movie.id} onClick={e => this.selectMovie(movie.id)}>
											<h5>{movie.title}</h5>
										</div>
									)
								})}
							</div>
						</div>
					)
				})}
			</div>
		)
	}
}

export default MovieCategories;