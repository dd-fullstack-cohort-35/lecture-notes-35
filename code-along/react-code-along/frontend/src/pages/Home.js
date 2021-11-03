import React from 'react'
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import magikarp from "../assets/shinykarp.png";
import {PokeCard} from "../components/PokeCard";

export default function Home() {

    const pokeArray = [
        {pic: magikarp,
         cardText: "Swift Charizard Ground Scizor Golbat Hive Badge Simisear. Lavender Town Slowbro Linoone Cresselia Kanto Corsola Dwebble."},
        {pic: magikarp,
            cardText: "Swift Charizard Ground Scizor Golbat Hive Badge Simisear. Lavender Town Slowbro Linoone Cresselia Kanto Corsola Dwebble."},
        {pic: magikarp,
            cardText: "Swift Charizard Ground Scizor Golbat Hive Badge Simisear. Lavender Town Slowbro Linoone Cresselia Kanto Corsola Dwebble."},
        {pic: magikarp,
            cardText: "Swift Charizard Ground Scizor Golbat Hive Badge Simisear. Lavender Town Slowbro Linoone Cresselia Kanto Corsola Dwebble."}
    ]


    return (
        <>
            <Container as="section" className="bg-light text-start rounded p-5 my-5">
                    <h1>Hello World</h1>
                    <p className="lead">Venusaur Slaking ex ea commodo consequat Swanna Zebstrika Spheal Watchog. We're blasting off again Teddiursa Nidoran Dusclops Unown Raikou Rhyhorn.</p>
                    <Button>Pika Pika</Button>
            </Container>

            <Container fluid as="section" className="bg-secondary text-light pt-5">
                <Row className="g-5 mx-5">
                    <Col md={3}>
                        <Image src={magikarp} alt="image of Magikarp" className="mx-auto d-block"/>
                    </Col>
                    <Col md={9} className="mx-auto d-block">
                        <p>Red Storm Badge Celadon City the power that's inside Azurill Mienshao Marsh Badge. Viridian City Mareep Magcargo Gyarados Wormadam Dustox Tynamo. Lavender Town Weepinbell Sharpedo Sneasel Natu Giratina Ampharos. Ice Glameow Electrike Dragon Roggenrola Golurk Haxorus. Ut enim ad minim veniam you're not wearing shorts Earth Badge Lampent Dewott Spearow Baltoy.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate Cloyster Venipede Vanilluxe Jigglypuff Sandshrew Skorupi. Body Slam Armaldo Bulbasaur Grotle Krokorok Persian Ash Ketchum. </p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="py-5 g-5 justify-content-evenly">
                    {pokeArray.map(object => <PokeCard data={object} />)}
                </Row>
            </Container>

        </>

    )
}