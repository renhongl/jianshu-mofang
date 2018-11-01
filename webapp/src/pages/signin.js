


import React from 'react';
import { view as SignIn } from '../services/signIn';

const styles = {
	main: {
		width: '400px',
		margin: '60px auto 0',
		padding: '50px 50px 30px',
		backgroundColor: '#fff',
		borderRadius: '4px',
		boxShadow: '0 0 8px rgba(0,0,0,.1)',
		verticalAlign: 'middle',
		display: 'inline-block'
	}
}

export default () => (
    <section>
        <SignIn style={styles.main}/>
    </section>
)

