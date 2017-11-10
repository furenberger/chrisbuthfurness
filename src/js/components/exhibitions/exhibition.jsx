import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button, Col } from 'reactstrap';

const Exhibition = ({exhibition}) => {
  return (
    <Col xs="6">
      <Card>
        <CardBody>
          <CardTitle className='text-center'>{exhibition.title}</CardTitle>
          <CardLink href={exhibition.url}>{exhibition.urlTitle}</CardLink>
          <CardText>{exhibition.date}</CardText>
        </CardBody>
          {
            exhibition.text ? renderText(exhibition.text): null
          }
      </Card>
    </Col>
  )
};

function renderText(texts) {
  let textArray = [];
  for (let prop in texts) {
    // console.log(`texts.${prop} = ${texts[prop]}`);
    textArray.push(texts[prop]);
  }

  return (
    <CardBody>
      {
        textArray.map(render)
      }
    </CardBody>
  )
};

function render(record, index){
  return(
    <CardText key={index}>{record}</CardText>
  )
}

export default Exhibition;