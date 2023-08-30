FROM postgres
COPY initMod3Db.sql /docker-entrypoint-initdb.d/
