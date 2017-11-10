import React from 'react';
import exhibitions from '../../data/exhibitions';
import Exhibition from './exhibition';
import { Container, Row, Col } from 'reactstrap';

const Exhibitions = () => {
  return (
    <Container>
        <Row>
        {
            exhibitions.exhibitions().map((exhibition, index) => {
                if (exhibition.active === true) {
                    return (

                        <Exhibition exhibition={exhibition} key={index} />
                    )
                }
            })
        }
        </Row>
    </Container>
  )
}

export default Exhibitions;