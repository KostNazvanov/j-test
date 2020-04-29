import React, { Component } from 'react';
import '../styles/profiles.scss';

class Profiles extends Component {
  get data() {
    const {
      data,
      sort = '',
      sortField = ''
    } = this.props;

    switch (sort) {
      case 'asc':
        return [...data].sort((a, b) =>
          a[sortField] < b[sortField] ? -1 : 1
        );

      case 'desc':
        return [...data].sort((a, b) =>
          b[sortField] < a[sortField] ? -1 : 1
        );

      default:
        return [...data];
    }
  }

  getProfileItem = ({ avatar, first_name, last_name, email, id }, index) => (
    <div
      className="p-item"
      key={`${id}_${index}`}
    >
      <div className="p-item__avatar">
        <img
          src={avatar}
          alt=""
        />
      </div>
      <div className="p-item__info">
        <span>{`${first_name} ${last_name}`}</span>
        <div className="p-item__email">
          <div className="p-item__email-label">
            User email address
          </div>
          <div className="p-item__email-body">
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </div>
    </div>
  );

  render = () => {
    const { maxItems = Number.MAX_SAFE_INTEGER, show } = this.props;

    return (
      <div className={`profiles-wrapper ${show ? '' : 'hidden'}`}>
        <div className="profiles">
          <div className="profiles__title">
            Profile list
          </div>
          <div className="profiles__description">Laudem et via procedat oratio quaerimus igitur, quid et accurate
            disserendum et dolorem?. At magnum periculum adiit in oculis quidem exercitus quid ex ea voluptate et.
          </div>
        </div>
        <div className="profiles__items-wrapper">
          {this.data.splice(0, maxItems).map(this.getProfileItem)}
        </div>
      </div>
    )
  }
}

export default Profiles;
