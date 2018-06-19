import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../home';
import Final from '../final';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { create } from '../../actions/user';
import Cloud from '../../components/cloud';

class App extends React.Component {
  componentWillMount() {
    const { user, userCreate } = this.props;
    if (user.profile.id === null) {
      userCreate();
    }
  }

  isFinal() {
    let { email, shared } = this.props.user.profile;
    return email !== '' && shared !== false;
  }

  render() {
    return <div>
      <header>
        <img className={`logotype`} src="/logo.svg" alt=""/>
      </header>

      <main>
        {this.renderClouds()}
        <Route exact path="/final" component={Final}/>
        <Route exact path="/" render={() => (
          this.isFinal() ? (
            <Redirect to="/final"/>
          ) : (
              <div className="row">
                  <Home/>
              </div>
          )
        )}/>
      </main>
    </div>;
  }

  renderClouds() {
    let components = [],
      cloudNumber = Math.abs(Math.random() * 10);
    for (let i = 0; i < cloudNumber; i++) {
      components.push(<Cloud key={i}/>);
    }
    return components;
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      userCreate: create
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
