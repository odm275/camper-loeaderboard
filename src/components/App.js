import React, { Component } from 'react'
import TOPMONTH from './ListTopMonth'

import './App.css'


class App extends Component {
  
  fetchData(type, url){
   //fetch data into an object
   fetch(url)
    .then(response => response.json())
    .then(data => data.map((user,index) => {
      console.log(user.recent);
        return({
          username: user.username, 
          photo:user.img,
          alltime: user.alltime,
          recent: user.recent
        })
      } 
    ))
    .then(contacts => this.setState({
      isLoading:false,
      users:contacts,
      type:type
    }))
    .catch(error => console.log('failed',error))
  }

  render(){
    return(
      <div>
        <TOPMONTH fetch={this.fetchData}/>
      </div>
    )
  }



}

export default App;
