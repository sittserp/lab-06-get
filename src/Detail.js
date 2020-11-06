import React, { Component } from 'react'
import {
    fetchTypes,
    fetchTree,
    updateTree,
    deleteTree,
} from './fetches.js';

const userFromLocalStorage = {
    userId: 1
};

export default class Create extends Component {

    state = {
        types: []
    }
    componentDidMount = async () => {
        const types = await fetchTypes();
        const tree = await fetchTree(this.props.match.params.id);

        const typeAsAString = tree.type;

        const matchingType = types.find((type) => {
            return type.type === typeAsAString
        });

        this.setState({
            types: types,
            typeId: matchingType.id,
            hardnessFactor: tree.hardness_factor,
            hardwood: tree.hardwood,
            name: tree.name
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await updateTree(this.props.match.params.id,
            {
                name: this.state.name,
                hardness_factor: this.state.hardnessFactor,
                hardwood: this.state.hardwood,
                type_id: this.state.typeId,
                owner_id: userFromLocalStorage.userId
            });

        this.props.history.push('/');
    }

    handleDelete = async (e) => {
        e.preventDefault();

        await deleteTree(this.props.match.params.id);

        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({ typeId: e.target.value })
    }

    render() {
        return (
            <div>
                Update this tree
                <form onSubmit={this.handleSubmit}>
                    <label>
                        name
                            <input
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })}
                            type="string" />
                    </label>
                    <label>
                        hardness factor
                            <input
                            value={this.state.hardnessFactor}
                            onChange={e => this.setState({ hardnessFactor: e.target.value })}
                            type="number" />
                    </label>
                    <label>
                        hardwood? true:
                            <input
                            name="hardwood"
                            type="radio"
                            value="true"
                            checked={this.state.hardwood === true}
                            onChange={e => this.setState({ hardwood: e.target.value })} />
                        false:
                            <input
                            name="hardwood"
                            type="radio"
                            value="false"
                            checked={this.state.hardwood === false}
                            onChange={e => this.setState({ hardwood: e.target.value })} />
                    </label>
                    <label>
                        type
        <select onChange={this.handleChange}>
                            <option></option>
                            {
                                this.state.types.map(type => <option
                                    selected={this.state.typeId === type.id}
                                    key={type.id}
                                    value={type.id}>
                                    {type.type}
                                </option>)
                            }
                        </select>
                    </label>
                    <button>Submit</button>
                </form>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}
