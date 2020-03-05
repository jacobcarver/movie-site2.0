import React, { Component } from 'react';

import EmbeddedVideo from './EmbeddedVideo';

const styles = {
	height: '300px',
	width: '175px',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat'
}

class MovieModal extends Component {
	constructor() {
		super();
		this.state = {
			trailerIsOpen: false
		}
		this.toggleTrailer = this.toggleTrailer.bind(this);
	}
	UNSAFE_componentWillReceiveProps(nextProps) {
		const { chosenMovie, getTrailers } = nextProps;
		if (chosenMovie !== this.props.chosenMovie) {
			getTrailers(chosenMovie.id);
		}
	}
	toggleTrailer(bool) {
		this.setState({ trailerIsOpen: bool });
	}
	render() {
		const { movieIsOpen, chosenMovie, handleMovieModal, trailers } = this.props;
		const { trailerIsOpen } = this.state;
		const { title, runtime, tagline, overview, genres, poster_path } = chosenMovie;
		const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

		if (movieIsOpen) {
			document.querySelector('body').classList.add('disable');
		} else {
			document.querySelector('body').classList.remove('disable');
		}
		return (
			<div className={`modal movie ${movieIsOpen ? 'open' : ''}`}>
				<div className="inner">
					<header onClick={() => {
						handleMovieModal(false);
					}}>
						<button>X</button>
					</header>
					<main>
						<div className="movie-info">
							<h1>{title} - <span>{runtime}min</span></h1>
							<p className="desc">{overview}</p>
							<p className="tagline">- "{tagline}"</p>
							<div className="genres">
								{genres !== undefined ? genres.map((g) => {
									return (
										<span key={g.id}>"{g.name}"</span>
									)
								}) : ''}
							</div>
							<button onClick={e => this.toggleTrailer(true)}>Watch Trailer</button>
						</div>
						<div className="movie-poster" style={{...styles, backgroundImage: poster_path !== undefined ? `url('${POSTER_URL}/${poster_path}')` : ''}}>
							
						</div>
					</main>
					<EmbeddedVideo movieIsOpen={movieIsOpen} trailerIsOpen={trailerIsOpen} toggleTrailer={this.toggleTrailer} video={trailers[0]} />
				</div>
			</div>
		)
	}
}

export default MovieModal;