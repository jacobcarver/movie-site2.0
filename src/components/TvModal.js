import React from 'react';

const styles = {
	height: '300px',
	width: '175px',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat'
}

const TvModal = (props) => {
	const { tvIsOpen, handleTvModal, chosenShow } = props
	const { overview, poster_path, genres } = chosenShow;
	const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

	if (tvIsOpen) {
		document.querySelector('body').classList.add('disable');
	} else {
		document.querySelector('body').classList.remove('disable');
	}
	return (
		<div className={`modal show ${tvIsOpen ? 'open' : ''}`}>
			<header onClick={() => {
				handleTvModal(false);
			}}>
				<button>X</button>
			</header>
			{genres !== undefined ? 
			<main>
				<div className="show-info">
					<p>{overview}</p>
					<div className="genres">
						{genres.map((g) => {
							return (
								<div key={g.id}>"{g.name}"</div>
							)
						})}
					</div>
				</div>
				<div className="poster" style={{...styles, backgroundImage: `url('${POSTER_URL}/${poster_path}')`}}></div>
			</main> : null}
		</div>
	)
}

export default TvModal;