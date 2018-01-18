import React, { Component } from 'react'

const topMonth = {type:"TopMonth",url:"https://fcctop100.herokuapp.com/api/fccusers/top/recent"}

const topAllTime =  {type:"TopMonth",url:"https://fcctop100.herokuapp.com/api/fccusers/top/alltime"}


class list extends Component {
    constructor(props){
      super(props)
      this.state = {
        isLoading:true,
        users:[],
        type:""
      }
    }
    componentDidMount(){
      this.props.fetch(topMonth.type, topMonth.url);
      console.log(this.state.users.username);
      //this.props.fetch(topAllTime.type, topAllTime.url);
    }
 
    render() {
  
      return (
        <div className="App">
          Hello
        </div>
      );
    }
  }
  
  export default list;