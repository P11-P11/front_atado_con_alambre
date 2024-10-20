import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import shared components, directives, and pipes here

@NgModule({
  declarations: [
    // Shared components, directives, pipes
  ],
  imports: [CommonModule],
  exports: [
    CommonModule,
    // Export shared components, directives, pipes
  ],
})
export class SharedModule {}
