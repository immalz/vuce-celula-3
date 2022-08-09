import { IModuleContentItem } from "./module-content-item";

export interface IModuleContent {

    id: string;
    name: string;
    title: string;
    subTitle: string;
    items: IModuleContentItem[];
}
