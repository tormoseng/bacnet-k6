import Conf from './conf/conf.ts';
import { Options } from 'k6/options';

// Options
export const options: Options = Conf.options;

//Before the simulation starts
export function setup() {
  console.log('---- Setup ----');
  console.log(`Environment: ${Conf.host}`);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async function () {
  await Conf.usecase();
}
