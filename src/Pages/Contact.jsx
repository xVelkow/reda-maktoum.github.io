import emailjs from 'emailjs-com';

import Left from "Components/contact/Left"
import Right from "Components/contact/Right"
import { useEffect, useState } from 'react';
const Contact = () =>{
    const [data, setData] = useState({})
    const [submit,setSubmit] = useState(false)
    const [rendered,setRendered] = useState(false)
    useEffect(()=>{
        emailjs.init('saP8ZMZTq508fB4GV');
    },[])
    useEffect(()=>{
        if(!rendered){
            setRendered(true)
        }
        if(rendered){
            emailjs.send('service_neplqw3', 'template_0vhc20j',data , 'saP8ZMZTq508fB4GV')
            .catch(()=>alert('Something went wrong, Try again.'))
        }
    },[submit])
    return(<div style={{display: 'flex', flexDirection: 'column', gap: '7em'}}>
        <div id='contact-go'></div>
        <div id="contact">
           <Left btn={(p)=>setSubmit(p)} cur={submit} data={(obj)=>setData(obj)}/> 
           <Right btn={(p)=>setSubmit(p)} cur={submit}/>
        </div>
        </div>)
}
export default Contact