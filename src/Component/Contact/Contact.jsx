import React from 'react'
import style from './contact.module.css'
export default function Contact() {
  return (
    <section className='my-3 py-3'>
      <h1 className={style.textColor}>Contact</h1>
                <div className={`${style.width20} my-4 mx-auto d-flex justify-content-between align-items-center`}>
                    <div className={`${style.line}`}></div>
                    <svg class={`star-icon ${style.width10} ${style.textColor}`} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                    <div className={`${style.line}`}></div>
                </div>
            <div className="row w-50 mx-auto m-5">
                <div className="col-sm-12">
                    <input type="text" className={`form-control my-2 py-2 border-0 rounded-0 ${style.borderButtom}`} placeholder='Name' />
                    <input type="email" className={`form-control my-2 py-2 border-0 rounded-0 ${style.borderButtom}`} placeholder='Email Address' />
                    <input type="text" className={`form-control my-2 py-2 border-0 rounded-0 ${style.borderButtom}`} placeholder='Phone Number' />
                    <textarea type="text" className={`form-control my-2 py-2 border-0 rounded-0 ${style.borderButtom}`} placeholder='Message' />
                </div>
            </div>
            <button className={`btn text-white ${style.btnBackground}`}>Send</button>
        </section>
  )
}
