import {useQuery} from 'react-query'
import {toListNamePc} from '../../../axios/axiosMethods'
import {EQueryKeys} from '../EQueryKeys'

const getListNamePc = async () => {
    const data = await toListNamePc()
    return data.data.data
}

/**
 * Хук для получения компьютеров из AD.
 *
 */
export const useGetListNamePc = () => useQuery(EQueryKeys.LIST_NAME_PC, getListNamePc)
