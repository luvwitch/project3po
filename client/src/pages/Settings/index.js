import React from 'react';
import { Button, Card, Header, Title, Text, Footer, Body, Dropdown, DropdownButton } from 'react-bootstrap';
import "./style.css"

function Settings() {
    return (
        <div>
<Card className="text-center">
  <Card.Header>Customize</Card.Header>
  <Card.Body>
  <DropdownButton id="dropdown-basic-button" title="Color Scheme" style={{olor: "red"}}>
    <br></br>
  <Dropdown.Item href="#/action-1">Dark Mode</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Theme 1</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Theme 2</Dropdown.Item>
  </DropdownButton>
    
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
            
        </div>
    )
}

export default Settings
