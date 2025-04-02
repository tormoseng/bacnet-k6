import http from "k6/http";
import Conf from '../conf/conf.ts';
import { bacnetHeaders } from "../utils/headers.ts";
import {ObjectListType, ObjectTypesType, PropertyType} from "../types";
import {log} from "../utils/utils.ts";

export function getObjectList(deviceId: number) {
    const requestName = "getObjectList";

    const res = http.get(
        `${Conf.host}/api/objectAccess/${deviceId}/objectList`,
        {
            tags: { name: requestName },
            headers: bacnetHeaders(),
        }
    );

    try {
        const json = res.json() as ObjectListType;
        const objectTypes = json.value.arrayOfObjectIdentifier.map(e => e.objectType)

        console.log(
            `[${res.status} getObjectList] deviceId ${deviceId}, objectTypes: ${objectTypes}`
        );
        log(`[${res.status} getObjectList] deviceId ${deviceId}, objectTypes: ${objectTypes}`)

    } catch (exp) {
        //throw exp
        console.log(
            `[${res.status} getObjectList]`
        );
    }
}

export function getObjectTypes(deviceId: number) {
    const requestName = "getObjectTypes";

    const res = http.get(
        `${Conf.host}/api/objectAccess/${deviceId}/objectTypes`,
        {
            tags: { name: requestName },
            headers: bacnetHeaders(),
        }
    );

    try {
        const json = res.json() as ObjectTypesType;
        const objectTypes = json.objectTypes

        console.log(
            `[${res.status} getObjectTypes] deviceId ${deviceId}, objectTypes: ${objectTypes}`
        );
        log(`[${res.status} getObjectTypes] deviceId ${deviceId}, objectTypes: ${objectTypes}`)

        return objectTypes.filter(e => e !== 'device')

    } catch (exp) {
        //throw exp
        return null
    }
}

export function getProperty(deviceId: number, type: string, instance: number, property: string) {
    const requestName = "getProperty";

    const res = http.get(
        `${Conf.host}/api/objectAccess/${deviceId}/${type}/${instance}/${property}`,
        {
            tags: { name: requestName },
            headers: bacnetHeaders(),
        }
    );

    try {
        const json = res.json() as PropertyType;
        let value = ''
        if (json.value.string){
            value = json.value.string
        }
        else if(json.value.real){
            value = json.value.real.toString()
        }

        console.log(
            `[${res.status} getProperty] deviceId ${deviceId}, type: ${type} - ${property}:${value}`
        );
        log(`[${res.status} getProperty] deviceId ${deviceId}, type: ${type} - ${property}:${value}`)

    } catch (exp) {
        //throw exp
    }
}

export function changeDescription(deviceId: number, type: string, instance: number, propertyValue: string) {
    const requestName = "changeDescription";
    const body: PropertyType = {
        value: {
            string: propertyValue
        }
    }

    const res = http.put(
        `${Conf.host}/api/objectAccess/${deviceId}/${type}/${instance}/description`,
        JSON.stringify(body),
        {
            tags: { name: requestName },
            headers: bacnetHeaders(),
        }
    );

    try {
        console.log(
            `[${res.status} changeDescription] deviceId ${deviceId}, change description to "${propertyValue}"`
        );
        log(`[${res.status} changeDescription] deviceId ${deviceId}, change description to "${propertyValue}"`)

    } catch (exp) {
        //throw exp
    }
}
