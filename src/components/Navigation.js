import React from 'react';
import content from '../content';


export default function Navigation() {
  return (
    <div style={{
      background:"#091c20"
    }}>
      <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white font-dosis">
      <h1 className="text-3xl font-bold">{content.nav.logo}<span>💻</span></h1>
        <div>
          {content.nav.links.map((link, index) => {
            return <span key={index} className="text-xl mt-4" >{link.text}</span>
          })}
        </div>
      </div>
    </div>
  )
}
