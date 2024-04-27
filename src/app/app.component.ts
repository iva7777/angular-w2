import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'books-rating';
  public index = 0;
  public userRating = 0;
  public totalRating = 0;
  public count = 0;
  public averageRating = 0;
  public isDisabled = true;
  public isDone = false;

  public bookCollection = [
    {
      name: "Happy Place",
      description: "Happy Place is a 2023 novel written by American author Emily Henry ",
      author: "Emily Henry"
    },
    {
      name: "Dune",
      description: "Dune is a 1965 epic science fiction novel by American author Frank Herbert",
      author: "Frank Herbert"
    },
    {
      name: "Bride",
      description: "#1 Indie Next Pick!A Hall of Fame LibraryReads pick!",
      author: "Ali Hazelwood"
    },
    {
      name: "The Woman: A Novel",
      description: "A #1 bestseller on The New York Times, USA Today, Washington Post, and Los Angeles Times!",
      author: "Kristin Hannah"
    },
    {
      name: "Think Again: The Power of Knowing What You Don't Know",
      description: "This is such an important book that will teach you how to reassess your own belief system",
      author: "Adam Grant"
    },
    {
      name: "Fourth Wing",
      description: "Fourth Wing is a 2023 new adult fantasy novel by American author Rebecca Yarros.",
      author: "Rebecca Yarros"
    },
    {
      name: "Table for Two: Fictions",
      description: "The always adored Amor Towles is back with all the essentials readers love",
      author: "Amor Towles"
    },
    {
      name: "Crook Manifesto: A Novel",
      description: "The second book in Colson Whitehead's Harlem trilogy.",
      author: "Colson Whitehead"
    },
    {
      name: "The Nickel Boys",
      description: "Colson Whitehead's follow-up novel to Underground Railroad won the Pullitzer Prize.",
      author: "Colson Whitehead"
    },
    {
      name: "The Color Purple",
      description: "One of the cornerstones of modern American literature, The Color Purple is the often tragic.",
      author: "Alice Walker"
    }
  ];

  public name = this.bookCollection[this.index].name;
  public description = this.bookCollection[this.index].description;
  public author = this.bookCollection[this.index].author;

  public getUserRating(rating: number){
    this.userRating = rating;
    this.isDisabled = false;
  }

  public calculateAverageRating(rating: number){
    this.userRating = 0;
    this.isDisabled = true;

    //запази новите данни за книгата
    this.bookCollection[this.index].name = this.name;
    this.bookCollection[this.index].description = this.description;
    this.bookCollection[this.index].author = this.author;
    console.log(this.bookCollection[this.index]);
    console.log(this.name);
    this.index++;
    if (this.index == this.bookCollection.length) {
      this.averageRating = 0;
      return;
    }
    this.totalRating += rating;
    this.count++;
    this.averageRating = this.totalRating / this.count;

    this.name = this.bookCollection[this.index].name;
    this.description = this.bookCollection[this.index].description;
    this.author = this.bookCollection[this.index].author;
  }

  public reset(){
    this.index = 0;
    this.name = this.bookCollection[this.index].name;
    this.description = this.bookCollection[this.index].description;
    this.author = this.bookCollection[this.index].author;
  }

  public finishRating(){
    this.isDone = true;
  }
}
