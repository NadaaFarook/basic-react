import React from 'react'

class Todo extends React.Component{
  
  render(){
  const {todos , uiChange, delTodo} = this.props 
  const displayTodo = todos.map(aTodo =>{
      return(
          <div key={aTodo.id} className='m-1 flex flex-column items-center justify-between bg-blue-100'>
          <p className=''>{aTodo.message}</p>
          <button className="bg-red-400 text-white px-4 py-2" onClick={()=>{delTodo(aTodo.id)}}>Delete</button>
          </div>
      )
  })     
  
  


    return(
      <div className="">
        {displayTodo}
      </div>
    )
  }
}


export default Todo