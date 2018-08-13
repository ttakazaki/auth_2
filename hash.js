const bcrypt = require('bcrypt');
const { MD5 } = require('crypto-js');
const jwt = require('jsonwebtoken');

// bcrypt.genSalt(10, (err, salt) => {
//   if (err) return next(err);

//   bcrypt.hash('password123', salt, (err, hash) => {
//     if (err) return next(err);
//     console.log(hash);
//   });
// });

// const secret = 'mysecretpassword';
// const secretSalt = 'afeafsfeafsfeewfafeffeweafewa';

// const user = {
//   id: 1,
//   token: MD5('DDFEFEFEFE').toString() + secretSalt
// };

// const receivedToken =
//   'f2f5514c7a9e0caf046836f86e16736aafeafsfeafsfeewfafeffeweafewa';

// if (receivedToken === user.token) {
//   console.log('move forward');
// }

// console.log(user);

const id = '1000';
const secret = 'supersecret';

const receiveToken =
  'eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y';

const token = jwt.sign(id, secret);
const decodeToken = jwt.verify(receiveToken, secret);

console.log(decodeToken);
