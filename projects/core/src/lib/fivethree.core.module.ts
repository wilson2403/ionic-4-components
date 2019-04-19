import { FivGalleryModule } from './gallery/gallery.module';
import { FivToolbarSearchModule } from './toolbar-search/toolbar-search.module';
import { FivIconModule } from './icon/icon.module';
import { FivBackButton } from './back-button/back-button.component';
import { FivDialogService } from './services/dialog.service';
import { FivNetworkStatus } from './network-status/network-status.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HammerGestureConfig } from '@angular/platform-browser';
import { Hammer } from 'hammerjs';
import { FivCollapsableMenu } from './collapsable-menu/collapsable-menu.directive';
import { FivCollapsableMenuButton } from './collapsable-menu-button/collapsable-menu-button.component';
import { FivBottomSheet } from './bottom-sheet/bottom-sheet.component';
import { FivBottomSheetContent } from './bottom-sheet-content/bottom-sheet-content.component';
import { FivLoadingButton } from './loading-button/loading-button.component';
import { FivLoadingProgressBar } from './loading-progress-bar/loading-progress-bar.component';
import { FivLoadingContent } from './loading-content/loading-content.component';
import { FivLoadingFab } from './loading-fab/loading-fab.component';
import { FivAppBar } from './app-bar/app-bar.component';
import { FivCenter } from './directives/center.directive';
import { FivPermissions } from './directives/permissions.directive';
import { FivViewport } from './directives/viewport.directive';
import { FivLoadingSpinner } from './loading-spinner/loading-spinner.component';
import { FivDialog } from './dialog/dialog.component';
import { FivLoadingRefresherContent } from './loading-refresher-content/loading-refresher-content.component';
import { FivAppBarTab } from './app-bar-tab/app-bar-tab.component';
import { FivAppBarTabContent } from './app-bar-tab-content/app-bar-tab-content.component';
import { FivButtons } from './buttons/buttons.component';
import { FivButton } from './button/button.component';
import { FivPopover } from './popover/popover.component';
import { FivEditableLabel } from './editable-label/editable-label.component';
import { LazyImageDirective } from './directives/lazy-image.directive';
import { FivPasswordInputModule } from './password-input/password-input.module';
import { FivExpandableModule } from './expandable/expandable.module';
import { FivStepperModule } from './stepper/stepper.module';
import { FivRippleModule } from './ripple/ripple.module';
import { FivRouterItemModule } from './router-item/router-item.module';
import { FivOverlayModule } from './overlay/overlay.module';
import { FivIfModule } from './directives/if-platform.module';
import { FivPullModule } from './directives/pull.module';


export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    pan: { direction: Hammer.DIRECTION_VERTICAL, threshold: 3 },
  };
}

const componentModules = [
  FivExpandableModule,
  FivGalleryModule,
  FivIconModule,
  FivOverlayModule,
  FivPasswordInputModule,
  FivRippleModule,
  FivRouterItemModule,
  FivStepperModule,
  FivToolbarSearchModule
];

const directiveModules = [
  FivIfModule,
  FivPullModule
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ...componentModules,
    ...directiveModules,
  ],
  declarations: [
    FivEditableLabel,
    FivCenter,
    FivCollapsableMenuButton,
    FivCollapsableMenu,
    FivBottomSheet,
    FivBottomSheetContent,
    FivLoadingButton,
    FivLoadingProgressBar,
    FivLoadingContent,
    FivLoadingFab,
    FivAppBar,
    FivPermissions,
    FivViewport,
    FivLoadingRefresherContent,
    FivLoadingSpinner,
    FivDialog,
    FivAppBarTab,
    FivAppBarTabContent,
    FivButtons,
    FivButton,
    FivPopover,
    FivNetworkStatus,
    FivBackButton,
    LazyImageDirective
  ],
  entryComponents: [
    FivPopover,
    FivNetworkStatus,
    FivDialog],
  exports: [
    ...componentModules,
    ...directiveModules,
    FivEditableLabel,
    FivCollapsableMenu,
    FivCenter,
    FivCollapsableMenuButton,
    FivBottomSheet,
    FivBottomSheetContent,
    FivLoadingButton,
    FivLoadingProgressBar,
    FivLoadingContent,
    FivLoadingFab,
    FivAppBar,
    FivPermissions,
    FivViewport,
    FivLoadingRefresherContent,
    FivLoadingSpinner,
    FivDialog,
    FivAppBarTab,
    FivAppBarTabContent,
    FivButtons,
    FivButton,
    FivNetworkStatus,
    FivBackButton,
    LazyImageDirective
  ],
  providers: [
    FivDialogService
  ]
})
export class FivethreeCoreModule { }
