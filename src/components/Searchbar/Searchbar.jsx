import { Component } from 'react';
import { Header, Form, Input } from './Searchbar.styled';
import PropTypes from 'prop-types';


export class Searchbar extends Component {
  state = {
    word: '',
  };

  takeText = e => {
    const { value } = e.target;
    this.setState({
      word: value.toLowerCase(),
    });
  };

  handelSubmit = e => {
    const { word } = this.state;
    e.preventDefault();
    if (word.trim() === '') {
      return;
    }
    this.props.onSubmit(word);
    this.setState({ word: '' });
  };

  render() {
    return (
      <Header>
        <Form>
          <Input
            name="word"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.word}
            onChange={this.takeText}
          />
          <button type="submit" onClick={this.handelSubmit}>
            <span>Search</span>
          </button>
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit:PropTypes.func.isRequired,
};
