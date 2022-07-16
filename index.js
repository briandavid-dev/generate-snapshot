// const heapProfile = require('heap-profile');
// import headpProfile from 'heap-profile';
// import { writeSnapshot } from 'heapdump';


// FUNCIONA
// writeSnapshot(function (err, filename) {
//     console.log('filename', filename);
//     if (err) {
//       console.log('err.message', err.message);
//       throw err;
//     }
//     console.log('dump written to', filename);
//   });


// FUNCIONA
// const filepath = '';
// const filename = `${Date.now()}.heapsnapshot`;
// writeSnapshot(filepath + filename, (err) => {
//   console.log('writeSnapshot');
//   if (err) {
//     console.log('err.message', err.message);
//     throw err;
//   }
//   console.log('Generated heapdump: ' + filename);
// });

heapProfile.start();
