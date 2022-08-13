
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './componentes/form-control/form-control.component';
import {
  Vuce2LibGridModule,
  Vuce2LibActionBtnEditModule,
  Vuce2LibActionBtnDeleteModule,
  Vuce2LibModulesModule,
  Vuce2LibMaterialModule,
  Vuce2LibAlertIconModule,
  Vuce2LibBreadcrumbModule,
  Vuce2LibIconBadgeModule,
  Vuce2LibCardModule,
  Vuce2LibNavModule,
  Vuce2LibLinkModule,
  Vuce2LibLabelIconModule,
  Vuce2LibCardInfoModule,
  Vuce2LibMenuModule,
  Vuce2LibHeaderModule,
  Vuce2LibFooterModule,
  Vuce2LibCardLinkIconModule,
  Vuce2LibCalendarModule,
  Vuce2LibTabModule,
  Vuce2LibUploadFileModule,
  Vuce2LibLinkIconModule
} from 'projects/vuce2-lib-custom/src/public-api';
import { FormGridComponent } from './componentes/form-grid/form-grid.component';
import {
  Vuce2LibCardIconModule,
  Vuce2LibCheckBoxModule,
  Vuce2LibRadioButtonModule,
  Vuce2LibSelectModule,
  Vuce2LibInputTextareaModule,
  Vuce2LibInputTextModule,
  Vuce2LibButtonModule,
  Vuce2LibRadioStateModule,
} from 'projects/vuce2-lib-custom/src/public-api';
import { ToolControlComponent } from './componentes/tool-control/tool-control.component';
import { RouterModule } from '@angular/router';
import { APP_CUSTOM_ROUTES } from './control-custom.routes';
import { Vuce2LibBienvenidaModule } from 'projects/vuce2-lib-custom/src/lib/vuce2-lib-bienvenida';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { Vuce2LibButtonPrimaryModule } from 'projects/vuce2-lib-custom/src/lib/vuce2-lib-button-primary';
import { Vuce2LibButtonSecundaryModule } from 'projects/vuce2-lib-custom/src/lib/vuce2-lib-button-secundary';
import { Vuce2LibButtonNeutralModule } from 'projects/vuce2-lib-custom/src/lib/vuce2-lib-button-neutral';
import { Vuce2LibButtonTerciarioModule } from 'projects/vuce2-lib-custom/src/lib/vuce2-lib-button-terciario';
import { Vuce2LibSidebarModule } from 'projects/vuce2-lib-custom/src/lib/vuce2-lib-sidebar';
import { MenuComponent } from './componentes/menu/menu.component';
import { Vuce2LibCardTitleSubtitleIconModule } from 'projects/vuce2-lib-custom/src/lib/vuce2-lib-card-title-subtitle-icon';
import { Vuce2LibCardTupaModule } from 'projects/vuce2-lib-custom/src/lib/vuce2-lib-card-tupa';
import { Vuce2LibTabInteractionModule } from 'projects/vuce2-lib-custom/src/lib/vuce2-lib-tab-interaction';
import { FormPaginationComponent } from './componentes/form-pagination/form-pagination.component';
import { Vuce2LibPaginationModule } from 'projects/vuce2-lib-custom/src/lib/vuce2-lib-pagination/vuce2-lib-pagination.module';
import { FormAccordionComponent } from './componentes/form-accordion/form-accordion.component';
import { Vuce2LibAccordionModule } from 'projects/vuce2-lib-custom/src/lib/vuce2-lib-accordion/vuce2-lib-accordion.module';
import { Vuce2LibTabStateModule } from 'projects/vuce2-lib-custom/src/lib/vuce2-lib-tab-state/vuce2-lib-tab-state.module';
import {Vuce2LibInputCalendarModule} from 'projects/vuce2-lib-custom/src/lib/vuce2-lib-input-calendar/vuce2-lib-input-calendar.module';
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
import { RegistroComponent } from './componentes/borrador-informe/tab-components/registro/registro.component';
import { InformeComponent } from './componentes/borrador-informe/tab-components/informe/informe.component';
import { DetallesComponent } from './componentes/borrador-informe/tab-components/detalles/detalles.component';
import { SubsanacionComponent } from './componentes/subsanacion/subsanacion.component';
import { BandejaDePagosComponent } from './componentes/gestion-pagos/bandeja-de-pagos/bandeja-de-pagos.component';
import { ModalInformesTecnicosNuevaSeccionComponent } from './componentes/modales/modal-informes-tecnicos-nueva-seccion/modal-informes-tecnicos-nueva-seccion.component';
import { ModalInformesTecnicosNuevaSeccionEliminarComponent } from './componentes/modales/modal-informes-tecnicos-nueva-seccion-eliminar/modal-informes-tecnicos-nueva-seccion-eliminar.component';
import { ModalInformesTecnicosVistaPreviaComponent } from './componentes/modales/modal-informes-tecnicos-vista-previa/modal-informes-tecnicos-vista-previa.component';
import { ModalInformesTecnicosPasarFirmarComponent } from './componentes/modales/modal-informes-tecnicos-pasar-firmar/modal-informes-tecnicos-pasar-firmar.component';
import { ModalRegistroComponent } from './componentes/gestion-pagos/modal-registro/modal-registro.component';
import { SegundaOpinionComponent } from './componentes/segunda-opinion/segunda-opinion.component';
import { ModalDatosDeTramiteComponent } from './componentes/modales/modal-datos-de-tramite/modal-datos-de-tramite.component';
import { ModalEvaluacionTramiteComponent } from './componentes/modales/modal-evaluacion-tramite/modal-evaluacion-tramite.component';
import { ModalConformidadSegundaOpinionComponent } from './componentes/modales/modal-conformidad-segunda-opinion/modal-conformidad-segunda-opinion.component';
import { BandejaDePagosEntidadComponent } from './componentes/gestion-pagos/bandeja-de-pagos-entidad/bandeja-de-pagos-entidad.component';
import { ModalBandejaDePagosEntidadDescargaComponent } from './componentes/modales/modal-bandeja-de-pagos-entidad-descarga/modal-bandeja-de-pagos-entidad-descarga.component';
import { DevueltoAlEvaluadorComponent } from './componentes/devuelto-al-evaluador/devuelto-al-evaluador.component';
import { FiltroDeBusquedaComponent } from './componentes/compartidos/filtro-de-busqueda/filtro-de-busqueda.component';
import { FiltroDeBusquedaSimplicadoComponent } from './componentes/compartidos/filtro-de-busqueda-simplicado/filtro-de-busqueda-simplicado.component';

