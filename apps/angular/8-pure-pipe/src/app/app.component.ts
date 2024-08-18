import { Component } from '@angular/core';

import { AppHeavyComputationPipe } from './pipes/app-heavy-computation.pipe';

@Component({
  standalone: true,
  imports: [AppHeavyComputationPipe],
  selector: 'app-root',
  template: `
    @for (person of persons; track index; let index = $index) {
      <div>
        {{ person | appHeavyComputation: index }}
      </div>
    }
  `,
})
export class AppComponent {
  readonly persons: string[] = ['toto', 'jack'];
}
