import React from 'react';
import './App.css';
// @ts-ignore
import hasuraDataProvider from 'ra-data-hasura';
// @ts-ignore
import { Admin, Resource, ListGuesser } from 'react-admin';
import { TodoEdit } from './TodoEdit';

const App = () => (
  <Admin
    dataProvider={hasuraDataProvider('https://guided-gelding-12.hasura.app')}
    // authProvider={authProvider}
    // dashboard={Dashboard}
  >
    <Resource name="groups" list={ListGuesser} />
    <Resource name="users" list={ListGuesser} />
    <Resource
      name="todos"
      list={ListGuesser}
      edit={TodoEdit}
    />
  </Admin>
)

export default App;
