import React from 'react';
import { Footer } from 'react-materialize';
import './style.css';

function GrubFooter() {
  return (
    <Footer
      className="footer"
      copyrights="GreenGrub 2020"
      links={<ul><li><a className="grey-text text-lighten-3" href="https://www.github.com/jazznerd206" target="_blank">Andrew Miller</a></li><li><a className="grey-text text-lighten-3" href="#!" target="_blank">Dima Dibb</a></li><li><a className="grey-text text-lighten-3" href="https://www.github.com/tangchristina" target="_blank">Christina Tang</a></li><li><a className="grey-text text-lighten-3" href="#!" target="_blank">Jeff Huang</a></li></ul>}
    >
      <h5 className="white-text">
        Being healthy is more than just eating well...
      </h5>
      <p className="grey-text text-lighten-4">
        Search for local meetups that fit your lifestyle!
      </p>
    </Footer>
  );
}
export default GrubFooter;