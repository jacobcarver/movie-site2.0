import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            left: false,
            searchInputValue: ''
        }
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };
    handleSearchChange(e) {
        this.setState({
            searchInputValue: e.target.value
        })
    }
    handleSearch(e) {
        e.preventDefault();
        // Make sure user entered query
        if (this.state.searchInputValue.length > 0) {
            this.props.searchMovies(this.state.searchInputValue);
            this.props.history.push('/search');
        }
    }
    render() {
        const { classes } = this.props;
        const sideList = (
            <div className={classes.list}>
                <List>
                    <ListItem button component="a" href="/">
                            <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component="a" href="/tvshows">
                            <ListItemText primary="TV Shows" />
                    </ListItem>
                    <ListItem button component="a" href="/discover">
                            <ListItemText primary="Discover Movies" />
                    </ListItem>
                    <ListItem button component="a" href="/search">
                            <ListItemText primary="Search Movies" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary={<div id="closeNav">Close<CloseIcon /></div>} />
                    </ListItem>
                </List>
            </div>
        );
        return (
            <div id="navigation">
                {/* Appbar */}
                <AppBar color="primary" className="appbar" position="static">
                    <Toolbar className="toolbar">
                        <div className="brand">
                            <IconButton onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Open drawer">
                                {/* Left Menu Icon */}
                                <MenuIcon />
                            </IconButton>
                            <h1>MoviePro</h1>
                        </div>
                        {/* Right Menu Search */}
                        <form onSubmit={this.handleSearch} className="search">
                            <InputBase onChange={this.handleSearchChange} placeholder="Search Movies" required />
                            <SearchIcon onClick={this.handleSearch} />
                        </form>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('left', false)}
                    onKeyDown={this.toggleDrawer('left', false)}
                >
                    {sideList}
                </div>
                </Drawer>
            </div>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withRouter((withStyles(styles)(Navigation)));