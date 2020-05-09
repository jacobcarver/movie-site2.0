import React from 'react';

const CurrentMovie = (props) => {
	let { upcomingMovies, movieIndex, chooseMovie, handleMovieModal, handleLeft, handleRight, throttle } = props;
	let { id, backdrop_path, poster_path, overview, title, vote_average } = upcomingMovies[movieIndex];
	const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
	let stars = Math.round((vote_average * 5) / 10);
	if (stars > 5) {
		stars = 5;
	}
	return (
		<main className="current-movie">
			<div className="current-movie-info">
				<img alt={title} src={backdrop_path !== undefined && backdrop_path !== null ? `${POSTER_URL}/${backdrop_path}` : 'https://eapp.org/wp-content/uploads/2018/05/poster_placeholder.jpg'} />
				<div className="inner">
					<div className="movie">
						<h6>Upcoming Movie</h6>
						<h1>{title}</h1>
						<div className="rating">
							<div className="stars">
								{stars > 0 ? <i className="fas fa-star"></i> : <i className="fa fa-star"></i>}
								{stars > 1 ? <i className="fas fa-star"></i> : <i className="fa fa-star"></i>}
								{stars > 2 ? <i className="fas fa-star"></i> : <i className="fa fa-star"></i>}
								{stars > 3 ? <i className="fas fa-star"></i> : <i className="fa fa-star"></i>}
								{stars > 4 ? <i className="fas fa-star"></i> : <i className="fa fa-star"></i>}
							</div>
							<span>{stars} / 5</span>
						</div>
						<p className="desc">{overview}</p>
						<button onClick={() => {
							chooseMovie(id);
							handleMovieModal(true);
						}}>View More</button>
					</div>
					<div className="poster" style={{backgroundImage: poster_path !== undefined && poster_path !== null ? `url('${POSTER_URL}/${poster_path}')` : 'https://eapp.org/wp-content/uploads/2018/05/poster_placeholder.jpg'}}></div>
				</div>
				<div className="toggler">
					<div className="arrow left" onClick={e => throttle(handleLeft)}><i className="fas fa-arrow-left"></i></div>
					<div className="arrow right" onClick={e => throttle(handleRight)}><i className="fas fa-arrow-right"></i></div>
				</div>
			</div>

			<div className="movies">
				<div className="overflow">
					<div className="swipes" style={{transform: `translateX(${-375 * movieIndex}px)`}}>
						{upcomingMovies.map((movie) => {
							let { id, title, poster_path } = movie;
							return (
								<div className={`col ${id === upcomingMovies[movieIndex].id ? 'active': ''}`} key={id}>
									<div className="movie" onClick={() => {
										chooseMovie(id);
										handleMovieModal(true);
									}}>
										<div className="movie-poster" style={{backgroundImage: poster_path !== undefined && poster_path !== null ? `url('${POSTER_URL}/${poster_path}')` : 'https://eapp.org/wp-content/uploads/2018/05/poster_placeholder.jpg'}}></div>
										<div className="movie-info">
											<h4>{title}</h4>
											<button>View More</button>
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