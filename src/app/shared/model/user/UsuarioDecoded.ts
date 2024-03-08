
export class UsuarioDecoded {
    preferred_username: string;
    exp: number;
    iat:number;
    name: string;
    email: string;
    realm_access: Roles
    username: string;
    constructor() { }
}

export class Roles {
    roles: string []
    constructor() { }
}