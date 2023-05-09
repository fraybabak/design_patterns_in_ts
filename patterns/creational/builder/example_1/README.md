# Builder Pattern Example: Customizable Computer System

The Builder pattern is a creational design pattern that helps in constructing complex objects step by step, allowing for more control and flexibility over the object construction process. The pattern is particularly useful when dealing with objects that have many optional or required properties, leading to a large number of constructor parameters, which can make the code difficult to read and maintain.

In this example, we have implemented a customizable computer system that allows you to specify various components, such as the CPU, GPU, RAM, storage, and operating system. We use the Builder pattern to create instances of the `Computer` class step by step.

## computer.ts

The `computer.ts` file contains the `Computer` class, which represents the complex product that needs to be built.

```typescript
export class Computer {
  private _cpu: string;
  private _gpu: string;
  private _ram: number;
  private _storage: number;
  private _operatingSystem: string;

  constructor(
    cpu: string,
    gpu: string,
    ram: number,
    storage: number,
    operatingSystem: string
  ) {
    this._cpu = cpu;
    this._gpu = gpu;
    this._ram = ram;
    this._storage = storage;
    this._operatingSystem = operatingSystem;
  }

  public get specs(): string {
    return `CPU: ${this._cpu}\nGPU: ${this._gpu}\nRAM: ${this._ram}GB\nStorage: ${this._storage}GB\nOperating System: ${this._operatingSystem}`;
  }
}
```

## computerBuilder.ts

The `computerBuilder.ts` file contains the ComputerBuilder class, which is the builder for the Computer class.

```typescript
import { Computer } from './Computer';

export class ComputerBuilder {
  cpu: string;
  gpu: string;
  ram: number;
  storage: number;
  operatingSystem: string;

  constructor(cpu: string, gpu: string) {
    this.cpu = cpu;
    this.gpu = gpu;
  }

  public setRAM(ram: number): ComputerBuilder {
    this.ram = ram;
    return this;
  }

  public setStorage(storage: number): ComputerBuilder {
    this.storage = storage;
    return this;
  }

  public setOperatingSystem(os: string): ComputerBuilder {
    this.operatingSystem = os;
    return this;
  }

  public build(): Computer {
    return new Computer(
      this.cpu,
      this.gpu,
      this.ram,
      this.storage,
      this.operatingSystem
    );
  }
}
```

## app.ts

The `app.ts` file demonstrates how to use the Builder pattern to create and configure instances of the Computer class.

```typescript
import { ComputerBuilder } from './ComputerBuilder';

// Construct a Computer with a custom configuration using the Builder pattern
const customComputer = new ComputerBuilder(
  'Intel Core i9',
  'Nvidia GeForce RTX 3090'
)
  .setRAM(64)
  .setStorage(2000)
  .setOperatingSystem('Windows 11')
  .build();

console.log('Custom Computer Specs:');
console.log(customComputer.specs);

// Construct a Computer with a minimal configuration using the Builder pattern
const basicComputer = new ComputerBuilder(
  'Intel Core i5',
  'Nvidia GeForce GTX 1660'
)
  .setRAM(8)
  .setStorage(256)
  .setOperatingSystem('Windows 10')
  .build();

console.log('\nBasic Computer Specs:');
```
