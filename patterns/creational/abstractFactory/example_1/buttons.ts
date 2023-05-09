import { Button } from './interfaces';

export class LightButton implements Button {
  render(): void {
    console.log('Rendering Light Button');
  }
}

export class DarkButton implements Button {
  render(): void {
    console.log('Rendering Dark Button');
  }
}
