import React from 'react';

var categories = ['Upcoming Movies', 'Popular Movies', 'R Movies', 'Kids Movies'];

const MovieCategories = (props) => {
	return (
		<div className="categories">
			{Object.keys({...props}).map((p, i) => {
				return (
					<div key={i} className="row">
						<h3>{categories[i]}</h3>
						{{...props}[`${p}`].map((movie) => {
							return (
								<div key={movie.id}>{movie.title}</div>
							)
						})}
					</div>
				)
			})}
		</div>
	)
}

export default MovieCategories;