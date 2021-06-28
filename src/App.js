
import {Component} from "react";
import AddBook from './components/AddBook';
import Books from './components/Books';
import './App.css';

class App extends Component {
   constructor(props){
     super(props);
     this.state ={
       books: [
         {
           title: "Alchemist",
           author: "Paolo Coelho",
           ratings: "9/10" 
         },
         {
          title: "Zero To One",
          author: "Peter Tiel",
          ratings: "8/10" 
        },
        {
          title: "Naked Economic",
          author: "Brain ",
          ratings: "8/10" 
        },

       ]
     }
   }

   addBook = (newBook) => {
     this.setState({
       books:[...this.state.books,newBook]
     })
   }
   removeBook = (id)=>{
     const safeBooks = this.state.books.filter((book, ind) =>ind !== id);
     this.setState({books: safeBooks}); 
   }
  render() {
    return (
      <div className="app">
        <AddBook addNewBook={this.addBook} />
        <Books  books = {this.state.books} removeBook={this.removeBook} />
      </div>
    ); 
  }
}

export default App;
