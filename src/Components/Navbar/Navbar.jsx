import terminal from 'Assets/terminal.png'
import { useState } from 'react'
const Navbar = () =>{
    const [rerender,setRerender] = useState(false)
    const close = () =>{
        let menuClass = document.getElementsByClassName('menu')[0];
        menuClass.classList.remove('menu-opened')
        document.body.classList.remove('no-scroll')
    }
    const menu = ({target}) =>{
        if(target.classList.contains('menu-opened')){
            close()
        }else{
            target.classList.add('menu-opened') 
            document.body.classList.add('no-scroll')
        }
        setRerender(!rerender)
    }

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    
        );
    }
    window.addEventListener('scroll',()=>{
        const home = document.getElementById('hero')
        const about = document.getElementById('about')
        const services = document.getElementById('services-header')
        const contact = document.getElementById('contact')
        const sections = [home, about, services, contact]
        sections.forEach((section, index )=> {
            const list = document.getElementsByClassName('list__item')
            if(isInViewport(section)){
                for (let item of list) {
                    item.classList.contains('home') && item.classList.remove('home')
                }
                if(index < list.length) {
                    list[index].classList.add('home')
                }
            }
        });
    })
    return(
        <nav className='main__navbar'>
            <h2 className='logo'
                onClick={()=>window.scrollTo(0,0)}
            ><span>M</span>R</h2>

            <button onClick={menu}
                name='menu'
                className='menu'
                style={{ backgroundColor: 'transparent', border: 'none'}}
            >
                <img src={terminal} alt='menu'/>
            </button>

            <ul className='list__items'>
                <li
                    className='list__item home'
                    onClick={()=>{
                        close()
                        window.scrollTo(0,0)
                    }}
                >Home</li>
                <li
                    className='list__item'
                    onClick={()=>{
                        close()
                        const element = document.getElementById('about-go')
                        element.scrollIntoView()
                    }}
                >About</li>
                <li
                    className='list__item'
                    onClick={()=>{
                        close()
                        const element = document.getElementById('services-go')
                        element.scrollIntoView()
                    }}
                >Services</li>
                {/* <li
                    className='list__item'
                >Projects</li> */}
                <button
                    className='list__button'
                    onClick={()=>{
                        close()
                        const element = document.getElementById('contact-go')
                        element.scrollIntoView()
                    }}
                >Contact</button>
            </ul>
        </nav>
    )
}
export default Navbar;