import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import img2 from './assets/cimg.png'
export const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_lrnif4j', 'template_6lmq7ci', form.current, {
        publicKey: 'LwBXYF-Yo6IlCVMJ6',
      })
      .then(
        () => {
          alert('Message sent successfully ✅')
          form.current.reset()
        },
        (error) => {
          alert('Failed: ' + error.text)
        }
      )
  }

  return (
    <div className="contact-wrapper">
      <div className="contact-left">
        <h2>Contact Me</h2>
        <p>
          Have a project idea, internship opportunity, or freelance work?
          Send me a message and I will get back to you.
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Name</label>
          <input
            className="comment"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label>Phone Number</label>
          <input
            className="comment"
            type="text"
            name="number"
            placeholder="Enter your phone number"
            required
          />

          <label>Email</label>
          <input
            className="comment"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label>Message</label>
          <textarea
            className="comment"
            name="message"
            placeholder="Write your message"
            rows="5"
            required
          ></textarea>

          <input className="send-btn" type="submit" value="Send Message" />
        </form>
      </div>

      <div className="contact-right">
        <img className="contimg" src={img2} alt="contact" />
      </div>
    </div>
  )
}