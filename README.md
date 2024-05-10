To install dependencies:
```sh
bun install
```

To run:
```sh
bun run dev
```

open http://localhost:3000

## Banco de Dados

### Cliente

```sql
CREATE TABLE cliente (
    id serial PRIMARY KEY,
    nome character varying(255),
    rua character varying(255),
    bairro character varying(255),
    cidade character varying(255),
    estado character varying(255),
    numero_casa integer,
    cpf integer
);

-- Adiciona uma restrição UNIQUE na coluna id
ALTER TABLE cliente ADD CONSTRAINT cliente_id_unique UNIQUE (id);
```

### Produto
```sql
CREATE TABLE produto (
    id SERIAL PRIMARY KEY,
    nome character varying(255),
    preco double precision,
    image character varying(255),
    quantidade integer DEFAULT 0,
    habilitado boolean NOT NULL DEFAULT true
);

-- Adiciona uma restrição UNIQUE na coluna id
ALTER TABLE produto ADD CONSTRAINT produto_id_unique UNIQUE (id);
```

### Pedidos
```sql
CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    id_cliente integer,
    id_produto integer,
    quantidade integer,
    codigo_pedido integer UNIQUE
);
```

Relacionamentos:

```sql
-- Adiciona a restrição de chave estrangeira para id_cliente
ALTER TABLE pedidos
ADD CONSTRAINT pedidos_id_cliente_fkey
FOREIGN KEY (id_cliente) 
REFERENCES cliente(id);
```

```sql
-- Adiciona a restrição de chave estrangeira para id_produto
ALTER TABLE pedidos
ADD CONSTRAINT pedidos_id_produto_fkey
FOREIGN KEY (id_produto) 
REFERENCES produto(id);
```

### Testes
Para excluir todos os dados de uma tabela e reiniciar a contagem do id:
```sql
BEGIN;
DELETE FROM sua_tabela;
TRUNCATE TABLE sua_tabela RESTART IDENTITY;
COMMIT;

``` 

## Testes

Antes de executar os testes com `bun test` ou de outra forma caso você não use o `bun js` você deve certifica-se de que os dados no bganco de dados adicionados através de testes tenham sido apagados: `delete from pedidos;`, `delete from produto;`, `delete from cliente;`