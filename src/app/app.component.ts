import { Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular';
  isEven = true;

  @ViewChild('article', {static: true}) article: ElementRef<HTMLElement>;

  onClick(){
    this.isEven = !this.isEven;
     console.log(this.article.nativeElement.dataset);
  }
  
}
