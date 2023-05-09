import { AbstractGUIFactory, Button, Checkbox } from './interfaces';

import { DarkButton } from './buttons';
import { DarkCheckbox } from './checkboxes';

export class DarkThemeFactory implements AbstractGUIFactory {
  createButton(): Button {
    return new DarkButton();
  }

  createCheckbox(): Checkbox {
    return new DarkCheckbox();
  }
}
