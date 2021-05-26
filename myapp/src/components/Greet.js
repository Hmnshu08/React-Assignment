import React from 'react'

// function Greet(){
//     return <h1> Hello Hmnshu </h1>
// }
// normal js func

//es6
// const Greet = (props) => {
const Greet = ({name,heroName}) => {
    // console.log(props.name);
    // return (
    //     <div>
    //         <h1>
    //             Hello {props.name} a.k.a {props.heroName}
    //         </h1>
    //         { props.children}
    //     </div>
    // )

    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
            {/* { props.children} */}
        </div>
    )
}

export default Greet;