import { AfterViewInit, Component, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-product-card-slider',
  templateUrl: './product-card-slider.component.html',
  styleUrls: ['./product-card-slider.component.css']
})

export class ProductCardSliderComponent  implements AfterViewInit{

  @Input() product:any;


  
  ngAfterViewInit() {
    $('[data-fancybox="gallery"]').fancybox({
        // Vous pouvez ajouter d'autres options ici
    });
}


}
