import { Component, OnInit } from '@angular/core';
import { CompareService } from '../../services/compare.service';

@Component({
  selector: 'app-compare',
  standalone: false,
  templateUrl: './compare.component.html',
  styleUrl: './compare.component.css'
})
export class CompareComponent implements OnInit {
  strictEqual: boolean = false;
  deepEqual: boolean = false;

  a = { id: 1, name: 'Toàn' };
  b = { id: 1, name: 'Toàn' };

  constructor(private compareService: CompareService) { }

  ngOnInit() {
    this.strictEqual = (this.a === this.b);                  // false
    this.deepEqual = this.compareService.checkEqual(this.a, this.b); // true
  }
}
