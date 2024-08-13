import react, { Component } from "react";
import Child from "./child";


export default class Father extends Component {
    render() {
        return (
            <div>
                <h1>Hello From Parent Component</h1>
                <Child/>

                <Child Title = "I am the child"></Child>
            </div>
        );
    }
}
    
