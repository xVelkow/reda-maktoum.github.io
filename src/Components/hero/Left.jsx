const Left = () =>{
    return (
        <section id='left'>
            <h1 id='heading'>
                <span>Reda</span> MAKTOUM
            </h1>
            <p id="hero__paragraph__1">I'am a <span className='highlight'>Web Developer</span></p>
            <p id="hero__paragraph__2">
                <span className="section">Elevate your <span className="highlight"> Brand</span>'s Online presence</span>
                <span className="section"> with a touch of <span className="highlight">Web Development</span> Excellence!</span>
            </p>
            <button className="CTA"
                onClick={()=>{
                    let menuClass = document.getElementsByClassName('menu')[0];
                    menuClass.classList.remove('menu-opened')
                    document.body.classList.remove('no-scroll')
                    const element = document.getElementById('contact-go')
                    element.scrollIntoView()
                }}
            >Let's work together</button>
        </section>
    )
}
export default Left;