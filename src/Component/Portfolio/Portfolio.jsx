import React from 'react'
import style from "./poprtfolio.module.css"
export default function Portfolio() {
    return (
        <div>
            <section className='my-2 py-2'>
                <h1 className={style.textColor}>Portfolio</h1>
                <div className={`${style.width20} my-4 mx-auto d-flex justify-content-between align-items-center`}>
                    <div className={`${style.line}`}></div>
                    <svg class={`star-icon ${style.width10} ${style.textColor}`} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                    <div className={`${style.line}`}></div>
                </div>
                <div className="container">
                    <div className="row gy-5 py-4">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <img className='w-100 rounded' src="./images/cabin.png" alt="" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <img className='w-100 rounded' src="./images/cake.png" alt="" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <img className='w-100 rounded' src="./images/circus.png" alt="" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <img className='w-100 rounded' src="./images/game.png" alt="" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <img className='w-100 rounded' src="./images/safe.png" alt="" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <img className='w-100 rounded' src="./images/submarine.png" alt="" />
                        </div>
                        {/* <div class="modal" tabindex="-1">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Modal title</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>Modal body text goes here.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}
