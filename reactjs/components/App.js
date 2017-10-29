var React = require('react');
var ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;
var Redirect = ReactRouter.Redirect;
var Switch = ReactRouter.Switch;

// Components
var Home = require('./Home');

//

class App extends React.Component {
	render() {
		return (
				<div>
					
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/go' component={Home} />
						
					</Switch>

				</div>
		)
	}
}

module.exports = App;
