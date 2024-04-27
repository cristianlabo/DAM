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


export interface LogRiego {
    nombreSensor: string,
    nombreElectrovalvula: string,
    logRiegoId: number,
    apertura: number,
    fecha: Date,
    electrovalvulaId: number

}


