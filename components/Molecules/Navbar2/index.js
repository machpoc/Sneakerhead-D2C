import React from 'react';


const Navbar2 = () => {
    return ( <>
    
    
    <body>
    <div>
      <div class="gridContainer">
        <div class="box1">
          <div class="designDiv">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" class="svg">
              <defs>
                <linearGradient id="gradient2">
                  <stop offset="10%" stop-color="#5ac156" />
                  <stop offset="95%" stop-color="#9ee29a" />
                </linearGradient>
              </defs>

              <path
                fill="url(#gradient2)"
                d="M-0.91,-44.83 C315.12,-12.26 571.89,13.38 481.03,128.84 L434.75,172.26 L-0.00,149.99 Z"
              ></path>
            </svg>
            <img src="images/image1.png" class="image1" />
          </div>
        </div>

        <div class="TextBoxContainer">
          <div class="textContainer">
            <div class="textTitle">Titanium collection</div>
            <div class="textDescription">
              A perfect blend of comfort and contemporary style.
            </div>
            <button class="button">Discover</button>
          </div>
        </div>

        <div class="TextBoxContainer">
          <div class="textContainer">
            <div class="textTitle">Getting the best protection</div>
            <div class="textDescription">
              you need the best to protect your eyes in sunlight
            </div>
            <button class="button">Discover</button>
          </div>
        </div>

        <div class="box4">
          <div class="designDiv">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" class="svg">
              <defs>
                <linearGradient id="gradient1">
                  <stop offset="10%" stop-color="#8aa117" />
                  <stop offset="95%" stop-color="#e6e797" />
                </linearGradient>
              </defs>
              <path
                fill="url(#gradient1)"
                d="M-38.72,-6.35 C-46.62,344.94 462.40,-15.22 320.75,294.61 L500.00,149.99 L500.00,-0.00 Z"
              ></path>
            </svg>
            <img src="images/image2.png" class="image2" />
          </div>
        </div>

        <div class="box5">
          <div class="designDiv">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" class="svg">
              <defs>
                <linearGradient id="gradient">
                  <stop offset="10%" stop-color="#c8dfd1" />
                  <stop offset="95%" stop-color="#b9d7cb" />
                </linearGradient>
              </defs>
              <path
                fill="url(#gradient)"
                d="M-83.31,327.18 C130.58,124.89 -303.96,-30.03 506.42,-59.63 L500.00,149.99 L-0.00,149.99 Z"
              ></path>
            </svg>
            <img src="images/image3.png" class="image3" />
          </div>
        </div>

        <div class="TextBoxContainer">
          <div class="textContainer">
            <div class="textTitle">Blue light glasses</div>
            <div class="textDescription">
              More popular than ever - but how effective?
            </div>
            <button class="button">Discover</button>
          </div>
        </div>
      </div>
    </div>
  </body>
    </> );
}
 
export default Navbar2;