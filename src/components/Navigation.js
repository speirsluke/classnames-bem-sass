import React from 'react';
import cx from 'classnames';

import '../styles/components/navigation.scss';

class Navigation extends React.Component {
  constructor(){
    super();

    this.state = {isOpen: false};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    const navListClasses = cx('navigation__list', {
      'navigation__list--open': this.state.isOpen
    });

    return (
      <nav className="navigation">
        <button className="navigation__toggle" onClick={this.handleChange}>View navigation</button>
        <ul className={navListClasses}>
          <li>
            <a className="navigation__link" href="#1">Page 1</a>
          </li>
          <li>
            <a className="navigation__link" href="#2">Page 2</a>
          </li>
          <li>
            <a className="navigation__link" href="#3">Page 3</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation
