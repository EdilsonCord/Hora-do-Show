import {AppRegistry} from 'react-native';
import Routes from './src/routes/deslogado.routes';
import {name as appName} from './app.json';

global.user = []
AppRegistry.registerComponent(appName, () => Routes);
