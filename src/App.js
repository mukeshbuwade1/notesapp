import React, {useState} from 'react';
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import AddCard from "./component/AddCard";
import CardList from "./component/CardList";


const App=()=> {

  const [newVal, setNewVal] = useState([]);

  const myfun=(val)=>{
    setNewVal((pre)=>{
          return [...pre, val];

        });
    console.log(val);
    console.log(newVal);
  }

  const ItemDel=(id)=>{
    setNewVal((oldval)=>{
      return oldval.filter((a,i)=>{
        return i !== id;
        
      })
      
    })
  }
  return (



    <>
      <Navbar />
      <AddCard fun={myfun} />
      <div className="mainbox">
     { 
           newVal.map((data, index)=>{
             return <CardList
               key={index}
               id={index}
               title={data.title}
               content={data.content} 
               ItemDel={ItemDel}
               />
           })
     
           }
       </div>
      <Footer />
    </>
    
  );
}

export default App;
