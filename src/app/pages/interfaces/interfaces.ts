
export interface IAlumnos{
    id:Number;
    nombre:String;
    apellido:String;
    username:String;
    carrera:String;
}

export interface IAlumno{
    nombre:String;
    apellido:String;
    username:String;
    carrera:String;
}

export interface Users{
    id:number;
    username:String;
    password:String;
    role:String;
    isactive:boolean;
}