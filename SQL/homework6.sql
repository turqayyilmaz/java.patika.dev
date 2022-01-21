/* 1- film tablosunda bulunan rental_rate sütunundaki değerlerin ortalaması nedir? */

SELECT AVG(rental_rate) FROM film;

/* 2- film tablosunda bulunan filmlerden kaç tanesi 'C' karakteri ile başlar?*/
SELECT count(*) from film where title like 'C%';

/* 3- film tablosunda bulunan filmlerden rental_rate değeri 0.99 a eşit olan en uzun (length) film kaç dakikadır?*/

SELECT length from film where rental_rate=0.99 order by length limit 1


/* 4- film tablosunda bulunan filmlerin uzunluğu 150 dakikadan büyük olanlarına ait kaç farklı replacement_cost değeri vardır?*/

SELECT COUNT(DISTINCT(replacement_cost)) from film where length>150 