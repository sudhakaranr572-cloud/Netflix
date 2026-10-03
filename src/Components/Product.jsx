


import React, { useState } from "react";

function Product() {
  // -----------------------------
  // STATES
  // -----------------------------

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);

  // -----------------------------
  // MOVIE DATA - 100 MOVIES
  // -----------------------------

  const movies = [
    {
      id: 1,
      title: "The Dark Knight",
      category: "Action",
      rating: 9.0,
      year: 2008,
      duration: "2h 32m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      description:
        "When a powerful criminal threatens Gotham City, Batman faces one of his greatest challenges. The Dark Knight must protect the city while dealing with a dangerous enemy who wants to create chaos.",
      watchUrl: "https://www.imdb.com/title/tt0468569/",
    },

    {
      id: 2,
      title: "Interstellar",
      category: "Sci-Fi",
      rating: 8.7,
      year: 2014,
      duration: "2h 49m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      description:
        "A team of explorers travels through a mysterious wormhole in space in search of a new home for humanity.",
      watchUrl: "https://www.imdb.com/title/tt0816692/",
    },

    {
      id: 3,
      title: "Inception",
      category: "Thriller",
      rating: 8.8,
      year: 2010,
      duration: "2h 28m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
      description:
        "A skilled thief who enters people's dreams is given a difficult mission. Instead of stealing an idea, he must plant one inside the mind of another person.",
      watchUrl: "https://www.imdb.com/title/tt1375666/",
    },

    {
      id: 4,
      title: "Avengers: Endgame",
      category: "Action",
      rating: 8.4,
      year: 2019,
      duration: "3h 1m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      description:
        "The Avengers face the consequences of a devastating battle and attempt to restore what was lost. The heroes come together for their biggest mission yet.",
      watchUrl: "https://www.imdb.com/title/tt4154796/",
    },

    {
      id: 5,
      title: "Spider-Man",
      category: "Adventure",
      rating: 8.2,
      year: 2002,
      duration: "2h 1m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/gh4cZbhZxyTbgxQPxD0dOud2O2.jpg",
      description:
        "After gaining extraordinary abilities, Peter Parker learns that having great power also means having great responsibility.",
      watchUrl: "https://www.imdb.com/title/tt0145487/",
    },

    {
      id: 6,
      title: "Avatar",
      category: "Adventure",
      rating: 7.9,
      year: 2009,
      duration: "2h 42m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
      description:
        "A former marine becomes part of an alien world and discovers a civilization whose people are fighting to protect their home.",
      watchUrl: "https://www.imdb.com/title/tt0499549/",
    },

    {
      id: 7,
      title: "The Matrix",
      category: "Sci-Fi",
      rating: 8.7,
      year: 1999,
      duration: "2h 16m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      description:
        "A computer programmer discovers that reality is not what it seems and becomes involved in a fight against powerful machines.",
      watchUrl: "https://www.imdb.com/title/tt0133093/",
    },

    {
      id: 8,
      title: "Joker",
      category: "Drama",
      rating: 8.3,
      year: 2019,
      duration: "2h 2m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      description:
        "A troubled man struggling with life gradually becomes one of Gotham City's most recognizable figures.",
      watchUrl: "https://www.imdb.com/title/tt7286456/",
    },

    {
      id: 9,
      title: "Titanic",
      category: "Drama",
      rating: 7.9,
      year: 1997,
      duration: "3h 14m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx1k7t5YxR2d4C.jpg",
      description:
        "A young couple from different social backgrounds meet aboard the legendary Titanic and form an unforgettable relationship.",
      watchUrl: "https://www.imdb.com/title/tt0120338/",
    },

    {
      id: 10,
      title: "The Godfather",
      category: "Drama",
      rating: 9.2,
      year: 1972,
      duration: "2h 55m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      description:
        "The aging patriarch of a powerful crime family transfers control of his empire to his reluctant son.",
      watchUrl: "https://www.imdb.com/title/tt0068646/",
    },

    {
      id: 11,
      title: "The Shawshank Redemption",
      category: "Drama",
      rating: 9.3,
      year: 1994,
      duration: "2h 22m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/lyQBXzOQSuE59IsHyhrp0qBbqK0.jpg",
      description:
        "A banker is imprisoned for a crime he did not commit and forms an unlikely friendship while holding onto hope.",
      watchUrl: "https://www.imdb.com/title/tt0111161/",
    },

    {
      id: 12,
      title: "Forrest Gump",
      category: "Drama",
      rating: 8.8,
      year: 1994,
      duration: "2h 22m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
      description:
        "Forrest Gump experiences many extraordinary moments in American history while remaining devoted to the people he loves.",
      watchUrl: "https://www.imdb.com/title/tt0109830/",
    },

    {
      id: 13,
      title: "Fight Club",
      category: "Thriller",
      rating: 8.8,
      year: 1999,
      duration: "2h 19m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
      description:
        "An unhappy office worker forms an unusual friendship that develops into an underground fighting organization.",
      watchUrl: "https://www.imdb.com/title/tt0137523/",
    },

    {
      id: 14,
      title: "The Lord of the Rings",
      category: "Adventure",
      rating: 8.9,
      year: 2001,
      duration: "2h 58m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
      description:
        "A young hobbit begins a dangerous journey to destroy a powerful ring and prevent darkness from taking over Middle-earth.",
      watchUrl: "https://www.imdb.com/title/tt0120737/",
    },

    {
      id: 15,
      title: "Gladiator",
      category: "Action",
      rating: 8.5,
      year: 2000,
      duration: "2h 35m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
      description:
        "A betrayed Roman general becomes a gladiator and fights for justice and revenge.",
      watchUrl: "https://www.imdb.com/title/tt0172495/",
    },

    {
      id: 16,
      title: "Jurassic Park",
      category: "Adventure",
      rating: 8.2,
      year: 1993,
      duration: "2h 7m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/9i3plLl89DHMj7n3R0FiYf4Kf0D.jpg",
      description:
        "Scientists visit a theme park filled with cloned dinosaurs, but the creatures escape and create chaos.",
      watchUrl: "https://www.imdb.com/title/tt0107290/",
    },

    {
      id: 17,
      title: "Iron Man",
      category: "Action",
      rating: 7.9,
      year: 2008,
      duration: "2h 6m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
      description:
        "A billionaire inventor builds a powerful armored suit and becomes a superhero.",
      watchUrl: "https://www.imdb.com/title/tt0371746/",
    },

    {
      id: 18,
      title: "Black Panther",
      category: "Action",
      rating: 7.3,
      year: 2018,
      duration: "2h 14m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
      description:
        "The king of Wakanda must protect his country while facing a powerful challenger.",
      watchUrl: "https://www.imdb.com/title/tt1825683/",
    },

    {
      id: 19,
      title: "Doctor Strange",
      category: "Sci-Fi",
      rating: 7.5,
      year: 2016,
      duration: "1h 55m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoqSi0ml0iJ1p4zR.jpg",
      description:
        "A brilliant surgeon discovers the mystical arts after a devastating accident changes his life.",
      watchUrl: "https://www.imdb.com/title/tt1211837/",
    },

    {
      id: 20,
      title: "Guardians of the Galaxy",
      category: "Adventure",
      rating: 8.0,
      year: 2014,
      duration: "2h 1m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
      description:
        "A group of unlikely heroes joins together to protect the galaxy from a dangerous threat.",
      watchUrl: "https://www.imdb.com/title/tt2015381/",
    },

    {
      id: 21,
      title: "Captain America: The Winter Soldier",
      category: "Action",
      rating: 7.7,
      year: 2014,
      duration: "2h 16m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg",
      description:
        "Captain America discovers a dangerous conspiracy within the organization he trusts.",
      watchUrl: "https://www.imdb.com/title/tt1843866/",
    },

    {
      id: 22,
      title: "Thor: Ragnarok",
      category: "Action",
      rating: 7.9,
      year: 2017,
      duration: "2h 10m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
      description:
        "Thor must escape captivity and stop an ancient threat from destroying Asgard.",
      watchUrl: "https://www.imdb.com/title/tt3501632/",
    },

    {
      id: 23,
      title: "Spider-Man: No Way Home",
      category: "Action",
      rating: 8.2,
      year: 2021,
      duration: "2h 28m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      description:
        "Peter Parker's identity is revealed, causing his world to change dramatically as dangerous villains arrive.",
      watchUrl: "https://www.imdb.com/title/tt10872600/",
    },

    {
      id: 24,
      title: "Deadpool",
      category: "Action",
      rating: 8.0,
      year: 2016,
      duration: "1h 48m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
      description:
        "A former special forces operative becomes a wisecracking masked hero after an experimental treatment.",
      watchUrl: "https://www.imdb.com/title/tt1431045/",
    },

    {
      id: 25,
      title: "John Wick",
      category: "Action",
      rating: 7.4,
      year: 2014,
      duration: "1h 41m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
      description:
        "A retired assassin returns to his dangerous former life after a personal tragedy.",
      watchUrl: "https://www.imdb.com/title/tt2911666/",
    },

    {
      id: 26,
      title: "Mission: Impossible",
      category: "Action",
      rating: 7.2,
      year: 1996,
      duration: "1h 50m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/l5uxY5m5OInWmNq8j2nQ5q7c1W5.jpg",
      description:
        "An elite agent must uncover a traitor within his organization while completing a dangerous mission.",
      watchUrl: "https://www.imdb.com/title/tt0117060/",
    },

    {
      id: 27,
      title: "Top Gun: Maverick",
      category: "Action",
      rating: 8.2,
      year: 2022,
      duration: "2h 10m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
      description:
        "A legendary pilot returns to train a new generation of elite aviators for a dangerous mission.",
      watchUrl: "https://www.imdb.com/title/tt1745960/",
    },

    {
      id: 28,
      title: "Dune",
      category: "Sci-Fi",
      rating: 8.0,
      year: 2021,
      duration: "2h 35m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
      description:
        "A young nobleman travels to a dangerous desert planet and becomes part of a struggle for control.",
      watchUrl: "https://www.imdb.com/title/tt1160419/",
    },

    {
      id: 29,
      title: "Oppenheimer",
      category: "Drama",
      rating: 8.6,
      year: 2023,
      duration: "3h",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      description:
        "The story of the scientist whose work changed the course of history and created a new era.",
      watchUrl: "https://www.imdb.com/title/tt15398776/",
    },

    {
      id: 30,
      title: "Barbie",
      category: "Comedy",
      rating: 6.8,
      year: 2023,
      duration: "1h 54m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      description:
        "Barbie leaves her perfect world and begins an unexpected journey into the real world.",
      watchUrl: "https://www.imdb.com/title/tt1517268/",
    },

    {
      id: 31,
      title: "The Batman",
      category: "Action",
      rating: 7.8,
      year: 2022,
      duration: "2h 56m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      description:
        "Batman investigates a series of crimes that reveal corruption and a dangerous criminal mystery.",
      watchUrl: "https://www.imdb.com/title/tt1877830/",
    },

    {
      id: 32,
      title: "Man of Steel",
      category: "Action",
      rating: 7.1,
      year: 2013,
      duration: "2h 23m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/dksTL9NX6S2LK3hQN4TWl6N1j.jpg",
      description:
        "A young man discovers his extraordinary origins and accepts his destiny as Earth's protector.",
      watchUrl: "https://www.imdb.com/title/tt0770828/",
    },

    {
      id: 33,
      title: "Wonder Woman",
      category: "Action",
      rating: 7.4,
      year: 2017,
      duration: "2h 21m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/imekS7f1OzRgrTjZ3sH5G2r7x5P.jpg",
      description:
        "A warrior princess leaves her island home to help end a global conflict.",
      watchUrl: "https://www.imdb.com/title/tt0451279/",
    },

    {
      id: 34,
      title: "Aquaman",
      category: "Adventure",
      rating: 6.8,
      year: 2018,
      duration: "2h 23m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/ydUpl3QkVUCHCq1A5KQdZ6r9bQ.jpg",
      description:
        "A man discovers his underwater heritage and must claim his place as ruler of an underwater kingdom.",
      watchUrl: "https://www.imdb.com/title/tt1477834/",
    },

    {
      id: 35,
      title: "Shang-Chi",
      category: "Action",
      rating: 7.4,
      year: 2021,
      duration: "2h 12m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA6D0P1n8.jpg",
      description:
        "A martial artist confronts his past and becomes involved with a mysterious organization.",
      watchUrl: "https://www.imdb.com/title/tt9376612/",
    },

    {
      id: 36,
      title: "The Hunger Games",
      category: "Adventure",
      rating: 7.2,
      year: 2012,
      duration: "2h 22m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/yXCbOiVDCxO71zI7cuwBRf3YVv.jpg",
      description:
        "A young woman volunteers to enter a dangerous competition in place of her younger sister.",
      watchUrl: "https://www.imdb.com/title/tt1392170/",
    },

    {
      id: 37,
      title: "Harry Potter and the Sorcerer's Stone",
      category: "Adventure",
      rating: 7.6,
      year: 2001,
      duration: "2h 32m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
      description:
        "A young boy discovers that he is a wizard and begins his magical education at Hogwarts.",
      watchUrl: "https://www.imdb.com/title/tt0241527/",
    },

    {
      id: 38,
      title: "Harry Potter and the Chamber of Secrets",
      category: "Adventure",
      rating: 7.4,
      year: 2002,
      duration: "2h 41m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
      description:
        "Harry returns to Hogwarts and discovers that a mysterious chamber has been opened.",
      watchUrl: "https://www.imdb.com/title/tt0295297/",
    },

    {
      id: 39,
      title: "Harry Potter and the Prisoner of Azkaban",
      category: "Adventure",
      rating: 8.0,
      year: 2004,
      duration: "2h 22m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
      description:
        "Harry returns for another year at Hogwarts while a dangerous prisoner escapes from Azkaban.",
      watchUrl: "https://www.imdb.com/title/tt0304141/",
    },

    {
      id: 40,
      title: "Pirates of the Caribbean",
      category: "Adventure",
      rating: 8.1,
      year: 2003,
      duration: "2h 23m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/z8onk7LV9Mmw6zKz4hT6p4Z7.jpg",
      description:
        "A pirate captain and a young blacksmith join forces to rescue a kidnapped woman.",
      watchUrl: "https://www.imdb.com/title/tt0325980/",
    },

    {
      id: 41,
      title: "The Lion King",
      category: "Adventure",
      rating: 8.5,
      year: 1994,
      duration: "1h 28m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd.jpg",
      description:
        "A young lion prince must overcome loss and return to reclaim his rightful place.",
      watchUrl: "https://www.imdb.com/title/tt0110357/",
    },

    {
      id: 42,
      title: "Toy Story",
      category: "Comedy",
      rating: 8.3,
      year: 1995,
      duration: "1h 21m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
      description:
        "A group of toys comes to life whenever humans are not around and experiences an unexpected adventure.",
      watchUrl: "https://www.imdb.com/title/tt0114709/",
    },

    {
      id: 43,
      title: "Finding Nemo",
      category: "Adventure",
      rating: 8.2,
      year: 2003,
      duration: "1h 40m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGg.jpg",
      description:
        "A father travels across the ocean to find his missing son and meets many unusual characters.",
      watchUrl: "https://www.imdb.com/title/tt0266543/",
    },

    {
      id: 44,
      title: "Up",
      category: "Adventure",
      rating: 8.3,
      year: 2009,
      duration: "1h 36m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/vpbaStTMt8qqXaEgnOR2EE4DNJ.jpg",
      description:
        "An elderly man attaches balloons to his home and begins an extraordinary journey.",
      watchUrl: "https://www.imdb.com/title/tt1049413/",
    },

    {
      id: 45,
      title: "WALL-E",
      category: "Sci-Fi",
      rating: 8.4,
      year: 2008,
      duration: "1h 38m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQI.jpg",
      description:
        "A lonely robot discovers a new purpose when another robot arrives on the abandoned Earth.",
      watchUrl: "https://www.imdb.com/title/tt0910970/",
    },

    {
      id: 46,
      title: "Coco",
      category: "Adventure",
      rating: 8.4,
      year: 2017,
      duration: "1h 45m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJ.jpg",
      description:
        "A young musician enters the magical world of the dead to discover his family's forgotten history.",
      watchUrl: "https://www.imdb.com/title/tt2380307/",
    },

    {
      id: 47,
      title: "Inside Out",
      category: "Comedy",
      rating: 8.1,
      year: 2015,
      duration: "1h 35m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y.jpg",
      description:
        "Inside a young girl's mind, emotions work together to help her handle a major change in her life.",
      watchUrl: "https://www.imdb.com/title/tt2096673/",
    },

    {
      id: 48,
      title: "Ratatouille",
      category: "Comedy",
      rating: 8.1,
      year: 2007,
      duration: "1h 51m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/87mL5y0J9R0kF3Z6p7d8.jpg",
      description:
        "A talented rat dreams of becoming a chef and forms an unlikely partnership with a young kitchen worker.",
      watchUrl: "https://www.imdb.com/title/tt0382932/",
    },

    {
      id: 49,
      title: "The Incredibles",
      category: "Action",
      rating: 8.0,
      year: 2004,
      duration: "1h 55m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58.jpg",
      description:
        "A family of superheroes attempts to live a normal life before being called back into action.",
      watchUrl: "https://www.imdb.com/title/tt0317705/",
    },

    {
      id: 50,
      title: "Monsters, Inc.",
      category: "Comedy",
      rating: 8.1,
      year: 2001,
      duration: "1h 32m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/sgheSKxZkttIe8ONsf2sWXPg.jpg",
      description:
        "Two monsters discover that the human child they accidentally brought into their world may not be dangerous.",
      watchUrl: "https://www.imdb.com/title/tt0198781/",
    },

    {
      id: 51,
      title: "The Social Network",
      category: "Drama",
      rating: 7.8,
      year: 2010,
      duration: "2h",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
      description:
        "The story of the creation of a major social networking platform and the relationships that were affected.",
      watchUrl: "https://www.imdb.com/title/tt1285016/",
    },

    {
      id: 52,
      title: "Whiplash",
      category: "Drama",
      rating: 8.5,
      year: 2014,
      duration: "1h 46m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeNOV.jpg",
      description:
        "A young drummer pushes himself to the limit under the demanding guidance of an intense instructor.",
      watchUrl: "https://www.imdb.com/title/tt2582802/",
    },

    {
      id: 53,
      title: "La La Land",
      category: "Drama",
      rating: 8.0,
      year: 2016,
      duration: "2h 8m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf.jpg",
      description:
        "A musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
      watchUrl: "https://www.imdb.com/title/tt3783958/",
    },

    {
      id: 54,
      title: "The Wolf of Wall Street",
      category: "Drama",
      rating: 8.2,
      year: 2013,
      duration: "3h",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/pWHf4khOlo3yF5k2m8t3.jpg",
      description:
        "A stockbroker rises rapidly through the financial world while living an extravagant and reckless lifestyle.",
      watchUrl: "https://www.imdb.com/title/tt0993846/",
    },

    {
      id: 55,
      title: "The Prestige",
      category: "Thriller",
      rating: 8.5,
      year: 2006,
      duration: "2h 10m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/5MXyQO7DzZc6046.jpg",
      description:
        "Two rival magicians become obsessed with creating the ultimate illusion.",
      watchUrl: "https://www.imdb.com/title/tt0482571/",
    },

    {
      id: 56,
      title: "Shutter Island",
      category: "Thriller",
      rating: 8.2,
      year: 2010,
      duration: "2h 18m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/4GDy0PHYX3VRXUtwK5ysFbg3.jpg",
      description:
        "A federal marshal investigates a mysterious disappearance at an isolated hospital.",
      watchUrl: "https://www.imdb.com/title/tt1130884/",
    },

    {
      id: 57,
      title: "The Departed",
      category: "Thriller",
      rating: 8.5,
      year: 2006,
      duration: "2h 31m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg.jpg",
      description:
        "An undercover cop and a criminal informant attempt to identify each other while working inside opposing organizations.",
      watchUrl: "https://www.imdb.com/title/tt0407887/",
    },

    {
      id: 58,
      title: "The Green Mile",
      category: "Drama",
      rating: 8.6,
      year: 1999,
      duration: "3h 9m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/8VG8fDNiy50H4FedGwdSVUPoa.jpg",
      description:
        "A prison guard develops an unexpected friendship with a mysterious prisoner who possesses a remarkable gift.",
      watchUrl: "https://www.imdb.com/title/tt0120689/",
    },

    {
      id: 59,
      title: "The Truman Show",
      category: "Drama",
      rating: 8.2,
      year: 1998,
      duration: "1h 43m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/vuza0WqY239yBX1ea5x1.jpg",
      description:
        "A man slowly realizes that his entire life may be part of a television program.",
      watchUrl: "https://www.imdb.com/title/tt0120382/",
    },

    {
      id: 60,
      title: "Good Will Hunting",
      category: "Drama",
      rating: 8.3,
      year: 1997,
      duration: "2h 6m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/z2FnLKpFi1HPO7BEJxdkv6hp.jpg",
      description:
        "A young man with extraordinary mathematical ability receives help from an unlikely mentor.",
      watchUrl: "https://www.imdb.com/title/tt0119217/",
    },

    {
      id: 61,
      title: "The Revenant",
      category: "Adventure",
      rating: 8.0,
      year: 2015,
      duration: "2h 36m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/ji3ecJphATlVgWNY0B0RVXZiz.jpg",
      description:
        "A frontiersman fights to survive after being left behind during a dangerous expedition.",
      watchUrl: "https://www.imdb.com/title/tt1663202/",
    },

    {
      id: 62,
      title: "Mad Max: Fury Road",
      category: "Action",
      rating: 8.1,
      year: 2015,
      duration: "2h",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
      description:
        "In a devastated future, a group of survivors attempts to escape across a dangerous wasteland.",
      watchUrl: "https://www.imdb.com/title/tt1392190/",
    },

    {
      id: 63,
      title: "Edge of Tomorrow",
      category: "Sci-Fi",
      rating: 7.9,
      year: 2014,
      duration: "1h 53m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/xjw5trHV7Mwo61P0kCTy8.jpg",
      description:
        "A soldier trapped in a repeating time loop gains the ability to fight an alien invasion more effectively.",
      watchUrl: "https://www.imdb.com/title/tt1631867/",
    },

    {
      id: 64,
      title: "Ready Player One",
      category: "Sci-Fi",
      rating: 7.4,
      year: 2018,
      duration: "2h 20m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdLQ8Qm.jpg",
      description:
        "A teenager enters a massive virtual world and competes to find a hidden prize.",
      watchUrl: "https://www.imdb.com/title/tt1677720/",
    },

    {
      id: 65,
      title: "Blade Runner 2049",
      category: "Sci-Fi",
      rating: 8.0,
      year: 2017,
      duration: "2h 44m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
      description:
        "A young blade runner discovers a secret that leads him to search for a legendary former officer.",
      watchUrl: "https://www.imdb.com/title/tt1856101/",
    },

    {
      id: 66,
      title: "Alien",
      category: "Sci-Fi",
      rating: 8.5,
      year: 1979,
      duration: "1h 57m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3.jpg",
      description:
        "The crew of a spaceship encounters a terrifying life form during a routine mission.",
      watchUrl: "https://www.imdb.com/title/tt0078748/",
    },

    {
      id: 67,
      title: "Terminator 2",
      category: "Action",
      rating: 8.6,
      year: 1991,
      duration: "2h 17m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/5M0j0B18abtBi9Qh4p9.jpg",
      description:
        "A powerful protector is sent back in time to defend a young boy from a deadly machine.",
      watchUrl: "https://www.imdb.com/title/tt0103064/",
    },

    {
      id: 68,
      title: "Die Hard",
      category: "Action",
      rating: 8.2,
      year: 1988,
      duration: "2h 12m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/aJCQpK3mQe7m9Xq3.jpg",
      description:
        "A police officer finds himself trapped in a skyscraper during a dangerous hostage situation.",
      watchUrl: "https://www.imdb.com/title/tt0095016/",
    },

    {
      id: 69,
      title: "Rocky",
      category: "Drama",
      rating: 8.1,
      year: 1976,
      duration: "1h 59m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/8kEwf5yYqQ2w.jpg",
      description:
        "A small-time boxer gets a once-in-a-lifetime opportunity to compete for the heavyweight championship.",
      watchUrl: "https://www.imdb.com/title/tt0075148/",
    },

    {
      id: 70,
      title: "Creed",
      category: "Drama",
      rating: 7.6,
      year: 2015,
      duration: "2h 13m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/1B5oG6Q.jpg",
      description:
        "The son of a legendary boxer seeks guidance from an experienced champion while building his own legacy.",
      watchUrl: "https://www.imdb.com/title/tt3076658/",
    },

    {
      id: 71,
      title: "The Amazing Spider-Man",
      category: "Action",
      rating: 6.9,
      year: 2012,
      duration: "2h 16m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/fSbqPbqXa7ePo8bCNbd.jpg",
      description:
        "Peter Parker discovers secrets about his past while learning to use his new abilities.",
      watchUrl: "https://www.imdb.com/title/tt0948470/",
    },

    {
      id: 72,
      title: "Spider-Man: Homecoming",
      category: "Action",
      rating: 7.4,
      year: 2017,
      duration: "2h 13m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7j9.jpg",
      description:
        "A young Spider-Man attempts to balance school life with his responsibilities as a superhero.",
      watchUrl: "https://www.imdb.com/title/tt2250912/",
    },

    {
      id: 73,
      title: "Doctor Strange in the Multiverse of Madness",
      category: "Sci-Fi",
      rating: 6.9,
      year: 2022,
      duration: "2h 6m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/9Gtg2DzB0K.jpg",
      description:
        "Doctor Strange travels through different realities while facing powerful supernatural threats.",
      watchUrl: "https://www.imdb.com/title/tt9419884/",
    },

    {
      id: 74,
      title: "Black Widow",
      category: "Action",
      rating: 6.7,
      year: 2021,
      duration: "2h 14m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/qAZ0pzat24k.jpg",
      description:
        "Natasha Romanoff confronts her past and reconnects with people from her earlier life.",
      watchUrl: "https://www.imdb.com/title/tt3480822/",
    },

    {
      id: 75,
      title: "The Martian",
      category: "Sci-Fi",
      rating: 8.0,
      year: 2015,
      duration: "2h 24m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/5aGhaIHYuQbqlHWvWYqMC.jpg",
      description:
        "An astronaut stranded on Mars uses his intelligence and determination to survive until help can arrive.",
      watchUrl: "https://www.imdb.com/title/tt3659388/",
    },

    {
      id: 76,
      title: "Gravity",
      category: "Sci-Fi",
      rating: 7.7,
      year: 2013,
      duration: "1h 31m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/kZ2nZw8D6813K.jpg",
      description:
        "Two astronauts struggle to survive after a disaster leaves them stranded in space.",
      watchUrl: "https://www.imdb.com/title/tt1454468/",
    },

    {
      id: 77,
      title: "The Wolf of Wall Street",
      category: "Drama",
      rating: 8.2,
      year: 2013,
      duration: "3h",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/pWHf4khOlo3yF5k2m8t3.jpg",
      description:
        "A stockbroker rises rapidly through the financial world while living an extravagant lifestyle.",
      watchUrl: "https://www.imdb.com/title/tt0993846/",
    },

    {
      id: 78,
      title: "Catch Me If You Can",
      category: "Drama",
      rating: 8.1,
      year: 2002,
      duration: "2h 21m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/ctjEj2xM32Ov.jpg",
      description:
        "A young con artist travels across the world while an FBI agent attempts to catch him.",
      watchUrl: "https://www.imdb.com/title/tt0264464/",
    },

    {
      id: 79,
      title: "The Terminal",
      category: "Comedy",
      rating: 7.4,
      year: 2004,
      duration: "2h 8m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/aZVYJY.jpg",
      description:
        "A traveler becomes unexpectedly stranded inside an international airport.",
      watchUrl: "https://www.imdb.com/title/tt0362227/",
    },

    {
      id: 80,
      title: "The Pursuit of Happyness",
      category: "Drama",
      rating: 8.0,
      year: 2006,
      duration: "1h 57m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/lBYOKAMcxIvuk9s9.jpg",
      description:
        "A struggling father works tirelessly to create a better future for himself and his young son.",
      watchUrl: "https://www.imdb.com/title/tt0454921/",
    },

    {
      id: 81,
      title: "Life of Pi",
      category: "Adventure",
      rating: 7.9,
      year: 2012,
      duration: "2h 7m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/m4bZ8q.jpg",
      description:
        "A young survivor finds himself stranded at sea with an unusual companion.",
      watchUrl: "https://www.imdb.com/title/tt0454876/",
    },

    {
      id: 82,
      title: "The Grand Budapest Hotel",
      category: "Comedy",
      rating: 8.1,
      year: 2014,
      duration: "1h 40m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/eWdyYQreja.jpg",
      description:
        "A legendary hotel concierge and his young assistant become involved in a complicated adventure.",
      watchUrl: "https://www.imdb.com/title/tt2278388/",
    },

    {
      id: 83,
      title: "Parasite",
      category: "Thriller",
      rating: 8.5,
      year: 2019,
      duration: "2h 12m",
      language: "Korean",
      image:
        "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      description:
        "A struggling family slowly becomes involved with a wealthy household, leading to unexpected consequences.",
      watchUrl: "https://www.imdb.com/title/tt6751668/",
    },

    {
      id: 84,
      title: "Train to Busan",
      category: "Action",
      rating: 7.6,
      year: 2016,
      duration: "1h 58m",
      language: "Korean",
      image:
        "https://image.tmdb.org/t/p/w500/vVpEOvdxVBP2aV166j5X.jpg",
      description:
        "Passengers aboard a train fight to survive when a dangerous outbreak spreads across South Korea.",
      watchUrl: "https://www.imdb.com/title/tt5700672/",
    },

    {
      id: 85,
      title: "Your Name",
      category: "Drama",
      rating: 8.4,
      year: 2016,
      duration: "1h 46m",
      language: "Japanese",
      image:
        "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
      description:
        "Two teenagers mysteriously begin experiencing each other's lives despite living far apart.",
      watchUrl: "https://www.imdb.com/title/tt5311514/",
    },

    {
      id: 86,
      title: "Spirited Away",
      category: "Adventure",
      rating: 8.6,
      year: 2001,
      duration: "2h 5m",
      language: "Japanese",
      image:
        "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      description:
        "A young girl enters a mysterious spirit world and must find a way to rescue her parents.",
      watchUrl: "https://www.imdb.com/title/tt0245429/",
    },

    {
      id: 87,
      title: "Everything Everywhere All at Once",
      category: "Sci-Fi",
      rating: 7.8,
      year: 2022,
      duration: "2h 19m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
      description:
        "An ordinary woman discovers that she must connect with alternate versions of herself to save multiple realities.",
      watchUrl: "https://www.imdb.com/title/tt6710474/",
    },

    {
      id: 88,
      title: "Everything's Fine",
      category: "Drama",
      rating: 7.2,
      year: 2020,
      duration: "1h 55m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/6Wdl9N6d.jpg",
      description:
        "A family faces unexpected challenges while trying to stay together and support one another.",
      watchUrl: "https://www.imdb.com/",
    },

    {
      id: 89,
      title: "The Revenant",
      category: "Adventure",
      rating: 8.0,
      year: 2015,
      duration: "2h 36m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/ji3ecJphATlVgWNY0B0RVXZiz.jpg",
      description:
        "A frontiersman struggles to survive and seeks justice after being abandoned during an expedition.",
      watchUrl: "https://www.imdb.com/title/tt1663202/",
    },

    {
      id: 90,
      title: "No Time to Die",
      category: "Action",
      rating: 7.3,
      year: 2021,
      duration: "2h 43m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/iUgygt3fscRo.jpg",
      description:
        "James Bond comes out of retirement to help rescue a kidnapped scientist and confront a dangerous enemy.",
      watchUrl: "https://www.imdb.com/title/tt2382320/",
    },

    {
      id: 91,
      title: "Skyfall",
      category: "Action",
      rating: 7.8,
      year: 2012,
      duration: "2h 23m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/izrHg2UzxG3.jpg",
      description:
        "James Bond faces a mysterious enemy who targets MI6 and threatens someone from his past.",
      watchUrl: "https://www.imdb.com/title/tt1074638/",
    },

    {
      id: 92,
      title: "Casino Royale",
      category: "Action",
      rating: 8.0,
      year: 2006,
      duration: "2h 24m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/lMrE2.jpg",
      description:
        "James Bond takes on a dangerous banker in a high-stakes poker game.",
      watchUrl: "https://www.imdb.com/title/tt0381061/",
    },

    {
      id: 93,
      title: "Kingsman: The Secret Service",
      category: "Action",
      rating: 7.7,
      year: 2014,
      duration: "2h 9m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/r6qM7.jpg",
      description:
        "A young man is recruited into a secret spy organization and trained to become an elite agent.",
      watchUrl: "https://www.imdb.com/title/tt2802144/",
    },

    {
      id: 94,
      title: "The Maze Runner",
      category: "Adventure",
      rating: 6.8,
      year: 2014,
      duration: "1h 53m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/coss7pg1.jpg",
      description:
        "A teenager wakes up in a mysterious maze with no memory of his past.",
      watchUrl: "https://www.imdb.com/title/tt1790864/",
    },

    {
      id: 95,
      title: "Pacific Rim",
      category: "Action",
      rating: 6.9,
      year: 2013,
      duration: "2h 11m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/8wo8e9.jpg",
      description:
        "Humanity builds giant robots to fight enormous creatures emerging from the ocean.",
      watchUrl: "https://www.imdb.com/title/tt1663662/",
    },

    {
      id: 96,
      title: "Godzilla vs. Kong",
      category: "Action",
      rating: 6.3,
      year: 2021,
      duration: "1h 53m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/pgqk.jpg",
      description:
        "Two legendary monsters clash while humans attempt to understand their mysterious connection.",
      watchUrl: "https://www.imdb.com/title/tt5034838/",
    },

    {
      id: 97,
      title: "King Kong",
      category: "Adventure",
      rating: 7.2,
      year: 2005,
      duration: "3h 7m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/6a.jpg",
      description:
        "A film crew travels to a mysterious island and discovers a gigantic ape.",
      watchUrl: "https://www.imdb.com/title/tt0360717/",
    },

    {
      id: 98,
      title: "The Mummy",
      category: "Adventure",
      rating: 7.1,
      year: 1999,
      duration: "2h 4m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/1.jpg",
      description:
        "An adventurer accidentally awakens an ancient mummy and must stop an ancient evil from spreading.",
      watchUrl: "https://www.imdb.com/title/tt0120616/",
    },

    {
      id: 99,
      title: "The Fast and the Furious",
      category: "Action",
      rating: 6.8,
      year: 2001,
      duration: "1h 46m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/g5.jpg",
      description:
        "An undercover police officer becomes involved with a group of street racers while investigating a series of crimes.",
      watchUrl: "https://www.imdb.com/title/tt0232500/",
    },

    {
      id: 100,
      title: "Transformers",
      category: "Action",
      rating: 7.0,
      year: 2007,
      duration: "2h 24m",
      language: "English",
      image:
        "https://image.tmdb.org/t/p/w500/7.jpg",
      description:
        "A teenager becomes caught in a battle between giant alien robots fighting for control of Earth.",
      watchUrl: "https://www.imdb.com/title/tt0418279/",
    },
  ];

  // -----------------------------
  // CATEGORIES
  // -----------------------------

  const categories = [
    "All",
    "Action",
    "Adventure",
    "Drama",
    "Sci-Fi",
    "Thriller",
  ];

  // -----------------------------
  // FAVORITE FUNCTION
  // -----------------------------

  const handleFavorite = (movie) => {
    const alreadyFavorite = favorites.some(
      (item) => item.id === movie.id
    );

    if (alreadyFavorite) {
      setFavorites(
        favorites.filter((item) => item.id !== movie.id)
      );
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  // -----------------------------
  // WATCH NOW
  // -----------------------------

  const handleWatchNow = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // -----------------------------
  // SEARCH + CATEGORY FILTER
  // -----------------------------

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      movie.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: "40px 6%",
      }}
    >
      {/* ================= HEADER ================= */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "30px",
          marginBottom: "35px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p
            style={{
              color: "#e50914",
              fontWeight: "bold",
              letterSpacing: "2px",
              fontSize: "13px",
              marginBottom: "8px",
            }}
          >
            MOVIX COLLECTION
          </p>

          <h1
            style={{
              fontSize: "42px",
              margin: "0 0 10px",
            }}
          >
            Explore Movies
          </h1>

          <p style={{ color: "#999" }}>
            Discover movies, explore genres and find your next
            favorite.
          </p>
        </div>

        {/* FAVORITE COUNT */}

        <div
          style={{
            background: "#181818",
            border: "1px solid #333",
            padding: "12px 20px",
            borderRadius: "8px",
          }}
        >
          ❤️ Favorites: {favorites.length}
        </div>
      </div>

      {/* ================= SEARCH ================= */}

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "500px",
            padding: "14px 18px",
            background: "#181818",
            color: "white",
            border: "1px solid #333",
            borderRadius: "7px",
            outline: "none",
            fontSize: "15px",
          }}
        />
      </div>

      {/* ================= CATEGORIES ================= */}

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "35px",
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: "10px 20px",
              borderRadius: "20px",
              border: "1px solid #333",
              cursor: "pointer",
              background:
                selectedCategory === category
                  ? "#e50914"
                  : "#181818",
              color: "white",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ================= MOVIE COUNT ================= */}

      <p
        style={{
          color: "#888",
          marginBottom: "20px",
        }}
      >
        Showing {filteredMovies.length} movies
      </p>

      {/* ================= MOVIE GRID ================= */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "25px",
        }}
      >
        {filteredMovies.map((movie) => {
          const isFavorite = favorites.some(
            (item) => item.id === movie.id
          );

          return (
            <div
              key={movie.id}
              style={{
                background: "#151515",
                borderRadius: "10px",
                overflow: "hidden",
                transition: "0.3s",
                border: "1px solid #222",
              }}
            >
              {/* ================= POSTER ================= */}

              <div
                style={{
                  height: "330px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* RATING */}

                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "rgba(0,0,0,0.85)",
                    padding: "7px 10px",
                    borderRadius: "5px",
                    fontSize: "13px",
                  }}
                >
                  ⭐ {movie.rating}
                </span>

                {/* FAVORITE */}

                <button
                  onClick={() => handleFavorite(movie)}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "none",
                    background: "rgba(0,0,0,0.8)",
                    color: isFavorite ? "#e50914" : "white",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                >
                  {isFavorite ? "♥" : "♡"}
                </button>
              </div>

              {/* ================= MOVIE INFO ================= */}

              <div style={{ padding: "18px" }}>
                <h2
                  style={{
                    fontSize: "18px",
                    marginBottom: "10px",
                  }}
                >
                  {movie.title}
                </h2>

                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    color: "#999",
                    fontSize: "13px",
                    marginBottom: "18px",
                  }}
                >
                  <span>{movie.year}</span>

                  <span>•</span>

                  <span>{movie.category}</span>
                </div>

                {/* BUTTONS */}

                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <button
                    onClick={() => setSelectedMovie(movie)}
                    style={{
                      flex: 1,
                      padding: "11px",
                      background: "#e50914",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= NO RESULTS ================= */}

      {filteredMovies.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "80px 20px",
          }}
        >
          <h2>No movies found 😕</h2>

          <p
            style={{
              color: "#888",
              marginTop: "10px",
            }}
          >
            Try another movie name or category.
          </p>
        </div>
      )}

      {/* ================= DETAILS MODAL ================= */}

      {selectedMovie && (
        <div
          onClick={() => setSelectedMovie(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            zIndex: 1000,
            overflowY: "auto",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "900px",
              maxWidth: "100%",
              background: "#181818",
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              position: "relative",
            }}
          >
            {/* CLOSE BUTTON */}

            <button
              onClick={() => setSelectedMovie(null)}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "none",
                background: "rgba(0,0,0,0.8)",
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
                zIndex: 5,
              }}
            >
              ✕
            </button>

            {/* MOVIE IMAGE */}

            <img
              src={selectedMovie.image}
              alt={selectedMovie.title}
              style={{
                width: "40%",
                minHeight: "520px",
                objectFit: "cover",
              }}
            />

            {/* MOVIE DETAILS */}

            <div
              style={{
                padding: "50px 35px",
                flex: 1,
              }}
            >
              <p
                style={{
                  color: "#e50914",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  fontSize: "13px",
                }}
              >
                MOVIX MOVIE
              </p>

              <h1
                style={{
                  fontSize: "38px",
                  margin: "10px 0 20px",
                }}
              >
                {selectedMovie.title}
              </h1>

              {/* MOVIE INFORMATION */}

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  color: "#bbb",
                  marginBottom: "20px",
                }}
              >
                <span>{selectedMovie.year}</span>

                <span>•</span>

                <span>{selectedMovie.duration}</span>

                <span>•</span>

                <span>{selectedMovie.language}</span>

                <span>•</span>

                <span>{selectedMovie.category}</span>
              </div>

              {/* RATING */}

              <div
                style={{
                  color: "#ffc107",
                  fontSize: "18px",
                  marginBottom: "25px",
                }}
              >
                ⭐ {selectedMovie.rating} / 10
              </div>

              {/* DESCRIPTION */}

              <p
                style={{
                  color: "#bbb",
                  lineHeight: "1.8",
                  marginBottom: "30px",
                }}
              >
                {selectedMovie.description}
              </p>

              {/* ACTION BUTTONS */}

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  onClick={() =>
                    handleWatchNow(selectedMovie.watchUrl)
                  }
                  style={{
                    padding: "13px 25px",
                    background: "white",
                    color: "black",
                    border: "none",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  ▶ Watch Now
                </button>

                <button
                  onClick={() =>
                    handleFavorite(selectedMovie)
                  }
                  style={{
                    padding: "13px 25px",
                    background: "#333",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  {favorites.some(
                    (item) => item.id === selectedMovie.id
                  )
                    ? "♥ Remove Favorite"
                    : "♡ Add Favorite"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;