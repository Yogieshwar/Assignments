import { funB } from "./moduleB";

export function funA(){
    console.log("Iam from ModuleA");
    funB();

}