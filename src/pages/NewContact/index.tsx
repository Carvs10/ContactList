import { FormEvent, useState } from "react";
import { Field, MainContainer, Result, SaveButton } from "../../styles";
import { Form } from "./styles";
import { useDispatch } from "react-redux";
import { add } from "../../store/reducers/contact";
import { useNavigate } from "react-router-dom";

const NewContact = () => {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setPhone] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addNewContact = (event: FormEvent) => {
    event.preventDefault();
    dispatch(
      add({
        fullName,
        email,
        telephone,
      })
    );
    navigate("/");
  };

  return (
    <MainContainer>
      <Result>Novo contato</Result>
      <Form onSubmit={addNewContact}>
        <label htmlFor="fullName">
          Nome completo:
          <Field
            name="fullName"
            value={fullName}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </label>
        <label htmlFor="email">
          E-mail :
          <Field
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
        </label>
        <label htmlFor="telephone">
          Telefone:
          <Field
            name="telephone"
            value={telephone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
          />
        </label>

        <SaveButton type="submit"> Cadastrar</SaveButton>
      </Form>
    </MainContainer>
  );
};

export default NewContact;
