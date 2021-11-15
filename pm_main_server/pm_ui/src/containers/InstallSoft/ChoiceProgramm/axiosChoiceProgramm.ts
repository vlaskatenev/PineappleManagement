import {useQuery} from 'react-query'
import {toListProgramm, toAddedToGroupAD, IAddedToGroupAD} from '../../../axios/axiosMethods'
import {EQueryKeys} from '../EQueryKeys'

export const addedToGroupAD = async (objectToInstallSoft: IAddedToGroupAD) => {
    const data = await toAddedToGroupAD(objectToInstallSoft)
}

/**
 * Хук для получения списка программ.
 *
 */
export const useGetListProgramm = () => useQuery(EQueryKeys.LIST_PROGRAMM, toListProgramm)
