import { useState, useEffect } from "react"
const Left = ({btn, cur, data}) =>{
    const [email, setEmail] = useState({
        fullname: '',
        email: '',
        subject: '',
        description: ''
    })
    const handle = ({target}) =>{
        const key = target.id
        const value = target.value
        setEmail(prev=>({...prev, [key]: value}))
    }
    useEffect(()=>{
        data(email)
    },[email])
    return(
        <div id="form">
            <div className="input-group">
                <div className="input">
                    <label htmlFor="fullname">Full Name</label>
                    <input
                        type="text"
                        id="fullname"
                        placeholder="Reda MAKTOUM"
                        autoComplete="off"
                        onChange={handle}
                        value={email.fullname}
                    />
                </div>
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="reda.maktoum@gmail.com"
                        autoComplete="off"
                        onChange={handle}
                        value={email.email}
                    />
                </div>
            </div>
            <div className="input">
                <label htmlFor="subject">Subject</label>
                <input
                    type="text"
                    id="subject"
                    placeholder="Portfolio Project"
                    autoComplete="off"
                    onChange={handle}
                    value={email.subject}
                />
            </div>
            <div className="input">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    cols="30"
                    rows="10"
                    placeholder="I want a portfolio project to showcase my work..."
                    autoComplete="off"
                    onChange={handle}
                    value={email.description}
                ></textarea>
            </div>
            <center>
                <button
                    id="mobile"
                    className="CTA"
                    onClick={()=>btn(!cur)}
                >Send Message</button>
            </center>
        </div>
    )
}
export default Left