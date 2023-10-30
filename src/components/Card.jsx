import React from 'react'

export const Card = (props) => {
    return (
        <>
            <div className={`card ${props.class}`}>
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </>
    )
}
