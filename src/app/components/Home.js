import  React from "react";

export class Home extends React.Component {
    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: "Change Link"
        }
        setTimeout(()=>{
            this.setState({status: 1});
        },3000);

    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age+2
        });
    }

    render () {
        return (
            <div>
                <p>Lorem ipsum dolor.</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
                <hr/>
                <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
                <hr/>
                <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    greet: React.PropTypes.func
};