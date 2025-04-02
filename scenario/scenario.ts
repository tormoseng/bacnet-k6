import {changeDescription, getObjectList, getObjectTypes, getProperty} from "../api/objectAccess.ts";
import {sleep} from "k6";

export async function functScenario() {
  /*
    Discovery:
      - POST /api/unconfirmed/service/whoIs
      - GET /api/objectAccess/network

    Here:
      - Hard code deviceId 0 - 4
   */

  for (let i = 0; i < 5; i++) {
    console.log(`--- deviceId ${i} ---`)

    // Get list of objects
    getObjectList(i)

    // Get list of types (exclude 'device' in return)
    const types = getObjectTypes(i)

    // Get the present value for each type
    types?.forEach(e => getProperty(i, e, 0, 'presentValue'))

    // Get description and change it
    getProperty(i, 'device', 0, 'description')
    for (let j = 0; j < 2; j++) {
      const rand = Math.round(Math.random()*100)
      changeDescription(i, 'device', i, `My description ${rand}`)
      sleep(1)
      getProperty(i, 'device', i, 'description')
    }
  }
}

export async function perfScenario() {
  getObjectList(0)
  getObjectTypes(0)
  getProperty(0, 'analogInput', 0, 'presentValue')
  getProperty(0, 'analogOutput', 0, 'presentValue')
  getProperty(0, 'device', 0, 'description')
  const rand = Math.round(Math.random()*100)
  changeDescription(0, 'device', 0, `My description ${rand}`)
  getProperty(0, 'device', 0, 'description')
}
