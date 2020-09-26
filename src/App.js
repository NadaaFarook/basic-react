import React from 'react'
import Todo from './todo'


class App extends React.Component{
  state={
    Todos:[
      {id:1, message:'Do the dishes' , completed:true},
      {id:2, message:'Get some groceries',completed:false},
      {id:3, message:'Do homework',completed:true}
    ],
    
    input: '',
  }
  
  acceptInput=(e)=>{
    let inputss = {message:e.target.value , id: Math.random()}
    this.setState({
      input: inputss ,
    })
  }
  updateTodo = (e)=>{
    e.preventDefault()
    let Todos = [...this.state.Todos , this.state.input]
    this.setState({
      Todos: Todos
    })
  }
  deleteTodo = (id)=>{
    let Todo = this.state.Todos.filter(e =>{
      return e.id !== id
    })
    this.setState({Todos:Todo})
  }
  


  render(){
    return(
      <div className=" m-1">
        <h1 className="bg-blue-700 text-white py-4 text-center text-2xl">MY DAILY TODOS</h1>
    <p className="bg-blue-400 text-white text-center uppercase py-2 m-1">Only {Object.keys(this.state.Todos).length} left!!</p>
        <Todo todos={this.state.Todos} delTodo={this.deleteTodo} />
        <form onSubmit={this.updateTodo}>
        <input className="mx-1 my-1 px-1 py-1 border-b-2 border-green-300 outline-none w-50" type="text" id="inputtodo" onChange={this.acceptInput} />
        <button className="bg-green-300 text-white ml-10 p-2">Add Todo</button>
        
        </form>
        
      </div>
    )
  }
}


export default App