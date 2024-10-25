import * as SQLite from 'expo-sqlite';

export const db = await SQLite.openDatabaseAsync('medsched');

db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS medication (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, dose-pill INTEGER NOT NULL, dosage-sched TEXT NOT NULL, med-name TEXT, dose-per TEXT, current-count INTEGER);
    // INSERT INTO test (value, intValue) VALUES ('test1', 123);
    // INSERT INTO test (value, intValue) VALUES ('test2', 456);
    // INSERT INTO test (value, intValue) VALUES ('test3', 789);

    CREATE TABLE IF NOT EXISTS dose-record (id INTEGER PRIMARY KEY NOT NULL, pid INTEGER FOREIGN KEY NOT NULL, datetime DATETIME NOT NULL, comments TEXT);
    `);
    
    // // `runAsync()` is useful when you want to execute some write operations.
    // const result = await db.runAsync('INSERT INTO test (value, intValue) VALUES (?, ?)', 'aaa', 100);
    // console.log(result.lastInsertRowId, result.changes);
    // await db.runAsync('UPDATE test SET intValue = ? WHERE value = ?', 999, 'aaa'); // Binding unnamed parameters from variadic arguments
    // await db.runAsync('UPDATE test SET intValue = ? WHERE value = ?', [999, 'aaa']); // Binding unnamed parameters from array
    // await db.runAsync('DELETE FROM test WHERE value = $value', { $value: 'aaa' }); // Binding named parameters from object
    
    // // `getFirstAsync()` is useful when you want to get a single row from the database.
    // const firstRow = await db.getFirstAsync('SELECT * FROM test');
    // console.log(firstRow.id, firstRow.value, firstRow.intValue);
    
    // // `getAllAsync()` is useful when you want to get all results as an array of objects.
    // const allRows = await db.getAllAsync('SELECT * FROM test');
    // for (const row of allRows) {
    //   console.log(row.id, row.value, row.intValue);
    // }
    
    // // `getEachAsync()` is useful when you want to iterate SQLite query cursor.
    // for await (const row of db.getEachAsync('SELECT * FROM test')) {
    //   console.log(row.id, row.value, row.intValue);
    // }