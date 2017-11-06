var React = require('react');
var ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;
var Redirect = ReactRouter.Redirect;
var Switch = ReactRouter.Switch;

// Components
var Home = require('./Home');
var Navbar = require('./Navbar');
const Create = require('./Create');
var Slider = require('./Slider');
//

class App extends React.Component {
	render() {
		return (
				<div>
					<Navbar />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/create/slider' component={Create} />
						<Route exact path='/slider' component={Slider} />
					</Switch>

				</div>
		)
	}
}

module.exports = App;
