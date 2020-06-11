import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MachinstateCreateComponent } from './components/entities/machinestate/create/machinstate-create/machinstate-create.component';
import { MachinstateShowComponent } from './components/entities/machinestate/show/machinstate-show/machinstate-show.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MachinstateDialogComponent } from './components/entities/machinestate/create/machinstate-dialog/machinstate-dialog.component';
import { MachinestateEditComponent } from './components/entities/machinestate/edit/machinestate-edit/machinestate-edit.component';
import { MachinestateShowOneComponent } from './components/entities/machinestate/show/machinestate-show-one/machinestate-show-one.component';
import { RequeststatusShowComponent } from './components/entities/requeststatus/show/requeststatus-show/requeststatus-show.component';
import { RequeststatusShowOneComponent } from './components/entities/requeststatus/show/requeststatus-show-one/requeststatus-show-one.component';
import { RequeststatusEditComponent } from './components/entities/requeststatus/edit/requeststatus-edit/requeststatus-edit.component';
import { RequeststatusCreateComponent } from './components/entities/requeststatus/create/requeststatus-create/requeststatus-create.component';
import { RequeststatusCreateDialogComponent } from './components/entities/requeststatus/create/requeststatus-create-dialog/requeststatus-create-dialog.component';
import { StatebranchofficeCreateDialogComponent } from './components/entities/statebranchoffice/create/statebranchoffice-create-dialog/statebranchoffice-create-dialog.component';
import { StatebranchofficeCreateComponent } from './components/entities/statebranchoffice/create/statebranchoffice-create/statebranchoffice-create.component';
import { StatebranchofficeEditComponent } from './components/entities/statebranchoffice/edit/statebranchoffice-edit/statebranchoffice-edit.component';
import { StatebranchofficeShowComponent } from './components/entities/statebranchoffice/show/statebranchoffice-show/statebranchoffice-show.component';
import { StatebranchofficeShowOneComponent } from './components/entities/statebranchoffice/show/statebranchoffice-show-one/statebranchoffice-show-one.component';
import { HomeComponent } from './components/home/home.component';
import { RequestanalysisShowComponent } from './components/entities/requestanalysis/show/requestanalysis-show/requestanalysis-show.component';
import { RequestanalysisShowOneComponent } from './components/entities/requestanalysis/show/requestanalysis-show-one/requestanalysis-show-one.component';
import { RequestanalysisEditComponent } from './components/entities/requestanalysis/edit/requestanalysis-edit/requestanalysis-edit.component';
import { RequestanalysisCreateComponent } from './components/entities/requestanalysis/create/requestanalysis-create/requestanalysis-create.component';
import { RequestanalysisCreateDialogComponent } from './components/entities/requestanalysis/create/requestanalysis-create-dialog/requestanalysis-create-dialog.component';
import { BranchofficeCreateDialogComponent } from './components/entities/branchoffice/create/branchoffice-create-dialog/branchoffice-create-dialog.component';
import { BranchofficeCreateComponent } from './components/entities/branchoffice/create/branchoffice-create/branchoffice-create.component';
import { BranchofficeEditComponent } from './components/entities/branchoffice/edit/branchoffice-edit/branchoffice-edit.component';
import { BranchofficeShowComponent } from './components/entities/branchoffice/show/branchoffice-show/branchoffice-show.component';
import { BranchofficeShowOneComponent } from './components/entities/branchoffice/show/branchoffice-show-one/branchoffice-show-one.component';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

import { CreateMachineryComponent } from './components/entities/machinery/create-machinery/create-machinery.component';
import { EditMachineryComponent } from './components/entities/machinery/edit-machinery/edit-machinery.component';
import { ShowMachineryComponent } from './components/entities/machinery/show-machinery/show-machinery.component';
import { ShowOneMachineryComponent } from './components/entities/machinery/show-one-machinery/show-one-machinery.component';
import { CreateMachineryDialogComponent } from './components/entities/machinery/create-machinery-dialog/create-machinery-dialog.component';

