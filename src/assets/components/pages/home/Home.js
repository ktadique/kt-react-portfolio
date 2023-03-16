import React from "react";

function Home() {
  return (
    <section class="masthead" id="home">
      <div class="container h-100">
        <div class="row d-flex mx-auto h-100 align-items-center justify-content-center">
          <div class="col-lg-6 col-sm-12">
            <div class="header-content">
              <p class="lead">Hi! My name is,</p>
              <h1>
                Kirsten<span class="emph">!</span>
              </h1>
              <p class="lead">I'm an creative, aspiring web developer.</p>
              <a
                class="btn btn-outline-light btn-xl text-uppercase"
                href="#contact"
                role="button"
              >
                Say Hi!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
