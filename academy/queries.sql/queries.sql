--Find all movies that were made in the year you were born.
SELECT * FROM movies WHERE year = 1987;

--starts with Car
SELECT * FROM movies WHERE name like "Car%";

-- How many movies does our dataset have for the year 1982

SELECT count(*) from movies WHERE year = 1982;

-- Find actors who have "stack" in their last name
select * from actors WHERE name like "%stack%"

--  How many movies does IMDB have of each genre, ordered by least popular genre.
SELECT COUNT(*) , genre
FROM movies_genres
GROUP BY genre
ORDER BY COUNT(*);

-- Braveheart actors.
SELECT actors.first_name , actors.last_name
FROM actors JOIN roles
ON actors.id = roles.actor_id JOIN movies ON roles.movie_id = movies.id WHERE movies.name="Braveheart"

--Kevin bacON stuff...

SELECT movies.name, actors.first_name, actors.last_name FROM actors JOIN roles ON roles.actor_id = actors.id JOIN movies ON movies.id = roles.movie_id WHERE (actors.first_name != "Kevin" OR actors.last_name != "Bacon") and roles.movie_id in (SELECT movies.id from movies JOIN movies_genres ON movies_genres.movie_id = movies.id JOIN roles ON roles.movie_id = movies.id JOIN actors ON actors.id = roles.actor_id WHERE genre = "Drama" AND actors.first_name = "Kevin" AND actors.last_name = "Bacon")

-- select directors.first_name, directors.last_name, movies.name, movies.year from directors JOIN movies_directors ON directors.id = movies_directors.director_id JOIN movies ON movies.id = movies_directors.director_id JOIN movies_genres ON movies_genres.movie_id = movies.id WHERE movies.year % 4 = 0 AND movies_genres.genre = "Film-Noir"

SELECT directors.first_name, directors.last_name, movies.name, movies.year FROM
directors JOIN movies_directors ON directors.id = movies_directors.director_id JOIN movies ON directors.id = movies_directors.movie_id JOIN movies_genres ON movies.id = movies_genres.movie_id WHERE movies.year % 4 = 0 AND movies_genres.genre ="Film-Noir" GROUP BY directors.last_name;