create schema local;

create table local.post (
    cep serial primary key,
    nome text not null,
    descricao text not null,
    date timestamp default now()
);

insert into local.post (nome, descricao) values ('Praça Tamandaré', '...'),('Shopping Partage', '...'),('Avenida Rio Grande', '...'),('Rincão da Cebola', '...');

select * from local.post;