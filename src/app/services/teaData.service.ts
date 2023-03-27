import { Tea } from "../tea-detail/tea.model"

export class TeaDataService {
    teas = [new Tea( "White Peony",
    "white",
    "medium",
    "https://rishi-tea.com/product/image/medium/owp-sana_white-peony-organic-loose-leaf-bai-mu-dan-chinese-white-tea.jpg",
    1),
    new Tea( "Sencha",
    "green",
    "high",
    "https://dhb3yazwboecu.cloudfront.net/1007/fotosProducto/tes/13041_Sencha_1000x1000_l.jpg",
    2),]

    constructor() {

}
    addTea(newTea: Tea) {
        this.teas.push(newTea);
    }
}