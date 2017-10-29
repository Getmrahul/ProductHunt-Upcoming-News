var React = require('react');
var ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;
var Redirect = ReactRouter.Redirect;
var Switch = ReactRouter.Switch;

// Components
var Home = require('./Home');
var Navbar = require('./Navbar');

//

class App extends React.Component {
	render() {
		return (
				<div>
					<Navbar />
					<Switch>
						<Route exact path='/' component={Home} />
						
					</Switch>

				</div>
		)
	}
}

module.exports = App;
