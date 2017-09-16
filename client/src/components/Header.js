import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
          return [
            <li key="4"><a href="/surveys">Surveys</a></li>,
            <li key="1" style={{ margin: '0 10px' }}><Payments /></li>,
            <li key="2"><a>Credits: {this.props.user.credits}</a></li>,
            <li key="3"><a href="/api/logout">Logout</a></li>
          ];
    }
  }

  render() {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link
                    to={this.props.user ? '/surveys' : '/'}
                    className="brand-logo"
                >
                    <i style={{ margin: '2px 5px'}} className="material-icons">email</i>
                    myMaily
                </Link>
                <a data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    {this.renderContent()}
                </ul>
                <ul className="side-nav" id="mobile-demo">
                    {this.renderContent()}
                </ul>
            </div>
        </nav>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.auth };
}

export default connect(mapStateToProps)(Header);
