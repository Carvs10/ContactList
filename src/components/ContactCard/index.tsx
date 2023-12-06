import { useDispatch } from "react-redux";
import Contact from "../../models/Contact";
import { Button, Field, SaveButton } from "../../styles";
import { Actions, CancelButton, Card, Title } from "./styles";
import { useEffect, useState } from "react";
import { edit, remove } from "../../store/reducers/contact";

type Props = Contact;

const ContactCard = ({
  fullName,
  email: originalEmail,
  telephone: originalPhone,
  id,
}: Props) => {
  const dispatch = useDispatch();
  const [editing, setIsEditing] = useState(false);
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  useEffect(() => {
    if (originalEmail.length > 0) setEmail(originalEmail);
    if (originalPhone.length > 0) setTelephone(originalPhone);
  }, [originalEmail, originalPhone]);

  function cancel() {
    setIsEditing(false);
    setEmail(originalEmail);
    setTelephone(originalPhone);
  }

  return (
    <Card>
      <Title>
        {editing && <em>Editando:</em>}
        {fullName}
      </Title>
      <Field
        value={email}
        disabled={!editing}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Field
        value={telephone}
        disabled={!editing}
        onChange={(e) => setTelephone(e.target.value)}
      />
      <Actions>
        {editing ? (
          <>
            <SaveButton
              onClick={() => {
                dispatch(edit({ fullName, email, telephone, id }));
                setIsEditing(false);
              }}
            >
              Salvar
            </SaveButton>
            <CancelButton onClick={() => cancel()}>Cancelar</CancelButton>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <CancelButton onClick={() => dispatch(remove(id))}>
              Remover
            </CancelButton>
          </>
        )}
      </Actions>
    </Card>
  );
};

export default ContactCard;
