import { env } from './env.ts';
import { funcOptions, perfOptions } from './options.ts';
import { Options } from 'k6/options';
import { functScenario, perfScenario } from '../scenario/scenario.ts';

class Conf {
  /* @ts-ignore */
  host: string = __ENV.host || env.environments[__ENV.env || 'dev'].host;

  /* @ts-ignore */
  options: Options =
    __ENV.performanceTest === 'true' ? perfOptions : funcOptions;

  /* @ts-ignore */
  isPerformanceTest: boolean = __ENV.performanceTest === 'true';

  /* @ts-ignore */
  usecase = (): Promise<void> => {
    __ENV.performanceTest === 'true'
      ? perfScenario()
      : functScenario();
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Conf();
