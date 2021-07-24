import React from 'react'

export default function ProgressBar(props) {
    let {progressW} = props
    return (
        <div style={{width: `${progressW}px`}}
        className='progressbar'
        ></div>
    )
}
