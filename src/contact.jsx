import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import img2 from "./assets/cimg.png"

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_lrnif4j', 'template_6lmq7ci', form.current, {
                publicKey: 'LwBXYF-Yo6IlCVMJ6',
            })
            .then(
                () => {
                    alert('Message sent successfully ✅');
                    form.current.reset();
                },
                (error) => {
                    alert('FAILED... ' + error.text);
                },
            );
    };

    return (
        <div className="form">

            <form ref={form} onSubmit={sendEmail} className='for'>
                Name
                <input className="comment" type="text" id='name' name="name" required />
                Number
                <input className="comment" type="text" id='number' name="number" required />
                Email
                <input className="comment" type="email" id='email' name="email" required />
                Message
                <textarea className="comment" id='message' name="message" required></textarea>

                <input className="send-btn" type="submit" value="Send" />
            </form>

            <div>
                <img className="contimg" src={img2} alt="contact" />
            </div>

        </div>
    );
};
