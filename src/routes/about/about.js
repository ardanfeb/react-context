import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RootContext } from '../../App';

function About() {
    const { state } = useContext(RootContext);
    return (
        <div>
            <p>About</p>
            <p>Nama = { state.name }</p>
            <Link to="/about/edit">Edit Nama</Link>
        </div>
    )
}

export default About;