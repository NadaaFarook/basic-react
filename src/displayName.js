import React from 'react'

class DisplayName extends React.Component{
   

    render(){

    const {stay,input,swtch }=this.props
        



    const statee = stay.filter(d=>(d.name === '' || d.name.includes(input))).map(name=>{
        return(
            <div  key={Math.random()} className='flex mx-2 my-2' onClick={this.colorRed}>
           <div className={!name.stocked && swtch ? 'hidden' : 'block'}>
            <p className={name.stocked ? 'color-black mx-2 my-2 capitalize' :'text-red-400 mx-2 my-2 capitalize'} >
                {name.name}
            </p>
            <p className={name.stocked ? 'color-black mx-2 my-2':'text-red-400 mx-2 my-2'  }>
                {name.price}
            </p>
            </div>
            </div>
        )
    });
    
  
  
    return(
      <div>
       {statee}
        
      </div>
    )
  
}
}

export default DisplayName