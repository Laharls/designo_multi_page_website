'use client'

import Image from 'next/image'
import { Jost } from 'next/font/google'
import React, { useState } from 'react';

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500']
})

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError('Fields Name, Email Address & Your message are required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please use a valid email address.');
      return;
    }

    setSubmitted(true);
    setError('');
  };

  return (
    <main className="bg-white min-h-screen">
      <div className="bg-orange flex flex-col justify-center items-center mb-[120px] md:w-[689px] md:mx-auto md:rounded-2xl desktop:w-[1111px] desktop:flex-row">
        <div className="w-[327px] mb-12 md:w-[573px]">
          <h1 className={`${jost.className} text-white text-center text-[32px] font-medium leading-9 mb-6 mt-[72px] md:text-left desktop:w-[540px] desktop:text-5xl`}>Contact Us</h1>

          <p className={`${jost.className} text-white w-[327px] text-center text-[15px] font-normal not-italic leading-[25px] md:text-left md:w-[573px] md:text-[16px] desktop:w-[445px] desktop:leading-[26px]`}>
            Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow.
            If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
          </p>
        </div>

        <div>
          <form onSubmit={handleSubmit} action="/send-data-here" method="post" autoComplete="off" className=" w-[327px] md:w-[573px] desktop:w-[380px] desktop: mt-[55px]">
            <label for="name"></label>
            <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className="bg-orange text-white placeholder-white placeholder-opacity-75 border-b-[1px] w-full pl-2 pb-2 focus:border-white focus:outline-none md:mb-6" placeholder="Name" />
            <label for="email"></label>
            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} className="bg-orange text-white placeholder-white placeholder-opacity-75 border-b-[1px] w-full pl-2 pb-2 focus:border-white focus:outline-none md:mb-6" placeholder="Email Address" />
            <label for="phone"></label>
            <input type="tel" id="phone" name="phone" className="bg-orange text-white placeholder-white placeholder-opacity-75 border-b-[1px] w-full pl-2 pb-2 focus:border-white focus:outline-none md:mb-6" placeholder="Phone" />
            <label for="message"></label>
            <input type="text" id="message" name="message" value={message} onChange={handleMessageChange} className="bg-orange text-white placeholder-white placeholder-opacity-75 border-b-[1px] w-full pl-2 pb-16 focus:border-white focus:outline-none mb-10" placeholder="Your message" />
            <div className='flex justify-center items-center md:justify-end'>
              <button type="submit" className="block bg-white px-12 py-4 rounded-lg mb-[72px]">Submit</button>
            </div>

            {error && (
              <p className='text-center mb-4'>{error}</p>
            )}

            {submitted && (
              <p className='text-center mb-4'>Form submitted successfully!</p>
            )}
          </form>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center desktop:flex-row desktop:w-[1110px] desktop:justify-around desktop:mb-40 desktop:mx-auto">
        {/* Thing with the different places */}
        <div className="relative">
          <Image
            src="/images/shared/desktop/illustration-canada.svg"
            width={182}
            height={143}
            alt="Mythic monument of Canada"
          />
          <div className="absolute top-0">
            <Image
              src="/images/shared/desktop/bg-pattern-small-circle.svg"
              width={202}
              height={202}
              alt='Light circle design'
            />
          </div>

          <div className="flex flex-col justify-center items-center mb-12">
            <p className={`${jost.className} text-center font-medium leading-[26px] tracking-wider not-italic text-xl mb-8 mt-8`}>CANADA</p>
            <button className={`py-4 px-6 bg-orange rounded-lg text-white ${jost.className}`}>SEE LOCATION</button>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/images/shared/desktop/illustration-australia.svg"
            width={182}
            height={143}
            alt="Mythic monument of Australia"
          />
          <div className="absolute top-0">
            <Image
              src="/images/shared/desktop/bg-pattern-small-circle.svg"
              width={202}
              height={202}
              alt='Light circle design'
            />
          </div>

          <div className="flex flex-col justify-center items-center mb-12">
            <p className={`${jost.className} text-center font-medium leading-[26px] tracking-wider not-italic text-xl mb-8 mt-8`}>AUSTRALIA</p>
            <button className={`py-4 px-6 bg-orange rounded-lg text-white ${jost.className}`}>SEE LOCATION</button>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/images/shared/desktop/illustration-united-kingdom.svg"
            width={182}
            height={143}
            alt="United kingdom mythic bridge"
          />
          <div className="absolute top-0">
            <Image
              src="/images/shared/desktop/bg-pattern-small-circle.svg"
              width={202}
              height={202}
              alt='Light circle design'
            />
          </div>

          <div className="flex flex-col justify-center items-center mb-12">
            <p className={`${jost.className} text-center font-medium leading-[26px] tracking-wider not-italic text-xl mb-8 mt-8`}>UNITED KINGDOM</p>
            <button className={`py-4 px-6 bg-orange rounded-lg text-white ${jost.className}`}>SEE LOCATION</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;