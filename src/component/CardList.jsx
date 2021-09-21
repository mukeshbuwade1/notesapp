import React from 'react';

const CardList=(props)=> {
    
  
  const Delete =()=>{
    props.ItemDel(props.id)
  };
  
  return (
    <>
      
        
        <div className="box">
          <h3>{props.title}</h3>
          <p>{props.content}</p>
          <button onClick={Delete}>-</button>
        </div>

    
     
    </>
    
  );
}

export default CardList;