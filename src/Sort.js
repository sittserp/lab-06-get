import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <>
                <select onChange={this.props.handleSortType}>
                    <option value="">all</option>
                    <option value="coniferous">coniferous</option>
                    <option value="deciduous">deciduous</option>
                    <option value="grass">grass</option>
                </select>
                <select onChange={this.props.handleOrder}>
                    <option value="ascending">ascending</option>
                    <option value="descending">descending</option>
                </select>
            </>
        )
    }
}
