import { sucess, forbidden, unauthorized, fetchWithTimeout, throwErrorAPI } from '../api/yarhoo-api';


const successFetch = async (symbol: string) => {
    try {
        const response = await sucess(symbol);
        const { status } = response;
        return status;
    } catch (error) {
        console.error(error);
    }
};
const forbiddenFetch = async (symbol: string) => {
    try {
        const response = await forbidden(symbol);
        const { status } = response;
        if (status !== 200) {
            throw new Error(status.toString());
        }
        return status;
    } catch (error) {
        console.error(error);
    }
}
const unauthorizedFetch = async (symbol: string) => {
    const response = await unauthorized(symbol);
    const { status } = response;
    if (status !== 200) {
        throw new Error(status.toString());
    }
    return status;
}
const undefinedFetch = async (symbol: string) => {
    try {
        const response = await sucess(symbol);
        // @ts-ignore
        const { test } = response;
        return test;
    }
    catch (error) {
        console.error(error);
    }
}
const timeoutFetch = async (symbol: string) => {
    return fetchWithTimeout(symbol);
}
const throwError = async (symbol: string) => {
    try {
        throw new Error('Throw Error Service');
    }
    catch (error) {
        console.log(error)
    }
}
const throwErrorAPIService = async (symbol: string) => {
    try {
        throwErrorAPI()
    }
    catch (error) {
        console.log(error)
    }
}
const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const runOutOfMemory = async (symbol: string) => {
    try {
        return new Promise((resolve, reject) => {
            let temp: any = [];
            for (; ;) {
                const _temp = [...temp];
                _temp.push(randomNumber(0, Number.MAX_SAFE_INTEGER));
                temp = _temp;
            }
            resolve(temp);
        })

    } catch (error) {
        console.log(error)
    }
}
export {
    successFetch,
    forbiddenFetch,
    unauthorizedFetch,
    undefinedFetch,
    timeoutFetch,
    throwError,
    throwErrorAPIService,
    runOutOfMemory
}