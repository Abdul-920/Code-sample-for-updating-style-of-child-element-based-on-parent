import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  #parent
   @ViewChild("parent") private parentRef: ElementRef<HTMLElement>;

    public getChildren() {
      const parentElement = this.parentRef.nativeElement;
      const firstChild = parentElement.querySelector('input');



      console.log(firstChild);

      firstChild.className += ' danger';

console.log(firstChild);
      

    }
}
