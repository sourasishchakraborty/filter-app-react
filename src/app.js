import React, {Component} from 'react';
import Navbar from './navbar';
import Card from './card';

class App extends Component{
    state = {};

    render(){
        return (
            //<h1 className="blue-text">Hello World</h1>
            <div>
                <Navbar/>
                <Card/>
                <Card/>
                <Card/>
                <Navbar/>
            </div>
            
        );
    }
}

export default App;