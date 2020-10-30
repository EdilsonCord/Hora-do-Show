import { AppRegistry } from 'react-native';
import Routes from './src/routes/deslogado.routes';
import { name as appName } from './app.json';

global.user = []
// global.endereco = '192.168.0.27:3333'
global.endereco = '10.0.2.2:3333'
AppRegistry.registerComponent(appName, () => Routes);
