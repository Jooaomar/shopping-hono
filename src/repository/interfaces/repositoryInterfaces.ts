import { Produto } from "../../domain/Entity/Produto"

export interface configs<T>{
    tabela: string
    mapping: (value: T) => T;
    conect():void
    config(): void
    toSave([...values]): void
    // getAll(mapping: <T>(value: Array<string>) => T)
    // obtainOne()
};