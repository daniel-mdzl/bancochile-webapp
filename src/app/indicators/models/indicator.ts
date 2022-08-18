export class Indicator {
    version: string = ""
    autor:string = ""
    codigo:string =	""
    nombre:string =	""
    unidad_medida:string = ""
    serie: Array<{ fecha: string; valor: number }> = []
}
