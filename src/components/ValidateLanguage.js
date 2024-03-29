import style from './styles/CreateWidget.module.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addLanguage, showError, hideError } from '../actions';
import ErrorForm from './ErrorForm';

class ValidateLanguage extends Component {
  handleLanguage = e => {
    e.preventDefault();
    const language = e.target['language'].value.trim();
    if (language.length !== 0) {
      const id = this.props.match.params.id;
      this.props.dispatch(addLanguage({ id, language }));
      this.props.dispatch(hideError());
      this.props.history.push('/');
    } else {
      this.props.dispatch(showError());
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleLanguage} className={style.container}>
          <label className={style.item}>
            What is the widget's language?
            <select name="language">
              <option value="ENG">ENG</option>
              <option value="ES">ES</option>
              <option value="DE">DE</option>
            </select>
          </label>
          {this.props.showError && <ErrorForm />}
          <button type="submit" className={style.addButton}>
            Finish
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ showError }) => ({
  showError
});

export default connect(mapStateToProps)(ValidateLanguage);
