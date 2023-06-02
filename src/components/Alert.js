import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.type} fade show`} role="alert">
            <strong>{props.alert.type.toUpperCase()}</strong>: {props.alert.msg}
        </div>
    )
}
