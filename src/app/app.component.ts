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
  public isDisabled = true;
  public isDone = false;

  public bookCollection = [
    {
      name: "Happy Place",
      description: "Happy Place is a 2023 novel written by American author Emily Henry ",
      author: "Emily Henry",
      userRating: 0,
      totalRating: 0,
      ratingCount: 0,
      averageRating: 0
    },
    {
      name: "Dune",
      description: "Dune is a 1965 epic science fiction novel by American author Frank Herbert",
      author: "Frank Herbert",
      userRating: 0,
      totalRating: 0,
      ratingCount: 0,
      averageRating: 0
    },
    {
      name: "Bride",
      description: "#1 Indie Next Pick!A Hall of Fame LibraryReads pick!",
      author: "Ali Hazelwood",
      userRating: 0,
      totalRating: 0,
      ratingCount: 0,
      averageRating: 0
    },
    {
      name: "The Woman: A Novel",
      description: "A #1 bestseller on The New York Times, USA Today, Washington Post, and Los Angeles Times!",
      author: "Kristin Hannah",
      userRating: 0,
      totalRating: 0,
      ratingCount: 0,
      averageRating: 0
    },
    {
      name: "Think Again: The Power of Knowing What You Don't Know",
      description: "This is such an important book that will teach you how to reassess your own belief system",
      author: "Adam Grant",
      userRating: 0,
      totalRating: 0,
      ratingCount: 0,
      averageRating: 0
    },
    {
      name: "Fourth Wing",
      description: "Fourth Wing is a 2023 new adult fantasy novel by American author Rebecca Yarros.",
      author: "Rebecca Yarros",
      userRating: 0,
      totalRating: 0,
      ratingCount: 0,
      averageRating: 0
    },
    {
      name: "Table for Two: Fictions",
      description: "The always adored Amor Towles is back with all the essentials readers love",
      author: "Amor Towles",
      userRating: 0,
      totalRating: 0,
      ratingCount: 0,
      averageRating: 0
    },
    {
      name: "Crook Manifesto: A Novel",
      description: "The second book in Colson Whitehead's Harlem trilogy.",
      author: "Colson Whitehead",
      userRating: 0,
      totalRating: 0,
      ratingCount: 0,
      averageRating: 0
    },
    {
      name: "The Nickel Boys",
      description: "Colson Whitehead's follow-up novel to Underground Railroad won the Pullitzer Prize.",
      author: "Colson Whitehead",
      userRating: 0,
      totalRating: 0,
      ratingCount: 0,
      averageRating: 0
    },
    {
      name: "The Color Purple",
      description: "One of the cornerstones of modern American literature, The Color Purple is the often tragic.",
      author: "Alice Walker",
      userRating: 0,
      totalRating: 0,
      ratingCount: 0,
      averageRating: 0
    }
  ];
  public currentIndex = 0;

  public name = this.bookCollection[this.currentIndex].name;
  public description = this.bookCollection[this.currentIndex].description;
  public author = this.bookCollection[this.currentIndex].author;


  public getUserRating(rating: number){
    this.bookCollection[this.currentIndex].userRating = rating;
    this.isDisabled = false;
  }

  public calculateAverageRating(){

    const currentBook = this.bookCollection[this.currentIndex];
    currentBook.totalRating += currentBook.userRating;
    currentBook.ratingCount++;
    currentBook.averageRating = currentBook.totalRating /  currentBook.ratingCount;
    this.currentIndex++;
  }

  public reset(){
    this.currentIndex = 0;
    this.name = this.bookCollection[this.currentIndex].name;
    this.description = this.bookCollection[this.currentIndex].description;
    this.author = this.bookCollection[this.currentIndex].author;
  }

  public finishRating(){
    this.isDone = true;
  }
}
