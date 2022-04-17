import React, {useEffect, useState} from 'react';

const Roll = () => {
    const [roll, setRoll] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/roll')
            .then(response => response.json())
            .then(data => setRoll(data))
    })
    return (
        <div style={{marginTop: '8rem'}}>
            {roll.map(elem => (
                <div>
                    {elem.name}
                </div>
            ))}
        </div>
    );
};

export default Roll;