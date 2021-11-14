import {AxiosResponse} from 'axios'
import {GenericObjectType} from '../containers/consts'
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

/**
 * Функция для создания POST запроса
 */
export const axiosPost = (url: string, arg: GenericObjectType) => axios.post(url, arg)

/**
 * Функция для создания GET запроса
 */
export const axiosGet = (url: string) => axios.get(url)

/**
 * Функция для получения списка имен ПК из Active Directory
 */
export const toListNamePc = (): Promise<AxiosResponse<{data: IListNamePc}>> => {
    return axiosPost(urlToListComputers, {ad_tree: adTreeAllComputers})
}

/**
 * Функция поиска имени ПК в Active Directory
 * @param {string} computerName имя компьютера
 */
export const toFindComputerInAd = (computerName: string) => {
    return axiosPost(urlToFindComputerInAd, {computerName})
}

/**
 * Функция для получения списка программ для установки пользователю
 */
export const toListProgramm = (): Promise<AxiosResponse<{data: IListProgramm[]}>> => {
    return axiosGet(urlToShowProgrammList)
}

/**
 * Функция для добавления компьютера выбранного для установки софта в группу,
 * для которой настроена политика установки софта
 */
export const toAddedToGroupAD = (objectToInstallSoft: IAddedToGroupAD) => {
    return axiosPost(urlToStartInstall, objectToInstallSoft)
}

/**
 * Функция для получения данных с обработчика задач Celery
 * @param {string} idProcess уникальный  идентификатор процесса запущенного Celery
 */
export const toResultCelery = (idProcess: string) => {
    return axiosPost(urlToGetStatusProcess, {
        idProcess,
    })
}

/**
 * Функция для получения детальной нформации по выбранному процессц установки
 * @param {number} data id процесса установки по которому необходимо выгрузить полный лог
 */
export const toHistoryDetailData = (data: number) => {
    return axiosPost(urlToHistoryDetail, {
        data,
    })
}

/**
 * TODO вот эту функцию придется удалить,
 * относится к запросу лога напрямую с клиента.
 * Так как этот функционал нужен был только для task manager, а его я решил убрать,
 * то и эту функцию удаляем после перепроверки
 */
export const followDataToClient = (obj: any) => {
    return axiosPost(urlToStartCommandOnClient, obj)
}

/**
 * Функция для получения краткой нформации по процессом установки за определенную дату
 * @param obj дата
 */
export const toHistoryData = (obj: {
    data: string
}): Promise<AxiosResponse<{data: IHistoryData[]}>> => axiosPost(urlToHistory, obj)

export interface IHistoryData {
    startnumber: number
    computer_name: string
    events_id: number
    date_time: string
}

export interface IAddedToGroupAD {
    distinguishedName: string
    computer_name: string
    program_id: number
    program_name: string
    methodInputnamePc: boolean
}

export interface IListProgramm {
    id: number
    short_program_name: string
    soft_display_name: string
}

export interface IListNamePc {
    computerName: string[]
    DistinguishedName: string[]
    workStatusWithAD: boolean
}
