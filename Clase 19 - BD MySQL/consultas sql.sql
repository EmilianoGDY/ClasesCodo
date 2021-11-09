select * from country order by population desc;

select * from country where code = 'ARG'

select * from country where name like 'a%'

select * from country where continent in ('south america')

//funciones MySQL


1- sum 

select sum (population) from country as 'Suma Total'

2- count 

select count (name) from country

3- max y min

select name,max(population)  from country

//GROUP by

select continent, sum(population) from country group by continent

//cantidad de paises con population mayor a 40000000 de cada continente


select count(name),continent from country where population > 40000000 group by continent

//todos los contienentes con poblacion , pero solo los que tengan mas poblacion que oceania

select continent, sum (population) from country group by continent having (population) > 30000000