class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    return this.budget > 100000000;
  }
}

const movie1 = new Movie("Cats", "Dogs", 160000000);
console.log(movie1.wasExpensive());

const movie2 = new Movie("Birds", 159000000);
console.log(movie2.wasExpensive());
