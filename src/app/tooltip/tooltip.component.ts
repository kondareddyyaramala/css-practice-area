import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {

  @Input() text: string;

  @ViewChild('textElement', {static: false}) elementRef: ElementRef<HTMLParagraphElement>;
   
  ngAfterViewInit(){
    // register an event for hover to calculate the top and left distances to position
    // the element
    
  }

}