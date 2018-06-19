import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  VKShareButton,
  OKShareButton
} from 'react-share';

export default class SharedBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hrefRoot: window.location.href
    };
    console.log(this.props.isDisabled);
  }


  render() {
    return <div className={"row counter-item-block offset-2"}
      style={this.props.isDisabled ? {pointerEvents: 'none', opacity: 0.4} : {}}>
        <VKShareButton
          url={this.state.hrefRoot}>
          <img onClick={this.props.onShared}
               alt="vkontakte"
               className="pl-3"
               src="/social/vk.svg"/>
        </VKShareButton>

        <FacebookShareButton
          url={this.state.hrefRoot}>
          <img onClick={this.props.onShared}
               className="pl-3"
               src="/social/fb.svg"
               alt=""/>
        </FacebookShareButton>

        <TwitterShareButton
          url={this.state.hrefRoot}>
          <img
            onClick={this.props.onShared}
            className="pl-3"
            src="/social/twitter.svg"
            alt=""/>
        </TwitterShareButton>

        <OKShareButton
          url={this.state.hrefRoot}>
          <img
            onClick={this.props.onShared}
            className="pl-3"
            src="/social/ok.svg"
            alt=""/>
        </OKShareButton>
      {/*</div>*/}
    </div>;
  }

}
