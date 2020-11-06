import React, { Component } from 'react'
import fetch from 'superagent';

const userFromLocalStorage = {
    userId: 1
};

export default class Create extends Component {

    state = {
        types: []
    }

    componentDidMount = async () => {
        const response = await fetch.get(`https://frozen-escarpment-09808.herokuapp.com/types`);

        this.setState({ types: response.body })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const newTree = {
            name: this.state.name,
            hardness_factor: this.state.hardnessFactor,
            hardwood: this.state.hardwood,
            type_id: this.state.typeId,
            owner_id: userFromLocalStorage.userId
            // work!
        };

        await fetch
            .post('https://frozen-escarpment-09808.herokuapp.com/trees')
            .send(newTree);

        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({ typeId: e.target.value })
    }

    render() {
        return (
            <div>
                Add a new tree
                <form onSubmit={this.handleSubmit}>
                    <label>
                        name
        <input onChange={e => this.setState({ name: e.target.value })} type="string" />
                    </label>
                    <label>
                        hardness factor
        <input onChange={e => this.setState({ hardnessFactor: e.target.value })} type="number" />
                    </label>
                    <label>
                        hardwood
        <input onChange={e => this.setState({ hardwood: e.target.value })} />
                    </label>
                    <label>
                        type
        <select onChange={this.handleChange}>
                            <option></option>
                            {
                                this.state.types.map(type => <option key={type.id} value={type.id}>{type.type}</option>)
                            }
                        </select>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
