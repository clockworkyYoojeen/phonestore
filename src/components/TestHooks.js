import React, {useEffect, useState} from 'react'


function TestHooks(){
    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    const moveHandler = (e) => {
        setPosition({x: e.clientX, y: e.clientY})
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then((response) => response.json())
        .then((json) => setData(json));
    }, [type])

    useEffect(() => {
        window.addEventListener('mousemove', moveHandler)

        return () => {
            window.removeEventListener('mousemove', moveHandler)
        }
    },[])
    return (
        <>
            <div className="container">
            <h3>Resources: {type}</h3>
            <button className="btn btn-success" onClick={() => setType('users')}>Users</button>
            <button className="btn btn-primary" onClick={() => setType('todos')}>Todos</button>
            <button className="btn btn-warning" onClick={() => setType('posts')}>Posts</button>
            <div className="panel panel-success">
                {data.map((item) => {
                    return <li key={item.id}>{item.title ? item.title : item.name}</li>
                })}
            </div>
            </div>
            {/* <div style={{width: '200px',
            height: '45px',
            backgroundColor: 'lightblue',
            position: 'absolute',
            left: position.x,
            top: position.y}}></div> */}
        </>
    )
}

export default TestHooks