import React from 'react'
import {Card} from "react-bootstrap";


export const PokeCard = (props) => {
    const { data } = props

    return (
        <Card style={{ width: '18rem' }} className="border-0">
            <Card.Img variant="top" src={data.pic} />
            <Card.Body>
                <Card.Text className="bg-light rounded p-2">
                    {data.cardText}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}