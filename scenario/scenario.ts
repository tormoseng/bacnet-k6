import {changeDescription, getObjectList, getObjectTypes, getProperty} from "../api/objectAccess.ts";

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
      getProperty(i, 'device', i, 'description')
    }
  }

}

export async function perfScenario() {
  getObjectList(0)
}
