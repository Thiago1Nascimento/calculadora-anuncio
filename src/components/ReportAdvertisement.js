import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ReportAdvertisement = ({
    ads,
    adName,
    client,
    pricePerDay,
    initialDate,
    finalDate
  }) => {

  return (

    <Card style={{ width: '25rem' }} className="ad">
      <Card.Body>
        <Card.Title className="ad-title">{adName}</Card.Title>
        <div className="ad-details">
          <div>Cliente: {client}</div>
          <div>Investimento por dia: {pricePerDay} </div>
          <div>Data de Ínicio: {new Date(initialDate).toDateString()}</div>
          <div>Data de Término: {new Date(finalDate).toDateString()}</div>
        </div>
        <Button variant="danger">
          Voltar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ReportAdvertisement;