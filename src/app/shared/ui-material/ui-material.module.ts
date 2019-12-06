// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import {
//   MatAutocompleteModule,
//   MatButtonModule,
//   MatButtonToggleModule,
//   MatCardModule,
//   MatCheckboxModule,
//   MatChipsModule,
//   MatDatepickerModule,
//   MatDialogModule,
//   MatExpansionModule,
//   MatGridListModule,
//   MatIconModule,
//   MatInputModule,
//   MatListModule,
//   MatMenuModule,
//   MatNativeDateModule,
//   MatPaginatorModule,
//   MatProgressBarModule,
//   MatProgressSpinnerModule,
//   MatRadioModule,
//   MatRippleModule,
//   MatSelectModule,
//   MatSidenavModule,
//   MatSliderModule,
//   MatSlideToggleModule,
//   MatSnackBarModule,
//   MatSortModule,
//   MatTableModule,
//   MatTabsModule,
//   MatToolbarModule,
//   MatTooltipModule,
//   MatStepperModule
// } from '@angular/material';

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     MatToolbarModule,
//     MatButtonModule,
//     MatSidenavModule,
//     MatIconModule,
//     MatListModule,
//     MatGridListModule,
//     MatCardModule,
//     MatMenuModule,
//     MatTableModule,
//     MatPaginatorModule,
//     MatSortModule
//   ],
//   exports: [
//     CommonModule,
//     MatToolbarModule,
//     MatButtonModule,
//     MatSidenavModule,
//     MatIconModule,
//     MatListModule,
//     MatGridListModule,
//     MatCardModule,
//     MatMenuModule,
//     MatTableModule,
//     MatPaginatorModule,
//     MatSortModule
//   ]
// })
// export class UiMaterialModule {}

// OR

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatButtonModule,
    Material.MatSidenavModule,
    Material.MatIconModule,
    Material.MatListModule,
    Material.MatGridListModule,
    Material.MatCardModule,
    Material.MatMenuModule,
    Material.MatTableModule,
    Material.MatPaginatorModule,
    Material.MatSortModule
  ],
  exports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatButtonModule,
    Material.MatSidenavModule,
    Material.MatIconModule,
    Material.MatListModule,
    Material.MatGridListModule,
    Material.MatCardModule,
    Material.MatMenuModule,
    Material.MatTableModule,
    Material.MatPaginatorModule,
    Material.MatSortModule
  ]
})
export class UiMaterialModule {}
