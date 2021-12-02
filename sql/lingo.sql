create table names (
    id serial primary key,
    player text not null,
    level int not null
);

create table levels (
    id serial primary key,
    player_id int,
    foreign key(player_id) references names(id)
);