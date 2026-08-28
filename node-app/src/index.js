import { add, multiply, formatGreeting } from './math.js';

console.log('==============================================');
console.log('       Nimbus CI - Node Service Run           ');
console.log('==============================================');
console.log(formatGreeting(process.env.APP_ENV || 'Nimbus CI'));
console.log(`Calculation Add(10, 20)       : ${add(10, 20)}`);
console.log(`Calculation Multiply(6, 7)    : ${multiply(6, 7)}`);
console.log(`Node Runtime Version          : ${process.version}`);
console.log(`Environment Variables         : NODE_ENV=${process.env.NODE_ENV}, APP_ENV=${process.env.APP_ENV}`);
console.log('==============================================');
