import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contact from "../../models/Contact";

type ContactState = {
  items: Contact[];
};

const initialState: ContactState = {
  items: [
    {
      id: 1,
      fullName: "John Doe",
      email: "john-doe@test.com",
      telephone: "9999-9999",
    },
    {
      id: 2,
      fullName: "John Doe",
      email: "john-doe@test.com",
      telephone: "9999-9999",
    },
    {
      id: 3,
      fullName: "John Doe",
      email: "john-doe@test.com",
      telephone: "9999-9999",
    },
  ],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Omit<Contact, "id">>) => {
      const hasContact = state.items.find(
        (contact) =>
          contact.fullName.toLocaleLowerCase() ===
          action.payload.fullName.toLocaleLowerCase()
      );

      if (hasContact) {
        alert("Esse contato ja existe e você pode editá-lo!");
      } else {
        const lastItem = state.items[state.items.length - 1];
        const newContact = {
          ...action.payload,
          id: lastItem ? lastItem.id + 1 : 1,
        };

        state.items.push(newContact);
      }
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const index = state.items.findIndex(
        (task) => task.id === action.payload.id
      );

      if (index >= 0) {
        state.items[index] = action.payload;
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { add, remove, edit } = contactSlice.actions;
export default contactSlice.reducer;
