import * as express from 'express';
import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';

const FoodRoutes = require('../routes/FoodRoutes');


/**
 * Global router configuration of the application
 *
 * @class
 */
 class Routes {
	/**
   * @param  {Application} app
   *
   * @returns void
   */
	static init(app) {
		const router = express.Router();

		// Express middleware
		app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
		app.use(bodyParser.json());
		app.use(cookieParser());
		app.use(helmet());
		app.use(cors());


		//app.use('/', router);
        app.use("/", (req, res, next)=>{
            res.send("hello heroku");
        });
		// default
		app.use(FoodRoutes);

	}
}

export { Routes };
