import { SegundaOpinionComponent } from './componentes/segunda-opinion/segunda-opinion.component';

import { Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { FormControlComponent } from './componentes/form-control/form-control.component';
import { FormGridComponent } from './componentes/form-grid/form-grid.component';
import { FormPaginationComponent } from './componentes/form-pagination/form-pagination.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FormAccordionComponent } from './componentes/form-accordion/form-accordion.component';
import { ToolControlComponent } from './componentes/tool-control/tool-control.component';
import { GestionEvaluacionComponent } from './componentes/gestion-evaluacion/gestion-evaluacion.component';
import { DatosGeneralTramiteComponent } from './datos-general-tramite/datos-general-tramite.component';
import { SolicitanteComponent } from './datos-general-tramite/tabs-components/solicitante/solicitante.component';
import { EscritosComponent } from './datos-general-tramite/tabs-components/escritos/escritos.component';
import { NotificacionesComponent } from './datos-general-tramite/tabs-components/notificaciones/notificaciones.component';
import { InformesComponent } from './datos-general-tramite/tabs-components/informes/informes.component';
import { DocumentosComponent } from './datos-general-tramite/tabs-components/documentos/documentos.component';
import { DocumentoResolutivoComponent } from './componentes/documento-resolutivo/documento-resolutivo.component';
import { ResultadoComponent } from './componentes/resultado/resultado.component';
import { SeccionComponent } from './componentes/resultado/tabs-components/seccion/seccion.component';
import { CampoComponent } from './componentes/resultado/tabs-components/campo/campo.component';
import { NormativoComponent } from './componentes/resultado/tabs-components/normativo/normativo.component';
import { BorradorInformeComponent } from './componentes/borrador-informe/borrador-informe.component';
import { DetallesComponent } from './componentes/borrador-informe/tab-components/detalles/detalles.component';
import { RegistroComponent } from './componentes/borrador-informe/tab-components/registro/registro.component';
import { InformeComponent } from './componentes/borrador-informe/tab-components/informe/informe.component';
import { SubsanacionComponent } from './componentes/subsanacion/subsanacion.component';
import { BandejaDePagosComponent } from './componentes/gestion-pagos/bandeja-de-pagos/bandeja-de-pagos.component';

export const APP_CUSTOM_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'controles',
    pathMatch: 'full',
  },
  {
    path: 'controles',
    component: FormControlComponent,
    pathMatch: 'full',
  },
  {
    path: 'tools',
    component: ToolControlComponent,
    pathMatch: 'full',
  },
  {
    path: 'grid',
    component: FormGridComponent,
    pathMatch: 'full',
  },
  {
    path: 'pagination',
    component: FormPaginationComponent,
    pathMatch: 'full',
  },
  {
    path: 'menu',
    component: MenuComponent,
    pathMatch: 'full',
  },
  {
    path: 'bienvenida',
    component: BienvenidaComponent,
    pathMatch: 'full',
  },
  {
    path: 'accordion',
    component: FormAccordionComponent,
    pathMatch: 'full',
  },
  {
    path: 'evaluacion',
    component: GestionEvaluacionComponent,
    pathMatch: 'full',
  },
  {
    path: 'documentos-resolutivo',
    component: DocumentoResolutivoComponent,
    pathMatch: 'full',
  },
  {
    path: 'subsanacion',
    component: SubsanacionComponent,
    pathMatch: 'full',
  },
  {
    path: 'bandeja-de-pago',
    component: BandejaDePagosComponent,
    pathMatch: 'full',
  },
  {
    path: 'resultados',
    component: ResultadoComponent,
    children: [
      {path: '', component: SeccionComponent},
      {path: 'campo', component: CampoComponent},
      {path: 'normativo', component: NormativoComponent},
    ]
  },
  {
    path: 'borrador',
    component: BorradorInformeComponent,
    children: [
      {path: '', component: RegistroComponent},
      {path: 'informe', component: InformeComponent},
      {path: 'detalles', component: DetallesComponent},
    ]
  },
  {
    path: 'datos-generales',
    component: DatosGeneralTramiteComponent,
    children: [
      {path: '', component: SolicitanteComponent},
      {path: 'escritos', component: EscritosComponent},
      {path: 'notificaciones', component: NotificacionesComponent},
      {path: 'informes', component: InformesComponent},
      {path: 'documentos', component: DocumentosComponent},
    ]
  },
  {
    path: 'segunda-opinion',
    component: SegundaOpinionComponent,
    pathMatch: 'full'
  },
];
