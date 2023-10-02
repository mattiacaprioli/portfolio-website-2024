import React, {useState} from 'react';
import emailjs from '@emailjs/browser';

// import contact data
import {contact} from '../data';

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    // My EmailJs service ID, template ID and Public Key
    const serviceId = "service_portfolio2023" ;
    const templateId = "template_luy6lee";
    const publicKey = "OGnuFHdY1fKLv-NYe";

    // Create a new object that contains dynamic template params
    const templateParams = {
      user_name: name,
      user_email: email,
      to_name: 'portfolio front end 2023',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert("Your data has been successfully sent!");
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        alert("Something went wrong. ", error)
      })
  }

  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        {/* section title */}
        <div className='flex flex-col items-center text-center'>
            <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
                Contact me
            </h2>
            <p className='subtitle'>
              If you want to work with me, i will be happy to listen to your proposals.
              Write to me by filling out the form below.
              I can't wait to create something new with you!
            </p>
        </div>

        <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
          {/* info */}
          <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'>
            {contact.map((item, index) => {
              const {icon, title, subtitle, description} = item;
              return <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                  {icon}
                </div>
                <div>
                  <h4 className='font-body text-xl mb-1'>{title}</h4>
                  <p className='mb-1'>{subtitle}</p>
                  <p className='text-accent font-normal'>{description}</p>
                </div>
              </div>
            })}
          </div>

          {/* from */}
          <form onSubmit={handleSubmit} className='space-y-8 w-full max-x-[780px]'>
            <div className='flex gap-8'>
              <input
                className='input' 
                type='text' 
                placeholder='Your name' 
                value={name} 
                onChange={(e) => setName(e.target.value)}
              />
              <input 
                className='input' 
                type='email' 
                placeholder='Your email'
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <textarea 
              className='textarea' 
              placeholder='Your message'
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className='btn btn-lg bg-accent hover:bg-accent-hover'>Send message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
