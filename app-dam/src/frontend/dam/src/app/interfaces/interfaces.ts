export interface Dispositivo {
    dispositivoId: number,
    nombre: string,
    ubicacion: string,
}


export interface Medicion {
    medicionId: number,
    fecha: Date,
    valor: string,
    dispositivoId: number,
}