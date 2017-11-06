import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="postid">Post ID</label>
                    <input type="number" className="form-control" id="postid" placeholder="Post ID" />
                </div>
                <div className="form-group">
                    <label for="commentid">Comments ID</label>
                    <input type="text" className="form-control" id="commentid" placeholder="Eg: 1203,1901,1324" />
                </div>
            </form>
        )
    }
}

class Create extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <h4 style={{paddingLeft: "13px"}}>Create</h4>
                        </div>
                        <hr/>
                        <br/>
                        <div className="row justify-content-center">
                            <div className="col-9">
                                <Form />
                            </div>
                        </div>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Create;