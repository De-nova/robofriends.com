import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import {Robots} from './Robots';



class App extends Component{
    constructor(){
        super()
        this.state = {
            Robots:Robots,
            searchfield:''
        }
    }

    onSearchChange =(event) => {
        const filteredRobot = this.state.Robots.filter(Robot => {
            return Robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase)
        })
        console.log( filteredRobot);
    }

    render() {
        return(
           <div className='tc'>
                <h1>Robo-Friends</h1>
                <SearchBox searchChange ={this.onSearchChange} />      
                 <CardList Robots={this.state.Robots}/>
            </div>
        );
    }    
}

export default App;