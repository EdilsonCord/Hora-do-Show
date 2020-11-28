import { AppRegistry } from 'react-native';
import Routes from './src/routes/deslogado.routes';
import { name as appName } from './app.json';

global.user = []
// global.endereco = '192.168.0.27:3333'
global.endereco = 'gentle-bastion-95701.herokuapp.com'
AppRegistry.registerComponent(appName, () => Routes);
