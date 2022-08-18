import { Component, ComponentFactoryResolver, Injector, OnInit } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { IndicatorsService } from './indicators.service';
import { IndicatorListItem } from './models/indicator-list-item';
import { IndicatorList } from './models/indicator-list';
import Swal from 'sweetalert2';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css']
})
export class IndicatorsComponent implements OnInit {

  indicatorList: IndicatorListItem[] = [];
  isLoading: boolean = false;

  constructor(
    private indicatorsService: IndicatorsService,
    private resolve: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.indicatorsService.getIndicators().subscribe({
      next: (indicators) => {
        // Esto porque la respuesta de mindicador.cl no provee un arreglo de indicadores en el que pueda iterar
        this.indicatorList.push(indicators.uf);
        this.indicatorList.push(indicators.ivp);
        this.indicatorList.push(indicators.dolar);
        this.indicatorList.push(indicators.dolar_intercambio);
        this.indicatorList.push(indicators.euro);
        this.indicatorList.push(indicators.ipc);
        this.indicatorList.push(indicators.utm);
        this.indicatorList.push(indicators.imacec);
        this.indicatorList.push(indicators.tpm);
        this.indicatorList.push(indicators.libra_cobre);
        this.indicatorList.push(indicators.tasa_desempleo);
        this.indicatorList.push(indicators.bitcoin);

        this.isLoading = false;
      },
      error: (e) => {
        console.log('error', e)
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error inesperado!',
          text: e.message
        })
      },
      complete: () => this.isLoading = false 
    })

  }

  public onIndicatorClick(indicator:string){
    const factory = this.resolve.resolveComponentFactory(ModalComponent);
    const component = factory.create(this.injector);
    this.isLoading = true;

    this.indicatorsService.getIndicatorByName(indicator).subscribe({
      next: (indicator) =>{
        component.instance.indicator = indicator
        component.changeDetectorRef.detectChanges();

        Swal.fire({
          html: component.location.nativeElement
        }).then(() => {
          component.destroy();
        });
      },
      error: (e) => {
        console.log('error', e)
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error inesperado!',
          text: e.message
        })
      },
      complete: () => this.isLoading = false 
    })
  }
}
