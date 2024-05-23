To install dependencies:
```sh
bun install
```

To run:
```sh
bun run dev
```

open http://localhost:3000

## Creating database

Before loading the application, create a database.

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

-- Add a UNIQUE constraint on the id column
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

-- Add a UNIQUE constraint on the id column
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
-- Add foreign key constraint for customer_id
ALTER TABLE pedidos
ADD CONSTRAINT pedidos_id_cliente_fkey
FOREIGN KEY (id_cliente) 
REFERENCES cliente(id);
```

```sql
-- Add foreign key constraint for product_id
ALTER TABLE pedidos
ADD CONSTRAINT pedidos_id_produto_fkey
FOREIGN KEY (id_produto) 
REFERENCES produto(id);
```
