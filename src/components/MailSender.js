import React, { useState } from 'react'
import emailjs from 'emailjs-com'

function MailSender() {

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userMsg, setUserMsg] = useState('')
    const [sendMessageClass, setsendMessageClass] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();


        setUserName('')
        setUserEmail('')
        setUserMsg('')

        setTimeout(() => {
            document.getElementById("alert_msg").classList.remove('invisible')
            document.getElementById("alert_msg").classList.add('visible')
        }, 1000);

    }

    const userNameChange = ((e) => {
        setUserName(e.target.value)
        document.getElementById("alert_msg").classList.remove('visible')
        document.getElementById("alert_msg").classList.add('invisible')
    })

    const userEmailChange = ((e) => {
        setUserEmail(e.target.value)
        document.getElementById("alert_msg").classList.remove('visible')
        document.getElementById("alert_msg").classList.add('invisible')
    })

    const userMsgChange = ((e) => {
        setUserMsg(e.target.value)
        document.getElementById("alert_msg").classList.remove('visible')
        document.getElementById("alert_msg").classList.add('invisible')
    })

    return (
        <div className='container border w-50 mt-3'>

            <div className='col p-3'>
                <div className="mb-3 bg-dark text-light p-1">
                    <h1 className="form-label text-center ">Contact Form</h1>
                </div>
                <div className='alert alert-success text-center invisible m-0' id='alert_msg' role="alert">
                    Your Message Has Been Sent, We'll Contact You Soon !
                </div>
                <form onSubmit={sendEmail}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" name='user_name' value={userName}
                            onChange={userNameChange}
                            className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name='user_email' value={userEmail}
                            onChange={userEmailChange}
                            className="form-control" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea type="text" name='message' value={userMsg}
                            onChange={userMsgChange}
                            className="form-control" rows='4' />
                    </div>

                    <button type="submit" className="btn btn-outline-dark">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default MailSender
