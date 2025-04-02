import { Options } from 'k6/options';

export const funcOptions: Options = {
  summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(75)', 'p(95)', 'count'],
  scenarios: {
    ui: {
      executor: 'shared-iterations',
      vus: 1,
      iterations: 1
    },
  },
  thresholds: {},
};

export const perfOptions: Options = {
  summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(75)', 'p(95)', 'count'],
  scenarios: {
    ui: {
      executor: 'shared-iterations',
      vus: 2,
      iterations: 10,
      maxDuration: '20m'
    },
  },
  thresholds: {},
};
