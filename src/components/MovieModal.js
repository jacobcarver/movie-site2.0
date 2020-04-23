import React, { Component } from 'react';

import EmbeddedVideo from './EmbeddedVideo';

class MovieModal extends Component {
	constructor() {
		super();
		this.state = {
			trailerIsOpen: false
		}
		this.toggleTrailer = this.toggleTrailer.bind(this);
	}
	UNSAFE_componentWillReceiveProps(nextProps) {
		const { chosenMovie, getTrailers, movieIsOpen } = nextProps;
		if (chosenMovie !== this.props.chosenMovie && chosenMovie.id !== undefined && chosenMovie.imdb_id !== null) {
			getTrailers(chosenMovie.id);
			this.props.getOmdbData(chosenMovie.imdb_id);
		}
		if (movieIsOpen === true && chosenMovie.imdb_id === null) {
			this.props.handleMovieModal(false);
		}
	}
	toggleTrailer(bool) {
		this.setState({ trailerIsOpen: bool });
	}
	render() {
		const { movieIsOpen, chosenMovie, handleMovieModal, trailers, omdbData } = this.props;
		const { Title, Rated, Actors, Language, Ratings, Director, Writer, Metascore, imdbRating, Production, Runtime } = omdbData;
		const { trailerIsOpen } = this.state;
		const { title, runtime, tagline, overview, genres, poster_path } = chosenMovie;
		const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
		return (
			<div className={`modal movie ${movieIsOpen ? 'open' : ''}`}>
				<header>
					<div onClick = {() => {
							handleMovieModal(false);
						}
					} className="close-modal">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
							aria-describedby="desc" role="img">
							<title>Close Modal</title>
							<path fill="none" stroke="#202020" strokeMiterlimit="10" strokeWidth="4" d="M41.999 20.002l-22 22m22 0L20 20"
							strokeLinejoin="round" strokeLinecap="round"></path>
						</svg>
					</div>
				</header>
				{Title !== undefined ? 
				<div className="inner">
					<main>
						<div className="movie-info">
							<h1>{title}</h1>
							<div className="rating">
								<span>{Rated}</span>
								<span>{Runtime}</span>
								<span>{Language}</span>
							</div>
							<h2>Description</h2>
							<p className={`desc ${tagline.length === 0 ? 'no-tag' : ''}`}>{overview}</p>
							{tagline.length > 0 ? <p className="tagline">- "{tagline}"</p> : null}
							<div className="cast">
								<h2>Director</h2>
								<p className="directors">{Director}</p>
								<h2>Writer(s)</h2>
								<p className="writers">{Writer}</p>
								<h2>Actors</h2>
								{Actors.split(', ').map((a) => {
									return (
										<p className="actors" key={a}>{a}</p>
									)
								})}
							</div>
							{Ratings.length >= 1 ? 
							<div className="ratings">
								<h2>Ratings</h2>
								{Ratings.map((r) => {
									let { Source, Value } = r;
									return (
										<p key={Source}>{Source}: <span>{Value}</span></p>
									)
								})}
							</div> : null}
						</div>
						<div className="movie-poster">
							<div className="poster" style={{backgroundImage: poster_path !== undefined ? `url('${POSTER_URL}/${poster_path}')` : ''}}>
								<div className="trailer-button" onClick={e => this.toggleTrailer(true)}><i className="fas fa-ticket-alt"></i></div>
							</div>
							<div className="genres">
								{genres.length > 0 ? genres.map((g) => {
									return (
										<span key={g.id}>{g.name}</span>
									)
								}) : null}
							</div>
						</div>
					</main>
					<EmbeddedVideo movieIsOpen={movieIsOpen} trailerIsOpen={trailerIsOpen} toggleTrailer={this.toggleTrailer} video={trailers[0]} />
				</div>
				: null}
			</div>
		)
	}
}

export default MovieModal;