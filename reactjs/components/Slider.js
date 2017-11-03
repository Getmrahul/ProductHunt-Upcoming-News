import React from 'react';

var api = require('../utils/server');

class SlideItem extends React.Component {
    render() {
        return (
            <div className={"carousel-item" + (this.props.index == 0 ? " active": "")}>
                <img className="rounded-circle" width="80" height="80" src={this.props.img} />
                <h4>{this.props.name}</h4>
                <p><small>{this.props.title}</small></p>
                <p className="text-justify" dangerouslySetInnerHTML={{__html: this.props.body.replace("\n","")}} />
            </div>
        )
    }
}

class Slide extends React.Component {
    state = {
        data: [],
        active: 0
    }
    componentDidMount() {
        api.post_comments(112477)
            .then(function (resp) {
                        console.log(resp.data);
                        this.setState({
                            data: resp.data
                        });
                    }.bind(this))
            .catch(function (err) {console.warn(err)})

        $('#carouselExampleControls').carousel({
            interval: 5000
        });
    }
    componentDidUpdate() {
        $('#carouselExampleControls').carousel({
            interval: 5000
        });
    }
    render() {
        return (
            <div>
                {
                this.state.data.length == 0 ?
                    <div>Loading...</div>
                :
                    <div id="carouselExampleControls" className="carousel slide green_slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {
                                this.state.data.map((item, index) => (
                                    <li data-target="#carouselExampleControls" key={item.id} data-slide-to={index} className={index == 0 ? " active": ""}></li>
                                ))
                            }
                        </ol>
                        <div className="carousel-inner">
                            {
                                this.state.data.map((item, index) => (
                                    <SlideItem
                                        index={index}
                                        key={item.id}
                                        img={item.user["image_url"]["220px"]}
                                        name={item.user.name}
                                        title={item.user.headline}
                                        body={item.body}
                                    />
                                ))
                            }
                        </div>
                    </div>
                }
            </div>
            
        )
    }
}

class Slider extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <h4 style={{paddingLeft: "13px"}}>Widget Preview</h4>
                        </div>
                        <hr/>
                        <br/>
                        <div className="row justify-content-center">
                            <div className="col-9">
                                <Slide />
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

module.exports = Slider;