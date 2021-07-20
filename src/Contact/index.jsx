import React from 'react';
import { enquireScreen } from 'enquire-js';
import Nav3 from '../Home/Nav3';
import { Nav30DataSource} from '../Home/data.source';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const Contact = () => {
  return (
    <>
      <Nav3
        id="Nav3_0"
        key="Nav3_0"
        dataSource={Nav30DataSource}
        // isMobile={this.state.isMobile}
      />
      <div>Contact</div>
    </>
  );
};

export default Contact;
