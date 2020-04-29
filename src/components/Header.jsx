import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.scss';
import bellIcon from '../assets/bell.svg';
import menuIcon from '../assets/menu.svg';

const noop = () => {};

class Header extends Component {
  menus = [
    {
      to: '#browse',
      label: 'Browse',
    },
    {
      to: '#faq',
      label: 'How it works',
    },
    {
      to: '#help',
      label: 'Help',
    },
    {
      to: '#about',
      label: 'About',
    },
  ];

  getNav = () => {
    return (
      <div className="header__nav">
        {this.menus.map(({ to, label }) => (
          <Link
            key={label + to}
            className="header__nav-item"
            to={to}
          >
            {label}
          </Link>
        ))
        }
      </div>
    )
  };

  getProfile = () => {
    const {
      user: {
        first_name,
        last_name,
        avatar,
      },
      onMenuClick = noop,
    } = this.props;
    const fullName = `${first_name} ${last_name}`;

    return (
      <div className="header__profile">
        <div className="header__profile-info">
          <div className="header__profile-info__avatar">
            <img
              src={avatar}
              alt=""
            />
          </div>
          <div className="header__profile-info__username">{fullName}</div>
        </div>
        <div className="header__profile-controls">
          <div className="header__profile-controls__notifications">
            <img
              src={bellIcon}
              alt=""
            />
            <span>{Math.floor(Math.random() * 9)}</span>
          </div>
          <div
            className="header__profile-controls__menu"
            onClick={onMenuClick}
          >
            <img
              src={menuIcon}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };

  render = () => {
    return (
      <div className="header">
        {this.getNav()}
        {this.getProfile()}
      </div>
    )
  }
}

export default Header;
