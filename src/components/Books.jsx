import React, { Component } from "react";
import Book from './Book';

//  

class Books extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="books">
        {this.props.books.map((book, ind) => {
          return (
            <Book
              title={book.title}
              author={book.author}
              ratings={book.ratings}
              removeBook={this.props.removeBook}
              id={ind}
              key={ind}
            />
          );
        })}
      </div>
    );
  }
}

export default Books;
