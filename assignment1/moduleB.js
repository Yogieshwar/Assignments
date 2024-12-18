import { funA } from "./moduleA";

export function funB(){
    console.log("Iam from ModuleB");
    funA();
}