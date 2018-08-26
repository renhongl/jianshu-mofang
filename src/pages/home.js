


import React from 'react';
import { view as Header } from '../services/header';
import {view as Hello } from "../commons/helloworld";
// import {view as List} from "../commons/list";
import { view as List } from '../services/article';

export default () => (
    <section>
        <Header />
        <Hello />
       <List />
    </section>
)

