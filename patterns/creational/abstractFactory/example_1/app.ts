import { AbstractGUIFactory, Button, Checkbox } from './interfaces';

import { LightThemeFactory } from './lightThemeFactory';
import { DarkThemeFactory } from './darkThemeFactory';

function renderGUI(factory: AbstractGUIFactory) {
  const button: Button = factory.createButton();
  button.render();

  const checkbox: Checkbox = factory.createCheckbox();
  checkbox.render();
}

// Use Light Theme Factory
const lightThemeFactory: AbstractGUIFactory = new LightThemeFactory();
renderGUI(lightThemeFactory);

// Use Dark Theme Factory
const darkThemeFactory: AbstractGUIFactory = new DarkThemeFactory();
renderGUI(darkThemeFactory);
