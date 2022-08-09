
import { Routes } from "@angular/router";
import { GestionEvaluacionComponent } from "./modules/control-custom/componentes/gestion-evaluacion/gestion-evaluacion.component";

export const APP_ROUTES: Routes = [
    {  
        path: '',
        loadChildren: () => import('./modules/control-custom/control-custom.module')
            .then(m => m.ControlCustomModule)
    }

]