import React, {useState, useEffect, useRef} from 'react'


function TestHooks2(){
    const [value, setValue] = useState('initial')
    const renderCount = useRef(1)
    const inputRef = useRef()
    const prevValue = useRef('')

    useEffect(() => {
        renderCount.current++
        console.log(inputRef.current.value);
    })

    useEffect(() => {
        prevValue.current = value
    }, [value])

    const focus = () => {
        inputRef.current.focus()
    }
    return (
        <>
        <h4>Renders: {renderCount.current}</h4>
        <h5>Previous state: {prevValue.current}</h5>
        <input ref={inputRef} onChange={(e) => setValue(e.target.value)} value={value}/>
        <button className="btn btn-success" onClick={focus}>focus</button>
        </>
    )
}
export default TestHooks2