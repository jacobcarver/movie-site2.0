import React, { Component } from 'react';

class Shows extends Component {
	UNSAFE_componentWillMount() {
		let { tvShows, getTvShows } = this.props;
		if (tvShows.length <= 0) {
			getTvShows();
		}
	}
	render() {
		const { tvShows, handleTvModal, chooseShow } = this.props;
		const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
		return (
			<div id="shows">
				<div className="container">
					<div className="list">
						{tvShows.map((show) => {
							let { poster_path, id, original_name } = show;
							return (
								<div className="col" key={id} onClick={e => {
									handleTvModal(true);
									chooseShow(id);
								}}>
									<div className="show" style={{backgroundImage: `url('${POSTER_URL}/${poster_path}')`}}>
										<h3>{original_name}</h3>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
}

export default Shows;