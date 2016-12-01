import  React from "react";

export class Home extends React.Component {
    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initiaLinkName
        }
        setTimeout(()=>{
            this.setState({status: 1});
        },3000);

        console.log("Constructor");
    }

    componentWillMount(){
        console.log("Component will mount");
    }
    
    componentWillUnmount(){
        console.log("Component will unmount");
    }
    
    
    componentDidMount(){
        console.log("Component did mount");
    }
    
    componentWillReceiveProps(nextProps){
        console.log("Component will receive props", nextProps);
    }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log("Should component update", nextProps, nextState);
        //if(nextState.status === 1) {
        //    return false;
        //}
        return true;
    }
    
    componentWillUpdate(nextProps, nextState){
        console.log("Component will update", nextProps, nextState);
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log("Component did update", prevProps, prevState);
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age+2
        });
    }

    onHandlerChange(event){
        this.setState({
            homeLink: event.target.value
        })
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
                <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandlerChange(event)}/>
                <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialLinkName: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    greet: React.PropTypes.func
};