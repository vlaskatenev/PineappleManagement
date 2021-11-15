import {useQuery} from 'react-query'
import {toHistoryDetailData} from '../../axios/axiosMethods'
import {EQueryKeys} from '../InstallSoft/EQueryKeys'

/**
 * Хук для получения списка детальной информации по определенной установке.
 *
 */
export const useGetHistoryDetailData = (id: string) =>
    useQuery([EQueryKeys.HISTORY_DETAIL_DATA, id], () => toHistoryDetailData(id))
