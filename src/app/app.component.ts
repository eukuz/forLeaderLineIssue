import {
  Component,
  VERSION,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import 'leader-line';
declare var LeaderLine: any;
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('startingElement', { read: ElementRef })
  startingElement: ElementRef;
  @ViewChild('endingElement', { read: ElementRef }) endingElement: ElementRef;
  lines: typeof LeaderLine[] = [];
  text = '';

  ngAfterViewInit() {
    this.text = this.startingElement.nativeElement;
    this.lines.push( new LeaderLine(
      this.startingElement.nativeElement,
      this.endingElement.nativeElement,
    ));

    let lineElements = document.querySelectorAll('body > .leader-line > g');
    for (let i = 0; i < lineElements.length; i++) {
      lineElements[i].addEventListener('click', function () {
        console.log("line clicked")
      }, false);
    }
  }

  drop($event: any) {
    this.lines.forEach(x => x.position());
  }

}
