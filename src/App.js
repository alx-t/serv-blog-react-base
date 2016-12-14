import React, { Component } from 'react';

import Image from './components/Image';
import TextBox from './components/TextBox';
import BlogItem from './components/BlogItem';
import BlogPage from './components/BlogPage';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Image
          alt='cat image'
          src='http://www.zooundco24.de/uploads/tx_news/Fotolia_18657342_farbkombinat.jpg'
          width='60'
          height='46'
        />
        <TextBox>TextBox sample text</TextBox>
        <BlogItem
          alt='cat image'
          src='https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg'
          width='60'
          height='46'
          text='BlogItem sample text 1'
        />
        <BlogItem
          alt='cat image'
          src='https://yt3.ggpht.com/-V92UP8yaNyQ/AAAAAAAAAAI/AAAAAAAAAAA/zOYDMx8Qk3c/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'
          width='60'
          height='46'
          text='BlogItem sample text 2'
        />
        <BlogItem
          alt='cat image'
          src='https://s-media-cache-ak0.pinimg.com/736x/af/f5/a5/aff5a5083067a808dc45e5c5836a38c3.jpg'
          width='60'
          height='46'
          text='BlogItem sample text 3'
        />
        <BlogPage />
      </div>
    );
  }
}
