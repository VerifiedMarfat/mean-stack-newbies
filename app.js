'use strict';

const object = () => ({ title: 'Processing an object' })

const lambda = (text) => { console.log(text) }

const deadZone = (proceed) => {
  let deadZone = 'Throws "ReferenceError: deadZone is not defined" error!'
  if (proceed) {
    // Temporal Dead Zone for variables that are redefined within this scope.
    console.log(deadZone);
    let deadZone = 'Hello? Is it me you\'re looking for?'
  }
}

console.log(object().title)
lambda('This is what we call a lambda function. Simples!')

// TODO :: set true to see how TDZ works.
deadZone(false);
