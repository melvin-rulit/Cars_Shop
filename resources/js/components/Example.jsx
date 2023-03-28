import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from "react-bootstrap/Carousel";
import {Button} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Example() {
    return (

<>
    {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
    ].map((variant) => (
        <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
        </Alert>
    ))}

    <Button variant="success">Primary</Button>{' '}

    {/*<Carousel>*/}
    {/*    <Carousel.Item>*/}
    {/*        <img className="d-block w-100" src="holder.js/300x200" alt="First slide"/>*/}
    {/*        <Carousel.Caption>*/}
    {/*            <h3>First slide label</h3>*/}
    {/*        </Carousel.Caption>*/}
    {/*    </Carousel.Item>*/}
    {/*</Carousel>*/}
</>





    );
}

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <Example/>
        </React.StrictMode>
    )
}
