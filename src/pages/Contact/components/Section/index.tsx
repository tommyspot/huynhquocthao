import React from 'react';
import { Row, Col } from 'antd';
import styles from './styles.module.css';

const Section = (props: any) => {
  const { title, content, icon, className } = props;
  return (
    <Row gutter={16} className={className}>
      {/* <Col span={4}>
        <div>{icon}</div>
      </Col> */}
      <Col span={24}>
        <h3 className={styles.title}>{title}</h3>
        <div>{content}</div>
      </Col>
    </Row>
  );
};

export default Section;
