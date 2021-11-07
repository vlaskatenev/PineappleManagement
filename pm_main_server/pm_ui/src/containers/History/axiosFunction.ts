import {useQuery} from 'react-query'
import {toHistoryData} from '../../axios/axiosMethods'
import {EQueryKeys} from '../InstallSoft/EQueryKeys'

//@ts-ignore
const getHistoryData = async (data) => {
    const response = await toHistoryData({
        data,
    })
    return response.data.data
}

/**
 * Хук для получения списка заданий по установке софта.
 *
 */
export const useGetHistoryData = (data: any) =>
    useQuery([EQueryKeys.HISTORY_DATA, data], () => getHistoryData(data), {enabled: false})
