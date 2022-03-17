import React from "react";
import './VCard.css'

function VCard({children, className}) {
    const classes = 'v-card ' + className
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default VCard