import { of, from } from 'rxjs';

const someResolvedPromise = new Promise((resolve, reject) => {
  resolve('resolved');
});

const someRejectedPromise = new Promise((resolve, reject) => {
  reject('rejected');
});

const observerableFromResPromise$ = from(someResolvedPromise).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('completed'),
});

const observerableFromRejPromise$ = from(someRejectedPromise).subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.log('completed'),
});
