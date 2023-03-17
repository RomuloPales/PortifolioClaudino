import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    axios({
      method: "post",
      url: "https://formsubmit.co/ajax/romulopales12@gmail.com",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log("Form submitted successfully", response);
        alert("Formulário enviado com sucesso!");
      })
      .catch((error) => {
        console.error("Error submitting form", error);
        alert("Houve um erro ao enviar o formulário.");
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Nome:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Label htmlFor="message">Mensagem:</Label>
        <TextArea
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </>
  );
}

    const Form = styled.form`
    display: flex;
    flex-direction: column;
    `;

    const Label = styled.label`
    font-family: sans-serif;
    font-weight: 400;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 18.2px;
    `;

    const Input = styled.input`
    font-size: 1rem;
    padding: 0.5rem;
    border: 2px solid #f4a460;
    margin-bottom: 3rem;
    &:focus {
        border-color: #d2691e;
        outline: none;
    }
    `;

    const TextArea = styled.textarea`
    font-size: 1rem;
    padding: 0.5rem;
    margin-bottom: 3rem;
    height: 150px;
    border: 2px solid #f4a460;
    resiz e: none;
    &:focus {
        border-color: #d2691e;
        outline: none;
    }
    `;

    const Button = styled.button`
    font-size: 1.2rem;
    background-color: #f4a460;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #d2691e;
    }
    `;
