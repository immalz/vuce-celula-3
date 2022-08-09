import { Component, OnInit } from '@angular/core';
import { IModuleContentGroup } from 'projects/vuce2-lib-custom/src/public-api';
import { Observable } from 'rxjs';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  usuario: any;
  modules: IModuleContentGroup[] = []; 

  constructor(private service: MenuService) {

  }

  ngOnInit(): void {
    this.usuario = {
      idUser: '11d95a03-1dbf-480f-9b75-edffa6a366fa',
      username: 'Juan Perez Mejia',
      rol: 'Funcionario',
      icon: '/assets/vuce2-lib-assets/images/user_vuce.png'
    }
    
    this.service.getAllModuleContentGroup(this.usuario).subscribe(
      x => {
        this.modules = x;
        this.modules.forEach(
          obj => {
            if (obj.icon)
              obj.icon = '/assets/vuce2-lib-assets/images/' + obj.icon;
          })
      }, error => {
        console.log(error.messages);
      }
    );

   // this.getModules();

    
    
  }


  getModules(){
    this.modules = [
     ,
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
    ]
  }
}
