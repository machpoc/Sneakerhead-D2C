import React from 'react';

import {StyledRectangleWave} from './wave.styled'

const WaveBanner = () => {
    return ( <>

    <div class="wavecontainer">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#D31424" fill-opacity="1" d="M0,224L80,229.3C160,235,320,245,480,218.7C640,192,800,128,960,90.7C1120,53,1280,43,1360,37.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
</div>
    
    </> );
}

const WaveRectangle = () => {
  return ( <>

<StyledRectangleWave>


</StyledRectangleWave>
  
  </> );
}
 
export  {WaveBanner,WaveRectangle};