import { CreateMachineryTypeComponent } from './components/entities/machineryType/create-machineryType/create-machineryType.component';
import { EditMachineryTypeComponent } from './components/entities/machineryType/edit-machineryType/edit-machineryType.component';
import { ShowMachineryTypeComponent } from './components/entities/machineryType/show-machineryType/show-machineryType.component';
import { ShowOneMachineryTypeComponent } from './components/entities/machineryType/show-one-machineryType/show-one-machineryType.component';
import { CreateMachineryTypeDialogComponent } from './components/entities/machineryType/create-machineryType-dialog/create-machineryType-dialog.component';

import { CreateWorkshiftComponent } from './components/entities/workShifts/create-workshift/create-workshift.component';
import { EditWorkshiftComponent } from './components/entities/workShifts/edit-workshift/edit-workshift.component';
import { ShowWorkshiftComponent } from './components/entities/workShifts/show-workshift/show-workshift.component';
import { ShowOneWorkshiftComponent } from './components/entities/workShifts/show-one-workshift/show-one-workshift.component';
import { CreateWorkshiftDialogComponent } from './components/entities/workShifts/create-workshift-dialog/create-workshift-dialog.component';
import { CreateHumanresourcesComponent } from './components/entities/humanResources/create-humanresources/create-humanresources.component';
import { CreateHumanresourcesDialogComponent } from './components/entities/humanResources/create-humanresources-dialog/create-humanresources-dialog.component';
import { EditHumanresourcesComponent } from './components/entities/humanResources/edit-humanresources/edit-humanresources.component';
import { ShowOneHumanresourcesComponent } from './components/entities/humanResources/show-one-humanresources/show-one-humanresources.component';
import { ShowHumanresourcesComponent } from './components/entities/humanResources/show-humanresources/show-humanresources.component';

import { ProductCreateComponent } from './components/entities/product/create/product-create/product-create.component';
import { ProductDialogComponent } from './components/entities/product/create/product-dialog/product-dialog.component';
import { ProductShowComponent } from './components/entities/product/show/product-show/product-show.component';
import { ProductEditComponent } from './components/entities/product/edit/product-edit/product-edit.component';
import { ProductShowOneComponent } from './components/entities/product/show/product-show-one/product-show-one.component';
import { ProcessShowComponent } from './components/entities/process/show/process-show/process-show.component';
import { ProcessShowOneComponent } from './components/entities/process/show/process-show-one/process-show-one.component';
import { ProcessCreateComponent } from './components/entities/process/create/process-create/process-create.component';
import { ProcessDialogComponent } from './components/entities/process/create/process-dialog/process-dialog.component';
import { ProcessEditComponent } from './components/entities/process/edit/process-edit/process-edit.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RequestbatchesShowComponent } from './components/entities/requestbatches/show/requestbatches-show/requestbatches-show.component';
import { RequestbatchesShowOneComponent } from './components/entities/requestbatches/show/requestbatches-show-one/requestbatches-show-one.component';
import { RequestbatchesCreateComponent } from './components/entities/requestbatches/create/requestbatches-create/requestbatches-create.component';
import { RequestbatchesCreateDialogComponent } from './components/entities/requestbatches/create/requestbatches-create-dialog/requestbatches-create-dialog.component';
import { RequestbatchesEditComponent } from './components/entities/requestbatches/edit/requestbatches-edit/requestbatches-edit.component';
import { PaneladminComponent } from './components/views/paneladmin/paneladmin.component';
import { PaneluserComponent } from './components/views/paneluser/paneluser.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatInputModule} from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { BranchofficeService } from './services/branchoffice.services';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BranchofficeComponent } from './components/views/panel/branchoffice/branchoffice.component';

import { RequestbatchesComponent } from './components/views/panel/requestbatches/requestbatches.component';

