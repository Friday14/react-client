import React from 'react';

export default class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.email };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.bindEmail(this.state.value);
    event.preventDefault();
  }

  render() {
    return <form onSubmit={this.handleSubmit}
                 style={this.props.email !== "" ? { pointerEvents: 'none', opacity: 0.4 } : {}}>
      <div className="mb-3">
        <input type="email"
               required
               className={`email`}
               value={this.state.value}
               onChange={this.handleChange}/>
      </div>
      <div>
        <input className="btn btn-outline-info text-white btn-ext" type="submit" value="Отправить"/>
      </div>
    </form>;
  }
}