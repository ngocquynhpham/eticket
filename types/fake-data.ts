import {  } from '@prisma/client';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakeTicketType() {
  return {
    name: faker.person.fullName(),
    note: undefined,
  };
}
export function fakeTicketTypeComplete() {
  return {
    id: faker.number.int(),
    name: faker.person.fullName(),
    note: undefined,
    isActive: true,
  };
}
export function fakeDepartment() {
  return {
    name: faker.person.fullName(),
    note: undefined,
  };
}
export function fakeDepartmentComplete() {
  return {
    id: faker.number.int(),
    name: faker.person.fullName(),
    note: undefined,
    isActive: true,
  };
}
export function fakeCategory() {
  return {
    name: faker.person.fullName(),
    note: undefined,
  };
}
export function fakeCategoryComplete() {
  return {
    id: faker.number.int(),
    name: faker.person.fullName(),
    note: undefined,
    isActive: true,
  };
}
export function fakeStatusTicket() {
  return {
    name: faker.person.fullName(),
    note: undefined,
  };
}
export function fakeStatusTicketComplete() {
  return {
    id: faker.number.int(),
    name: faker.person.fullName(),
    note: undefined,
    isActive: true,
  };
}
export function fakeUser() {
  return {
    name: faker.person.fullName(),
    externalId: faker.lorem.words(5),
  };
}
export function fakeUserComplete() {
  return {
    id: faker.number.int(),
    name: faker.person.fullName(),
    externalId: faker.lorem.words(5),
    isActive: true,
  };
}
export function fakeTicket() {
  return {
    subject: faker.lorem.words(5),
    content: faker.lorem.words(5),
    term: faker.datatype.boolean(),
  };
}
export function fakeTicketComplete() {
  return {
    id: faker.number.int({min: 50, max: 5000}),
    subject: faker.lorem.words(5),
    userID: 1,
    statusID: faker.number.int({min: 1, max: 4}),
    categoryID: faker.number.int({min: 1, max: 10}),
    departmentID: faker.number.int({min: 1, max: 10}),
    ticketTypeID: faker.number.int({min: 1, max: 10}),
    content: faker.lorem.words(5),
    term: faker.datatype.boolean(),
    createdAt: new Date(),
  };
}
