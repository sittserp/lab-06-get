import React, { Component } from 'react'
import fetch from 'superagent';


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
                    <div className="tree" key={tree.name}>
                        <p>{tree.name}</p>
                        <p>Hardness Factor: {tree.hardness_factor}</p>
                        <p>Is Hardwood: {tree.hardwood}</p>
                        <p>Type: {tree.type}</p>
                    </div>
                )

                })
            </div>)
    }
}