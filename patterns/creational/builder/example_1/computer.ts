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
