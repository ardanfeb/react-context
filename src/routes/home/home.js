import React, { useContext } from 'react';
import { RootContext } from '../../App';

function Home () {
    const { state } = useContext(RootContext);
    return (
        <div>
            <p>Home</p>
            <p>Selamat datang {state.name}</p>
        </div>
    )
}

export default Home;