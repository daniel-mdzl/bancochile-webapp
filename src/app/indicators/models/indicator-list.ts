import { IndicatorListItem } from "./indicator-list-item";

export class IndicatorList {
    version: string = '';
    author: string = '';
    fecha: string = '';
    uf: IndicatorListItem = new IndicatorListItem();
    ivp: IndicatorListItem = new IndicatorListItem();
    dolar: IndicatorListItem = new IndicatorListItem();
    dolar_intercambio: IndicatorListItem = new IndicatorListItem();
    euro: IndicatorListItem = new IndicatorListItem();
    ipc: IndicatorListItem = new IndicatorListItem();
    utm: IndicatorListItem = new IndicatorListItem();
    imacec: IndicatorListItem = new IndicatorListItem();
    tpm: IndicatorListItem = new IndicatorListItem();
    libra_cobre: IndicatorListItem = new IndicatorListItem();
    tasa_desempleo: IndicatorListItem = new IndicatorListItem();
    bitcoin: IndicatorListItem = new IndicatorListItem();
}
