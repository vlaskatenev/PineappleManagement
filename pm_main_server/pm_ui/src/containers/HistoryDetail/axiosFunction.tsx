import {useQuery} from 'react-query'
import {toHistoryDetailData} from '../../axios/axiosMethods'
import {EQueryKeys} from '../InstallSoft/EQueryKeys'

//@ts-ignore
export const getHistoryDetailData = async (id) => {
    const data = await toHistoryDetailData(id)
    return data.data.data
}

/**
 * Хук для получения списка детальной информации по определенной установке.
 *
 */
export const useGetHistoryDetailData = (id: any) =>
    useQuery([EQueryKeys.HISTORY_DETAIL_DATA, id], () => getHistoryDetailData(id))
