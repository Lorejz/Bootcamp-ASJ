
--1 - Listar todos los artitas por Discografica, ordenados por el nombre del artista
SELECT a.nombre as Nombre, d.nombre as Discografica
FROM artista a, discografica d
WHERE a.discografica_id = d.id
ORDER BY a.nombre ASC
--2 - Que Discográfica NO tiene artistas? 1, 2 ,3 y 6 -- 4 5 deberian ser mca y elektra
SELECT DISTINCT d.nombre as 'Nombre Discografica', d.id as 'Id Discografica'
FROM discografica d, artista a
WHERE d.id NOT IN( 
	SELECT a.discografica_id
	FROM artista a
	)
--3 - Listar el numero de canciones por artista en orden descendiente
SELECT a.nombre AS artista, COUNT(c.id) AS 'cantidad canciones'
FROM canciones c
JOIN album al ON al.id = c.album_id
JOIN artista a ON a.id = al.artista_id
GROUP BY a.nombre
ORDER BY 'cantidad canciones' DESC
--4 - Que artista grabó el mayor numero de canciones?
	SELECT TOP 1 a.nombre as Artista , COUNT(c.id) as cantidadMax
	FROM canciones c
	JOIN album al ON al.id = c.album_id
	JOIN artista a ON a.id = al.artista_id
	GROUP BY a.nombre
	ORDER BY cantidadMax desc
--5 - Por cada artista y cada album, cuantas canciones tienen menos de 5 minutos de duracion?
SELECT a.nombre AS artista, al.nombre AS album, COUNT(c.id) AS 'cantidad canciones'
FROM canciones c
JOIN album al ON al.id = c.album_id
JOIN artista a ON a.id = al.artista_id
WHERE c.duracion < 5
GROUP BY a.nombre, al.nombre
--6 - En relación con la consulta anterior, muestra también las canciones y su duración
SELECT a.nombre AS artista, al.nombre AS album, c.nombre as cancion, c.duracion as duracion
FROM canciones c
JOIN album al ON al.id = c.album_id
JOIN artista a ON a.id = al.artista_id
WHERE c.duracion < 5
ORDER BY a.nombre asc
--7 - Qué artistas grabaron canciones mas largas que 5 minutos, y cuántas canciones fueron?
SELECT a.nombre AS artista, COUNT(c.id) AS 'cantidad canciones'
FROM canciones c
JOIN album al ON al.id = c.album_id
JOIN artista a ON a.id = al.artista_id
WHERE c.duracion > 5
GROUP BY a.nombre
ORDER BY 'cantidad canciones' DESC
-- 8. En que año se grabaron la mayoría de las canciones?
SELECT TOP 1 al.anio as anio , COUNT(al.anio) as 'cant. maxima'
FROM album al
GROUP BY al.anio
ORDER BY 'cant. maxima' desc

-- Mostrar todos los máximos
SELECT al.anio, COUNT(al.anio) AS 'cant. maxima'
FROM album al
GROUP BY al.anio
HAVING COUNT(al.anio) = (
    SELECT TOP 1 COUNT(al2.anio)
    FROM album al2
    GROUP BY al2.anio
    ORDER BY COUNT(al2.anio) DESC
);
SELECT * FROM album

--9 - Mostrar el ranking de los 5 artistas, album, canción y año con las canciones más largas
SELECT TOP 5 a.nombre AS artista, al.nombre AS album, al.anio, c.duracion
FROM canciones c
JOIN album al ON al.id = c.album_id
JOIN artista a ON a.id = al.artista_id
ORDER BY c.duracion DESC
--10 - Duración total de todas las canciones grabadas por cada artista en orden descendente

SELECT a.nombre AS artista, SUM(c.duracion) as 'Duracion Total'
FROM canciones c
JOIN album al ON al.id = c.album_id
JOIN artista a ON a.id = al.artista_id
GROUP BY a.nombre
ORDER BY 'Duracion Total' DESC

--11 - Que artistas y album no tienen canciones de menos de 5 minutos?
SELECT DISTINCT a.nombre AS artista, al.nombre AS album
FROM canciones c
JOIN album al ON al.id = c.album_id
JOIN artista a ON a.id = al.artista_id
WHERE c.duracion > 5
--12 - Mostrar el top 3 de artistas con el promedio de duración de las canciones, en orden descendente con la canción mas larga primero

SELECT TOP 3 a.nombre AS artista, AVG(c.duracion) as Promedio
FROM canciones c
JOIN album al ON al.id = c.album_id
JOIN artista a ON a.id = al.artista_id
GROUP BY a.nombre
ORDER BY Promedio DESC
	--ver tema "la cancion mas larga primero"

--13 - Qué artistas no lanzaron un album durante la decada de 1980 y 1990?
SELECT DISTINCT a.nombre AS artista
FROM artista a
JOIN album al ON al.artista_id = a.id
WHERE al.anio <= 1980 OR al.anio >= 1990;
--14 - Duración total del album Sgt. Pepper's de los Beatles (mostrar en minutos y segundos)
SELECT SUM(c.duracion) AS minutos, SUM(c.duracion) * 60 AS segundos
FROM canciones c
WHERE c.album_id = 13

SELECT DISTINCT a.nombre AS artista
FROM artista a
JOIN album al ON al.artista_id = a.id
WHERE al.anio < 1980 OR al.anio > 1999;

-- Mostrando nombre del album
SELECT al.nombre AS album, SUM(c.duracion) AS minutos, SUM(c.duracion) * 60 AS segundos
FROM canciones c, album al
WHERE c.album_id = al.id
AND al.id = 13
GROUP BY al.nombre




SELECT * FROM canciones
SELECT * FROM discografica
SELECT * FROM artista
SELECT * FROM canciones
SELECT * FROM album