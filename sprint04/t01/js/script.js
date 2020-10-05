"use strict"

import {Movie} from "./init_movies.js";


let allMovies = new Set();
let favoriteMovies = new Set();

function createAllMovies () {
  allMovies.add(new Movie("John Wick", "https://upload.wikimedia.org/wikipedia/ru/1/1d/John_Wick_3.jpg",
    "May 9, 2019", "John Wick is an American neo-noir action-thriller media franchise created by screenwriter Derek Kolstad\n" +
    "and owned by Summit Entertainment. Keanu Reeves plays John Wick, a retired hitman seeking vengeance for the\n" +
    "killing of the dog given to him by his recently deceased wife. The franchise began with the release of John\n" +
    "Wick in 2014 followed by two sequels, John Wick: Chapter 2 on February 10, 2017, and John Wick: Chapter 3 –\n" +
    "Parabellum on May 17, 2019. All three films were considered critical and commercial successes, accumulating\n" +
    "a collective gross of more than $587 million worldwide. A fourth installment, John Wick: Chapter 4, is in\n" +
    "pre-production.", ["Keanu Reeves", "Halle Berry", "Ian McShane", "Laurence Fishburne"]));
  allMovies.add(new Movie("Avengers: Endgame", "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
    "April 22, 2019", "Five years later, Scott Lang escapes from the quantum realm.\n" +
    " At the Avengers' compound, he explains to Romanoff and Rogers he experienced five hours, not years, while trapped.\n"+
    " Theorizing the quantum realm could allow time travel, they ask Stark to help them obtain the Stones from the past to\n" +
    " undo Thanos' actions in the present. Stark refuses, thinking about his wife, Pepper Potts, and daughter, Morgan, but\n" +
    " relents after musing on the death of Peter Parker. Stark, Rocket and Banner, who has since merged his intelligence with\n" +
    " the Hulk's strength, build a time machine. Banner notes changing the past does not affect their present; any changes instead\n" +
    " create branched alternate realities. He and Rocket visit the Asgardian refugees' new home in Norway—New Asgard—to recruit Thor",
    ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Scarlett Johansson"]));
  allMovies.add(new Movie("Inception", "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    "July 8, 2010", "Dominick \"Dom\" Cobb and Arthur are \"extractors\": they perform corporate espionage using experimental\n" +
    " military technology to infiltrate their targets' subconscious and extract information through a shared dream world. Their latest target,\n" +
    " Saito, reveals he arranged their mission to test Cobb for a seemingly impossible job: implanting an idea in a person's subconscious,\n" +
    " or \"inception\". Saito wants Cobb to convince Robert, the son of Saito's ailing competitor Maurice Fischer, to dissolve his father's company.\n" +
    " In return, Saito promises to clear Cobb's criminal status, which prevents him from returning home to his children.",
    ["Leonardo DiCaprio", "Ellen Page", "Tom Hardy", "Ken Watanabe"]));
  allMovies.add(new Movie("Spider-Man", "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
    "June 26, 2019", "Parker and his classmates travel to Venice, Italy, where the Water Elemental attacks. \n" +
    "Parker helps protect his classmates, while Beck arrives and destroys the creature. Fury meets with Parker and gives him\n" +
    " Stark's glasses, which were meant for his successor. The glasses enable him to communicate with and take command of the\n" +
    " artificial intelligence E.D.I.T.H., which has access to Stark Industries' databases and commands a large orbital weapons supply.\n" +
    " Beck claims to hail from an alternate reality within the Multiverse, where the four Elementals killed his family and destroyed his\n" +
    " civilization. He predicts that the Fire Elemental will appear in Prague. Parker declines Fury's invitation to join the fight and\n" +
    "returns to his class trip.", ["Tom Holland", "Jake Gyllenhaal","Marisa Tomei", "\tJon Favreau"]));
  allMovies.add(new Movie("Joker", "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg",
    "August 31, 2019", "In 1981, party clown and aspiring stand-up comedian Arthur Fleck lives with his mother, Penny,\n" +
    " in Gotham City. Gotham is rife with crime and unemployment, leaving swaths of the population disenfranchised and impoverished.\n" +
    " Arthur suffers from a medical disorder that causes him to laugh at inappropriate times, depending on social services for medication.\n" +
    " After a gang of delinquents attacks Arthur in an alley, his co-worker Randall gives him a gun for protection. Arthur pursues a\n" +
    " relationship with his neighbor, single mother Sophie Dumond, and invites her to his upcoming stand-up routine at a nightclub.",
    ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz", "Frances Conroy"]));
  allMovies.add(new Movie("The Dark Knight","https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
    "July 14, 2008","A gang of criminals robs a Gotham City mob bank, murdering each other for a higher share\n" +
    " until only the Joker remains; he escapes with the money. Batman, District Attorney Harvey Dent and Lieutenant Jim Gordon\n" +
    " form an alliance to rid Gotham of organized crime. Bruce Wayne is impressed with Dent's idealism and offers to support\n" +
    " his career; he believes that, with Dent as Gotham's protector, he can give up being Batman and lead a normal life with\n" +
    " Rachel Dawes—even though she and Dent are dating.", ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"]));
}


// let wick = new Movie("John Wick");
//
// wick.renderMovie();
// let test_set = new Set();
// test_set.add(wick);
//
// test_set.forEach(function (value) {
//
// })
createAllMovies();

allMovies.forEach(function (value){
  value.renderContentMovie();
})



console.log(allMovies);