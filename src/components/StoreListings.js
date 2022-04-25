import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Styled from 'styled-components';
import Aldi from '../images/aldi.png';
import Sprouts from '../images/sprouts.png';
import Kroger from '../images/kroger.png';
import FoodLand from '../images/foodland.png';
import WholeFoods from '../images/wholefoods.png';
import SafeWay from '../images/safeway.png';


export default function StoreListings() {
  return (
    <div>
        <>
        <h2 style={{textAlign: 'center'}}>Browse stores in Oahu</h2>
        <Container style={{ marginTop: "40px", textAlign: "center" }}>
            <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                <Row>
                    <Col xs=".5" >
                        <Images src={Aldi} roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row >
                    <Col xs=".5">
                        <Images src={Sprouts} roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row >
                    <Col xs=".5" >
                        <Images src={Kroger} roundedCircle />
                    </Col>
                    <Col md="6">
                        <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                        <p>Delivery</p>
                    </Col>
                </Row>
            </Row>
            <div style={{height: '75px'}}></div>
            <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                <Row>
                    <Col xs=".5" >
                        <Images src={FoodLand} roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>Food Land</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row >
                    <Col xs=".5">
                        <Images src={WholeFoods} roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>Whole Foods Market</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row >
                    <Col xs=".5" >
                        <Images src={SafeWay} roundedCircle />
                    </Col>
                    <Col md="6">
                        <h5 style={{ fontWeight: "bold" }}>Safeway</h5>
                        <p>Delivery</p>
                    </Col>
                </Row>
            </Row>

            </Container>
            </>
    </div>
  )
}

// STYLED COMPONENTS
const Images = Styled.img`
    width: 75px;
`