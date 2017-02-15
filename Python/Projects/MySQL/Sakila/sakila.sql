SELECT city.city_id, city.city, address.address, address.district, address.postal_code, customer.first_name, customer.last_name, customer.email FROM city
JOIN address ON city.city_id = address.city_id
JOIN customer ON address.address_id = customer.address_id
WHERE city.city_id = 312; 


SELECT film.title, film.description, film.release_year, film.rating, film.special_features, film.film_id, film_category.category_id, category.name FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON category.category_id = film_category.category_id
WHERE category.name = "Comedy";


SELECT film.title, film.description, film.release_year, actor.actor_id FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE actor.actor_id = 5;


SELECT city.city_id, city.city, address.address, customer.first_name, customer.last_name, customer.email, customer.store_id FROM city
JOIN address ON city.city_id = address.city_id
JOIN customer ON address.address_id = customer.address_id
WHERE customer.store_id = 1 AND city.city_id = 1 OR customer.store_id = 1 AND city.city_id = 42 OR customer.store_id = 1 AND city.city_id = 312 OR customer.store_id = 1 AND city.city_id = 459; 

 
SELECT film.title, film.description, film.release_year, film.rating, film.special_features, film_actor.actor_id FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film_actor.actor_id = 15 AND film.rating = "G" OR film.special_features = '%behind%';


SELECT film.film_id, film.title, actor.actor_id, actor.first_name, actor.last_name FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE film.film_id = 369;


SELECT film.title, film.description, film.release_year, film.rating, film.special_features, film.film_id, film.rental_rate, film_category.category_id, category.name FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON category.category_id = film_category.category_id
WHERE category.name = "Drama" AND film.rental_rate = 2.99;


SELECT film.title, film.description, film.release_year, film.rating, film.special_features, film.film_id, film_category.category_id, category.name, actor.first_name, actor.last_name FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON category.category_id = film_category.category_id
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE category.name = "Action" AND actor.first_name = "SANDRA" AND actor.last_name = "KILMER";




