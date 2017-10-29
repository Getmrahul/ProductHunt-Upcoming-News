// Dev. Pack.
var React = require('react');
var ReactDOM = require('react-dom');
var ApolloProvider = require('react-apollo').ApolloProvider;
var createNetworkInterface = require('react-apollo').createNetworkInterface;
var ApolloClient = require('react-apollo').ApolloClient;
var Router = require('react-router-dom').BrowserRouter;

// Components
var App = require('./components/App');

// Other Requirements
require('./index.css');

const gqlEndPoint = window.location.href.includes("localhost") ? "http://localhost:5000/graphql" : "https://www.foodmenu.world/graphql";

const networkInterface = createNetworkInterface({
	uri: gqlEndPoint,
	opts: {
		credentials: 'same-origin',
	  },
})

networkInterface.use([{
	applyMiddleware(req, next) {
		if (!req.options.headers) {
			req.options.headers = {};  // Create the header object if needed.
		}
		// get the authentication token from local storage if it exists
		const token = "this is a test token";
		req.options.headers.authorization = token ? `Bearer ${token}` : null;
		next();
	}
}]);

const client = new ApolloClient({
	networkInterface
})

ReactDOM.render(
	<Router>
		<App />
	</Router>
	,
	document.getElementById('app')
);
