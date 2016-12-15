import React from 'react';

import BlogList from './BlogList';

const records = [
  {
    img_src: 'http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg',
    text: 'Record text 1'
  },
  {
    img_src: 'http://gattissimi.com/wp-content/uploads/2016/01/ga.jpg',
    text: 'Record text 2'
  },
  {
    img_src: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
    text: 'Record text 3'
  }
];

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { records };
  }

  render() {
    return (
      <div>
        <BlogList items={this.state} />
      </div>
    )
  }
}
