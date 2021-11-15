import {useQuery} from 'react-query'
import {toHistoryData} from '../../axios/axiosMethods'
import {EQueryKeys} from '../InstallSoft/EQueryKeys'

/**
 * Хук для получения списка заданий по установке софта.
 * @param {string} data дата
 *
 */
export const useGetHistoryData = (data: string) =>
    useQuery([EQueryKeys.HISTORY_DATA, data], () => toHistoryData({data}), {enabled: false})
