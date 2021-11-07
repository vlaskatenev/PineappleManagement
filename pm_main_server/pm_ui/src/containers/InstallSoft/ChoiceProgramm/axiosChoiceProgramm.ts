import {useQuery} from 'react-query'
import {toListProgramm, toAddedToGroupAD} from '../../../axios/axiosMethods'
import {EQueryKeys} from '../EQueryKeys'

export const getListProgramm = async () => {
    const data = await toListProgramm()
    return data.data.data
}

//@ts-ignore
export const addedToGroupAD = async (objectToInstallSoft) => {
    const data = await toAddedToGroupAD(objectToInstallSoft)
}

/**
 * Хук для получения списка программ.
 *
 */
export const useGetListProgramm = () => useQuery(EQueryKeys.LIST_PROGRAMM, getListProgramm)
