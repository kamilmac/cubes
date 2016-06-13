import Config from './config';
import Cubes from './services/cubes';
import User from './services/user';
import TransporterFactory from './services/transporter';
import Director from './services/director'
import UI from './services/ui'

const 
	cubes = new Cubes({
		transporter: TransporterFactory({
			url: Config.api.urls.cubesDB
		}),
		gdriveURL: Config.gdrive.baseURL
	}),
	user = new User({ cubes, username: 'admin' }),
	director = new Director({ user }),
	ui = new UI();

export const Services = { user, cubes, director, ui };
