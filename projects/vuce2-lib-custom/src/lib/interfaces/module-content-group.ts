import { IModuleContent } from "./module-content";
import { ISubModule } from "./sub-module";

export interface IModuleContentGroup {
   id?: string;
   idUser?: any;
   name: string;
   icon?: string;
   url?: string;
   visible?: boolean;
   contentDefault?: string;
   subModules?: ISubModule[];
   contents?: IModuleContent[];
}