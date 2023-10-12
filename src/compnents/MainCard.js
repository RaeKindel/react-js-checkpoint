import React from 'react'
import {Card, Button} from 'react-bootstrap' 

const MainCard = ({src="holder.js/100px180", title}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">click me</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MainCard