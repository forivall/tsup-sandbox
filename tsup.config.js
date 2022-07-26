
module.exports = require('tsup').defineConfig([
  {outDir: 'a-out', entry: ['a.js'], onSuccess: 'sleep 1'},
  {outDir: 'b-out', entry: ['b.js']}
])
