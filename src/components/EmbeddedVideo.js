import React, { Component } from 'react';

class EmbeddedVideo extends Component {
	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.movieIsOpen !== this.props.movieIsOpen) {
			if (nextProps.movieIsOpen === false) {
				this.props.toggleTrailer(false);
			}
		}
	}
	render() {
		const { video, toggleTrailer, trailerIsOpen, movieIsOpen } = this.props;
		return (
			<div className={`embedded-video ${video !== undefined && trailerIsOpen && movieIsOpen ? 'open' : ''}`}>
				{video !== undefined && trailerIsOpen === true && movieIsOpen === true ? 
				<div className="vid">
					<div className="close-trailer" onClick={e => toggleTrailer(false)}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
							aria-describedby="desc" role="img">
							<title>Close Trailer</title>
							<path fill="none" stroke="#ffffff" strokeMiterlimit="10" strokeWidth="4" d="M41.999 20.002l-22 22m22 0L20 20"
							strokeLinejoin="round" strokeLinecap="round"></path>
						</svg>
					</div>
					<iframe title="ytplayer" id="message-id" width="100%" height="100%" allow="autoplay; fullscreen"
					src={video.key !== undefined ? `https://www.youtube.com/embed/${video.key}?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=1&autoplay=1` : ''}
					frameBorder="0"></iframe>
				</div> : ''}
			</div>
		)
	}
}

export default EmbeddedVideo;