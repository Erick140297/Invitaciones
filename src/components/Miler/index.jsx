import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const Mailer = ({ invitados }) => {
  const [input, setInput] = useState({
    invitados: invitados,
    asistencia: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    emailjs
      .send("service_oiwvwqg", "template_1v49rs4", input, "JrcKJu4PPbDhJlJa6")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setInput({
      invitados: invitados,
      asistencia: "",
      mensaje: "",
    });
  };

  return (
    <div>
      <Container>
        <h2>Confirmación de asistencia.</h2>
        <span>¡GRACIAS POR COMPARTIR ESTE DÍA </span>
        <span>TAN ESPECIAL CON NOSOTROS!</span>
        <span>Por favor, confirma antes del 15 de abril del 2023</span>
        <span>¡Muchas gracias!</span>
        <Confirmación>
          <span>Confirmación de: {invitados}</span>
          <div>
            <span>Confirmo que: </span>
            <div>
              <input
                type="radio"
                name="asistencia"
                value="Iré"
                onChange={(e) => handleChange(e)}
              />
              <label>Iré</label>
            </div>
            <div>
              <input
                type="radio"
                name="asistencia"
                value="No iré"
                onChange={(e) => handleChange(e)}
              />
              <label>No iré</label>
            </div>
          </div>
        </Confirmación>
        <Mensaje>
          <span>Mensaje</span>
          <textarea
            name="mensaje"
            cols="10"
            rows="10"
            value={input.mensaje}
            onChange={(e) => handleChange(e)}
            placeholder="Puedes agregar un comentario o dejarnos un bonito mensaje."
          ></textarea>
        </Mensaje>
        <Boton onClick={(e) => handleClick(e)}>Confirmar</Boton>
      </Container>
    </div>
  );
};

export default Mailer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #d1ad40;
`;

const Confirmación = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  div {
    margin-left: 20px;
  }
`;
const Mensaje = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`;

const Boton = styled.button`
  background: #e99090;
  margin: 40px;
  border:2px solid black;
  width:200px;
  padding:10px;
  border-radius:15px;
  font-size:20px;
`