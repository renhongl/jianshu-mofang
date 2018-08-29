


import React from 'react';
import { view as Header } from '../services/header';
import {view as Hello } from "../commons/helloworld";
// import {view as List} from "../commons/list";
import { view as List } from '../services/article';
import {view as Reconmend} from "../services/reconmend";

export default () => (
    <section>
        <Header />
        <Hello />
        <Reconmend />
       <List />

    </section>
)

