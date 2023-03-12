import React from 'react'
import {useState,useEffect} from 'react';
import Footer from './Footer';
function Home() {
  const [userName,setUserName]=useState('');
  const [show, setShow] = useState(false);
  const [value,setValue]=useState(false);
const userHomePage=async()=>{
  try{
const res=await fetch('http://localhost:7777/getdata',{
method:"GET",
headers:{
  "Content-Type":"application/json"
}
});
const data=await res.json();
setUserName(data.name);
setShow(true);
if(!res.status===200){
  setValue(true)
const error =new Error(res.error);
throw error;
}
  }
  catch (err){

  }
}
useEffect(() => {
  userHomePage()

},[])
  return (
 <>
 <div className='home-page'>
  <div className='home-div'>
    <h1 className='pt-4'>WELCOME</h1>
    <div className='username-home'>
    <h1 >{userName}</h1>
    </div>
    <h2>{show ?'Happy,to see you come back' : 'Thank you for visiting my website!'}</h2>
    <h3>For Any Query Please {value ?'Log-In And': ''} Go To Contact Section And Message Me</h3>
  </div>
 </div>
 <Footer/>
  <section className="credit">© 2023,Mr.Yashvant Prajapati E-commerce Website || All rights reserved.</section>
 </>
  )
}

export default Home