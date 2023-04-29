function getPerson(person) {
    if (typeof person !== 'object' || !person.hasOwnProperty('name') || !person.hasOwnProperty('age')) {
      return ('Invalid parameter type');
    }
    return `Name: ${person.name}, Age: ${person.age}`;
  }


  console.log(getPerson({name : "mithun" }));