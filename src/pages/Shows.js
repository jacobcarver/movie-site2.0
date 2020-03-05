import React, { Component } from 'react';

class Shows extends Component {
	UNSAFE_componentWillMount() {
		const { tvShows, getTvShows } = this.props;
		if (tvShows.length <= 0) {
			getTvShows();
		}
	}
	render() {
		const { tvShows, handleTvModal, chooseShow } = this.props;
		return (
			<div id="shows">
				<div className="container">
					<h1>Shows</h1>
					<div className="list">
						{tvShows.map((show) => {
							return (
								<div key={show.id} onClick={e => {
									handleTvModal(true);
									chooseShow(show.id);
								}}>
									<h3>{show.original_name}</h3>
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