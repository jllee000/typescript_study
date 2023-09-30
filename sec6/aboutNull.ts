type Admin2 = {
    name: string;
    privileges: string[];
  };
  
  type Employee2 = {
    name: string;
    startDate: Date;
  };
  
  // interface ElevatedEmployee2 extends Employee2, Admin2 {}
  
  type ElevatedEmployee2 = Admin2 & Employee2;
  
  const e2: ElevatedEmployee2 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
  };
  
  type Combinable3 = string | number;
  type numeric = number | boolean;
  
  type universal = Combinable3 & numeric;
  
  function add(a: number, b: number): number;
  function add(a: string, b: string): string;
  function add(a: string, b: number): string;
  function add(a: number, b: string): string;
  function add(a: Combinable3, b: Combinable3) {
    if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
    }
    return a + b;
  }
  
  const result2 = add('Max', ' Schwarz');
  result2.split(' ');
  
  const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
  };
  
  console.log(fetchedUserData?.job?.title);
  
  const userInput = undefined;
  
  const storedData = userInput ?? 'DEFAULT';
  
  console.log(storedData);
  
