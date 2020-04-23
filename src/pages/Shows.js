import React, { Component } from 'react';

import loading from '../assets/loading.svg';

class Shows extends Component {
	UNSAFE_componentWillMount() {
		let { tvShows, getTvShows } = this.props;
		setTimeout(() => {
			if (tvShows.length === 0) {
				getTvShows();
			}
		}, 1000)
	}
	render() {
		const { tvShows, handleTvModal, chooseShow } = this.props;
		const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
		return (
			<div id="shows">
				<div className="container">
					{tvShows.length > 0 ? 
					<div className="list">
						{tvShows.map((show) => {
							let { poster_path, id, original_name } = show;
							return (
								<div className="col" key={id} onClick={e => {
									handleTvModal(true);
									chooseShow(id);
								}}>
									<div className="show" style={{backgroundImage: `url('${POSTER_URL}/${poster_path}')`}}>
										<div className="overlay"></div>
										<h3>{original_name}</h3>
									</div>
								</div>
							)
						})}
					</div> : <div className="loading-discover"><img src={loading} alt="Loading Movies" /></div>}
				</div>
			</div>
		)
	}
}

export default Shows;