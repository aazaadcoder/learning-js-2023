const myNum = [1,2,3,4,5,6,7,8,9,10]

const numGreaterThanFour = myNum.filter( (item) => item > 4 )

console.log(numGreaterThanFour)

const numGreaterThanFive = myNum.filter((num)=>{
    return num > 5;
})

console.log(numGreaterThanFive)

//doing the above using forEach

let numsSmallerThanFive = []

myNum.forEach((num)=>{
    if(num < 5 ){
        numsSmallerThanFive.push(num)
    }
})

console.log(numsSmallerThanFive)

const books = [
    {
        name: "To Kill a Mockingbird",
        published: 1960,
        genre: "Fiction",
        edition: "1st"
    },
    {
        name: "Hello Dear",
        published: 1949,
        genre: "Dystopian",
        edition: "1st"
    },
    {
        name: "The Great Gatsby",
        published: 1925,
        genre: "Novel",
        edition: "1st"
    },
    {
        name: "The Catcher in the Rye",
        published: 1951,
        genre: "Fiction",
        edition: "1st"
    },
    {
        name: "Moby-Dick",
        published: 1851,
        genre: "Adventure",
        edition: "1st"
    },
    {
        name: "Pride and Prejudice",
        published: 1813,
        genre: "Romance",
        edition: "1st"
    },
    {
        name: "The Hobbit",
        published: 1937,
        genre: "Fantasy",
        edition: "1st"
    },
    {
        name: "War and Peace",
        published: 1869,
        genre: "Historical Fiction",
        edition: "1st"
    },
    {
        name: "The Catch-22",
        published: 1961,
        genre: "Satire",
        edition: "1st"
    },
    {
        name: "Jane Eyre",
        published: 1847,
        genre: "Novel",
        edition: "1st"
    }
];

// console.log(books);

const userBooks = books.filter((book)=>{
    return (book.published > 1900 && book.published < 1950 && book.genre === "Novel")
})

console.log(userBooks)