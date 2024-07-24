import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// interface Necklace{
//     kind: string;
//     brand: string;
// }
// interface bracelet{
//     brand: string;
//     year: number;
// }
// type Accessory = Necklace | bracelet;

// const isNecklace = (b: Accessory): b is bracelet => {
//     return false
// }
// const Necklace: Accessory = {kind: "Choker", brand: "TASAKI"};
// const bracelet: Accessory = {brand: "Cartier", year: 2021};

// if(!isNecklace(Necklace)){
//     Necklace
// } else {
//     Necklace
// }
