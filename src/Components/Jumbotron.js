import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';

const Jumbotron = () => (
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
            <h1>WebDev</h1>
            <p>
                Lorem ipsum dolor sit amet
                consectetur adipiscing elit molestie
                mauris, euismod erat accumsan
                sagittis magna nam suspendisse ante,
                maximus efficitur neque lacus facilisi
                libero malesuada vestibulum aliquet,
                etiam quisque vitae hendrerit pulvinar
                integer mi. Magnis pretium parturient
                eget senectus iaculis aliquam, vestibulum
                facilisis commodo eleifend odio diam
                elementum, pulvinar nec ac mauris nascetur.
            </p>
        </Container>
    </Jumbo>
)

export default Jumbotron;
