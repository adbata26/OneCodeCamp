import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button } from 'react-bootstrap';
export default function Pricing()
{
    return <div>
            <div className="row p-3 justify-content-center">
        <div
          className="text-center my-3"
          style={{
            fontFamily: "Fantasy,Copperplate",
            fontSize: "70px",
            color: "#fa8005",
          }}
        >
          OUR GOAL IS TO SPICE UP YOUR ROMANCE
        </div>
        <div className="col-md-3">
        <Card className="text-center">
        <Card.Header as="h5">STARTER</Card.Header>
        <Card.Body>
            <Card.Title>P200/Mo.</Card.Title>
            <Card.Text>
                Best for beginners looking for contacts
                
            </Card.Text>
        </Card.Body>
        </Card>
          <button className="mt-2 btn btn-warning btn-lg rounded rounded-0 w-100">
            
             Subscribe
            </button>
        </div>
        <div className="col-md-3">
        <Card className="text-center">
        <Card.Header as="h5">BACHELOR</Card.Header>
        <Card.Body>
            <Card.Title>P400/Mo.</Card.Title>
            <Card.Text>
                Let us match you with same location
                
            </Card.Text>
        </Card.Body>
        </Card>

          <button className="mt-2 btn btn-warning btn-lg rounded rounded-0 w-100">
        
          Subscribe
            </button>
        </div>
        <div className="col-md-3">
        <Card className="text-center">
        <Card.Header as="h5">HUSTLER</Card.Header>
        <Card.Body>
            <Card.Title>P600/Mo.</Card.Title>
            <Card.Text>
                You will access the VIP room where you could call instantly
                
            </Card.Text>
        </Card.Body>
        </Card>

          <button className="mt-2 btn btn-warning btn-lg rounded rounded-0 w-100">
        
          Subscribe
            </button>
        </div>
      </div>

    </div>
}