import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">List of Trees</Link>
                    </li>
                    <li>
                        <Link to="/home">Home Page</Link>
                    </li>
                    <li>
                        <Link to="/create">Add a Tree</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
