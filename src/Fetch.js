import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { fetchTrees } from './fetches.js';

export default class Fetch extends Component {

    state = {
        trees: [],
        sortType: '',
        order: ''
    }
    componentDidMount = async () => {
        const trees = await fetchTrees();

        this.setState({ trees });
    }

    handleSortType = e => {
        this.setState({
            sortType: e.target.value
        })
    }

    handleOrder = e => {
        this.setState({
            order: e.target.value
        })
    }

    render() {

        const sortedTrees = this.state.trees.filter((item) => {
            if (!this.state.sortType) return true;
            if (item.type_id.toString() === this.state.sortType) return true;
            return false;
        })

            .sort((a, b) => {
                if (this.state.order === 'descending') {
                    return b.hardness_factor - a.hardness_factor
                } else {
                    return a.hardness_factor - b.hardness_factor
                }
            })

        return (
            <>
                <select onChange={this.handleSortType}>
                    <option value="">all</option>
                    <option value="1">coniferous</option>
                    <option value="2">deciduous</option>
                    <option value="3">grass</option>
                </select>
                <select onChange={this.handleOrder}>
                    <option value="ascending">ascending</option>
                    <option value="descending">descending</option>
                </select>
                <div className="tree-list">
                    {sortedTrees.map(tree =>
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
            </div>
            </>)
    }
}