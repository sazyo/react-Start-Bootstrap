import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Full name</Form.Label>
                <Form.Control required type="text" />
                <Form.Control.Feedback type="invalid">
                    A name is required.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" />
                <Form.Control.Feedback type="invalid">
                    A valid email is required.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control required type="tel" />
                <Form.Control.Feedback type="invalid">
                    A phone number is required.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control required as="textarea" rows={5} />
                <Form.Control.Feedback type="invalid">
                    A message is required.
                </Form.Control.Feedback>
            </Form.Group>

            <Button
                variant="info"
                type="submit"
                className="text-white px-4 py-2"
                style={{ borderRadius: '0.5rem' }}
            >
                Send
            </Button>
        </Form>
    );
};

export default ContactForm;
