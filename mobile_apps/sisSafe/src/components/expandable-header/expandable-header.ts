import { Component,Input, ElementRef, Renderer  } from '@angular/core';

/**
 * Generated class for the ExpandableHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'expandable-header',
  templateUrl: 'expandable-header.html'
})
export class ExpandableHeaderComponent {

  text: string;
  @Input('scrollArea') scrollArea: any;
  @Input('headerHeight') headerHeight: number;
  
  newHeaderHeight: any;
 
  constructor(public element: ElementRef, public renderer: Renderer) {
    console.log('Hello ExpandableHeaderComponent Component');
    this.text = 'Hello World';
  }
  ngOnInit(){
       this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
    
       this.scrollArea.ionScroll.subscribe((ev) => {
         this.resizeHeader(ev);
       });
    
     }
    
     resizeHeader(ev){
    
       ev.domWrite(() => {
    
         this.newHeaderHeight = this.headerHeight - ev.scrollTop;
    
         if(this.newHeaderHeight < 0){
           this.newHeaderHeight = 0;
         }  
    
         this.renderer.setElementStyle(this.element.nativeElement, 'height', this.newHeaderHeight + 'px');
    
         for(let headerElement of this.element.nativeElement.children){
    
           let totalHeight = headerElement.offsetTop + headerElement.clientHeight;
    
           if(totalHeight > this.newHeaderHeight && !headerElement.isHidden){
             headerElement.isHidden = true;
             this.renderer.setElementStyle(headerElement, 'opacity', '0');
           } else if (totalHeight <= this.newHeaderHeight && headerElement.isHidden) {
             headerElement.isHidden = false;
             this.renderer.setElementStyle(headerElement, 'opacity', '1');
           }
    
         }
    
       });
    
     }
    
   }