const vuce2Modules = [
  Vuce2LibTabStateModule,
  Vuce2LibInputCalendarModule,
  Vuce2LibMaterialModule,
  Vuce2LibModulesModule,
  Vuce2LibButtonModule,
  Vuce2LibRadioButtonModule,
  Vuce2LibInputTextareaModule,
  Vuce2LibSelectModule,
  Vuce2LibCheckBoxModule,
  Vuce2LibInputTextModule,
  Vuce2LibAlertIconModule,
  Vuce2LibBreadcrumbModule,
  Vuce2LibIconBadgeModule,
  Vuce2LibAccordionModule,
  Vuce2LibLinkModule,
  Vuce2LibLinkIconModule,
  Vuce2LibTabModule,
  Vuce2LibNavModule,
  Vuce2LibCardModule,
  Vuce2LibGridModule,
  Vuce2LibLabelIconModule,
  Vuce2LibActionBtnEditModule,
  Vuce2LibActionBtnDeleteModule,
  Vuce2LibCardIconModule,
  Vuce2LibBienvenidaModule,
  Vuce2LibButtonPrimaryModule,
  Vuce2LibButtonSecundaryModule,
  Vuce2LibButtonNeutralModule,
  Vuce2LibButtonTerciarioModule,
  Vuce2LibCardInfoModule,
  Vuce2LibSidebarModule,
  Vuce2LibMenuModule,
  Vuce2LibHeaderModule,
  Vuce2LibFooterModule,
  Vuce2LibCardLinkIconModule,
  Vuce2LibCalendarModule,
  Vuce2LibCardTitleSubtitleIconModule,
  Vuce2LibCardTupaModule,
  Vuce2LibMenuModule,
  Vuce2LibTabInteractionModule,
  Vuce2LibPaginationModule,
  Vuce2LibUploadFileModule,
  Vuce2LibRadioStateModule
];



@NgModule({
  declarations: [
    FormControlComponent,
    FormGridComponent,
    FormPaginationComponent,
    ToolControlComponent,
    MenuComponent,
    BienvenidaComponent,
    FormAccordionComponent,
    GestionEvaluacionComponent,
    DatosGeneralTramiteComponent,
    SolicitanteComponent,
    EscritosComponent,
    NotificacionesComponent,
    InformesComponent,
    DocumentosComponent,
    DocumentoResolutivoComponent,
    ResultadoComponent,
    SeccionComponent,
    CampoComponent,
    BorradorInformeComponent,
    NormativoComponent,
    RegistroComponent,
    InformeComponent,
    DetallesComponent,
    SubsanacionComponent,
    ModalInformesTecnicosNuevaSeccionComponent,
    ModalInformesTecnicosNuevaSeccionEliminarComponent,
    ModalInformesTecnicosVistaPreviaComponent,
    ModalInformesTecnicosPasarFirmarComponent,
    BandejaDePagosComponent,
    ModalRegistroComponent,
    SegundaOpinionComponent,
    ModalDatosDeTramiteComponent,
    ModalEvaluacionTramiteComponent,
    ModalConformidadSegundaOpinionComponent,
    BandejaDePagosEntidadComponent,
    ModalBandejaDePagosEntidadDescargaComponent,
    DevueltoAlEvaluadorComponent,
    FiltroDeBusquedaComponent,
    FiltroDeBusquedaSimplicadoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(APP_CUSTOM_ROUTES),
    ...vuce2Modules
  ],

  exports: [
    FormControlComponent,
    FormGridComponent,
    ToolControlComponent,
    MenuComponent,
    BienvenidaComponent
  ],
})
export class ControlCustomModule {}
