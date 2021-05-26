import React from 'react'

const Hello = () => {
    // with jsx
    // return (
    //     <div className='somenew'>
    //         <h1>Hello JSX</h1>
    //     </div>
    // );

    return React.createElement(
        'div',
        {id:'hello', className: 'some'},
        React.createElement('h1',null,'Hello JSX')
    )
} 

export default Hello