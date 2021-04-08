import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    CardText
} from 'reactstrap'

class Wedding extends Component {
    render() {
        return (
            <section id="wedding" className="container-wedding">
                <div className="content-wedding">
                    <div className="content-name">Sulistiani Putri</div>
                    <div className="content-parents">Putri ke-5 dari Bapak Guntur dan Ibu Soimah</div>
                    <div className="content-and">&amp;</div>
                    <div className="content-name">Bayu Suryajana</div>
                    <div className="content-parents">Putra ke-2 dari Bapak Sumenep dan Ibu Listi</div>
                </div>
                <Row>
                    <Col sm={12} md={6}>
                        <Card>
                            <CardHeader className="bg-light">
                                <CardTitle>
                                    <h3>Akad</h3>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <CardText>
                                    <div>Masjid Ashoheh</div>
                                    <div>Senin, 01 April 2021</div>
                                    <div>Pukul: 09.00 WIB</div>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card>
                            <CardHeader className="bg-light">
                                <CardTitle>
                                    <h3>Resepsi</h3>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <CardText>
                                    <div>Villa Bogor Indah</div>
                                    <div>Senin, 01 April 20221</div>
                                    <div>Pukul: 17.00 WIB</div>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default Wedding;