import React from 'react'
import { AttentionSeeker } from 'react-awesome-reveal';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import profile from '../media/profile.png'
const Home = ({ darkMode }) => {
    return (
        <div>
            <AttentionSeeker shakeX>
                <Row>
                    <Container align="center">
                        <Col lg={14} xs={14}>
                            <br />
                        
                            <div className="img">
                            <img  src={profile} alt="shubham_image"/>
                            </div>
                        </Col>
                    </Container>
                </Row>
                <Row>
                    <Col lg={12} xs={12}>
                        <h1 className="display-3 hello" align="center"><code> I'm Shubham Paswan</code></h1>
                        <h2 className="lead" align="center">I
                            <span
                                class="txt-rotate"
                                data-period="500"
                                data-rotate='[ " am a Full-Stack Web Developer"]'>
                            </span>
                        </h2>
                    </Col>
                </Row>
            </AttentionSeeker>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Home
