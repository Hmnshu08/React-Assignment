import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLogged: false
        }
    }


    render() {
        // first approach
        // if (this.state.isLogged) {
        //     return (
        //         <div>
        //             <div>
        //                 <br></br>
        //                 Welcome User Hmnshu
        //             </div>
        //         </div>
        //     )
        // } else {

        //     return (
        //         <div>
        //             <br></br>
        //             <div>Welcome Guest</div>
        //         </div>
        //     )

        // }

        //second approach
        // let message
        // if(this.state.isLogged){
        //     message = <div>Welcome Hmnshu</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        //third approach

        return this.state.isLogged?(
            <div>Welcome Hmnshu</div>
        ) : (
            <div>Welcome Guest</div>
        )


    }
}

export default UserGreeting
