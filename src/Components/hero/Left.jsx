const Left = () =>{
    return (
        <section id='left'>
            <h1 id='heading'>
                <span>Reda</span> MAKTOUM
            </h1>
            <p id="hero__paragraph__1">I'am a <span className='highlight'>Web Developer</span></p>
            <p id="hero__paragraph__2">
                <span className="section">a freelancer specialized in <span className='desktop__view'>both</span></span>
                <span className="section">
                    <span className="highlight desktop__view">front-end </span>
                    <span className='desktop__view'>and</span>
                    <span className="highlight desktop__view"> back-end </span>
                    The <span className='highlight mobile__view'>Full Stack</span> Web Development
                </span>
            </p>
            <button className="CTA"
                onClick={()=>{
                    let menuClass = document.getElementsByClassName('menu')[0];
                    menuClass.classList.remove('menu-opened')
                    document.body.classList.remove('no-scroll')
                    const element = document.getElementById('contact-go')
                    element.scrollIntoView()
                }}
            >Hire me</button>
        </section>
    )
}
export default Left;