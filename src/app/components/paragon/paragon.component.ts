import { Component } from '@angular/core';
import { FULL_COMPANY_NAME } from "../../constants";

@Component({
  selector: 'app-paragon',
  standalone: true,
  imports: [],
  templateUrl: './paragon.component.html',
  styleUrl: './paragon.component.scss'
})
export class ParagonComponent {

    protected readonly FULL_COMPANY_NAME = FULL_COMPANY_NAME;
}
