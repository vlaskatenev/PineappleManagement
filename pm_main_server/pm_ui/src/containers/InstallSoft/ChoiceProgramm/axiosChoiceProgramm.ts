import {toListProgramm, toAddedToGroupAD} from '../../../axios/axiosMethods'

export const getListProgramm = async () => {
    const data = await toListProgramm()
    return data.data.data
}

//@ts-ignore
export const addedToGroupAD = async (objectToInstallSoft) => {
    const data = await toAddedToGroupAD(objectToInstallSoft)
}
