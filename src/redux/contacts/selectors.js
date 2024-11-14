import {createSelector } from "@reduxjs/toolkit";
import { filtersContacts } from "../filters/slice";

export const selectIsLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectContacts = (state) => state.contacts.items;

export const selectFilterContacts = createSelector(
  [selectContacts, filtersContacts],
  (contacts, filter) => {
    if (!Array.isArray(contacts)) {
      return [];
    }
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
