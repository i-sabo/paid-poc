import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/Layout'
import ItemList from './components/ItemList';
import Item from './components/Item';
import PageNotFound from './components/PageNotFound';

export default (
  <Route path='/' component={Layout}>

	<IndexRoute component={ItemList} />
    <Route path="item/:itemId" component={Item} />
    
    <Route path="*" component={PageNotFound} />

  </Route>
);
