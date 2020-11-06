import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { fetchTrees } from './fetches.js';

export default class Fetch extends Component {

    state = {
        trees: []
    }
    componentDidMount = async () => {
        const trees = await fetchTrees();

        this.setState({ trees });
    }

    render() {
        return (
            <div className="tree-list">
                { this.state.trees.map(tree =>
                    <Link to={`/detail/${tree.id}`}>
                        <div className="tree" key={tree.name}>
                            <p>{tree.name}</p>
                            <p>Hardness Factor: {tree.hardness_factor}</p>
                            <p>Is Hardwood: {tree.hardwood.toString()}</p>
                            <p>Type: {tree.type_id}</p>
                        </div>
                    </Link>
                )

                })
            </div>)
    }
}