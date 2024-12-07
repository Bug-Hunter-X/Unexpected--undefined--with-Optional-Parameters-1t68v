function printName(name?: string): void {
  if (name === undefined) {
    console.log('Name not provided');
  } else {
    console.log(name);
  }
}

printName(); // Prints 'Name not provided'
printName(undefined); // Prints 'Name not provided'
printName("Alice"); //Prints "Alice"