import React from 'react';
import { Card, Row, Col } from 'react-materialize';
import './style.css';


function WelcomeHeader() {
  return (
    <Row>
      <Col
        m={6}
        s={12}
      >
        <Card
         className='headerCard darken-1'
         actions={[
            <h1>Grub What Is Best For You!!!</h1>
          ]}
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle></CardTitle>}
          revealIcon={<Icon>more_vert</Icon>}

        >    
        </Card>
      </Col>
    </Row>
  );
}
export default WelcomeHeader;
