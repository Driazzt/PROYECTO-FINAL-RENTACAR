import React from 'react'

const ErrorComponent = (props) => {

    const { children } = props

    return (
        <div style={{ color: 'green' }}>
            {children}
        </div>
    )
}

export default ErrorComponent