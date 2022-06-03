import React from "react";
import {
  FormGroup,
  FormLabel,
  FormText,
  FormControl,
  Container,
} from "react-bootstrap";
import FormLayout from "../../components/form-layout/formLayout";
import { useUserAuthForm } from "../../hooks/useUserAuthForm";
import { isValid } from "../../util/validator";

const Login = (props) => {
  const { formState, actions } = useUserAuthForm();

  function handleFormSubmit() {
    console.log(formState);
  }


  return (
    <Container>
      <FormLayout
        title="Login"
        primaryButtonTitle="Login"
        onPrimaryAction={handleFormSubmit}
      >
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormControl
            isValid={
              formState.email.initialValue !== formState.email.value &&
              isValid(formState.email.errors)
            }
            onChange={(e) => actions.updateUserEmail(e.target.value)}
          ></FormControl>
          <FormText>
            <ul>
              {(formState.email.initialValue !== formState.email.value) && formState.email.errors.map((error) => (
                <li>{`${error.validation} - ${error.error}`}</li>
              ))}
            </ul>
          </FormText>
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormControl
            onChange={(e) => actions.updatePassword(e.target.value)}
          ></FormControl>
        </FormGroup>
      </FormLayout>
    </Container>
  );
};

Login.propTypes = {};

export default Login;
