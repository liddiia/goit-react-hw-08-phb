import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { authInstance } from "../auth/operations";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const apiGetContacts = createAsyncThunk(
    "phonbook/getContacts",
    async (_, { rejectWithValue })=>{
        try{
        const respons = await authInstance.get("/contacts");;
        return respons.data;
        }
        catch(error){
            return rejectWithValue(error.message)
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, { rejectWithValue }) => {
      try {
        const response = await authInstance.post("/contacts", newContact);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId,{ rejectWithValue }) => {
      try {
        const response = await authInstance.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

 