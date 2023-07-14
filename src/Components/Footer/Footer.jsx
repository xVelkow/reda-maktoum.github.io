import gmail from "Assets/gmail.svg"
import linkedin from "Assets/linkedin.svg"
const Footer = () =>{
    return(
        <footer>
            <h4>Get a touch of the <span>future</span> by going <span>virtual</span> &copy; {new Date().getFullYear()}</h4>
            <p>Contact me via</p>
            <section>
                <a href="mailto:redamaktoum@gmail.com">
                    <img src={gmail} alt="email" />
                    <span>reda.maktoum@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/reda-maktoum" target="_blank">
                    <img src={linkedin} alt="linkedin" />
                    <span>Reda MAKTOUM</span>
                </a> 
            </section>
        </footer>
    )
}
export default Footer