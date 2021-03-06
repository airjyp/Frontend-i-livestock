import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
	    //{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'dash_qurban', loadChildren: './dash_qurban/charts.module#ChartsModule' },
            { path: 'qurban_me', loadChildren: './qurban_me/dashboard.module#DashboardModule' },
            { path: 'jumlah_hewan', loadChildren: './jumlah_hewan/charts.module#ChartsModule' },
	        { path: 'jumlah_pakan', loadChildren: './jumlah_pakan/charts.module#ChartsModule' },
	        { path: 'sapi', loadChildren: './sapi/charts.module#ChartsModule' },
	        { path: 'kambing', loadChildren: './kambing/charts.module#ChartsModule' },
            { path: 'domba', loadChildren: './domba/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'tambah_hewan', loadChildren: './tambah_hewan/form.module#FormModule' },
            { path: 'tambah_pakan', loadChildren: './tambah_pakan/form.module#FormModule' },
            { path: 'edit_hewan', loadChildren: './edit_hewan/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
        //{ path: 'statistik', loadChildren: './statistik/charts.module#BlankPageModule' },
	    //{ path: 'profil', loadChildren: './profil/blank-page.module#BlankPageModule' },
      //  { path: 'password', loadChildren: './password/blank-page.module#BlankPageModule' },
	    //{ path: 'kotak_masuk', loadChildren: './kotak_masuk/blank-page.module#BlankPageModule' },
	    //{ path: 'pengaturan', loadChildren: './pengaturan/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
