import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import content from '../content';
import useWindowPosition from '../hook/useWindowPosition';

export default function Contact() {
  const animated = useWindowPosition('header', 0.6, 4);
  return (
    <div
      className=" min-h-screen  flex justify-center items-center  "
      id="mycontact"
    >
      <div
        style={{
          minHeight: '50vh',
          background: '#161616',
        }}
        className="w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center"
      >
        <LazyLoadImage
          effect="blur"
          src={content.contact.img}
          placeholderSrc={content.contact.imgPlaceholder}
          alt="profile"
          width="300px"
          className="mt-10 transtion duration-2000 ease-in-out mx-auto"
        />
        <div className="font-dosis w-4/5 md:w-2/5 mt-5 transtion duration-2000">
          <h1
            className="transform transition duration-3000 text-white text-5xl font-bold"
          >
            {content.contact.title}
          </h1>
          <p
            className="transform transition duration-3000 text-white text-2xl"
          >
            {content.contact.desc}
          </p>
          <div
            className="transform transition duration-3000 flex mt-10 justify-evenly items-center"
          >
            <a href="https://github.com/RhMacley" target="_blank"><img src="/assets/github.png" alt="github" width="60px"/></a>
            <a href="https://www.linkedin.com/in/rhanonmacley/" target="_blank"><img src="/assets/linkedin.png" alt="linkedin" width="45px"/></a>
            <a href="mailto:rh.macley@gmail.com" target="_blank"><img src="/assets/gmail.png" alt="gmail" width="60px"/></a>
            <a href="/assets/cvrhanon.pdf" target="_blank"><img src="/assets/cv.png" alt="curriculo" width="70px"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}