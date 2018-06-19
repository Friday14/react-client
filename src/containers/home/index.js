import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SharedBlock from '../../components/shared_block';
import EmailForm from '../../components/email_form';

import { shared, bindEmail } from '../../actions/user';

class Home extends React.Component {
  render() {
    return <div className="col-sm-8 col-lg-5 m-auto text-white">
      <h1 className="title">Чтобы выиграть путешествие</h1>
      <ol className="counter">
        <li>
          <span>Поделись с друзьями:</span>
          <SharedBlock onShared={this.props.onShared} isDisabled={this.props.profile.shared}/>
        </li>
        <li>
          <span>Оставь почту:</span>
          <EmailForm bindEmail={this.props.bindEmail} email={this.props.profile.email}/>
        </li>
      </ol>
    </div>;
  }
}


const mapStateToProps = state => ({
  profile: state.user.profile
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onShared: shared,
      bindEmail: bindEmail
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
