import React, { Component } from 'react';

var categories = ['Popular Movies', 'R Movies', 'Kids Movies'];

class MovieCategories extends Component {
	constructor() {
		super();
		this.selectMovie = this.selectMovie.bind(this);
	}
	selectMovie(id) {
		let { handleMovieModal, chooseMovie } = this.props;
		handleMovieModal(true);
		chooseMovie(id);
	}
	render() {
		const { popularMovies, rMovies, kidsMovies } = this.props;
		let propArray = [popularMovies, rMovies, kidsMovies];
		const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
		return (
			<div className="categories">
				{categories.map((cat, i) => {
					return (
						<div className="row" key={i}>
							<h2>{cat}</h2>
							<div className="movies">
								{propArray[i].map((movie) => {
									let { id, poster_path } = movie;
									return (
										<div className="col" key={id} onClick={e => this.selectMovie(id)}>
											<div className="movie" style={{backgroundImage: poster_path !== undefined && poster_path !== null ? `url('${POSTER_URL}/${poster_path}')` : 'https://eapp.org/wp-content/uploads/2018/05/poster_placeholder.jpg'}}>
											</div>
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