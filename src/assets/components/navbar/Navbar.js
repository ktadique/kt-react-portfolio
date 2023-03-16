import React from "react";
import { Link } from "react-router-dom";

const pages = ["About", "Work", "Contact"];

function NavBar() {
  return (
    <div>
      <nav class="navbar">
        <div class="container-fluid">
          <div class="logo h1">
            <Link to="home">
              KT<span class="fst-italic">!</span>
            </Link>
          </div>
          <div class="nav-list">
            <ul class="nav justify-content-center">
              {pages.map((page) => (
                <li class="nav-item nav-link">
                  <Link to={`/${page}`} class="h4">
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
