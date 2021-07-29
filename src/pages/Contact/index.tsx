import React from 'react';
import { Row, Col } from 'antd';
import Section from './components/Section';
import avatar from '~/assets/images/avatar.png';
import addressIcon from './images/address.png';
import phoneIcon from './images/phone.png';
import mailIcon from './images/mail.png';
import styles from './styles.module.css';

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <Row gutter={16}>
        <Col md={12} sm={24}>
          <Section
            title="Address"
            content="76 Street 12, An Duong Vuong Resident, Ward 16, District 8, HCMC"
            icon={addressIcon}
            className={styles.section}
          />
          <Section
            title="Phone"
            content={<a href="tel:0772590955">0772590955</a>}
            icon={phoneIcon}
            className={styles.section}
          />
          <Section
            title="Email"
            content={<a href="mailto:huynhquocthao@gmail.com">huynhquocthao@gmail.com</a>}
            icon={mailIcon}
            className={styles.section}
          />
        </Col>
        <Col md={12} sm={24}>
          <img src={avatar} alt="avatar" className={styles.avatar} />
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
