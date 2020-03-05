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
			<div className="embedded-video">
				{video !== undefined && trailerIsOpen === true && movieIsOpen === true ? 
				<div>
					<h1 style={{fontSize: '2rem'}} onClick={e => toggleTrailer(false)}>EXIT</h1>
					<iframe title="ytplayer" id="message-id" type="text/html" width="650" height="350" allow="autoplay; fullscreen"
					src={video.key !== undefined ? `https://www.youtube.com/embed/${video.key}?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=1&autoplay=1` : ''}
					frameBorder="0"></iframe>
				</div> : ''}
			</div>
		)
	}
}

export default EmbeddedVideo;