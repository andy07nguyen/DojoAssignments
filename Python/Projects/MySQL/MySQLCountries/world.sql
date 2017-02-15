select countries.name, languages.language, languages.percentage
from countries
join languages on countries.id = languages.country_id
where languages.language = "slovene"
order by languages.percentage desc;


SELECT countries.name, COUNT(cities.name)
FROM countries
JOIN cities ON countries.id = cities.country_id
GROUP BY countries.name
ORDER BY COUNT(cities.name) DESC;


SELECT countries.name, cities.country_code, cities.population
FROM countries
JOIN cities ON countries.id = cities.country_id
WHERE cities.country_code = "mex" AND cities.population > 500000;


SELECT countries.name, languages.language, languages.percentage FROM countries
JOIN  languages ON countries.id = languages.country_id
WHERE languages.percentage > 89
ORDER BY languages.percentage DESC;


SELECT countries.name, countries.surface_area, countries.population FROM countries
WHERE countries.surface_area < 501 AND countries.population > 100000;


SELECT countries.name, countries.government_form, countries.capital, countries.life_expectancy FROM countries
WHERE countries.government_form = "Constitutional Monarchy" AND countries.capital > 200 AND countries.life_expectancy > 75;


SELECT countries.code, countries.name, cities.name, cities.population FROM countries
JOIN cities ON countries.id = cities.country_id
WHERE countries.name = "Argentina" AND cities.district = "Buenos Aires" AND cities.population > 500000;


SELECT COUNT(countries.name) AS num, countries.region FROM countries
GROUP BY countries.region
ORDER BY num DESC;