import { InfoShowComponent } from './components/info/info-show/info-show.component';
import { InfoShowDialogComponent } from './components/info/info-show-dialog/info-show-dialog.component';
import { TimeremainingComponent } from './components/views/panel/timeremaining/timeremaining.component';
import { InfomachineryComponent } from './components/views/panel/infomachinery/infomachinery.component';
import { MachinerydisponibleDialogComponent } from './components/views/panel/listmachinery/disponibles/machinerydisponible-dialog/machinerydisponible-dialog.component';
import { MachinerydisponibleComponent } from './components/views/panel/listmachinery/disponibles/machinerydisponible/machinerydisponible.component';
import { MachineryocupadaComponent } from './components/views/panel/listmachinery/ocupadas/machineryocupada/machineryocupada.component';
import { MachineryocupadaDialogComponent } from './components/views/panel/listmachinery/ocupadas/machineryocupada-dialog/machineryocupada-dialog.component';
import { MachinerymtoDialogComponent } from './components/views/panel/listmachinery/mto/machinerymto-dialog/machinerymto-dialog.component';
import { MachinerymtoComponent } from './components/views/panel/listmachinery/mto/machinerymto/machinerymto.component';
import { MachineryreparacionDialogComponent } from './components/views/panel/listmachinery/reparacion/machineryreparacion-dialog/machineryreparacion-dialog.component';
import { MachineryreparacionComponent } from './components/views/panel/listmachinery/reparacion/machineryreparacion/machineryreparacion.component';
import { OtherinfoComponent } from './components/views/panel/otherinfo/otherinfo.component';
import { HumanresourceComponent } from './components/views/panel/humanresources/humanresource/humanresource.component';
import { HumanresourceDialogComponent } from './components/views/panel/humanresources/humanresource-dialog/humanresource-dialog.component';

import { ProductionStatesComponent } from './components/entities/production-states/production-states.component';
import { AddProductionStatesComponent } from './components/entities/production-states/components/add-production-states/add-production-states.component';
import { EditProductionStatesComponent } from './components/entities/production-states/components/edit-production-states/edit-production-states.component';
import { ListProductionStatesComponent } from './components/entities/production-states/components/list-production-states/list-production-states.component';
import { ProductionsComponent } from './components/entities/productions/productions.component';
import { AddProductionsComponent } from './components/entities/productions/components/add-productions/add-productions.component';
import {AddProductionsDialogComponent} from './components/entities/productions/components/add-productions/add-productions-dialog/add-productions-dialog.component';
import { EditProductionsComponent } from './components/entities/productions/components/edit-productions/edit-productions.component';
import { ListProductionsComponent } from './components/entities/productions/components/list-productions/list-productions.component';
import { ListOneProductionsComponent } from './components/entities/productions/components/list-one-productions/list-one-productions.component';

import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

import { DialogActionComponent } from './components/entities/production-states/components/dialog/dialog-action/dialog-action.component';
import { DialogConfirmationComponent } from './components/entities//production-states/components/dialog/dialog-confirmation/dialog-confirmation.component';
import { ListOneProductionStatesComponent } from './components/entities//production-states/components/list-one-production-states/list-one-production-states.component';
import { AddProductionStatesDialogComponent } from './components/entities//production-states/components/add-production-states/add-production-states-dialog/add-production-states-dialog.component';
import { DialogConfirmationProductionsComponent } from './components/entities/productions/components/dialog/dialog-confirmation/dialog-confirmation.component';
import { DialogActionProductionsComponent } from './components/entities/productions/components/dialog/dialog-action/dialog-action.component';
import { AddRawMaterialRequestsComponent } from './components/entities/rawMaterialRequests/add-raw-material-requests/add-raw-material-requests.component';
import { EditRawMaterialRequestsComponent } from './components/entities/rawMaterialRequests/edit-raw-material-requests/edit-raw-material-requests.component';
import { ListRawMaterialRequestsComponent } from './components/entities/rawMaterialRequests/list-raw-material-requests/list-raw-material-requests.component';
import { ListOneRawMaterialRequestsComponent } from './components/entities/rawMaterialRequests/list-one-raw-material-requests/list-one-raw-material-requests.component';
import { AddRawMaterialRequestsDialogComponent } from './components/entities/rawMaterialRequests/add-raw-material-requests/add-raw-material-requests-dialog/add-raw-material-requests-dialog.component';
import { ShowDialogNumberBatchComponent } from './components/entities/rawMaterialRequests/list-raw-material-requests/show-dialog-number-batch/show-dialog-number-batch.component';
import { RawMaterialRequestsComponent } from './components/views/panel/raw-material-requests/raw-material-requests.component';

