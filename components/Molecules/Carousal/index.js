import React from 'react';
import Product from '../Product';
const img = require('/public/images/nextjs-logo.png')
const Carousal = () => {
    let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

    if (typeof window !== "undefined") {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
}
    return (

<>

<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>

<div style={{display:'flex',flexDirection:"row"}}>

<Product

productImage="https://images.specsavers.com/glasses-images/32263435-front-940x529.jpg"
productName="Puma"
productDescription="LL SUN RX 02"
productPrice="$594"
marginRight="1rem"
marginLeft="1rem"

/> <Product

productImage="https://images.specsavers.com/glasses-images/32263435-front-940x529.jpg"
productName="Nike"
productDescription="LL SUN RX 02"
productPrice="$594"
marginRight="1rem"
marginLeft="1rem"

/> <Product

productImage="https://images.specsavers.com/glasses-images/32263435-front-940x529.jpg"
productName="Addidas"
productDescription="LL SUN RX 02"
productPrice="$594"
marginRight="1rem"
marginLeft="1rem"

/>
<Product

productImage="https://images.specsavers.com/glasses-images/32263435-front-940x529.jpg"
productName="Addidas"
productDescription="LL SUN RX 02"
productPrice="$594"
marginRight="1rem"
marginLeft="1rem"

/>
</div>


</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <div style={{display:'flex',flexDirection:"row"}}>
  <Product

productImage="https://images.specsavers.com/glasses-images/32263435-front-940x529.jpg"
productName="Addidas"
productDescription="LL SUN RX 02"
productPrice="$594"
marginRight="1rem"
marginLeft="1rem"

/>
<Product 

productImage="https://images.specsavers.com/glasses-images/32263435-front-940x529.jpg"
productName="Allen solly"
productDescription="LL SUN RX 02"
productPrice="$594"
marginRight="1rem"
marginLeft="1rem"

/> <Product

productImage="https://images.specsavers.com/glasses-images/32263435-front-940x529.jpg"
productName="Fila"
productDescription="LL SUN RX 02"
productPrice="$594"
marginRight="1rem"
marginLeft="1rem"

/> <Product

productImage="https://images.specsavers.com/glasses-images/32263435-front-940x529.jpg"
productName="Puma"
productDescription="LL SUN RX 02"
productPrice="$594"
marginRight="1rem"
marginLeft="1rem"

/>
</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <div style={{display:'flex',flexDirection:"row", justifyContent:"space-between" }}>
  <Product

productImage="https://images.specsavers.com/glasses-images/32263435-front-940x529.jpg"
productName="Addidas"
productDescription="LL SUN RX 02"
productPrice="$594"
marginRight="1rem"
marginLeft="1rem"

/>
<Product

productImage="https://images.specsavers.com/glasses-images/32263435-front-940x529.jpg"
productName="England"
productDescription=" SUN RX 02"
productPrice="$594"
marginRight="1rem"
marginLeft="1rem"


/> <Product

productImage="https://images.specsavers.com/glasses-images/32263435-front-940x529.jpg"
productName="Van Heusen"
productDescription="LL SUN RX 02"
productPrice="$594"
marginRight="1rem"
marginLeft="1rem"

/> <Product

productImage="https://images.specsavers.com/glasses-images/32263435-front-940x529.jpg"
productName="Phillipe"
productDescription="LL SUN RX 02"
productPrice="$594"
marginRight="1rem"
marginLeft="1rem"

/>
</div>
</div>

<a class="prev" onClick={()=>plusSlides(-1)} >❮</a>
<a class="next" onClick={()=>plusSlides(1)}>❯</a>

</div>
<br/>

<div style={{textAlign:"center"}}>
  <span class="dot" onClick={()=>currentSlide(1)}></span> 
  <span class="dot" onClick={()=>currentSlide(2)}></span> 
  <span class="dot" onClick={()=>currentSlide(3)}></span> 
</div>
</>

     );
}
 
export default Carousal;