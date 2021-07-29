import React from 'react';
import { Row, Col } from 'antd';
import styles from './styles.module.css';

const Section = (props: any) => {
  const { title, content, icon, className } = props;
  return (
    <Row gutter={16} className={className}>
      <Col>
        <div className={styles.image}>
          <img src={icon} alt="title" />
        </div>
      </Col>
      <Col>
        <h3 className={styles.title}>{title}</h3>
        <div>{content}</div>
      </Col>
    </Row>
  );
};

export default Section;
