import React, { Component } from 'react';
import '../styles/body.scss';
import formImage from '../assets/icon-form.svg';
import patternImage from '../assets/pattern.svg';
import patternMobileImage from '../assets/mobile-pattern.svg';
import circleImage from '../assets/circle.svg';

class Body extends Component {
  isMobile = () => window.innerWidth <= 1024;

  render = () => {
    return (
      <div className="body">
        <div className="body__title">
          Welcome! Thanks for joining us.
        </div>
        <div className="body__image">
          <img
            className="body__image-circle"
            src={circleImage}
            alt=""
          />
          <img
            className="body__image-form"
            src={formImage}
            alt=""
          />
          <img
            className="body__image-pattern"
            src={
              this.isMobile()
                ? patternMobileImage
                : patternImage
            }
            alt=""
          />
        </div>
        <a
          className="body__set-up"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            Set up your account
          </button>
        </a>
        <div className="body__description">
          <span>Description</span>
          <div>
            Hanc ego cum soluta nobis est laborum et accusamus et via procedat oratio. Sed ut ad modum, quaeso,
            interpretaris? sicine eos censes aut rerum hic tenetur.
          </div>
        </div>
      </div>
    )
  }
}

export default Body;
