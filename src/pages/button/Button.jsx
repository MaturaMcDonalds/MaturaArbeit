import React from 'react'

export default function button({ text, action }) {
    return (
        <button onClick={action} className="button"><p>{text}</p></button>
    )
}
