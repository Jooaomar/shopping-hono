export class ConfigDefault{
    
    host: string
    port: number
    database: string
    user: string
    password: string

    constructor(host: string, port: number, database: string, user: string, password: string){
        this.host = host
        this.port = port
        this.database = database
        this.user = user
        this.password = password
    }
}