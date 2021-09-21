import React,{ useState } from 'react';

const AddCard=(props)=> {
  const [val, setVal] = useState({
    title:"",
    content:"",
  });
  

   const Changeevent =(event)=>{
    
   
    const {name, value}= event.target;
    setVal((pre)=>{
      return{
        ...pre,
        [name]:value
      }
    })
      
  }

  const Click =()=>{
    props.fun(val);
    setVal({
      title:"",
    content:"",
    })
  }

  return (
    <>
      <div className="add_note">
        <div className="center">
          <input  type="text" className="input" onChange={Changeevent} value={val.title} name="title" placeholder="title" autoComplete="off" />
          <textarea rows="4" cols="50" className="input" onChange={Changeevent} value={val.content} name="content" placeholder="text here....."/>
          <button onClick={Click}>+</button>
        </div>
        
      </div>
    </>
    
  );
}

export default AddCard;