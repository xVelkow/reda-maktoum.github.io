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
            if(data.fullname === '' || data.subject === '' || data.email === '' || data.description === ''){
                alert('fill in all the form fields please.')
            }else{
                emailjs.send('service_neplqw3', 'template_0vhc20j',data , 'saP8ZMZTq508fB4GV')
                .then(()=>alert("Email Sent"))
                .catch(()=>alert("Something went wrong"))
            }
        }
    },[submit])
    return(
        <div id="contact">
           <Left btn={(p)=>setSubmit(p)} cur={submit} data={(obj)=>setData(obj)}/> 
           <Right btn={(p)=>setSubmit(p)} cur={submit}/>
        </div>
    )
}
export default Contact