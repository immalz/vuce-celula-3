import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ISelectItem,
  IUploadConfig,
  RadioButtonControl,
} from 'projects/vuce2-custom/src/public-api';
import Swal from 'sweetalert2';
import { AlertService } from '../alert.service';
import { FormControlService } from './form-control.service';

@Component({
  selector: 'form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent implements OnInit {
  titulo = 'Controles de Formulario';
  form: FormGroup;
  dataForm: string;

  productos: ISelectItem[];
  rubros: RadioButtonControl;

  path_img: string;
  url_icon: string;
  valor_icon: string;
  texto_icon: string;

  titulo_info: string;
  subTit_info: string;
  date_info: string;
  icon: string;
  ellipse: string;

  iconLCardLink: string;
  titleCardLink: string;
  linkCardLink: string;
  iconRCardLink: string;
  textoCardLink: string;

  configUpload: IUploadConfig;

  constructor(
    private alertService: AlertService,
    private service: FormControlService
  ) {}

  ngOnInit(): void {
    this.productos = this.service.getProductos();
    this.rubros = this.service.getRubros();

    this.crearFormGroup();
    this.dataForm;
    this.path_img = 'assets/image/solicitudes.jpg';
    this.valor_icon = '188';
    this.texto_icon = 'Mercancia Restringida';

    this.titulo_info = 'COMUNICADO Nº 03-2022';
    this.subTit_info = 'Mejoras de Diseño en el Sistema';
    this.date_info = 'Marzo 08, 2022 - 11:00am';
    this.icon = 'assets/image/icon_v_right.svg';
    this.ellipse = 'assets/image/ellipse.svg';

    this.iconLCardLink = 'assets/image/icoLink.svg';
    this.titleCardLink = 'MCT001';
    this.linkCardLink = 'Emision de certificado de origen';
    this.iconRCardLink = 'assets/image/iconRLink.svg';
    this.textoCardLink = 'Texto referencial para publicidad';

    this.configUpload = {
      urlUpload: '',
      idUser: '',
      label: 'Carga de archivo',
      tiposPermitidos: ['.xlsx', '.docx', '.pdf'],
      pesoMaximoEnMB: 10,
      showHintInfo: true,
    };
  }

  crearFormGroup() {
    this.form = new FormGroup({
      fecha: new FormControl('10/06/2022', Validators.required),
      direccion: new FormControl('', Validators.required),
      producto: new FormControl('', Validators.required),
      rubro: new FormControl('', Validators.required),
      permitido: new FormControl(''),
      comentario: new FormControl('', Validators.required),
    });
  }

  guardar() {
    if (this.form.valid) {
      this.dataForm = JSON.stringify(this.form.getRawValue());
      Swal.fire({
        title: 'Registro de Formulario',
        text: `Está seguro que desea registrar los datos del formulario`,
        html: this.dataForm,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: `Si deseo registrar`,
      }).then((result) => {
        if (result) this.alertService.success(`Se registro con exito`);
      });
    } else {
      this.alertService.warning('formulario invalido');
    }
  }
  onEvent(event: any) {
    console.log('onEvent', event);
  }

  get direccion() {
    return this.form.controls['direccion'];
  }
  get producto() {
    return this.form.controls['producto'];
  }
  get rubro() {
    return this.form.controls['rubro'];
  }
  get permitido() {
    return this.form.controls['permitido'];
  }
  get comentario() {
    return this.form.controls['comentario'];
  }

  get fecha() {
    return this.form.controls['fecha'];
  }

  handlerChange(e: any) {
    console.log('e >>', e);
  }
}
