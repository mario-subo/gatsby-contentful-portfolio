import React from "react"
import Button from "./Button"

const Contact = () => {
  return (
    <div className="container py-12 lg:py-16">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
        Get in touch
      </h2>
      <form className="mt-8 max-w-md" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <input
          aria-label="Your name"
          name="name"
          className="appearance-none w-full sm:max-w-xs px-5 py-3 mb-3 border border-gray-400 leading-snug rounded-md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
          placeholder="Your name"
          required
          type="text"
        />
        <input
          aria-label="Email address"
          name="email"
          className="appearance-none w-full sm:max-w-xs px-5 py-3 mb-3 border border-gray-400 leading-snug rounded-md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
          placeholder="Your email address"
          required
          type="email"
        />
        <textarea
          aria-label="Message content"
          name="content"
          cols={3}
          rows={6}
          className="appearance-none w-full sm:max-w-md px-5 py-3 mb-3 border border-gray-400 leading-snug rounded-md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
          placeholder="Let me know about your project :)"
          required
          type="text"          
        />
        <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <Button type="submit">Send Message</Button>
        </div>
      </form>
    </div>
  )
}

export default Contact
