import React, { useEffect } from 'react';
import './App.css';
// @ts-ignore
import { Admin, ListGuesser, Resource } from 'react-admin';
import buildHasuraProvider from 'ra-data-hasura-graphql';
import { TodoList } from './TodoList';
import { TodoEdit } from './TodoEdit';

const App = () => {
  const [hasuraProvider, setHasuraProvider]: any = React.useState()

  useEffect(() => {
    if (!hasuraProvider) {
      buildHasuraProvider({
        clientOptions: {uri: 'https://guided-gelding-12.hasura.app/v1/graphql'}
      }).then((newProvider: any) => setHasuraProvider(() => newProvider))
    }
  })


  return (
  <>{
    !hasuraProvider
      ? '...loading'
      : <Admin
        dataProvider={hasuraProvider}
      >
        <Resource name="groups" list={ListGuesser} />
        <Resource name="users" list={ListGuesser} />
        <Resource
          name="todos"
          list={TodoList}
          edit={TodoEdit}
        />
      </Admin>
  }</>
)
}

export default App;
