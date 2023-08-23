const Movies = [
   {
      "Title": "Batman Begins",
      "Year": "2005",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
   },
   {
      "Title": "Batman v Superman: Dawn of Justice",
      "Year": "2016",
      "imdbID": "tt2975590",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
   },
   {
      "Title": "The Batman",
      "Year": "2022",
      "imdbID": "tt1877830",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"
   },
   {
      "Title": "Batman",
      "Year": "1989",
      "imdbID": "tt0096895",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
   },
   {
      "Title": "Batman Returns",
      "Year": "1992",
      "imdbID": "tt0103776",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"
   },
   {
      "Title": "Batman & Robin",
      "Year": "1997",
      "imdbID": "tt0118688",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"
   },
   {
      "Title": "Batman Forever",
      "Year": "1995",
      "imdbID": "tt0112462",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
   },
   {
      "Title": "The Lego Batman Movie",
      "Year": "2017",
      "imdbID": "tt4116284",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
   },
   {
      "Title": "Batman: The Animated Series",
      "Year": "1992–1995",
      "imdbID": "tt0103359",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
   },
   {
      "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
      "Year": "2016",
      "imdbID": "tt18689424",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
   }, {
      "Title": "Spider-Man",
      "Year": "2002",
      "imdbID": "tt0145487",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
   },
   {
      "Title": "Spider-Man: No Way Home",
      "Year": "2021",
      "imdbID": "tt10872600",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg"
   },
   {
      "Title": "Spider-Man: Homecoming",
      "Year": "2017",
      "imdbID": "tt2250912",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg"
   },
   {
      "Title": "Spider-Man 2",
      "Year": "2004",
      "imdbID": "tt0316654",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
   },
   {
      "Title": "The Amazing Spider-Man",
      "Year": "2012",
      "imdbID": "tt0948470",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg"
   },
   {
      "Title": "Spider-Man: Into the Spider-Verse",
      "Year": "2018",
      "imdbID": "tt4633694",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg"
   },
   {
      "Title": "Spider-Man 3",
      "Year": "2007",
      "imdbID": "tt0413300",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
   },
   {
      "Title": "Spider-Man: Far from Home",
      "Year": "2019",
      "imdbID": "tt6320628",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
   },
   {
      "Title": "The Amazing Spider-Man 2",
      "Year": "2014",
      "imdbID": "tt1872181",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_SX300.jpg"
   },
   {
      "Title": "Spider-Man: Across the Spider-Verse",
      "Year": "2023",
      "imdbID": "tt9362722",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg"
   },
   {
      "Title": "Iron Man",
      "Year": "2008",
      "imdbID": "tt0371746",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
   },
   {
      "Title": "Iron Man 3",
      "Year": "2013",
      "imdbID": "tt1300854",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg"
   },
   {
      "Title": "Iron Man 2",
      "Year": "2010",
      "imdbID": "tt1228705",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
   },
   {
      "Title": "The Iron Giant",
      "Year": "1999",
      "imdbID": "tt0129167",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYzBjZTNkMzQtZmNkOC00Yzk0LTljMjktZjk3YWVlZjY3NTk2XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg"
   },
   {
      "Title": "Doctor Strange",
      "Year": "2016",
      "imdbID": "tt1211837",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
   },
   {
      "Title": "Doctor Strange in the Multiverse of Madness",
      "Year": "2022",
      "imdbID": "tt9419884",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg"
   },
   {
      "Title": "Justice League",
      "Year": "2017",
      "imdbID": "tt0974015",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYWVhZjZkYTItOGIwYS00NmRkLWJlYjctMWM0ZjFmMDU4ZjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
   },
   {
      "Title": "Zack Snyder's Justice League",
      "Year": "2021",
      "imdbID": "tt12361974",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
   },
   {
      "Title": "The League of Extraordinary Gentlemen",
      "Year": "2003",
      "imdbID": "tt0311429",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTFlOTdkMjEtNGVmMS00YTA3LThlNjQtMjAzZmFjZDAzNjllL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
   },
   {
      "Title": "She's Out of My League",
      "Year": "2010",
      "imdbID": "tt0815236",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTkwMTY5ODA1MF5BMl5BanBnXkFtZTcwODYyNzAxMw@@._V1_SX300.jpg"
   },
   {
      "Title": "A League of Their Own",
      "Year": "1992",
      "imdbID": "tt0104694",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjQ1NTQyYjktZDc5My00NDA1LWI1NmItY2ViNjQ0NDk4NmRjXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
   },
   {
      "Title": "Major League",
      "Year": "1989",
      "imdbID": "tt0097815",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzM5MWViNTMtMDQ5Ni00M2M0LTg1OTktY2I3YTJkODVkNTBkXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg"
   },
   {
      "Title": "DC League of Super-Pets",
      "Year": "2022",
      "imdbID": "tt8912936",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTIyNzc3NzMtNGE5YS00Yjg5LTk5MDMtOTUxMzk1ZTBkOTgwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
   },
   {
      "Title": "The League",
      "Year": "2009–2015",
      "imdbID": "tt1480684",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZmQ1MjZkNTQtZjBmMC00YTljLTg1YWUtM2YyYzZhYTM4OTJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg"
   },
   {
      "Title": "Justice League",
      "Year": "2001–2004",
      "imdbID": "tt0275137",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGQxYzExOGEtYjE2Ni00YzNlLTkyMGEtZTM0NDE3ZTIzODU1XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg"
   },
   {
      "Title": "Justice League: The Flashpoint Paradox",
      "Year": "2013",
      "imdbID": "tt2820466",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwNTljYzgtOTU3ZC00ZjhhLTk0YzItY2RiMWU0MGZlNzFjL2ltYWdlXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg"
   },
   {
      "Title": "Iron Fist",
      "Year": "2017–2018",
      "imdbID": "tt3322310",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjI5Mjg1NDcyOV5BMl5BanBnXkFtZTgwMjAxOTQ5MTI@._V1_SX300.jpg"
   },
   {
      "Title": "Fast & Furious 6",
      "Year": "2013",
      "imdbID": "tt1905041",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"
   },
   {
      "Title": "The Fast and the Furious",
      "Year": "2001",
      "imdbID": "tt0232500",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
   },
   {
      "Title": "Fast Five",
      "Year": "2011",
      "imdbID": "tt1596343",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg"
   },
   {
      "Title": "Fast & Furious",
      "Year": "2009",
      "imdbID": "tt1013752",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjQ1ZTMxNzgtZDcxOC00NWY5LTk3ZjAtYzRhMDhlNDZlOWEzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
   },
   {
      "Title": "The Fast and the Furious: Tokyo Drift",
      "Year": "2006",
      "imdbID": "tt0463985",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"
   },
   {
      "Title": "2 Fast 2 Furious",
      "Year": "2003",
      "imdbID": "tt0322259",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
   },
   {
      "Title": "Fast & Furious Presents: Hobbs & Shaw",
      "Year": "2019",
      "imdbID": "tt6806448",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
   },
   {
      "Title": "F9: The Fast Saga",
      "Year": "2021",
      "imdbID": "tt5433138",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg"
   },
   {
      "Title": "Fast Times at Ridgemont High",
      "Year": "1982",
      "imdbID": "tt0083929",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYzBlZjE1MDctYjZmZC00ZTJmLWFkOWEtYjdmZDZkODBkZmI2XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg"
   },
   {
      "Title": "Fast X",
      "Year": "2023",
      "imdbID": "tt5433140",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
   },
   {
      "Title": "Star Trek: Strange New Worlds",
      "Year": "2022–",
      "imdbID": "tt12327578",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BM2Q2YWM0NWMtMGJmYS00NjY3LTg2MDctY2ViY2ZiM2Y5ZTAyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
   },
   {
      "Title": "Strange World",
      "Year": "2022",
      "imdbID": "tt10298840",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTE0Y2I1NDUtN2Q1YS00MTdhLTg0OTItZjJhNWJiNTUwYzM5XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"
   },
   {
      "Title": "Strange Wilderness",
      "Year": "2008",
      "imdbID": "tt0489282",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTI1MTI1OTUxNl5BMl5BanBnXkFtZTcwMDQzMjU1MQ@@._V1_SX300.jpg"
   },
   {
      "Title": "Strange Brew",
      "Year": "1983",
      "imdbID": "tt0086373",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNGNmNmE1ZWQtNWYxNi00YjdjLWE2MTMtZjdiYzdmNjc2YzdjL2ltYWdlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"
   },
   {
      "Title": "Jonathan Strange & Mr Norrell",
      "Year": "2015",
      "imdbID": "tt2548418",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTMzOGI1ZDAtYTk4NS00ODhlLTgxN2EtNDM1NDliNWM1M2UzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
   },
   {
      "Title": "Love Is Strange",
      "Year": "2014",
      "imdbID": "tt2639344",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTk5MTkxOTI1N15BMl5BanBnXkFtZTgwNzAwNDA4MTE@._V1_SX300.jpg"
   },
   {
      "Title": "Strange Magic",
      "Year": "2015",
      "imdbID": "tt4191054",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjA0NjU3MTU5OF5BMl5BanBnXkFtZTgwMTYyMDQ3MzE@._V1_SX300.jpg"
   },
]

export default Movies