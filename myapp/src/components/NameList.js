import React from 'react'

function NameList() {
    const names = ['Zoro','Nami','Robin']
    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2>
             */}

            {
                names.map(name => <h2>{name}</h2>)
            }
        </div>
    )
}

export default NameList