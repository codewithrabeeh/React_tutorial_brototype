import { Component } from "react";

class ClassHeader extends Component {

    render(){
        return (<h1>Hello I am {this.props.data} in Header</h1>)
    }
}

export default ClassHeader