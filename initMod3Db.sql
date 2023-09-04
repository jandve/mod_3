create table if not exists users
(
    id              serial primary key,
    ci              varchar(10) not null,
    name            varchar(30) not null,
    first_lastname  varchar(30) not null,
    second_lastname varchar(30) not null,
    birth           date,
    enabled         bool not null
);

insert into users(ci, name, first_lastname, second_lastname, birth, enabled)
values('545684', 'admin', 'adminFn', 'adminSn', 'jun 2 1984', true);
