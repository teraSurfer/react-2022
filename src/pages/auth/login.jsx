import React from "react";
import { FormGroup, FormLabel, FormControl, Container, Form } from "react-bootstrap";
import FormLayout from "../../components/form-layout/formLayout";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required("Required"),
  password: yup.string().required("Required").min(6)
});

const Login = (props) => {

  function handleFormSubmit(formState) {
    console.log(formState); //api call
  }

  return (
    <Container>
      <FormLayout
        title="Login"
        primaryButtonTitle="Login"
        validationSchema={schema}
        onPrimaryAction={handleFormSubmit}
      >
        {(register, errors) => (
          <>
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormControl {...register('email')}></FormControl>
              {errors.email && <Form.Text>{errors.email.message}</Form.Text>}
            </FormGroup>
            <FormGroup>
              <FormLabel>Password</FormLabel>
              <FormControl {...register('password')}></FormControl>
              {errors.password && <Form.Text>{errors.password.message}</Form.Text>}
            </FormGroup>
          </>
        )}
      </FormLayout>
    </Container>
  );
};

Login.propTypes = {};

export default Login;
