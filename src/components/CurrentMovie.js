import React from 'react';

const CurrentMovie = (props) => {
	let { upcomingMovies, movieIndex, chooseMovie, handleMovieModal, handleLeft, handleRight, throttle } = props;
	const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
	return (
		<main className="current-movie">
			<div className="current-movie-info" style={{backgroundImage: upcomingMovies[movieIndex].backdrop_path !== undefined && upcomingMovies[movieIndex].backdrop_path !== null ? `url('${POSTER_URL}/${upcomingMovies[movieIndex].backdrop_path}')` : 'https://eapp.org/wp-content/uploads/2018/05/poster_placeholder.jpg'}}>
				<div className="inner">
					<div className="movie">
						<h6>Production Company</h6>
						<h1>{upcomingMovies[movieIndex].title}</h1>
						<div className="rating">
							<div className="stars">
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<i className="far fa-star"></i>
								<i className="far fa-star"></i>
							</div>
							<span>3 / 5</span>
						</div>
						<p className="desc">{upcomingMovies[movieIndex].overview}</p>
						<button onClick={() => {
							chooseMovie(upcomingMovies[movieIndex].id);
							handleMovieModal(true);
						}}>View More</button>
					</div>
					<div className="poster" style={{backgroundImage: upcomingMovies[movieIndex].poster_path !== undefined && upcomingMovies[movieIndex].poster_path !== null ? `url('${POSTER_URL}/${upcomingMovies[movieIndex].poster_path}')` : 'https://eapp.org/wp-content/uploads/2018/05/poster_placeholder.jpg'}}></div>
				</div>
				<div className="toggler">
					<div className="arrow left" onClick={e => throttle(handleLeft)}><i className="fas fa-arrow-left"></i></div>
					<div className="arrow right" onClick={e => throttle(handleRight)}><i className="fas fa-arrow-right"></i></div>
				</div>
			</div>

			<div className="movies">
				<div className="overflow">
					<div className="swipes" style={{transform: `translateX(${-400 * movieIndex}px)`}}>
						{upcomingMovies.map((movie) => {
							let { id, title, poster_path } = movie;
							return (
								<div className={`col ${id === upcomingMovies[movieIndex].id ? 'active': ''}`} key={id}>
									<div className="movie">
										<div className="movie-poster" style={{backgroundImage: poster_path !== undefined && poster_path !== null ? `url('${POSTER_URL}/${poster_path}')` : 'https://eapp.org/wp-content/uploads/2018/05/poster_placeholder.jpg'}}></div>
										<div className="movie-info">
											<h4>{title}</h4>
											<button onClick={() => {
												chooseMovie(id);
												handleMovieModal(true);
											}}>View More</button>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>

		</main>
	)
}

export default CurrentMovie;