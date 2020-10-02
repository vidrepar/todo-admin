import React from 'react';
import './App.css';
import {
  BooleanField,
  BooleanInput,
  Datagrid,
  EditButton,
  Filter,
  List,
  TextField,
  TextInput,
  useTranslate,
} from 'react-admin';
import { Chip, makeStyles } from '@material-ui/core';

// @ts-ignore
export const TodoList = (props) => (
  <List
    {...props}
    filters={<TodoFilter />}
    filterDefaultValues={{ done: true }}
    perPage={25}
    sort={{ field: 'created_at', order: 'DESC' }}
  >
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <BooleanField source="done" />
      <EditButton />
    </Datagrid>
  </List>
)

// @ts-ignore
export const TodoFilter = (props) => (
  <Filter{...props}>
    <TextInput
      label="Search by id"
      source="id@_eq"
      alwaysOn
    />
    <TextInput
      label="Search by title or description"
      source="title@_ilike,description@_ilike"
      alwaysOn
    />
    <QuickFilter
      // @ts-ignore
      source="done"
      label="Done" defaultValue={true} />
  </Filter>
);

// @ts-ignore
const useQuickFilterStyles = makeStyles(theme => ({
  chip: {
    marginBottom: theme.spacing(1),
  },
}));
// @ts-ignore
const QuickFilter = ({ label }) => {
  const translate = useTranslate();
  const classes = useQuickFilterStyles();
  return <Chip className={classes.chip} label={translate(label)} />;
};
