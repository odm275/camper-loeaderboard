import React, { Component } from 'react'
import TOPMONTH from './ListTopMonth'

import './App.css'

const topMonth = {type:"TopMonth",url:"https://fcctop100.herokuapp.com/api/fccusers/top/recent"}
const topAllTime =  {type:"TopMonth",url:"https://fcctop100.herokuapp.com/api/fccusers/top/alltime"}


class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoadingMonth:true,
      usersTopMonth:[],
      isLoadingAllTime:true,
      usersTopAllTime:[],
    }
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(type, url){
   //fetch data into an object
   fetch(url)
    .then(response => response.json())
    .then(data => data.map((user,index) => {
        return({
          username: user.username, 
          photo:user.img,
          alltime: user.alltime,
          recent: user.recent
        })
      } 
    ))
    .then(contacts => {
      switch(type){
        case topMonth:
        this.setState({
          isLoadingMonth:false,
          usersTopMonth:contacts,
          type:type
        })
        break
        // let default be topAllTime just so eslint doesn't bother 
        default:
        this.setState({
          isLoadingAllTime:false,
          usersTopAllTime:contacts,
          type:type
        })
      }
    })
    .catch(error => console.log('failed',error))
  }
  componentDidMount(){
    this.fetchData(topMonth.type, topMonth.url)
    this.fetchData(topAllTime.type, topAllTime.url)
  }



  render(){
    //console.log(this.state);
    return(
      <div>
        <TOPMONTH fetch={this.state}/>
      </div>
    )
  }



}

export default App;
