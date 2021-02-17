import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import content from '../content';


export default function Navigation() {
  return (
    <div style={{
      background:"#161616"
    }}>
      <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white font-dosis">
      <h1 className="text-3xl font-bold">{content.nav.logo}<span>💻</span></h1>
        <div>
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to={link.to} smooth={true}>
                <span className="mr-4 cursor-pointer" key={index}>
                  {link.text}
                </span>
              </ScrollLink>
            )
          })}
        </div>
      </div>
    </div>
  )
}
