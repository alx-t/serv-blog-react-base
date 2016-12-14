import React from 'react';

import BlogItem from './BlogItem';

export default class BlogList extends React.Component {
  render() {
    const { records } = this.props.items;
    const listItems = records.map(function(item, key) {
      return (
        <div key={key}>
          <BlogItem
            alt='oops, no image'
            src={item.img_src}
            width='60'
            height='40'
            text={item.text}
          />
        </div>
      );
    });

    return (
      <div>
        {listItems}
      </div>
    )
  }
}
