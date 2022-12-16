import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
sideBardisplay: boolean= false;

items
constructor(private primengConfig: PrimeNGConfig) {}

ngOnInit(): void {
  this.primengConfig.ripple = true;
  this.items = [
    {label: 'New', icon: 'pi pi-fw pi-plus'},
    {label: 'Open', icon: 'pi pi-fw pi-download'},
    {label: 'Undo', icon: 'pi pi-fw pi-refresh'}
];
}

}

