import React from 'react';

const TvModal = (props) => {
	const { tvIsOpen, handleTvModal, chosenShow } = props;
	const {
		overview,
		poster_path,
		genres,
		name,
		networks,
		production_companies,
		number_of_seasons,
		number_of_episodes,
		created_by
	} = chosenShow;
	const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
	if (tvIsOpen) {
		document.querySelector('body').classList.add('disable');
	} else {
		document.querySelector('body').classList.remove('disable');
	}
	return (
		<div className={`modal show ${tvIsOpen ? 'open' : ''}`}>
			<div className="modal-content-container">
				<header>
					<div onClick = {() => {
							handleTvModal(false);
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
				{name !== undefined ? 
				<div className="inner">
					<div className="main">
						<div className="show-info">
							<h1>{name} </h1>
							<p className="seasons-info">Seasons <span>{number_of_seasons}</span></p>
							<p className="episodes-info">Episodes <span>{number_of_episodes}</span></p>
							<h2>Description</h2>
							<p className="desc">{overview}</p>
							<div className="cast">
								<h2>Created By</h2>
								{created_by.map((c) => {
									return (
										<p key={c.id}>{c.name}</p>
									)
								})}
							</div>
							<div className="networks">
								<h2>Networks</h2>
								<div className="network-logos">
									{networks.filter((net) => net.logo_path !== null).map((n) => {
										return (
											<img alt="network" key={n.id} src={`${POSTER_URL}/${n.logo_path}`} />
										)
									})}
								</div>
							</div>
							{production_companies.filter((prod) => prod.logo_path !== null).length > 0 ? 
							<div className="production">
								<h2>Production Companies</h2>
								<div className="production-logos">
									{production_companies.filter((prod) => prod.logo_path !== null).map((p) => {
										return (
											<img alt="production company" key={p.id} src={`${POSTER_URL}/${p.logo_path}`} />
										)
									})}
								</div>
							</div> : null}
						</div>
						<div className="show-poster">
							<div className="poster" style={{backgroundImage: poster_path !== undefined ? `url('${POSTER_URL}/${poster_path}')` : ''}}>
							</div>
							{genres.length > 0 ? 
							<div className="genres">
								{genres.map((g) => {
									return (
										<span key={g.id}>{g.name}</span>
									)
								})}
							</div> : null}	
						</div>
					</div>
				</div> : null}
			</div>
		</div>
	)
}

export default TvModal;