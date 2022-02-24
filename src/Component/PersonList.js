import React from 'react'

function PersonList() {
    const names = ['Harshit', 'Hrishika']
    return (
        <div>
            {
                names.map(name => <h2>I am {name}</h2>)
            }
        </div>
    )
}

export default PersonList
