import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MachinstateShowComponent } from './components/entities/machinestate/show/machinstate-show/machinstate-show.component';
import { MachinestateEditComponent } from './components/entities/machinestate/edit/machinestate-edit/machinestate-edit.component';
import { MachinestateShowOneComponent } from './components/entities/machinestate/show/machinestate-show-one/machinestate-show-one.component';
import { RequeststatusShowComponent } from './components/entities/requeststatus/show/requeststatus-show/requeststatus-show.component';
import { RequeststatusShowOneComponent } from './components/entities/requeststatus/show/requeststatus-show-one/requeststatus-show-one.component';
import { RequeststatusEditComponent } from './components/entities/requeststatus/edit/requeststatus-edit/requeststatus-edit.component';
import { StatebranchofficeShowComponent } from './components/entities/statebranchoffice/show/statebranchoffice-show/statebranchoffice-show.component';
import { StatebranchofficeEditComponent } from './components/entities/statebranchoffice/edit/statebranchoffice-edit/statebranchoffice-edit.component';
import { StatebranchofficeShowOneComponent } from './components/entities/statebranchoffice/show/statebranchoffice-show-one/statebranchoffice-show-one.component';
import { HomeComponent } from './components/home/home.component';


import {ProductShowComponent} from './components/entities/product/show/product-show/product-show.component';
import {ProductShowOneComponent} from './components/entities/product/show/product-show-one/product-show-one.component';
import {ProductEditComponent} from './components/entities/product/edit/product-edit/product-edit.component';
import {ProcessShowComponent} from './components/entities/process/show/process-show/process-show.component';
import {ProcessShowOneComponent} from './components/entities/process/show/process-show-one/process-show-one.component';
import {ProcessEditComponent} from './components/entities/process/edit/process-edit/process-edit.component';


import {ShowWorkshiftComponent} from './components/entities/workShifts/show-workshift/show-workshift.component';
import {EditWorkshiftComponent} from './components/entities/workShifts/edit-workshift/edit-workshift.component';
import {ShowOneWorkshiftComponent} from './components/entities/workShifts/show-one-workshift/show-one-workshift.component';
import {ShowHumanresourcesComponent} from './components/entities/humanResources/show-humanresources/show-humanresources.component';
import {EditHumanresourcesComponent} from './components/entities/humanResources/edit-humanresources/edit-humanresources.component';
import {ShowOneHumanresourcesComponent} from './components/entities/humanResources/show-one-humanresources/show-one-humanresources.component';

import { RequestanalysisShowComponent } from './components/entities/requestanalysis/show/requestanalysis-show/requestanalysis-show.component';
import { RequestanalysisShowOneComponent } from './components/entities/requestanalysis/show/requestanalysis-show-one/requestanalysis-show-one.component';
import { RequestanalysisEditComponent } from './components/entities/requestanalysis/edit/requestanalysis-edit/requestanalysis-edit.component';
import { BranchofficeShowComponent } from './components/entities/branchoffice/show/branchoffice-show/branchoffice-show.component';
import { BranchofficeShowOneComponent } from './components/entities/branchoffice/show/branchoffice-show-one/branchoffice-show-one.component';
import { BranchofficeEditComponent } from './components/entities/branchoffice/edit/branchoffice-edit/branchoffice-edit.component';
import { RequestbatchesShowComponent } from './components/entities/requestbatches/show/requestbatches-show/requestbatches-show.component';
import { PaneladminComponent } from './components/views/paneladmin/paneladmin.component';
import { PaneluserComponent } from './components/views/paneluser/paneluser.component';
import { RequestbatchesShowOneComponent } from './components/entities/requestbatches/show/requestbatches-show-one/requestbatches-show-one.component';
import { RequestbatchesEditComponent } from './components/entities/requestbatches/edit/requestbatches-edit/requestbatches-edit.component';

import { TimeremainingComponent } from './components/views/panel/timeremaining/timeremaining.component';

