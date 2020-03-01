import React, { Component } from 'react';

class Results extends Component {
	render() {
		const { searchResults } = this.props;
		console.log(searchResults);
		return (
			<div id="results">
				{searchResults.length > 0 ? 
				<div>
					{searchResults.map((movie, i) => {
						return (
							<div key={i}>
								<h3>{movie.title}</h3>
							</div>
						)
					})}
				</div>
				:
				<h1>No Results</h1>}
			</div>
		)
	}
}

export default Results;