import { Checkbox } from './interfaces';

export class LightCheckbox implements Checkbox {
  render(): void {
    console.log('Rendering Light Checkbox');
  }
}

export class DarkCheckbox implements Checkbox {
  render(): void {
    console.log('Rendering Dark Checkbox');
  }
}
