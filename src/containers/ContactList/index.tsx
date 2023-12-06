import { useSelector } from "react-redux";
import ContactCard from "../../components/ContactCard";
import { List, MainContainer, Result } from "../../styles";
import { RootReducer } from "../../store";

const ContactList = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts);

  return (
    <MainContainer>
      <Result>Lista de contatos</Result>
      <List>
        {items.map((item) => (
          <li>
            <ContactCard
              id={item.id}
              fullName={item.fullName}
              email={item.email}
              telephone={item.telephone}
            />
          </li>
        ))}
      </List>
    </MainContainer>
  );
};

export default ContactList;
