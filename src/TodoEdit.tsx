import React from 'react';
import './App.css';
import { BooleanInput, DateTimeInput, Edit, SimpleForm, TextInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

// @ts-ignore
export const TodoEdit = (props) => (
  <Edit title={props.name} {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <RichTextInput source="description" />
      <BooleanInput
        source="done"
      />
      <DateTimeInput source="created_at" />
    </SimpleForm>
  </Edit>
)