import {ListProductionStatesComponent} from './components/entities/production-states/components/list-production-states/list-production-states.component';
import {ListOneProductionStatesComponent} from './components/entities/production-states/components/list-one-production-states/list-one-production-states.component';
import {EditProductionStatesComponent} from './components/entities/production-states/components/edit-production-states/edit-production-states.component';
import {ListProductionDetailsComponent} from './components/entities/production-details/list-production-details/list-production-details.component';
import {ListOneProductionDetailsComponent} from './components/entities/production-details/list-one-production-details/list-one-production-details.component';
import {EditProductionDetailsComponent} from './components/entities/production-details/edit-production-details/edit-production-details.component';
import {ListProductionsComponent} from './components/entities/productions/components/list-productions/list-productions.component';
import {ListOneProductionsComponent} from './components/entities/productions/components/list-one-productions/list-one-productions.component';
import {EditProductionsComponent} from './components/entities/productions/components/edit-productions/edit-productions.component';
import {ListRawMaterialRequestsComponent} from './components/entities/rawMaterialRequests/list-raw-material-requests/list-raw-material-requests.component';
import {ListOneRawMaterialRequestsComponent} from './components/entities/rawMaterialRequests/list-one-raw-material-requests/list-one-raw-material-requests.component';
import {EditRawMaterialRequestsComponent} from './components/entities/rawMaterialRequests/edit-raw-material-requests/edit-raw-material-requests.component';
import {ListDetailsRawMaterialComponent} from './components/entities/detailsRawMaterial/list-details-raw-material/list-details-raw-material.component';
import {ListOneDetailsRawMaterialComponent} from './components/entities/detailsRawMaterial/list-one-details-raw-material/list-one-details-raw-material.component';
import {EditDetailsRawMaterialComponent} from './components/entities/detailsRawMaterial/edit-details-raw-material/edit-details-raw-material.component';
import {ListRawMaterialDeliveryComponent} from './components/entities/rawMaterialDelivery/list-raw-material-delivery/list-raw-material-delivery.component';
import {ListOneRawMaterialDeliveryComponent} from './components/entities/rawMaterialDelivery/list-one-raw-material-delivery/list-one-raw-material-delivery.component';
import {EditRawMaterialDeliveryComponent} from './components/entities/rawMaterialDelivery/edit-raw-material-delivery/edit-raw-material-delivery.component';
import {ShowMachineryTypeComponent} from './components/entities/machineryType/show-machineryType/show-machineryType.component';
import {EditMachineryTypeComponent} from './components/entities/machineryType/edit-machineryType/edit-machineryType.component';
import {ShowOneMachineryTypeComponent} from './components/entities/machineryType/show-one-machineryType/show-one-machineryType.component';
import {ShowMachineryComponent} from './components/entities/machinery/show-machinery/show-machinery.component';
import {EditMachineryComponent} from './components/entities/machinery/edit-machinery/edit-machinery.component';
import {ShowOneMachineryComponent} from './components/entities/machinery/show-one-machinery/show-one-machinery.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'paneladmin', component: PaneladminComponent},
    {path: 'paneluser', component: PaneluserComponent},
    {path: 'machinestate', component: MachinstateShowComponent},
    {path: 'Machinestate/:code', component: MachinestateEditComponent},
    {path: 'machinestate/show/:code', component: MachinestateShowOneComponent},
    {path: 'requeststatus', component: RequeststatusShowComponent},
    {path: 'Requeststatus/:code', component: RequeststatusEditComponent},
    {path: 'requeststatus/show/:code', component: RequeststatusShowOneComponent},
    {path: 'StateBranchOffice', component: StatebranchofficeShowComponent},
    {path: 'StateBranchOffice/:code', component: StatebranchofficeEditComponent},
    {path: 'StateBranchOffice/show/:code', component: StatebranchofficeShowOneComponent},
    {path: 'requestanalysis', component: RequestanalysisShowComponent},
    {path: 'requestanalysis/show/:code', component: RequestanalysisShowOneComponent},
    {path: 'requestanalysis/:code', component: RequestanalysisEditComponent},
    {path: 'branchoffice', component: BranchofficeShowComponent},
    {path: 'branchoffice/show/:code', component: BranchofficeShowOneComponent},
    {path: 'branchoffice/:code', component: BranchofficeEditComponent},

    {path: 'product', component: ProductShowComponent},
    {path: 'product/show/:code', component: ProductShowOneComponent},
    {path: 'product/:code', component: ProductEditComponent},
    {path: 'process', component: ProcessShowComponent},
    {path: 'process/show/:code', component: ProcessShowOneComponent},
    {path: 'process/:code', component: ProcessEditComponent},

    {path: 'machineryType', component: ShowMachineryTypeComponent},
    {path: 'machineryType/:code', component: EditMachineryTypeComponent},
    {path: 'machineryType/show/:code', component: ShowOneMachineryTypeComponent},

    {path: 'machinery', component: ShowMachineryComponent},
    {path: 'machinery/:code', component: EditMachineryComponent},
    {path: 'machinery/show/:code', component: ShowOneMachineryComponent},

    {path: 'workshift', component: ShowWorkshiftComponent},
    {path: 'workshift/:code', component: EditWorkshiftComponent},
    {path: 'workshift/show/:code', component: ShowOneWorkshiftComponent},
    {path: 'humanresource', component: ShowHumanresourcesComponent},
    {path: 'humanresource/:code', component: EditHumanresourcesComponent},
    {path: 'humanresource/show/:code', component: ShowOneHumanresourcesComponent},

    {path: 'requestbatches', component: RequestbatchesShowComponent},
    {path: 'requestbatches/show/:code', component: RequestbatchesShowOneComponent},
    {path: 'requestbatches/:code', component: RequestbatchesEditComponent},

    {path: 'paneluser', component: PaneluserComponent},
    {path: 'info', component: TimeremainingComponent},
// Duber
    {path: 'production-states', component:  ListProductionStatesComponent},
    {path: 'production-states/show/:code', component:  ListOneProductionStatesComponent},
    {path: 'production-states/:code', component:  EditProductionStatesComponent},
    {path: 'production-details', component:  ListProductionDetailsComponent},
    {path: 'production-details/show/:productsCode/:productBatch', component:  ListOneProductionDetailsComponent},
    {path: 'production-details/:productsCode/:productBatch', component:  EditProductionDetailsComponent},
    {path: 'productions', component:  ListProductionsComponent },
    {path: 'productions/show/:code', component:  ListOneProductionsComponent },
    {path: 'productions/:code', component:  EditProductionsComponent },
    {path: 'raw-material-requests', component:  ListRawMaterialRequestsComponent },
    {path: 'raw-material-requests/show/:code', component:  ListOneRawMaterialRequestsComponent },
    {path: 'raw-material-requests/:code', component:  EditRawMaterialRequestsComponent },
    {path: 'requests-details-raw-material', component:  ListDetailsRawMaterialComponent },
    {path: 'requests-details-raw-material/show/:code', component:  ListOneDetailsRawMaterialComponent },
    {path: 'requests-details-raw-material/:code', component:  EditDetailsRawMaterialComponent },
    {path: 'raw-material-delivery-states', component:  ListRawMaterialDeliveryComponent },
    {path: 'raw-material-delivery-states/show/:code', component:  ListOneRawMaterialDeliveryComponent },
    {path: 'raw-material-delivery-states/:code', component:  EditRawMaterialDeliveryComponent }
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
