import React, { Component } from 'react';

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            searchInputValue: ''
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearchChange(e) {
        this.setState({ searchInputValue: e.target.value });
    }
    handleSearch(e) {
        e.preventDefault();
        if (this.state.searchInputValue.length > 0) {
            this.props.searchMovies(this.state.searchInputValue);
        }
    }
    render() {
        return (
            <div id="navigation">
				<div className="brand">
					<i></i>
					<h1>MoviePro</h1>
				</div>
				{/* Right Menu Search */}
				<form onSubmit={this.handleSearch} className="search">
					<input onChange={this.handleSearchChange} placeholder="Search Movies" required />
					<i onClick={this.handleSearch}></i>
				</form>
            </div>
        );
    }
}

export default Navigation;