var axios = require('axios');

var server = "/";

if (document.domain == "localhost") {
	server = "http://localhost:3000/";
}

function postComments(pid) {
	return axios.get(server + 'api/ph/comments?pid='+pid)
}

var api = {
	post_comments: function(post_id) {
		return postComments(post_id)
	}
};

module.exports = api;
