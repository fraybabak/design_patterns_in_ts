import { AbstractGUIFactory, Button, Checkbox } from './interfaces';

import { LightButton } from './buttons';
import { LightCheckbox } from './checkboxes';

export class LightThemeFactory implements AbstractGUIFactory {
  createButton(): Button {
    return new LightButton();
  }

  createCheckbox(): Checkbox {
    return new LightCheckbox();
  }
}
