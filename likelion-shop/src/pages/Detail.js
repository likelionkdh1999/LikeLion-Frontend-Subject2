import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Detail() {
    const { item_id } = useParams();
    const [price, setPrice] = useState(17000);
    useEffect(() => {
        setTimeout(() => {
            setPrice(20000);
        }, 3000);
    })

    let data = [
        {
            title: 'floral',
            imgUrl: '/floral.webp',
            setimg: '/floral.jpg',
            subtitle: 'Macintosh Plus',
            name:'FLORAL SHOPPE',
            description: 'FLORAL SHOPPE is the fifteenth studio album by American electronic musician Vektroid, released under her one-time alias Macintosh Plus on December 9th, 2011, via BEER ON THE RUG. The album is widely recognized as one of the first vaporwave albums. The albums second track has become synonymous with the vaporwave genre and is considered one of Vektroids signature songs. The track features the Diana Ross song Its Your Move slowed, chopped up and distored. In August of 2017 it was announced that New York-based record label Olde English Spelling Bee would press the album onto vinyl. It follows the cassette version of the tracklist and is pressed onto "bubblegum" pink vinyl.',
         },
        {
            title: 'saintpepsi',
            imgUrl: '/saintpepsi.webp',
            setimg: '/saintpepsi.jpg',
            subtitle: 'SAINT PEPSI',
            name:'Hit Vibes',
            description: 'Hit Vibes is an album by SAINT PEPSI. The album is one of the most recognizable in the genre and is often credited as a classic regarding the "future funk" vaporwave style. It was published to KEATS//COLLECTIVE, and received a cassette release through Sunup Recordings. The album was pressed on vinyl via promo pressings through Carpark Records, with later pressings being sold during 100% ElectroniCON. In 2019, SAINT PEPSI uploaded the vinyl mastering to his Bandcamp page.'
        },
        {
            title: 'blank',
            imgUrl: '/blankbanshee.webp',
            setimg: '/blankbanshee.jpg',
            subtitle: 'Blank Banshee 0',
            name:'Blank Banshee',
            description: 'Blank Banshee 0 is the debut studio album by Canadian artist and producer Patrick Driscoll known professionally as Blank Banshee. The album was released via the streaming service Bandcamp on September 1, 2012. It is considered to be a pioneering album within the Vaporwave genre. Blank Banshee 0 consists of largely 1980s and 1990s sourced samples layered over original beats, instrumentation and vocals. Several aspects of the album including song titles allude to or sample computer technology.'
        }
    ]
    const album = data.find(o => o.title === item_id);
    return (
        <div >

            <Container>
                <Row>{discount(price)}</Row>
                <Row className="m-5">
                    <Col>
                    <picture>
                        <source srcSet={album.imgUrl} type="image/webp"/>  
                        <img alt="detail" src={album.setimg} />
                    </picture>
                    </Col>
                    <Col>
                        <div style={{height: '50px'}}></div>
                        <h3>{album.name}</h3>
                        <h5>{album.subtitle}</h5>
                        <br></br>
                        <h5>{price.toLocaleString()} KRW</h5>
                        <p>{album.description}</p>
                        <Button variant="primary">Order</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

function discount(price) {
    if (price === 17000) {
        return (
            <Alert key='warning' variant='warning'>
                30% discount if you purchace in 3 seconds
            </Alert>
        )
    }
    else return;
}

export default Detail;