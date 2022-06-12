import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Dumb component.
const FormLayout = ({
  title,
  primaryButtonTitle,
  secondaryButtonTitle,
  onPrimaryAction,
  onSecondaryAction,
  children,
  preventDefault,
  validationSchema,
}) => {
  const { formState, register, handleSubmit } = useForm({
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  console.log(formState.errors);

  function handlePrimaryAction(result) {
    console.log(result, formState);
    if(typeof onPrimaryAction === "function") {
      onPrimaryAction(result);
    }
  }

  return (
    <Card className="mt-4">
      <Card.Header className="bg-dark text-white">
        <h5 className="m-0">{title}</h5>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit(handlePrimaryAction)}>
          {children(register, formState.errors)}
          <Row className="d-flex justify-content-between">
            <Button type="submit" variant="primary">
              {primaryButtonTitle}
            </Button>
            {secondaryButtonTitle && (
              <Button type="button" onClick={onSecondaryAction}>
                {secondaryButtonTitle}
              </Button>
            )}
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

FormLayout.propTypes = {
  title: PropTypes.string.isRequired,
  primaryButtonTitle: PropTypes.string.isRequired,
  secondaryButtonTitle: PropTypes.string,
  preventDefault: PropTypes.bool,
  onPrimaryAction: PropTypes.func,
  onSecondaryAction: PropTypes.func,
  children: PropTypes.func.isRequired,
  validationSchema: PropTypes.object,
};

FormLayout.defaultProps = {
  preventDefault: true,
  onPrimaryAction: () => {},
  onSecondaryAction: () => {},
};

export default FormLayout;
