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
                const reg = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")
                if(reg.test(data.email.toLowerCase())){
                    emailjs.send('service_neplqw3', 'template_0vhc20j',data , 'saP8ZMZTq508fB4GV')
                    .then(()=>setShowCase({ status: 'success', message: 'Email sent.' }))
                    .catch(()=>setShowCase({ status: 'fail', message: 'Something went wrong, Please try again.' }))
                }else{
                    setShowCase({ status: 'fail', message: 'Please make sure the email is valid.' })
                }
            }
        }
        setTimeout(()=>{
            setShowCase(prev=>({ ...prev, status: ''}))
            
        },3500)
        setTimeout(()=>{
            setShowCase({ status: '', message: '' })
        },4500)
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