
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


//  -----get value of input box------

// function App(){
//   const [data,setdata] = useState(null)
//   const [print,setprint] = useState(false)

//   function getdata(val){
//     setdata(val.target.value)

//   }
//   return (

//     <div className='App'> 

//       {
//         print?
//         <h1>{data}</h1>
//         :null
//       }

//           <input type='text' onChange={getdata}/>

//        <button onClick={()=>setprint(true)}>print data</button>

//     </div>
//   )
// }




//-----hide and show data / toggle ---
// function App(){
//   const [status, setstatus] = useState(true); 

//   return(
//       <div className='App'> 
//         {
//           status?<h1>hello world</h1>:null  
//         }


//         {/*hide and show */}
//        { /* <button onClick={()=>setstatus(true)}>Show</button>
//         <button onClick={()=>setstatus(false)}> Hide </button> */}

//         {/* using Toggle sirf opposite kar do */}
//       <button onClick={()=>setstatus(!status)}> Toggle</button> 

//       </div>
//   );
// }



// //state ko handle karenge
// //state is a type of variable 

// function App(){

//   const [data, setdata] = useState(null); 

//   function updatedata(){
//     setdata("yashwant")
//   }

//   return(
//     <div className='App'>
//       <h1>{data}</h1>
//       <button onClick={updatedata}>update</button>
//     </div>
//   );
// }



// //forms ko handle karenge

// function App(){
//   const [name,setname] = useState("");
//   const [Tnc,setTnc] = useState(false);
//   const [interest,setInterest] = useState("");

//   function getFormdata(e){
//       e.preventDefault();
//       console.log(name,Tnc,interest);
//   }
//   return(
//   <div className='App'>
//       <form onSubmit={getFormdata}>
//         <br/>
//         <input type='text' placeholder='Enter data' onChange={(e)=>{setname(e.target.value)}}/><br/><br/>
//         <select onChange={(e)=>{setInterest(e.target.value)}}>
//         <option> select option </option>
//           <option>Iron man</option>
//           <option>captain America</option>
//           <option>Hulk</option>

//         </select>
//         <br/><br/>
//         <input type='checkbox'onChange={(e)=>{setTnc(e.target.checked)}}/><span> Accept terms and condtions</span>
//         <br/><br/>
//         <button type='submit'>Submit</button>
//       </form>


//   </div>
//   );
// }


// // conitional rendering | if condition

// function App(){
//   return(
//     <div className='App'>
//       <Profile/>
//     </div>
//   );
// }

// //validaton ko use karenge without importing library
// function App(){
//   return(
//     <div className='App'>
//       <Login/>
//     </div>
//   );
// }


//function ko call karenge using as props
// function App(){

//   function getdata(){
//     alert("hello world")
// }
//   return(
//     <div className='App'>
//       <Users data={getdata}/>
//       <Users data={getdata}/>
//       <Users data={getdata}/>
//     </div>
//   );
// }


// Life Cycle method
// //constructor kaise kaam karta hai
//// constructor pahle kaam karta ha taaki html load hone se pahle he agar state/props ko dikha sake dikha sake 
// class App extends React.Component{
//     constructor(){
//       super();
//       console.log("constructor called.")
//       this.state ={
//         data : "yash"
//       }
//     } 
//     render(){
//       console.log("hello world")
//       return(
//         <h1>hello world 
//            <br/> {this.state.data}
//         </h1>

//       );
//     } 
// }


//render, life cycle method --> Execute karke prastut karna
//render method kab kab call hoti hai
// jab bhi state/props update hogi, ya component banega

// function App(){
//   const [name,setname] = useState("yash");
//   return(
//     <div className='App'>
//       <Life name ={name}/>
//       <button onClick={()=>setname("sharma")}>click</button>
//     </div>
//   );
// }


//isme multiple page ko ek component se route de sakte hai  
//isko karne  kliye react-route-dom se {browserRoute, Routes, Route} ko import karna padta hai
//aur route mai path and element pass karna parta hai
//aur sath mai jis page ka route declare karna hai usko import karna parta hai



// function App() {
//     return (
//         <div className='App'>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path='/Home' element={<Home/>} />
//                     <Route path='/About' element={<About/>} />
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// }





//agar user ulta pulta link daalega to ushe 
//ek page mai render kar dega jisse {404 page} kahte hai
//isme sirf route k path mai {/*} pass karna hota hai bas


function App() {
    return (
        <>
    
        <div className='App'>
          <h1>Project Complaint Register </h1>
        </div>
           </>
    );
}



export default App;
