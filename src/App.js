import React from 'react'
import DisplayName from './displayName'
class App extends React.Component{
  
  
  state = {
    Names:[
      {category: "Sporting Goods", price: "$49.99", stocked: true, name: "football"},
      {category: "Sporting Goods", price: "$9.99", stocked: true, name: "baseball"},
      {category: "Sporting Goods", price: "$29.99", stocked: false, name: "basketball"},
      {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
      {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
      {category: "Electronics", price: "$199.99", stocked: true, name: "nexus 7"}
    ],
    input:'',
    switch: false , 
  }
  acceptChange=(e)=>{
    this.setState({
      input: e.target.value
    })
    
  }
  
  acceptCheck = ()=>{
    if(this.state.switch === false){
      this.setState({
        switch : true
      })
    }else {
      this.setState({
        switch : false
      })
    }
  }



  render(){
    return(
      <div className="mx-4 my-4">
        <div className="flex flex-col">
        <input type="text" className="mx-4 my-4 border-b-2 border-gray-900 outline-none" placeholder="Search" onChange={this.acceptChange}/>
        <label htmlFor="checkbox">Stock Available</label>
        <input type="checkbox"  name="Stock Available" placeholder="stock" id="checkbox" onChange={this.acceptCheck}/>
        </div>
        <DisplayName stay={this.state.Names} input={this.state.input} swtch={this.state.switch} />
      </div>
    )
  }
}


export default App