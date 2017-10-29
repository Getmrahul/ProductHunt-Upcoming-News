import React from 'react';
var NavLink = require('react-router-dom').NavLink;
var Media = require('../utils/media');

class Navbar extends React.Component {
    render() {
        return (
            
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light ph_nav">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={Media.mediaPath("images/ph_logo.png")} width="32" height="auto" alt="Product Hunt" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline mr-auto">
                            <div className="input-group">
                                <span className="input-group-addon ph_nav_search" id="basic-addon1"><i className="fa fa-search" aria-hidden="true"></i></span>
                                <input style={{minWidth: "280px",height: "30px", fontSize: "smaller"}} className="form-control ph_nav_input mr-sm-2" type="search" placeholder="Discover your next favorite thing…" aria-label="Search" />
                            </div>
                        </form>
                        <ul className="navbar-nav my-2 my-lg-0">
                            <li className="nav-link"><NavLink exact activeClassName="active" className="nav-link" to='/'><i className="fa fa-newspaper-o" aria-hidden="true"></i> Upcoming News</NavLink></li>
                        </ul>
                    </div>
                </div>
			</nav>
            
        )
    }
}

module.exports = Navbar;