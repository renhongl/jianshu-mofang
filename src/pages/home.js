


import React, { Fragment } from 'react';
import { view as Header } from '../services/header';
import {view as Hello } from "../commons/helloworld";
// import {view as List} from "../commons/list";
import { view as List } from '../services/article';
import {view as Reconmend} from "../services/reconmend";


const styles = {
	page: {
		width: '100%',
		height: '100%',
		overflow: 'hidden'
	},
	body: {
		width: '100%',
		height: 'calc(100% - 60px)',
		overflow: 'scroll'
	}
}

export default () => (
    <Fragment>
    <Header />
	<section style={styles.body}>
	    <Hello />
	    <Reconmend />
	    <List />
	</section>
        
    </Fragment>
)

