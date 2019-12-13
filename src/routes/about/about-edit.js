import React, { useContext } from 'react';
import { RootContext } from '../../App';

function AboutEdit() {
    const { state, dispatch } = useContext(RootContext);

    const handleInput = (e) => dispatch({ type: "EDIT_NAME", value: e.target.value });

    return (
        <div>
            <p>About Edit</p>
            <p>Edit Nama {state.name}</p>
            <input type="text" value={state.name} onChange={handleInput}/>
        </div>
    )
}

export default AboutEdit;