class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name,
        this.releaseDate = releaseDate,
        this.pagesCount = pagesCount,
        this.state = 100,
        this.type = null;
    }

     fix(){
        return this.state = this.state * 1.5;
     }

     set state(condition){
        if (condition < 0){
            this._state = 0;
        } else if (condition > 100){
            this._state = 100;
        } else this._state = condition;
     }

     get state(){
        return this._state;
     }
}

class Magazine extends PrintEditionItem{
    constructor(){
        super();
        this.type = 'magazine'
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book{
    constructor(author){
        super();
        this.author = author;
        this.type = 'novel';
    }
}

class FantasticBook extends Book{
    constructor(author){
        super();
        this.author = author;
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book{
    constructor(author){
        super();
        this.author = author;
        this.type = 'detective'
    }
}

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book.state > 30){
            this.books.push(book)
        }
    }

    findBookBy(type, value){
        //return this.books.filter(book => book[type] == value)[0] ?? null;
        for (let i = 0; i < this.books.length; i++){
            if (this.books[i][type] === value){
                return this.books[i];
            }
        }
        return null;
    }  

    giveBookByName(bookName){
/*      let thisBook = this.books.filter(book => book.name === bookName)[0] ?? null
        this.books = this.books.filter(book => book.name !== bookName)
        return thisBook */
        for (let i = 0; i < this.books.length; i++){
            if (this.books[i].name === bookName) {
                return this.books.splice(i, 1)[0];         
            }
        } return null 
    }
}

class Student {
    constructor(name){
        this.name = name
        this.marks = {

        };
    }

    addMark(marks, subject){
        if (marks >= 6 || marks <= 1){
            return;
        }
        if (this.marks[subject] == undefined){
           this.marks[subject] = []
        }
        if (this.marks[subject] !== undefined){
            this.marks[subject].push(marks)
        }
    }

    getAverageBySubject(subject){
        if (this.marks[subject] == undefined){
            return 0;
        } return this.marks[subject].reduce((acc, marks, index, array) => marks / array.length + acc, 0)
    }

    getAverage(){
        return Object.keys(this.marks).reduce((acc, marks, index, array) => this.getAverageBySubject(marks) / array.length + acc, 0)
    }
}