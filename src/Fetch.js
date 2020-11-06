import React, { Component } from 'react'
import fetch from 'superagent';
import { Link } from 'react-router-dom';

export default class Fetch extends Component {

    state = {
        trees: []
    }

    componentDidMount = async () => {
        await this.fetchTrees();
    }

    fetchTrees = async () => {
        const response = await fetch.get(`https://frozen-escarpment-09808.herokuapp.com/trees`);

        this.setState({
            trees: response.body
        })
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