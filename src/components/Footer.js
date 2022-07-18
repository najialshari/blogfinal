import { useRef, useState } from "react"
import { Link } from "react-router-dom"

const Footer = () => {
    const emailRef = useRef()
    const [textColor, setTextColor] = useState()
    const [isBusy, setIsBusy] = useState(false)
    const [subscribeStatus, setSubscribeStatus] = useState([])

    //Because this case dosen't have dependency for useEffect
    //we simply use a function triggers when button is clicked
    // But be careful for output should delayed after state changed 

    const handleSubscribe = (e) => {
        setIsBusy(true)
        e.target.blur()

        fetch('https://www.wp-course.site/wp-json/youthink/subscribe', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: emailRef.current.value })

        })
            .then((response) => response.json())
            .then((result) => {
                setSubscribeStatus(result)
                setTextColor(result.success === true ? 'text-success' : 'text-danger')
                setIsBusy(false)

                setTimeout(() => {
                    setSubscribeStatus('')
                    emailRef.current.value = ''
                }, 4000)
            })

            .catch((error) => console.error("Error connection ", error))

    }

    return (

        <div className=" fluid bg-light border-top">

            <div className='footer container mt-5'>
                <div className="row">
                    <section className='col-lg-2 col-sm-4 col-12 mb-3 text-start text-muted'>
                        <h5 className='text-dark'>Links</h5>
                        <p><Link className='nav-link ' to='/'>Home</Link></p>
                        <p><Link className='nav-link' to='/'>Features</Link></p>
                        <p><Link className='nav-link' to='/'>Pricing</Link></p>
                        <p><Link className='nav-link' to='/'>FAQs</Link></p>
                        <p><Link className='nav-link' to='/'>About</Link></p>
                    </section>
                    <section className='col-lg-2 col-sm-4 col-12 mb-3 text-start text-muted'>
                        <h5 className='text-dark'>Guides</h5>
                        <p><Link className='nav-link' to='/'>Get Started</Link></p>
                        <p><Link className='nav-link' to='/'>Documents</Link></p>
                        <p><Link className='nav-link' to='/'>Newsletter</Link></p>
                        <p><Link className='nav-link' to='/'>Tutorials</Link></p>
                        <p><Link className='nav-link' to='/'>References</Link></p>
                    </section>
                    <section className='col-lg-2 col-sm-4 col-12 mb-3 text-start text-muted'>
                        <h5 className='text-dark'>Support</h5>
                        <p><Link className='nav-link' to='/'>Community</Link></p>
                        <p><Link className='nav-link' to='/'>Forum</Link></p>
                        <p><Link className='nav-link' to='/'>Chatting</Link></p>
                        <p><Link className='nav-link' to='/'>Contact</Link></p>
                        <p><Link className='nav-link' to='/'>Email</Link></p>
                    </section>

                    <div className='container col-lg-4 col-12'>
                        <h5>Subscribe to our Newsletter</h5>
                        <p>Monthly digest of whats new and exciting from us.</p>

                        <form className='d-flex mb-2' onSubmit={(e) => e.preventDefault()}>
                            <input type='email' className='me-2 form-control' ref={emailRef} placeholder='Email address' />

                            {!isBusy ?
                                <button className='btn btn-primary ' onClick={handleSubscribe} >Subscribe</button>
                                : <button className="btn btn-primary">
                                    <span className="spinner-border spinner-border-sm"></span>
                                </button>
                            }

                        </form>
                        <p className={textColor}>{subscribeStatus.message}</p>
                    </div>

                </div>

                <div className="row copyRights">
                    <p>&copy; All rights Reserved 2022</p>
                </div>

            </div>
        </div>
    )

}
export default Footer