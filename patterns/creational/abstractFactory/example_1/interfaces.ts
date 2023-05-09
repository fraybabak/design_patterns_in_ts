export interface Button {
  render(): void;
}

export interface Checkbox {
  render(): void;
}

export interface AbstractGUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}
