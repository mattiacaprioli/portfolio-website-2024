import { useForm, ValidationError } from '@formspree/react';

// import contact data
import {contact} from '../data';

const Contact = () => {
  const [state, handleSubmit] = useForm("xwpkeybz");

  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        {/* section title */}
        <div className='flex flex-col items-center text-center'>
            <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
                Contact me
            </h2>
            <p className='subtitle'>
              Interested in working together, or just want to say hello?
              Fill in the form below and I will get back to you.
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
                  <h3 className='font-body text-xl mb-1'>{title}</h3>
                  <p className='mb-1'>{subtitle}</p>
                  <p className='text-accent font-normal'>{description}</p>
                </div>
              </div>
            })}
          </div>

          {/* form */}
          {state.succeeded ? (
            <div className="flex items-center justify-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-8 mb-8" role="alert">
              <svg
                className="fill-current w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M10 15l-5.5-5.5 1.41-1.41L10 12.17l7.09-7.09L18.5 6l-8.5 9z" />
              </svg>
              <p className="font-bold">Thanks for your message!</p>
              <span className="block sm:inline">I’ll get back to you soon.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-8 w-full max-w-[780px]'>
              <div className='flex flex-col md:flex-row gap-8'>
                <div className='flex-1'>
                  <label className='sr-only' htmlFor='name'>Your name</label>
                  <input
                    className='input'
                    id='name'
                    type='text'
                    name='name'
                    placeholder='Your name'
                    autoComplete='name'
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className='flex-1'>
                  <label className='sr-only' htmlFor='email'>Your email</label>
                  <input
                    className='input'
                    id='email'
                    type='email'
                    name='email'
                    placeholder='Your email'
                    autoComplete='email'
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div>
                <label className='sr-only' htmlFor='message'>Your message</label>
                <textarea
                  className='textarea'
                  id='message'
                  name='message'
                  placeholder='Your message'
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button className='btn btn-lg bg-accent-solid hover:bg-accent-solid-hover' type='submit' disabled={state.submitting}>
                {state.submitting ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
