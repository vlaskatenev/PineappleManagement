import {useQuery} from 'react-query'
import {toListNamePc} from '../../../axios/axiosMethods'
import {EQueryKeys} from '../EQueryKeys'

/**
 * Хук для получения компьютеров из AD.
 *
 */
export const useGetListNamePc = () => useQuery(EQueryKeys.LIST_NAME_PC, toListNamePc)
