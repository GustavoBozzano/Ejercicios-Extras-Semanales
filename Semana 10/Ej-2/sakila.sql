USE sakila;

-- Escribe a continuación el código SQL solicitado.
# 1 - Actores que contengan una "O" en su nombre y una "A" en su apellido.
SELECT *
FROM actor
WHERE first_name LIKE "%O%" AND last_name LIKE "%A%";

# 2 - Duración media de todas las películas.
SELECT avg(length) AS media_duracion
FROM film;

# 3 - Películas con un rating PG y duración de más de 120.
SELECT *
FROM film
WHERE rating = "PG" AND length > 120;

# 4 - Número total de apellidos distintos entre todos los actores.
SELECT count(DISTINCT last_name) AS total_apellidos_distintos
FROM actor;

# 5 - Ciudad en la que vive el cliente "Sandra Martin" (utilizando JOIN).
SELECT cu.first_name, cu.last_name, ci.city
FROM customer cu
JOIN address ad ON cu.address_id = ad.address_id
JOIN city ci ON ad.city_id = ci.city_id
WHERE cu.first_name = "Sandra" AND last_name = "Martin";