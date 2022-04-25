import React from 'react';
import Card from 'react-bootstrap/Card';
import fruitImage from '../images/fruits.png'


export default function HeroPic () {
  return (
    <div style={{backgroundColor: '#d2edca', height: '250px', textAlign: 'center'}}>
        <Card style={{display: 'flex', justifyContent: 'flex-start'}} className="bg-dark text-white">
            <Card.ImgOverlay>
                <Card.Text style={{width: "400px"}}>
                <h1>Order groceries for pickup or delivery today!</h1>
                <p style={{fontSize: "17px", width: "500px"}}>Whatever you want from local stores, brought right to your door.</p>
                </Card.Text>
            </Card.ImgOverlay>
            <div style={{width: '400px'}}></div>
            <Card.Img style={{width: '250px'}} src={fruitImage} alt="" />
        </Card>
    </div>
  )
}

