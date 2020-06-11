import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-paneladmin',
  templateUrl: './paneladmin.component.html',
  styleUrls: ['./paneladmin.component.css']
})
export class PaneladminComponent implements OnInit {

  public title_one: string;
  public title_two: string;
  public title_three: string;

  // Duber
  public title_production_details: string;
  public title_raw_material_requests: string;
  public title_detail_raw_material: string;

  constructor(
  ) {



  }

  ngOnInit(): void {
    this.title_one = 'Sucursales';
    this.title_two = 'Maquinaria';
    this.title_three = 'Solicitud lotes';

    this.title_production_details = 'Detalles de la producción';
    this.title_raw_material_requests = 'Solicitud materia prima';
    this.title_detail_raw_material = 'Detalle solicitud materia prima';
  }





}
