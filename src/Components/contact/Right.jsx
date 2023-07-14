const Right = ({btn, cur}) =>{
    return(
        <div id="contact-right">
            <div id="first">
                <div id="line"></div>
                <h2 className="brackets">&#91;</h2>
                <h2>Contact me</h2>
                <h2 className="brackets">&#93;</h2>
            </div>
            <h1>Let's get in</h1>
            <h1>Touch</h1>
            <button
                className="CTA"
                id="desktop"
                onClick={()=>btn(!cur)}
            >Send Message</button>
        </div>
    )
}
export default Right