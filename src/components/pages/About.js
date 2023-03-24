import React from "react";

function About() {
  return (
    <div>
      <section class="about-section my-4 text-center" id="about">
        <header class="section-header py-5 px-5 text-lg-left text-sm-center">
          <h1>
            <span class="underline">
              About Me<span class="emph">!</span>
            </span>
          </h1>
        </header>
        <div class="aboutme-desc">
          <h2>My name is Kirsten Tadique,</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            ullamcorper massa, eget ultricies lacus. Donec dignissim vitae nibh
            at maximus. Maecenas hendrerit, turpis sed scelerisque rutrum, orci
            tellus scelerisque ex, nec porttitor tellus erat at arcu. Curabitur
            blandit auctor nunc, sed facilisis nisl ullamcorper eu.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
