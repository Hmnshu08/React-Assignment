import React, { Component } from 'react'

export class Emp extends Component {
    render() {
        return (
            <div className ="container">
                <br></br>
                <table class="table">
                    <thead>
                        <tr>
                            
                            <th scope="col">Name</th>
                            <th scope="col">Job</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>Charlie</td>
                            <td>Janitor</td>
                            
                        </tr>
                        <tr>
                            
                            <td>Mac</td>
                            <td>Bouncer</td>
                            
                        </tr>
                        <tr>
                            
                            <td>Dee</td>
                            <td>Aspiring actress</td>
                            
                        </tr>
                        <tr>
                            
                            <td>Dennis</td>
                            <td>Bartender</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Emp