import { ProductionDetailsComponent } from './components/entities/production-details/production-details.component';
import { AddProductionDetailsComponent } from './components/entities/production-details/add-production-details/add-production-details.component';
import { ListProductionDetailsComponent } from './components/entities/production-details/list-production-details/list-production-details.component';
import { ListOneProductionDetailsComponent } from './components/entities/production-details/list-one-production-details/list-one-production-details.component';
import { EditProductionDetailsComponent } from './components/entities/production-details/edit-production-details/edit-production-details.component';
import { AddProductionDetailsDialogComponent } from './components/entities/production-details/add-production-details/add-production-details-dialog/add-production-details-dialog.component';
import { ShowDialogProductBatchComponent } from './components/entities/production-details/list-production-details/show-dialog-product-batch/show-dialog-product-batch.component';
import {ProductionDetailsComponentPanel} from './components/views/panel/production-details/production-details.component';

import { AddDetailsRawMaterialComponent } from './components/entities/detailsRawMaterial/add-details-raw-material/add-details-raw-material.component';
import { ListDetailsRawMaterialComponent } from './components/entities/detailsRawMaterial/list-details-raw-material/list-details-raw-material.component';
import { EditDetailsRawMaterialComponent } from './components/entities/detailsRawMaterial/edit-details-raw-material/edit-details-raw-material.component';
import { ListOneDetailsRawMaterialComponent } from './components/entities/detailsRawMaterial/list-one-details-raw-material/list-one-details-raw-material.component';
import { AddDetailsRawMaterialDialogComponent } from './components/entities/detailsRawMaterial/add-details-raw-material/add-details-raw-material-dialog/add-details-raw-material-dialog.component';
import { DialogRawMaterialRequestsComponent } from './components/entities/detailsRawMaterial/list-details-raw-material/dialog-raw-material-requests/dialog-raw-material-requests.component';
import { AddRawMaterialDeliveryComponent } from './components/entities/rawMaterialDelivery/add-raw-material-delivery/add-raw-material-delivery.component';
import { ListRawMaterialDeliveryComponent } from './components/entities/rawMaterialDelivery/list-raw-material-delivery/list-raw-material-delivery.component';
import { EditRawMaterialDeliveryComponent } from './components/entities/rawMaterialDelivery/edit-raw-material-delivery/edit-raw-material-delivery.component';
import { ListOneRawMaterialDeliveryComponent } from './components/entities/rawMaterialDelivery/list-one-raw-material-delivery/list-one-raw-material-delivery.component';
import { AddRawMaterialDeliveryDialogComponent } from './components/entities/rawMaterialDelivery/add-raw-material-delivery/add-raw-material-delivery-dialog/add-raw-material-delivery-dialog.component';
import { ShowDialogRequestsComponent } from './components/entities/rawMaterialDelivery/list-raw-material-delivery/show-dialog-requests/show-dialog-requests.component';
import { RequestDetailRawMaterialComponent } from './components/views/panel/request-detail-raw-material/request-detail-raw-material.component';
import {MachineryComponent} from './components/views/panel/machinery/machinery.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MachinstateCreateComponent,
    MachinstateShowComponent,
    MachinstateDialogComponent,
    MachinestateEditComponent,
    MachinestateShowOneComponent,
    RequeststatusShowComponent,
    RequeststatusShowOneComponent,
    RequeststatusEditComponent,
    RequeststatusCreateComponent,
    RequeststatusCreateDialogComponent,
    StatebranchofficeCreateDialogComponent,
    StatebranchofficeCreateComponent,
    StatebranchofficeEditComponent,
    StatebranchofficeShowComponent,
    StatebranchofficeShowOneComponent,
    HomeComponent,
    RequestanalysisShowComponent,
    RequestanalysisShowOneComponent,
    RequestanalysisEditComponent,
    RequestanalysisCreateComponent,
    RequestanalysisCreateDialogComponent,
    BranchofficeCreateDialogComponent,
    BranchofficeCreateComponent,
    BranchofficeEditComponent,
    BranchofficeShowComponent,
    BranchofficeShowOneComponent,

    CreateMachineryTypeComponent,
    EditMachineryTypeComponent,
    ShowMachineryTypeComponent,
    ShowOneMachineryTypeComponent,
    CreateMachineryTypeDialogComponent,

    CreateMachineryComponent,
    EditMachineryComponent,
    ShowMachineryComponent,
    ShowOneMachineryComponent,
    CreateMachineryDialogComponent,

    CreateWorkshiftComponent,
    EditWorkshiftComponent,
    ShowWorkshiftComponent,
    ShowOneWorkshiftComponent,
    CreateWorkshiftDialogComponent,
    CreateHumanresourcesComponent,
    CreateHumanresourcesDialogComponent,
    EditHumanresourcesComponent,
    ShowOneHumanresourcesComponent,
    ShowHumanresourcesComponent,

    ProductCreateComponent,
    ProductDialogComponent,
    ProductShowComponent,
    ProductEditComponent,
    ProductShowOneComponent,
    ProcessShowComponent,
    ProcessShowOneComponent,
    ProcessCreateComponent,
    ProcessDialogComponent,
    ProcessEditComponent,

    RequestbatchesShowComponent,
    RequestbatchesShowOneComponent,
    RequestbatchesCreateComponent,
    RequestbatchesCreateDialogComponent,
    RequestbatchesEditComponent,
    PaneladminComponent,
    PaneluserComponent,
    BranchofficeComponent,

    RequestbatchesComponent,

    InfoShowComponent,
    InfoShowDialogComponent,
    TimeremainingComponent,
    InfomachineryComponent,
    MachinerydisponibleDialogComponent,
    MachinerydisponibleComponent,
    MachineryocupadaComponent,
    MachineryocupadaDialogComponent,
    MachinerymtoDialogComponent,
    MachinerymtoComponent,
    MachineryreparacionDialogComponent,
    MachineryreparacionComponent,
    OtherinfoComponent,
    HumanresourceComponent,
    HumanresourceDialogComponent,
    MachineryComponent,
