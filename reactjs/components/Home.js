var React = require('react');

class NewsItem extends React.Component {
    openContent(e) {
        var url = "";
        if ($(e.target).hasClass('content')) {
            url = $(e.target).data('url');
        } else {
            url = $(e.target.parentNode).data('url');
        }
        window.location = url;
    }
    render() {
        return (
            <li className="ph_coming_li" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url("'+this.props.background+'")'}}>
                <div className="content" data-url={this.props.target} onClick={(e) => {this.openContent(e)}}>
                    <h5 style={{fontWeight: 200}}>{this.props.title}</h5>
                    <p className="text-justify" style={{fontWeight: 100, fontSize: "14px"}}>{this.props.content.substring(0,94)}...</p>
                    <p className="ph_news_owner"><img src={this.props.logo} width="28" /></p>
                </div>
            </li>
        )
    }
}
class News extends React.Component {
    state = {
        data: [
            {
                background: "https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-9/22730047_2041727836113721_2269237960455317665_n.jpg?oh=d069ccdda11f238ecc9df5ceceb7f791&oe=5A6AE9A8",
                title: "Product Hunt Global Hackathon: Welcome! 🌍",
                content: "Hi there! Welcome to the Product Hunt Global Hackathon. More than 1,000 of you signed up just a few hours after our announcement. We can't wait to see what you build! Looking for teammates? We've put together a Facebook group for you to meet other developers, designers, and marketers, and makers from around the world.",
                logo: "https://i1.sndcdn.com/avatars-000178228275-wkqwc6-t500x500.jpg",
                target: "https://www.producthunt.com/upcoming/product-hunt-global-hackathon/messages/product-hunt-global-hackathon-welcome"
            },
            {
                background: "https://ph-files.imgix.net/ceb0e8a8-1601-4a4b-bfb0-e72c1bcdb748?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=2560&h=1440&fm=pjpg&fit=max&dpr=2",
                title: "Food Menu - Early Access",
                content: "Hello, Thanks for subscribing for Food Menu early access. What is Food Menu? Food Menu is a community for people who love food. You can discover new foods in your city in a better way. So? We are close to completing the initial product of F",
                logo: "https://ph-files.imgix.net/db956144-ef09-435c-9ed9-aca2f1106676?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=200&h=100&fit=max",
                target: "https://www.producthunt.com/upcoming/food-menu/messages/food-menu-early-access"
            },
            {
                background: "https://ph-files.imgix.net/a2554a7f-4b69-4416-95d0-451a70bf0f8f?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=2560&h=1440&fm=pjpg&fit=max&dpr=2",
                title: "Your AR Tool Belt invite",
                content: "Thank you for supporting AR Tool Belt! 1. You should have a TestFlight email from Apple (titled Rocketship Apps has invited you to test “AR Tool Belt”) – their messages often get flagged as spam, so check in your spam folder if you don’t have an invite.",
                logo: "https://ph-files.imgix.net/1e290139-a2b6-4b8c-aabe-24799f5cc57f?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=200&h=100&fit=max",
                target: "https://www.producthunt.com/upcoming/ar-tool-belt/messages/your-ar-tool-belt-invite"
            },
            {
                background: "https://ph-files.imgix.net/cd11ea03-ca2d-4ab4-b487-8c57d385dc48?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=2560&h=1440&fm=pjpg&fit=max&dpr=2",
                title: "👋 Your MVP team",
                content: "Hey there 👋 Thanks for signing up for Day Dot! Landing page 1.0 can be found here! You get early access & a discount if you're ready to start your MVP journey. Enter your details here (or via the website).",
                logo: "https://ph-files.imgix.net/728bb606-600d-4a68-a114-93aa2cee252e?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=200&h=100&fit=max",
                target: "https://www.producthunt.com/upcoming/day-dot/messages/your-mvp-team"
            },
            {
                background: "https://ph-files.imgix.net/3d956769-ad67-4078-9eee-cb1914f6bf29?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=2560&h=1440&fm=pjpg&fit=max&dpr=2",
                title: "Want free Product Hunt swag? 😸",
                content: "Happy Friday, friends! 👋 Thanks for all the feedback on the Upcoming project so far! We've made a ton of improvements based on your input and have a few updates to share.",
                logo: "https://ph-files.imgix.net/94b995d9-6da4-40ed-a89c-d00d0a23e585?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=200&h=100&fit=max",
                target: "https://www.producthunt.com/upcoming/upcoming/messages/43"
            }
        ]
    }
    render() { 
        return (
            <ul className="ph_upcoming_ul">
                {
                    this.state.data.map((item) => (
                        <NewsItem 
                            key={item.title}
                            background={item.background}
                            title={item.title}
                            content={item.content}
                            logo={item.logo}
                            target={item.target}
                        />
                    ))
                }
            </ul>
        )
    }
}

class Home extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <h4 style={{paddingLeft: "13px"}}>Upcoming News</h4>
                        </div>
                        <hr/>
                        <div className="row">
                            <News />
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        )
    }
}

module.exports = Home;