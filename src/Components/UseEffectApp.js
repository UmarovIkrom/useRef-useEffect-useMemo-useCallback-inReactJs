import React, {useState, useEffect} from 'react';

function UseEffectApp() {

    const [items, setItems] = useState([]);
    const [resourceType, setResourceType] = useState('posts');


    console.log('render');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))

        // console.log('resource change');    
        // return () => {
        //     console.log('uses for clean up');
        // }
    }, [resourceType]);


    return (
        <div>

            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
            {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}

        </div>
    )
}

export default UseEffectApp;
