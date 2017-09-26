import React, {Component} from 'react';
import {Desktop} from 'constants/Breakpoints';

import Footer from 'components/Footer';

require('./index.scss');

export default class Home extends Component {

  render() {
    return(
      <div className="app-Home">
        <Footer/>
      </div>
    );
  }
}
