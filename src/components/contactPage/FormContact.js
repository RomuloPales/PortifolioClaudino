import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function FormContact() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(event.target.value.length < 3 ? "Digite um nome válido" : "");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(
      !event.target.value.includes("@") || !event.target.value.includes(".com")
        ? "Digite um email válido"
        : ""
    );
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setMessageError(
      event.target.value.length < 5 ? "Digite uma mensagem válida" : ""
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nameError || emailError || messageError) {
      alert("Preencha corretamente todos os campos!");
      return;
    }

    const form = event.target;
    const formData = new FormData(form);
    axios({
      method: "post",
      url: "https://formspree.io/f/mqkolovr",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log("Form submitted successfully", response);
        alert("Formulário enviado com sucesso!");
        setName("");
        setEmail("");
        setMessage("");
        setIsSent(true);
      })
      .catch((error) => {
        console.error("Error submitting form", error);
        alert("Houve um erro ao enviar o formulário.");
      });
  };

  if (isSent) {
    return (
      <>
        <RespostSent>
          <p>Obrigado pela sua mensagem!</p>
          <p>Retornaremos seu contato em breve!</p>
        </RespostSent>
      </>
    );
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Nome:</Label>

        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <LabelError>{nameError}</LabelError>

        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <LabelError>{emailError}</LabelError>

        <Label htmlFor="message">Mensagem:</Label>
        <TextArea
          id="message"
          name="message"
          value={message}
          onChange={handleMessageChange}
        />
        <LabelError>{messageError}</LabelError>
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
  font-size: 14px;
  line-height: 18.2px;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 1rem;
  border: 2px solid #f4a460;
  border-radius: 5px;
  &:focus {
    border-color: #d2691e;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  font-size: 1rem;
  padding: 0.5rem;
  height: 150px;
  border: 2px solid #f4a460;
  resize: vertical;
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;
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

const LabelError = styled.label`
  font-size: 12px;
  color: red;
  margin-bottom: 1em;
`;

const RespostSent = styled.div`
  width: 100%;
  height: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p{
  font-size: 18px;
  color: #55a44e;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  line-height: 36px;
  
  }
  
`