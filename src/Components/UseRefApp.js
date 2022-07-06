import React, { useState, useEffect, useRef} from 'react';

function UseRefApp() {
    const [name, setName] = useState('');
    const renderCount = useRef(0)

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    }) 

    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name}</div>
            <div>I rendered {renderCount.current} times</div>
        </div>
    )
}

export default UseRefApp; 