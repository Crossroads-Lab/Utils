// Imports.
import './functionUtils.js';
import './numberUtils.js';
import './objectUtils.js';
import './stringUtils.js';

// Exports.
export { default as asyncify } from './asyncify.js';
export { default as clock } from './clock.js';
export { default as debounce } from './debounce.js';
export { default as getUrlString } from './getUrlString.js';
export { default as path } from './path.js';
export { default as promisify } from './promisify.js';
export { default as sleep } from './sleep.js';
export { default as throttle } from './throttle.js';

// Node.js exports.
try {
  require('./numberUtils.js');
  require('./objectUtils.js');
  require('./stringUtils.js');
  module.exports = {
    asyncify: require('./asyncify.js'),
    clock: require('./clock.js'),
    debounce: require('./debounce.js'),
    getUrlString: require('./getUrlString.js'),
    path: require('./path.js'),
    promisify: require('./promisify.js'),
    sleep: require('./sleep.js'),
    throttle: require('./throttle.js')
  }
} catch {}
