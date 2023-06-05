import terminal from 'Assets/terminal.png'
const Navbar = () =>{
    const menu = (e) =>{
        console.log("hello");
        // let id = menuButton.getAttribute('id');
        // id === 'on' ? menuButton.removeAttribute('id') : menuButton.setAttribute('id','menu')
    }
    return(
        <nav className='main__navbar'>
            {/* <h2 className='logo'><span>x</span>Velkow</h2> */}
            <h2 className='logo'><span>M</span>R</h2>
            <img
                src={terminal}
                className='menu'
                onMouseEnter={()=>{alert('hello')}}
            />
            <ul className='list__items'>
                <li
                    className='list__item home'
                >Home</li>
                <li
                    className='list__item'
                >About</li>
                <li
                    className='list__item'
                >Services</li>
                <li
                    className='list__item'
                >Projects</li>
                <button className='list__button'>Contact</button>
            </ul>
        </nav>
    )
}
export default Navbar;