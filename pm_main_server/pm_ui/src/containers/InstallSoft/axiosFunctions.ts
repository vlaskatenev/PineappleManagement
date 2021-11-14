import {toFindComputerInAd, toAddedToGroupAD, IAddedToGroupAD} from '../../axios/axiosMethods'

//@ts-ignore
export const findComputerInAd = async (setObjForMainServer, computerName) => {
    const data = await toFindComputerInAd(computerName)
    const objFromAd = data.data.data
    setObjForMainServer(objFromAd)
    return objFromAd.adMember
}

export const addedToGroupAD = async (objectToInstallSoft: IAddedToGroupAD) => {
    const data = await toAddedToGroupAD(objectToInstallSoft)
}
