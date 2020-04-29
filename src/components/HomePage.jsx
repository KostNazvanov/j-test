import React, { Component } from 'react';
import '../styles/home.scss';
import Header from './Header';
import Body from './Body';
import Profiles from './Profiles';
import { fetchData, fetchUser } from "../sideeffects";

const noop = () => {
};

class HomePage extends Component {
  state = {
    data: [],
    page: 1,
    loading: false,
    user: false,
    showProfiles: true,
  };

  /**
   * Fetching data from API
   * Actually this should be implemented as saga with redux.
   * But that's too much implementation for small component,
   * So I made simple fetch
   *
   * @param {boolean} nextPage - Load next page and concat data. Default: false
   * @param {function} onFinish - Callback to call on finish
   * @returns {void}
   */
  fetchData = async (nextPage = true, onFinish = noop) => {
    const { page, data, loading } = this.state;

    if (loading) return;
    this.setState({ loading: true });

    const newPage = nextPage ? page + 1 : page;
    const newData = await fetchData(newPage, nextPage && data);
    if (!newData) return;

    this.setState({
      data: newData,
      loading: false,
      page: newPage,
    }, onFinish)
  };

  /**
   * Fetch user from API
   * Just like data fetching, this
   * should be implemented as saga/thunk
   * @returns {Promise<void>}
   */
  fetchUser = async () => {
    this.setState({ user: await fetchUser() });
  };

  /**
   * Handle scroll event and fetch new data
   * if bottom of the page is reached
   */
  handleScroll = () => {
    const target = document.body;
    const offset = 50;
    if ((target.scrollHeight - target.scrollTop) >= (target.clientHeight - offset)) {
      this.fetchData(true);
    }
  };

  componentDidMount = () => {
    document.addEventListener('scroll', this.handleScroll);
    this.fetchData(false, () => this.handleScroll(true));
    this.fetchUser();
  };

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  toggleShowProfiles = () =>
    this.setState({ showProfiles: !this.state.showProfiles });

  render = () => {
    const { data, user, showProfiles } = this.state;

    return (
      <div className="greeting">
        <Header
          user={user}
          onMenuClick={this.toggleShowProfiles}
        />
        <div className={`wrapper ${showProfiles ? '' : 'full-width'}`}>
          <Body/>
          <Profiles
            show={showProfiles}
            data={data}
            maxItems={15}
            sort="desc"
            sortField="first_name"
          />
        </div>
      </div>
    )
  };
}

export default HomePage;
