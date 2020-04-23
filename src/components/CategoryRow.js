import React, { Component } from 'react';

class CategoryRow extends Component {
	constructor() {
		super();
		this.state = {
			context: null,
			clones: null,
			clonesWidth: 0
		}
		this.selectMovie = this.selectMovie.bind(this);
		this.getScrollPos = this.getScrollPos.bind(this);
		this.setScrollPos = this.setScrollPos.bind(this);
		this.getclonesWidth = this.getclonesWidth.bind(this);
		this.reCalc = this.reCalc.bind(this);
		this.scrollUpdate = this.scrollUpdate.bind(this);
	}
	selectMovie(id) {
		let { handleMovieModal, chooseMovie } = this.props;
		handleMovieModal(true);
		chooseMovie(id);
	}
	getScrollPos() {
		let { context } = this.state;
		return (context.scrollLeft) - (context.clientLeft || 0);
	}
	setScrollPos(pos) {
		let { context } = this.state;
		context.scrollLeft = pos;
		return context;
	}
	getclonesWidth() {
		let { clones } = this.state;
		var clonesWidth = 0;
		for (var i = 0; i < clones.length; i += 1) {
			clonesWidth = clonesWidth + clones[i].offsetWidth;
		}
		this.setState({ clonesWidth });
	}
	reCalc() {
		var scrollPos = this.getScrollPos();
		if (scrollPos <= 0) {
			this.setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
		}
	}
	scrollUpdate() {
		let { clonesWidth, context } = this.state;
		var scrollWidth = context.scrollWidth;
		let disableScroll = false;
		if (!disableScroll) {
			var scrollPos = this.getScrollPos();
			if (clonesWidth + scrollPos >= scrollWidth) {
				// Scroll to the top when you’ve reached the bottom
				this.setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
				disableScroll = true;
			} else if (scrollPos <= 0) {
				// Scroll to the bottom when you reach the top
				this.setScrollPos(scrollWidth - clonesWidth);
				disableScroll = true;
			}
		}
		if (disableScroll) {
			// Disable scroll-jumping for a short time to avoid flickering
			window.setTimeout(function () {
				disableScroll = false;
			}, 40);
		}
	}
	componentDidMount() {
		let { i } = this.props;
		setTimeout(() => {
			if (document.querySelector(`.loop-scroll${i}`) !== null && document.querySelectorAll(`.is-clone${i}`) !== null) {
				this.setState({
					context: document.querySelector(`.loop-scroll${i}`),
					clones: document.querySelectorAll(`.is-clone${i}`)
				});
				this.getclonesWidth();
			}
		}, 250);
	}
	render() {
		const { cat, i, propArray } = this.props;
		const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
		let { context, clones } = this.state;
		if (context !== null && clones !== undefined) {
			this.reCalc();			
			context.addEventListener('scroll', () => {
				window.requestAnimationFrame(this.scrollUpdate);
			}, false);

			window.addEventListener('resize', () => {
				window.requestAnimationFrame(this.reCalc);
			}, false);
		}
		return (
			<div className="row">
				<h2>{cat}</h2>
				<div className={`movies loop-scroll${i}`}>
					{propArray[i].map((movie) => {
						let { id, poster_path, imdb_id } = movie;
						if (imdb_id !== null) {
							return (
								<div className="col" key={id} onClick={e => this.selectMovie(id)}>
									<div className="movie" style={{backgroundImage: poster_path !== undefined && poster_path !== null ? `url('${POSTER_URL}${poster_path}')` : 'https://eapp.org/wp-content/uploads/2018/05/poster_placeholder.jpg'}}>
									</div>
								</div>
							)
						}
					})}
					{propArray[i][0] !== undefined ? <div className={`col is-clone${i}`} key={propArray[i][0].id}>
						<div className="movie" style={{backgroundImage: propArray[i][0].poster_path !== undefined && propArray[i][0].poster_path !== null ? `url('${POSTER_URL}${propArray[i][0].poster_path}')` : 'https://eapp.org/wp-content/uploads/2018/05/poster_placeholder.jpg'}}>
						</div>
					</div> : null}
					{propArray[i][0] !== undefined ? <div className={`col is-clone${i}`} key={propArray[i][1].id}>
						<div className="movie" style={{backgroundImage: propArray[i][1].poster_path !== undefined && propArray[i][1].poster_path !== null ? `url('${POSTER_URL}${propArray[i][1].poster_path}')` : 'https://eapp.org/wp-content/uploads/2018/05/poster_placeholder.jpg'}}>
						</div>
					</div> : null}
				</div>
			</div>
		)
	}
}

export default CategoryRow;