import React from 'react'
import magikarp from '../assets/shinykarp.png'
import pikachuWallpaper from '../assets/pika.jpeg'
import {Card, Col, Container, Image, Row} from "react-bootstrap";


export default function About() {
    return (
        <>
            <Card  className={"bg-dark text-white border-0"} as={"section"}>
                <Card.Img src={pikachuWallpaper} alt={"jumbotron Pikachu"} />
                <Card.ImgOverlay className={"text-left"}>
                    <Card.Title>
                        <h2 className={"display-4 text-left"}>About Us</h2>
                    </Card.Title>
                    <Card.Text>
                        <p className={"lead"}>
                            Lavender Town Weepinbell Sharpedo Sneasel Natu Giratina Ampharos. Ice Glameow Electrike Dragon Roggenrola Golurk Haxorus. Ut enim ad minim veniam you're not wearing shorts Earth Badge Lampent Dewott Spearow Baltoy.
                        </p>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>

            <Container fluid as={"section"} className={"my-4"}>
                <Row>
                    <Col md={3}>
                        <Image src={magikarp} alt={"Image of a Shiny Magikarp"} className={"mx-auto"}/>
                    </Col>
                    <Col md={9} className={"mx-auto"}>
                        <p>Duis aute irure dolor in reprehenderit in voluptate Cloyster Venipede Vanilluxe Jigglypuff Sandshrew Skorupi. Body Slam Armaldo Bulbasaur Grotle Krokorok Persian Ash Ketchum. Ash Bibarel Floatzel Drifloon Charizard Houndour Meloetta. Quis nostrud exercitation ullamco laboris nisi Fighting Shieldon Porygon-Z Zekrom to protect the world from devastation Escavalier. Leech Seed Klinklang Quagsire Vespiquen Snivy Dark Kanto.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}