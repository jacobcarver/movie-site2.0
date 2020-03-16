import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import searchIcon from '../assets/search-icon.svg';

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
		const { searchMovies, history } = this.props;
        e.preventDefault();
        if (this.state.searchInputValue.length > 0) {
			searchMovies(this.state.searchInputValue);
			history.push('/search');
			this.setState({ searchInputValue: '' });
        }
    }
    render() {
		const { searchInputValue } = this.state;
        return (
            <div id="navigation">
				<div className="container">
					<div className="links">
						<Link to="/" className={`${window.location.pathname === '/' ? 'active' : ''}`}>Home <span></span></Link>
						<Link to="/discover" className={`${window.location.pathname === '/discover' ? 'active' : ''}`}>Movies <span></span></Link>
						<Link to="/shows" className={`${window.location.pathname === '/shows' ? 'active' : ''}`}>TV <span></span></Link>
						<Link to="/search" className={`${window.location.pathname === '/search' ? 'active' : ''}`}>Search <span></span></Link>
					</div>
					<form onSubmit={this.handleSearch} className="search">
						<input onChange={this.handleSearchChange} value={searchInputValue} placeholder="Search Movies" />
						<img onClick={this.handleSearch} src={searchIcon} alt="Search Movies" />
					</form>
				</div>
            </div>
        );
    }
}

export default withRouter(Navigation);