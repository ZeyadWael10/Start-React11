import React from 'react'
import  style  from './footer.module.css'
export default function Footer() {
    return (<>
        <footer className={style.background}>
            <div className="row">
                <div className="col-md-4">
                    <h3 className='text-white'>LOCATION</h3>
                    <p className='text-white'>2215 John Daniel Drive</p>
                    <p className='text-white'>Clark, MO 65243</p>
                </div>
                <div className="col-md-4">
                    <h3 className='text-white'>AROUND THE WEB</h3>
                    <ul className="navbar-nav w-25 py-4 mx-auto flex-row justify-content-center">
                        <li className="nav-item mx-2">
                            <div className={style.circle}>
                            <i className="fa-brands fa-facebook pt-1 mt-1 fa-2x"></i>
                            </div>
                        </li>
                        <li className="nav-item mx-2">
                            <div className={style.circle}>
                            <i className="fa-brands fa-twitter pt-1 mt-1 fa-2x"></i>
                            </div>
                        </li>
                        <li className="nav-item mx-2">
                            <div className={style.circle}>
                            <i className="fa-brands fa-instagram pt-1 mt-1 fa-2x"></i>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3 className='text-white'>ABOUT FREELANCER</h3>
                    <p className='text-white'>Freelance is a free to use,</p>
                    <p className='text-white'> MIT licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </footer>
        <div className={style.copyrights}>
        <small className='text-white'>Copyright <span>&copy;</span> Your Website 2021</small>
    </div>
    </>
    )
}
