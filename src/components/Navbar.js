import { useState } from 'react'
import { Link } from 'react-router-dom'
import myLogo from '../images/logo.png'

const Navbar = () => {
    const [colorHome, setColorHome] = useState('rgb(255, 255, 255)')
    const [colorBlog, setColorBlog] = useState('rgb(204, 204, 204)')
    const [oldHome, setOldHome] = useState('rgb(255, 255, 255)')
    const [oldBlog, setOldBlog] = useState('rgb(204, 204, 204)')

    const handleLinks = (e) => {
        if (e.target.id === 'home') {
            setColorHome('rgb(255, 255, 255)')
            setColorBlog('rgb(204, 204, 204)')

        } else {
            setColorBlog('rgb(255, 255, 255)')
            setColorHome('rgb(204, 204, 204)')
        }
        setOldHome('rgb(255, 255, 255)')
        setOldBlog('rgb(255, 255, 255)')
    }

    const mouseEnter = (e) => {
        if (e.target.id === 'home') {
            setOldHome(colorHome)
            setColorHome('rgb(0, 0, 255)')
        } else {
            setOldBlog(colorBlog)
            setColorBlog('rgb(0, 0, 255)')
        }
    }
    const mouseLeave = (e) => {
        if (e.target.id === 'home') setColorHome(oldHome)
        else setColorBlog(oldBlog)
    }


    return (

        <nav className='navbar fixed-top bg-dark text-white p-0'>
            <div className='container'>
                <div className='col text-start py-1'>
                    <img src={myLogo} width="90px" height="60px" alt='...' />
                </div>

                <div className='d-flex col-2 justify-content-end'>

                    <Link id='home' to='/' className='nav-link p-2 me-3'
                        onMouseEnter={mouseEnter}
                        onMouseLeave={mouseLeave}
                        style={{ color: colorHome }}
                        onClick={handleLinks}
                    >Home</Link>

                    <Link id='blog' to='/blog' className='nav-link p-2 me-3'
                        onMouseEnter={mouseEnter}
                        onMouseLeave={mouseLeave}
                        style={{ color: colorBlog }}
                        onClick={handleLinks}
                    >Blog</Link>

                </div>
            </div>
        </nav>

    )
}
export default Navbar