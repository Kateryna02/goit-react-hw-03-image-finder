import React, { Component } from 'react';
import s from "../Style.module.css"
class Searchbar extends Component {
    state = {
        query: '',
    };

    handleChange = event => {
        this.setState({ query: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    };

    render() {
        return (
            <header className={s.header}>
                <form className={s.searchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={s.searchFormButton}>
                        <span className="button-label">Search</span>
                    </button>
                    <input
                        className={s.SearchFormInput}
                        type="text"
                        value={this.state.query}
                        onChange={this.handleChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }
}

export default Searchbar;
