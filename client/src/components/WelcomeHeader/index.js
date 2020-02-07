import React from 'react';
import { Card, Row, Col, Icon, CardTitle } from 'react-materialize';
import './style.css';


function WelcomeHeader() {
  return (
    <Row>
      <Col
        m={6}
        s={12}
      >
        <Card
          className='headerCard'
         actions={[
            "Grub What Is Beast For You!!!"
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
