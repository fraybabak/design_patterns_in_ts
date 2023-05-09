import { Computer } from './computer';

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
