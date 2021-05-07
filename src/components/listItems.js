import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import PopupMenu from './PopupMenu.js';

export const mainListItems = (
  <div>
    <ListItem button>
      <NavLink to='/locations'>
        <ListItemText primary="Офисы" />
      </NavLink>
    </ListItem>
    <ListItem button>
      <NavLink to='/hardware'>
        <ListItemText primary="Оборудование" />
      </NavLink>
    </ListItem>
    <ListItem button>
      <PopupMenu
        menuLabel='Phones'
        menuItems={[
          'Телефоны инфо',
          'Телефоны по ФИО',
          'Телефоны с переадресацией',
        ]}/>
    </ListItem>
    <ListItem button>
      <PopupMenu
        menuLabel='IP Planning'
        menuItems={[
          'IPAM',
        ]}/>
    </ListItem>
    <ListItem button>
      <NavLink to='/reports' >
        <ListItemText primary="Reports" />
      </NavLink>
    </ListItem>
    <ListItem button>
      <PopupMenu
        menuLabel='Phones Reports'
        menuItems={[
          'По моделям',
          'По кластерам',
          'По неиспользуемым',
          'По Agent Licences'
        ]}/>
    </ListItem>
    <ListItem button>
      <PopupMenu
        menuLabel='Tools'
        menuItems={[
          'Поиск незарегистрированных телефонов',
          'CUCM Маршрутизация',
          'Testing CORS Requests'
        ]}/>
    </ListItem>
  </div>
);

