import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEvents } from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { searchTerm: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();

        //this.props.fetchEvents(this.state.term);
        this.props.fetchEvents();
        console.log(this.props.events);
        this.setState({ term: '' });
    }

    onInputChange(event) {
        if (!event) { return; }

        this.setState({ searchTerm: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Pick your neighborhood"
                    className="form-control"
                    value={this.state.searchTerm}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Go!</button>
                </span>
            </form>
        );
    }
}

// For debugging purposes only
function mapStateToProps({ events }) {
    return { events };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchEvents }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)