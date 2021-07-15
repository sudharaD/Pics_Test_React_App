import React from 'react';

class SearchBar extends React.Component {
state = { term: '' };

onFormSubmit = (event) => {
    event.preventDefault();

    // When we using props in class based component we reference props with this.props
    this.props.onSubmit(this.state.term);
}
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Image</label>
                        <input 
                            type='text' 
                            value={this.state.term} 
                            onChange= {(e) => this.setState({ term: e.target.value})} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;