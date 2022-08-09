import { Component, EventEmitter, forwardRef, Input, Output } from "@angular/core";
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from "@angular/forms";
import { ISelectItem } from "../interfaces";

@Component({
    selector: 'vuce2-lib-card-title-subtitle-icon',
    templateUrl: './vuce2-lib-card-title-subtitle-icon.component.html',
    styleUrls: ['./vuce2-lib-card-title-subtitle-icon.component.scss'],
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => Vuce2LibCardTitleSubtitleIconComponent),
        multi: true,
      },
    ],
})
export class Vuce2LibCardTitleSubtitleIconComponent implements ControlValueAccessor {

    cardForm: FormGroup;

    @Input()
    title: string;

    @Input()
    subtitle: string;
    
    @Input()
    icon: string;

    @Input()
    iconRight: string;

    @Input()
    mostrar:boolean =false;

    @Input()
    etiqueta: string = '';

    @Input()
    items: ISelectItem[] = [];

    @Input()
    texto_alternativo: string = '';

    @Input()
    textButton: string;

    @Input()
    iconButton: string;

    @Input()
    click: any;

    @Input()
    marginBottom: string = "0";

    inicio: boolean = false;

    @Output() valorEvent= new EventEmitter<any>();

    @Output() mostrarEvent= new EventEmitter<string>();

    constructor() {
        //this.cambiosStyle();
    }
    ngOnInit(): void{
        this.crearFormulario();
        
    }
    ngOnChanges():void{
        if(this.inicio){
            this.cambiosStyle();
        }
        else{
            this.inicio = true;
        }
    }

    writeValue(obj: any): void {
        throw new Error("Method not implemented.");
    }
    registerOnChange(fn: any): void {
        throw new Error("Method not implemented.");
    }
    registerOnTouched(fn: any): void {
        throw new Error("Method not implemented.");
    }
    setDisabledState?(isDisabled: boolean): void {
        throw new Error("Method not implemented.");
    }

    update(){
        this.cambiosStyle();
        this.mostrarEvent.emit(this.title);
    }
    cambiosStyle(){
        const idCard = 'cardMayor'+this.title;
        //console.log(idCard);
        if(!this.mostrar){
            document.getElementById(idCard).classList.remove('cardMayor');
        }
        else{
            document.getElementById(idCard).classList.add('cardMayor');
        }
    }
    valueEvent(){
        if(this.cardForm.valid){
            this.valorEvent.emit({
                title: this.title,
                valueSelect: this.cardSelect.value,
            })
        }
    }
    crearFormulario(){
        this.cardForm = new FormGroup(
            {
                cardSelect: new FormControl('',Validators.required)
            }
        )
    }
    get cardSelect(){
        return this.cardForm.get('cardSelect');
    }
}