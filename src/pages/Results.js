import React, { Component } from 'react';

class Results extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: props.searchResults
		}
		this.selectMovie = this.selectMovie.bind(this);
	}
	selectMovie(id) {
		const { handleMovieModal, chooseMovie } = this.props;
		handleMovieModal(true);
		chooseMovie(id);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.searchResults.length > 0) {
			this.setState({ results: nextProps.searchResults });
		}
	}
	componentDidMount() {
		this.setState({ results: [] });
	}
	render() {
		const { results } = this.state;
		const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
		return (
			<div id="results">
				<div className="container">
					{results.length > 0 ? 
					<div className="results">
						{results.map((movie) => {
							let { id, title, poster_path } = movie;
							return (
								<div className="col" key={id}>
									<div className="movie" onClick={e => this.selectMovie(id)} style={{backgroundImage: poster_path !== undefined && poster_path !== null ? `url('${POSTER_URL}/${poster_path}')` : `url('https://eapp.org/wp-content/uploads/2018/05/poster_placeholder.jpg')`}}>
										<h3>{title}</h3>
									</div>
								</div>
							)
						})}
					</div>
					:
					<div className="no-results">
						No Results
					</div>}
				</div>
			</div>
		)
	}
}

export default Results;