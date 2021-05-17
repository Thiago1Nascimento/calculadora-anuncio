import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const AdvertisementForm = (props) => {
  const [ad, setAd] = useState(() => {
    return {
      adName: props.ad ? props.ad.adName : '',
      client: props.ad ? props.ad.client : '',
      pricePerDay: props.ad ? props.ad.price : '',
      initialDate: props.ad ? props.ad.initialDate : '',
      finalDate: props.ad ? props.ad.finalDate : '',
      views: props.ad ? props.ad.views : '',
      share: props.ad ? props.ad.share : '',
      click: props.ad ? props.ad.click : '',
      viewsShare: props.ad ? props.ad.viewsShare : '',
      totalPrice: props.ad ? props.ad.totalPrice : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { 
    adName,
    client, 
    pricePerDay, 
    initialDate, 
    finalDate
  } = ad;

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const numberOfNightsBetweenDates = (initialDate, finalDate) => {
      const start = new Date(initialDate);
      const end = new Date(finalDate);
      let dayCount = 0;
    
      while (end > start) {
        dayCount++
        start.setDate(start.getDate() + 1)
      }
    
      return dayCount
    }

    function calculateViews(pricePerDay, days) {
      const views = pricePerDay * 30 * days;
      return views;
    }

    function calculateInvestimentoTotal(pricePerDay, days) {
      const totalPrice = pricePerDay * days;
      return totalPrice;
    }

    function calculateClick(views) {
      let count = 0;
      let click = 0;
      while (views > count) {
        count++;
        if(count % 100 === 0){
          click = click + 12;
        }
      }
      return click;
    }

    function calculateShare(click) {
      let share = 0;
      let countClick = 0;
      while (click > countClick){
        countClick++;
        if(countClick % 20 === 0){
          share = share + 3;
        }
      }
      return share;
    }

    const days = numberOfNightsBetweenDates(initialDate, finalDate);
    const totalViews = calculateViews(pricePerDay, days);
    const click = calculateClick(totalViews);
    const share = calculateShare(click);
    const totalPrice = calculateInvestimentoTotal(pricePerDay, days);

    const values = [
      adName,
      client,
      pricePerDay,
      initialDate,
      finalDate,
      totalPrice
      ];
    let errorMsg = '';
    values.push(days, totalViews, click, share, totalPrice);
    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const ad = {
        id: uuidv4(),
        adName,
        client,
        pricePerDay,
        initialDate,
        finalDate,
        totalViews,
        share,
        totalPrice,
        click
      };
      props.handleOnSubmit(ad);
    } else {
      errorMsg = 'Por favor, preencha todos os campos!';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setAd((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setAd((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Nome do Anúncio</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="adName"
            value={adName}
            placeholder="Insira o nome do anúncio"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="client">
          <Form.Label>Cliente</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="client"
            value={client}
            placeholder="Insira o nome do cliente"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="initialDate">
          <Form.Label>Data de Início</Form.Label>
          <Form.Control
            className="input-control"
            type="date"
            name="initialDate"
            value={initialDate}
            placeholder="Insira a Data de Início"
            format="DD/MM/YYYY"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="finalDate">
          <Form.Label>Data de Término</Form.Label>
          <Form.Control
            className="input-control"
            type="date"
            name="finalDate"
            value={finalDate}
            placeholder="Insira a Data de Término"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="pricePerDay">
          <Form.Label>Investimento por Dia</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="pricePerDay"
            value={pricePerDay}
            placeholder="Insira o valor do anúncio"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Adicionar
        </Button>
      </Form>
    </div>
  );
};

export default AdvertisementForm;