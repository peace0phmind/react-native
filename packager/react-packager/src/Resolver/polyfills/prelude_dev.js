/* eslint strict:0 */
global.__DEV__ = true;

global.__BUNDLE_START_TIME__ = Date.now();

if (!global.process) {
  global.process = {};
  global.process.env = {};
  global.process.env.NODE_ENV = 'developement';

  if (!global.__fbBatchedBridgeConfig) {
    global.__fbBatchedBridgeConfig = {
      remoteModuleConfig: [],
      localModulesConfig: [],
    };
  }
}