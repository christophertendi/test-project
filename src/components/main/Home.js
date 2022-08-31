import React from 'react'
import {Container} from 'react-bootstrap'
import Navbar from './Navbarz'
import menu from '../../images/menu.jpg'
import menu2 from '../../images/menu2.jpg'
import menu3 from '../../images/menu3.jpg'
import menu4 from '../../images/menu4.jpg'
import menu5 from '../../images/menu5.jpg'
import menu6 from '../../images/menu6.jpg'


export default function Home() {
  return(
    <>
      <Navbar />
      <Container fluid>
        <div className="text-center fs-4 mt-3 mb-3">
          Promo: Up to 30% off all beverages till 30th of July
        </div>
        <div className="text-center fs-4 mt-3 mb-3">
          New Menu
        </div>
        <a class="btn btn-outline-dark btn-floating m-1 text-center" href="#!" role="button">
          Order
        </a>
        {/* images are from https://www.pexels.com/ free stock photo website */}
        <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <figure class = "figure">
            <img
              src= {menu}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="menu"
            />
            <figcaption class="figure-caption">Expresso</figcaption>
          </figure>

          <figure class = "figure">
            <img
            src= {menu2}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="menu"
            />
            <figcaption class="figure-caption">Americano</figcaption>
          </figure>
        </div>
      
        <div class="col-lg-4 mb-4 mb-lg-0">
        <figure class = "figure"> 
          <img
            src= {menu3}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="menu"
          />
          <figcaption class="figure-caption">Croissant</figcaption>
          
          </figure>
        
          <figure class = "figure"> 
            <img
              src= {menu4}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="menu"
            />
          <figcaption class="figure-caption">Bagel</figcaption>
          
          </figure>
        </div>
        <div class="col-lg-4 mb-4 mb-lg-0">
        <figure class = "figure"> 
          <img
            src= {menu5}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="menu"
          />
          <figcaption class="figure-caption">Lemon Tea</figcaption>
          
          </figure>

          <figure class = "figure"> 
            <img
              src= {menu6}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="menu"
            />
            <figcaption class="figure-caption">Chocolate Cake</figcaption>
          </figure>
        </div>
    </div>
    </Container>
    <footer class="bg-secondary text-center text-white">
      <div class="container p-4 pb-0">
        <section class="mb-4">
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            Facebook
          </a>
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            Instagram
          </a>
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            Twitter
          </a>
        </section>
      </div>
      <div class="text-center p-3">
         Location: Kelapa Gading 
      </div>
      <div class="text-center p-3">
         Open Everyday: 10a.m. - 9p.m.
      </div>
      <form>
        <div class="text-start p-3">
          <label>Feedback</label>
          <input type="email" class="form-control" placeholder="Give your feedback"></input>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </footer>
    </>
  )
}

