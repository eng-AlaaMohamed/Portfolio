import sectionImage from '../../images/personImage.png';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './Contact.css'


function ContactUs() {
    const form = useRef();
    const inputName = useRef();
    const inputEmail = useRef();
    const inputMessage = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    if (name.trim() !== "") inputName.current.className = '';
    if (email.trim() !== "") inputEmail.current.className = '';
    if (message.trim() !== "") inputMessage.current.className = '';

    const sendEmail = (e) => {
        e.preventDefault();

        if (name.trim() === "") return inputName.current.className = 'border-red';
        if (email.trim() === "") return inputEmail.current.className = 'border-red';
        if (message.trim() === "") return inputMessage.current.className = 'border-red';

        emailjs
            .sendForm('service_hh40bax', 'template_te2dzsv', form.current, {
                publicKey: 'eOhZJL0xGriR-tgJ-',
            })
            .then(
                () => {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top",
                        showConfirmButton: false,
                        background: '#008000',
                        color: 'white',
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Sent successfully"
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div id='contact' className='cnotact-section'>
            <div className='section-title'>
                <h2>Contact</h2>
            </div>
            <div className='phone-number'>
                <div className='phone-number-icon'><i className="bi bi-telephone-fill"></i></div>
                <span className='number'><strong>+20</strong> 01121865085</span>
            </div>
            <div className='cnotact-section-content'>
                <form className='contact-form' ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input ref={inputName} onChange={(e) => setName(e.target.value)} type="text" name="from_name" />
                    <label>Email</label>
                    <input ref={inputEmail} onChange={(e) => setEmail(e.target.value)} type="email" name="from_email" />
                    <label>Message</label>
                    <textarea ref={inputMessage} onChange={(e) => setMessage(e.target.value)} name="message" />
                    <input className='snd-btn' type="submit" value="Send" />
                </form>
                <div className='cnotact-section-image'>
                    <img src={sectionImage} alt='section-details image' />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;