import {changeDescription, getObjectList, getObjectTypes, getProperty} from "../api/objectAccess.ts";


export async function functScenario() {
  for (let i = 0; i < 5; i++) {
    console.log(`--- deviceId ${i} ---`)
    getObjectList(i)
    const types = getObjectTypes(i)
    types?.forEach(e => getProperty(i, e, 0, 'presentValue'))

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
