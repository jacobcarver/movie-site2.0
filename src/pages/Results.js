import React, { Component } from 'react';

class Results extends Component {
	constructor() {
		super();
		this.state = {

		}
		this.selectMovie = this.selectMovie.bind(this);
	}
	selectMovie(id) {
		const { handleMovieModal, chooseMovie } = this.props;
		handleMovieModal(true);
		chooseMovie(id);
	}
	render() {
		const { searchResults } = this.props;
		return (
			<div id="results">
				<div className="container">
					{searchResults.length > 0 ? 
					<div>
						{searchResults.map((movie, i) => {
							return (
								<div onClick={e => this.selectMovie(movie.id)} key={i}>
									<h3>{movie.title}</h3>
								</div>
							)
						})}
					</div>
					:
					<h1>No Results</h1>}
				</div>
			</div>
		)
	}
}

export default Results;