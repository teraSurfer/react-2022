import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form, Row } from 'react-bootstrap';

// Dumb component.
const FormLayout = ({
  title,
  primaryButtonTitle,
  secondaryButtonTitle,
  onPrimaryAction,
  onSecondaryAction,
  children,
  preventDefault,
}) => {
    const [validated, setValidated] = useState(false);
    function handleSubmit(evt) {
        if(preventDefault) {
            evt.preventDefault();
        }
        onPrimaryAction();
        setValidated(true);
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div>{title}</div>
            {children}
            <Row className="d-flex justify-content-between">
                <Button type="submit">{primaryButtonTitle}</Button>
                {secondaryButtonTitle && <Button type="button" onClick={onSecondaryAction}>{secondaryButtonTitle}</Button>}
            </Row>
        </Form>
    )
};

FormLayout.propTypes = {
  title: PropTypes.string.isRequired,
  primaryButtonTitle: PropTypes.string.isRequired,
  secondaryButtonTitle: PropTypes.string,
  preventDefault: PropTypes.bool,
  onPrimaryAction: PropTypes.func,
  onSecondaryAction: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

FormLayout.defaultProps = {
  preventDefault: true,
  onPrimaryAction: () => {},
  onSecondaryAction: () => {},
};

export default FormLayout;
