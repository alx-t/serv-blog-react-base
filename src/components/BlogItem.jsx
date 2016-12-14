import React from 'react';

import Image from './Image';
import TextBox from './TextBox';

export default class BlogItem extends React.Component {
  render() {
    return (
      <div>
        <Image
          alt={this.props.alt}
          src={this.props.src}
          width={this.props.width}
          height={this.props.height}
        />
        <TextBox>{this.props.text}</TextBox>
      </div>
    );
  }
};
