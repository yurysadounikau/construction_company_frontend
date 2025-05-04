import React from 'react';
import { Accordion, Button, Col, Row } from 'react-bootstrap';

const ApplicationAccordionForForeman = ({ application, onAccept }) => {
  const handleAccept = () => {
    try {
      onAccept()
    } catch (error) {
      console.error('Ошибка при принятии заявки:', error);
    }
  };

  return (
    <Accordion.Item eventKey={application.id}>
      <Accordion.Header>{application.name}</Accordion.Header>
      <Accordion.Body>
        <Row>
          <Col>
            <h4>Адрес</h4>
            <p>
              <strong>Город:</strong> {application.address.city}
              <br />
              <strong>Улица:</strong> {application.address.street}
              <br />
              <strong>Дом:</strong> {application.address.numberHouse}
            </p>
            <h4>Описание</h4>
            <p>{application.description}</p>
          </Col>
        </Row>
        <Button variant="success" onClick={handleAccept}>
          Принять заявку
        </Button>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default ApplicationAccordionForForeman;