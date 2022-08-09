import { Component, OnInit } from '@angular/core';
import { ISelectItem, RadioButtonControl } from 'projects/vuce2-custom/src/public-api';
import { IModuleContentGroup } from 'projects/vuce2-lib-custom/src/public-api';
import { BienvenidaService } from './bienvenida.service';


@Component({
  selector: 'form-control',
  templateUrl: './bienvenida.component.html',

  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {
  nombre = "Juan Perez";
  componente = "MERCANCIAS RESTRINGIDAS";
  dataForm: string;
  imagen = './../../../../assets/image/Ilustracion.svg';
  productos: ISelectItem[]=[
    {
      id: '1',
      text: 'Producto'
    }
  ];
  modulesMenu = [
    {
      name: 'Dashboard',
      subModules: null
    },
    {
      name: 'Mercancias',
      subModules: null
    },
    {
      name: 'Solictudes',
      subModules: null
    },
    {
      name: 'Reportes',
      subModules: null
    },
    {
      name: 'Consultas',
      subModules: null
    }
  ];
  rubros: RadioButtonControl;
  valor: boolean;
  modules: IModuleContentGroup[] = [];
  usuario: any;
  completoMandar: boolean[] = [
    true,
    false,
    true
  ]
  card: any = [
    {
      title: 'DIGEMID',
      mostrar: false,
    },
    {
      title: 'DIGEMID2',
      mostrar: false,
    },
    {
      title: 'DIGEMID3',
      mostrar: false,
    },
  ]

  tab: any = [
    {
      ngName: 'numero 1',
      disabled: false,
      caption: 'titulo 1',
      class: 'completo'
    },
    {
      ngName: 'numero 2',
      disabled: false,
      caption: 'titulo 2'
    },
    // {
    //   ngName: 'numero 3',
    //   disabled: false,
    //   caption: 'titulo 3'
    // },
    // {
    //   ngName: 'numero 3',
    //   disabled: false,
    //   caption: 'titulo 3'
    // }
  ]

  constructor(private service: BienvenidaService) { }

  ngOnInit(): void {
    this.usuario = {
      idUser: '11d95a03-1dbf-480f-9b75-edffa6a366fa',
      name: 'Juan Perez Mejia',
      rol: 'Funcionario',
      icon: '/assets/vuce2-assets/images/user_vuce.png'
    }


   
  }
  onValorEvent(e:any){
    console.log(e);
  }
  onMostrarEvent(e:any){
    this.card.forEach(element =>  {
      if(element.title == e){
        element.mostrar = !element.mostrar;
      }
      else{
        element.mostrar = false;
      }
    });
  }

}
