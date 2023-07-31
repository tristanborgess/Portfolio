import styled from "styled-components";
import React, { useState, useEffect } from 'react';

const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
    <FormContainer onSubmit={handleSubmit}>
      <FormInput type="text" placeholder="Your Name" required/>
      <FormInput type="email" placeholder="Your Email" required/>
      <FormInput type="text" placeholder="Message" required/>
      <FormButton type="submit">Submit</FormButton>
    </FormContainer>
    );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 200px;
`;

const FormInput = styled.input`
  margin-bottom: 10px;
`;

const FormButton = styled.button`
  background-color: #c0c0c0;
  cursor: pointer;
`;

export default Form;