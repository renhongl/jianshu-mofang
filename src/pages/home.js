


import React from 'react';
import { view as Auth } from '../services/auth';
import { view as Header } from '../services/header';


const HomePage = () => (
    <section>
        <Auth />
        <Header />
    </section>
)

export {
    HomePage,
}