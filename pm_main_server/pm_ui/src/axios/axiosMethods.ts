import {adTreeAllComputers} from '../variables.global'
import axios from './axios'
import {
    urlToListComputers,
    urlToFindComputerInAd,
    urlToShowProgrammList,
    urlToStartInstall,
    urlToGetStatusProcess,
    urlToStartCommandOnClient,
    urlToHistoryDetail,
    urlToHistory,
} from './variables'

export const axiosPost = (url: any, arg: any) => axios.post(url, arg)
export const axiosGet = (url: any) => axios.get(url)

export const toListNamePc = () => {
    return axiosPost(urlToListComputers, {ad_tree: adTreeAllComputers})
}

export const toFindComputerInAd = (computerName: any) => {
    return axiosPost(urlToFindComputerInAd, {computerName})
}

export const toListProgramm = () => {
    return axiosGet(urlToShowProgrammList)
}

export const toAddedToGroupAD = (objectToInstallSoft: any) => {
    return axiosPost(urlToStartInstall, objectToInstallSoft)
}

export const toResultCelery = (taskId: any) => {
    return axiosPost(urlToGetStatusProcess, {
        idProcess: taskId,
    })
}

export const toHistoryDetailData = (id: any) => {
    return axiosPost(urlToHistoryDetail, {
        data: id,
    })
}

export const followDataToClient = (obj: any) => {
    return axiosPost(urlToStartCommandOnClient, obj)
}

export const toHistoryData = (obj: any) => {
    return axiosPost(urlToHistory, obj)
}
