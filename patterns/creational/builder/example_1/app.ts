import { ComputerBuilder } from './computerBuilder';

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
console.log(basicComputer.specs);
