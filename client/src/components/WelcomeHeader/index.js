import React from 'react';
import { Card, Row, Col, Icon, CardTitle } from 'react-materialize';


function WelcomeHeader() {
  return (
    <Row>
      <Col
        m={6}
        s={12}
      >
        <Card
         actions={[
         "Grub What Is Beast For You!!!"
          ]}
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image={"public/images/Produce1Bright.jpg"}>Welcome!!</CardTitle>}
          revealIcon={<Icon>more_vert</Icon>}
        >
        </Card>
      </Col>
    </Row>
  );
}
export default WelcomeHeader;
