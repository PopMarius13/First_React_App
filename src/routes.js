import React from 'react';

import Layout from './components/Layout';
import NameListContainer from './components/NameList/NameListContainer';
import PageNotFound from './components/page_not_found/PageNotFound';
import Main from './components/main/Main';
import NameProfileContainer from './components/NameList/NameProfileContainer';
import ProductListContainer from './components/products/ProductListContainer';
import ProductProfileContainer from './components/products/ProductProfileContainer';

import { Route, IndexRoute, Redirect} from 'react-router';

// import { getNames } from './actions/names';
// import { getProducts } from './actions/products';
// import NAMES from './test_data/mock-data';
// import PRODUCTS from './test_data/mock-products';
// import store from './store';

// const grabNames = () => {
//     store.dispatch(getNames(NAMES));
// }

// const grabProducts = () => {
//     store.dispatch(getProducts(PRODUCTS))
// }

export const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={Main}/>
        <Route path="products">
            <IndexRoute component={ProductListContainer}/>
            <Route path=":id" component={ProductProfileContainer}/>
        </Route>
        <Route path="names">
            <IndexRoute  component={NameListContainer}/>
            <Route path=":id" component={NameProfileContainer}/>
        </Route>
        <Redirect from="users(/:id)" to="names(/:id)"/>
        <Route path="*" component={PageNotFound}/>
    </Route>
);
