import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  constructor() {}

  stores;
  ngOnInit(): void {
    this.stores = [
      {
        name: 'Comesticos',
        account: 'comestics_1',
        photo:
          'https://todorepublicadominicana.com/wp-content/uploads/2018/02/tienda-maria-boutique-shopping-playa-prendas-complementos-ropa-las-terrenas-provincia-peninsula-de-samana-todo-republica-dominicana-8-1.jpg',
        province: 'La altagracia',
      },
      {
        name: 'Repuesto',
        account: 'Repuesto_1',
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1hGlSYcjfS0JAm_8GHZ2PbnvTj8NnY0IV-g&usqp=CAU',
        province: 'La romana',
      },
      {
        name: 'Clothes',
        account: 'Repuesto_1',
        photo: 'https://www.plataformapymes.com/wp-content/uploads/Captura-13.jpg',
        province: 'San Pedro de macoriz',
      },
      {
        name: 'Maquillaje',
        account: 'Repuestos_1',
        photo:
          'https://verahmakeup.com/wp-content/uploads/2018/05/Sephora-opens-200th-China-store-Retail-in-Asia-770x513.jpg',
        province: 'Villa verde',
      },
    ];
  }
}
