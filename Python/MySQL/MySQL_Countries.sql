-- 1. Which countries speak Slovene?
SELECT name, language, percentage
FROM countries
LEFT JOIN languages
ON countries.id = languages.country_id
WHERE language = 'Slovene'
ORDER BY percentage DESC;

-- 2. How many cities in each country?
SELECT countries.name, COUNT(cities.id)
FROM countries
LEFT JOIN cities
ON countries.id = cities.country_id
GROUP BY countries.id
ORDER BY COUNT(cities.id) DESC;

-- 3. All cities in Mexico with population > 500K
SELECT cities.name, cities.population
FROM cities
LEFT JOIN countries
ON countries.id = cities.country_id
WHERE countries.name = "Mexico" AND cities.population > 500000
ORDER BY cities.population DESC;

-- 4. Get all languages in each country with percentage > 89%
SELECT countries.name, languages.language, languages.percentage
FROM languages
LEFT JOIN countries
ON countries.id = languages.country_id
WHERE languages.percentage > 89
ORDER BY languages.percentage DESC;

-- 5. All countries with area < 501 AND population > 100K
SELECT name, surface_area, population
FROM countries
WHERE surface_area < 501
AND population > 100000;

-- 6. Constitutional Monarchy countries with capital > 200 AND life expectancy > 75
SELECT name, government_form, capital, life_expectancy
FROM countries
WHERE government_form = 'Constitutional Monarchy'
AND capital > 200
AND life_expectancy > 75;

-- 7. Cities in Argentina's Buenos Aires district with pop. > 500K
SELECT countries.name, cities.name, cities.district, cities.population
FROM countries
LEFT JOIN cities
ON countries.id = cities.country_id
WHERE countries.name = 'Argentina'
AND cities.district = 'Buenos Aires'
AND cities.population > 500000;

-- 8. Summary of number of countries in each region.
SELECT region, COUNT(id)
FROM countries
GROUP BY region 
ORDER BY COUNT(id) DESC;
