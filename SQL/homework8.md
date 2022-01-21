
# 1- test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
```sql
CREATE TABLE employee(
	id INTEGER,
	name VARCHAR(50),
	birthday DATE,
	email VARCHAR(100)
	)
  
 
```
 # 2- Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.

id | name | birthday | email
------------- | ------------- | ------------- | -------------
1 | Arnoldo Haibel | 11/9/2021 | ahaibel0@surveymonkey.com
2 | Reinhard Brandt | 8/22/2021 | rbrandt1@wikia.com
3 | Booth Gooden | 4/9/2021 | bgooden2@etsy.com
4 | Bee Gundry | 6/30/2021 | bgundry3@msn.com
5 | Blondy Birth | 7/9/2021 | bbirth4@cbc.ca
6 | Jock Fillary | 11/25/2021 | jfillary5@nasa.gov
7 | Kasey Cruickshanks | 2/7/2021 | kcruickshanks6@vkontakte.ru
8 | Stevena Cartmale | 3/7/2021 | scartmale7@symantec.com
9 | Sidonia Lahrs | 8/18/2021 | slahrs8@accuweather.com
10 | Reeba Boon | 7/30/2021 | rboon9@telegraph.co.uk
11 | Bertine Rooke | 12/21/2021 | brookea@mit.edu
12 | Ginnifer Rapi | 3/21/2021 | grapib@behance.net
13 | Devondra Huard | 8/5/2021 | dhuardc@cafepress.com
14 | Liane Antonich | 5/28/2021 | lantonichd@delicious.com
15 | Karalee Eccles | 3/13/2021 | kecclese@npr.org
16 | Pascal Hinckesman | 6/24/2021 | phinckesmanf@hud.gov
17 | Dorothee Lartice | 3/25/2021 | dlarticeg@theglobeandmail.com
18 | Gianna Bowen | 12/23/2021 | gbowenh@bizjournals.com
19 | Flemming Boddington | 7/5/2021 | fboddingtoni@google.pl
20 | Virgil Gann | 9/28/2021 | vgannj@independent.co.uk
21 | Sandra Ratcliff | 3/13/2021 | sratcliffk@elpais.com
22 | Lois MacCard | 6/2/2021 | lmaccardl@ft.com
23 | Fran Fennick | 2/10/2021 | ffennickm@linkedin.com
24 | Nichol Charity | 12/14/2021 | ncharityn@si.edu
25 | Antonina Hassard | 2/24/2021 | ahassardo@technorati.com
26 | Reyna Balogh | 8/29/2021 | rbaloghp@webmd.com
27 | Lynda Charge | 8/13/2021 | lchargeq@harvard.edu
28 | Rog Meineck | 7/26/2021 | rmeineckr@blogs.com
29 | Juliana Urrey | 1/26/2021 | jurreys@usgs.gov
30 | Prent Stoffel | 7/9/2021 | pstoffelt@salon.com
31 | Ibrahim Board | 3/16/2021 | iboardu@go.com
32 | Randee Giorgioni | 6/29/2021 | rgiorgioniv@a8.net
33 | Adeline Odegaard | 11/1/2021 | aodegaardw@lulu.com
34 | Bobinette Neenan | 8/4/2021 | bneenanx@usatoday.com
35 | Wilma Cutteridge | 6/12/2021 | wcutteridgey@feedburner.com
36 | Donnamarie Allanson | 8/22/2021 | dallansonz@homestead.com
37 | Minda Dunnett | 9/8/2021 | mdunnett10@amazonaws.com
38 | Ozzy Mordanti | 11/12/2021 | omordanti11@php.net
39 | Esdras Boys | 7/14/2021 | eboys12@studiopress.com
40 | Papagena Bottlestone | 3/7/2021 | pbottlestone13@sfgate.com
41 | Sindee Bullock | 11/2/2021 | sbullock14@desdev.cn
42 | Xymenes Rockcliff | 10/13/2021 | xrockcliff15@netscape.com
43 | Shelba Tsar | 3/3/2021 | stsar16@exblog.jp
44 | Quillan Prinnett | 4/11/2021 | qprinnett17@odnoklassniki.ru
45 | Winthrop Royce | 4/16/2021 | wroyce18@twitter.com
46 | Paddie Oldmeadow | 6/11/2021 | poldmeadow19@usda.gov
47 | Neal Bough | 6/13/2021 | nbough1a@freewebs.com
48 | Esme Morde | 11/25/2021 | emorde1b@imageshack.us
49 | Stoddard Varren | 12/28/2021 | svarren1c@usda.gov
50 | Erin Confait | 2/22/2021 | econfait1d@wikimedia.org

# 3-Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
```sql
update employee 
set name='Terrase May' 
where id=25;

update employee 
set email=concat(email,".tr")  
where id>25 and id<34;

update employee 
set birthdate='2000-01-31'  
where name like 'A%';

update employee 
set name= 'X'
where birthdate between '2021-01-01' and '2021-06-30';

update employee 
set birthdate='2012-01-31'  
where name like 'W%'; and between '2021-07-01' and '2021-09-30';


# 4-Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.

```sql
delete from employee 
where id=25;

delete from employee 
where id>25 and id<34;

delete from employee 
where name like 'A%';

delete from employee 
where birthdate between '2021-01-01' and '2021-06-30';

delete from employee 
where name like 'W%'; and between '2021-07-01' and '2021-09-30';
