/* 1- film tablosunda bulunan filmleri rating değerlerine göre gruplayınız.*/
SELECT rating from film GROUP BY rating

/* 2- film tablosunda bulunan filmleri replacement_cost sütununa göre grupladığımızda film sayısı 50 den fazla olan replacement_cost değerini ve karşılık gelen film sayısını sıralayınız. */
SELECT replacement_cost, count(*) from film GROUP by replacement_cost having count(*)>50