import React from 'react';
import jorne from "../assets/icon/jorne.jpg";
import arne from "../assets/icon/arne.jpg";
import helder from "../assets/icon/helder.jpg";
import jens from "../assets/icon/jens.jpg";
import dries from "../assets/icon/dries.jpg";



export default function HeaderTeamPreview() {
  return (
      <div className='HeaderTeamPreview Header'>
        <div className='text'>
          <p>The dev boys</p>
        </div> 
        <div className='profiles'>
            <div className='jorne'></div>
            <div className='arne'></div>
            <div className='helder'></div>
            <div className='jens'></div>
            <div className='dries'></div>
            <div className='plusButton'><h2>+</h2></div>
        </div> 
      </div>
  );
}
