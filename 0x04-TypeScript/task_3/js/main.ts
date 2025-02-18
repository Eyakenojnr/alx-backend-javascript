/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow(row);
row.age = 23;
const updatedRow: RowElement = row;

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
