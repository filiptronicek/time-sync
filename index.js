import fetch from "node-fetch";

export const getMsDelay = async () => {
    const timestamp = Date.now();
    const serverResponce = await fetch(`https://time.filiptronicek.workers.dev/?ts=${timestamp}`)
    const serverResponceJSON = await serverResponce.json();
    const nowstamp = Date.now()
    return { adjusted: Math.round(serverResponceJSON.result.ms - (nowstamp - timestamp) / 2), raw: serverResponceJSON.result.ms }
}

getMsDelay().then(res => console.log(res))