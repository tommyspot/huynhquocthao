import React from 'react';
import Banner2 from './components/Banner2';
import Content9 from './components/Content9';
import { Banner20DataSource, Content90DataSource} from './components/data.source';

export default class Home extends React.Component {
  render() {
    const { isMobile } = this.props;
    const children = [
      <Banner2
        id="Banner2_0"
        key="Banner2_0"
        dataSource={Banner20DataSource}
        isMobile={isMobile}
      />,
      <Content9
        id="Content9_0"
        key="Content9_0"
        dataSource={Content90DataSource}
        isMobile={isMobile}
      />,
    ];
    return children;
  }
}