// Lo de Duber
    ProductionStatesComponent,
    AddProductionStatesComponent,
    EditProductionStatesComponent,
    ListProductionStatesComponent,
    DialogActionComponent,
    DialogConfirmationComponent,
    ListOneProductionStatesComponent,
    AddProductionStatesDialogComponent,
    PaneladminComponent,
    ProductionDetailsComponent,
    AddProductionDetailsComponent,
    ListProductionDetailsComponent,
    ListOneProductionDetailsComponent,
    EditProductionDetailsComponent,
    AddProductionDetailsDialogComponent,
    ShowDialogProductBatchComponent,
    ProductionDetailsComponentPanel,
    ProductionsComponent,
    AddProductionsComponent,
    AddProductionsDialogComponent,
    EditProductionsComponent,
    ListProductionsComponent,
    ListOneProductionsComponent,
    DialogConfirmationProductionsComponent,
    DialogActionProductionsComponent,
    AddRawMaterialRequestsComponent,
    EditRawMaterialRequestsComponent,
    ListRawMaterialRequestsComponent,
    ListOneRawMaterialRequestsComponent,
    AddRawMaterialRequestsDialogComponent,
    ShowDialogNumberBatchComponent,
    RawMaterialRequestsComponent,
    PaneladminComponent,
    AddDetailsRawMaterialComponent,
    ListDetailsRawMaterialComponent,
    EditDetailsRawMaterialComponent,
    ListOneDetailsRawMaterialComponent,
    AddDetailsRawMaterialDialogComponent,
    DialogRawMaterialRequestsComponent,
    AddRawMaterialDeliveryComponent,
    ListRawMaterialDeliveryComponent,
    EditRawMaterialDeliveryComponent,
    ListOneRawMaterialDeliveryComponent,
    AddRawMaterialDeliveryDialogComponent,
    ShowDialogRequestsComponent,
    RequestDetailRawMaterialComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,

    MatIconModule,
    MatTableModule,

    MatPaginatorModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    MatFormFieldModule,

    MatInputModule,
    MatDatepickerModule
  ],
  providers: [BranchofficeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
