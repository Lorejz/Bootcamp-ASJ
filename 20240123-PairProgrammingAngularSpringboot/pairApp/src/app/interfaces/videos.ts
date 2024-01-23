
export interface Videos{
    id : number,
    url_video : string,
    nombre_categoria : Categorias,
    titulo : string,
    descripcion : string,
    cant_vistas : number,
    cant_megusta : number,
    cant_nomegusta : number,
    baja : boolean
}

export type Categorias =
"Entretenimiento" |
"Tecnologia" |
"Ingenieria" |
"Software" |
"Otro" |
"";