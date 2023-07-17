import emailjs from 'emailjs-com';

import Left from "Components/contact/Left"
import Right from "Components/contact/Right"
import { useEffect, useState } from 'react';
const Contact = () =>{
    const [showCase, setShowCase] = useState({ status: '', message: '' })
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
            if(data.fullname === '' || data.email === '' || data.subject === '' || data.description === ''){
                setShowCase({ status: 'fail', message: 'Please make sure all fields are filled.' })
            }else{
                emailjs.send('service_neplqw3', 'template_0vhc20j',data , 'saP8ZMZTq508fB4GV')
            .catch(()=>alert('Something went wrong, Try again.'))
            }
        }
        setTimeout(()=>{
            setShowCase(prev=>({ ...prev, status: ''}))
            setTimeout(()=>{
                setShowCase({ status: '', message: '' })
            },1500)
        },3000)
    },[submit])
    return(<div style={{display: 'flex', flexDirection: 'column', gap: '7em', position: 'relative'}}>
        <div id='contact-go'></div>
        <div className={`alert ${showCase.status}`}>
                {showCase.message}
            </div>
        <div id="contact">
           <Left btn={(p)=>setSubmit(p)} cur={submit} data={(obj)=>setData(obj)}/> 
           <Right btn={(p)=>setSubmit(p)} cur={submit}/>
        </div>
        </div>)
}
export default Contact