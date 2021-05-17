import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Advertisement = ({
  id,
  adName,
  client,
  pricePerDay,
  totalPrice,
  initialDate,
  finalDate,
  totalViews,
  share,
  click,
  handleRemoveAd
}) => {
    
  const history = useHistory();
  var newLine = "\r\n";
  var msg = 'Valor total investido: ' + totalPrice;
  msg += newLine;
  msg += 'Máxima de Visualizações: ' + totalViews;
  msg += newLine;
  msg += 'Máxima de Cliques: ' + click;
  msg += newLine;
  msg += 'Máxima de Compartilhamentos ' + share;
  msg += newLine;

  return (
    <Card style={{ width: '25rem' }} className="ad">
      <Card.Body>
        <Card.Title className="ad-title">Anúncio: {adName}</Card.Title>
        <div className="ad-details">
          <div>Cliente: {client}</div>
          <div>Data de Ínicio: {initialDate}</div>
          <div>Data de Término: {finalDate}</div>
          <div>Investimento por dia: {pricePerDay} </div>
        </div>
        <Button variant="warning" onClick={() => alert(msg)}>
          Relatório
        </Button>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Editar
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveAd(id)}>
          Deletar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Advertisement;