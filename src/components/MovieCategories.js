import React, { Component } from 'react';
import CategoryRow from './CategoryRow';

var categories = ['Popular Movies', 'R Movies', 'Kids Movies'];

class MovieCategories extends Component {
	constructor() {
		super();
		this.state = {
			context: document.querySelector('.loop-scroll'),
			clones: document.querySelectorAll('.is-clone'),
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
		// setTimeout(() => {
		// 	if (document.querySelector('.loop-scroll') !== null && document.querySelectorAll('.is-clone') !== null) {
		// 		this.setState({
		// 			context: document.querySelector('.loop-scroll'),
		// 			clones: document.querySelectorAll('.is-clone')
		// 		});
		// 		this.getclonesWidth();
		// 	}
		// }, 250);
	}
	render() {
		const { popularMovies, rMovies, kidsMovies, handleMovieModal, chooseMovie } = this.props;
		let propArray = [popularMovies, rMovies, kidsMovies];
		return (
			<div className="categories">
				{categories.map((cat, i) => {
					return (
						<CategoryRow key={i} cat={cat} i={i} handleMovieModal={handleMovieModal} chooseMovie={chooseMovie} propArray={propArray} />
					)
				})}
			</div>
		)
	}
}

export default MovieCategories;