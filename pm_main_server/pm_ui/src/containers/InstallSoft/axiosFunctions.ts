import {toFindComputerInAd, toListProgramm, toAddedToGroupAD} from '../../axios/axiosMethods'

//@ts-ignore
export const findComputerInAd = async (setObjForMainServer, computerName) => {
    const data = await toFindComputerInAd(computerName)
    const objFromAd = data.data.data
    console.log('objFromAd', objFromAd)
    setObjForMainServer(objFromAd)
    return objFromAd.adMember
}

//@ts-ignore
export const listProgramm = async (setModalActive, setobjFromAD) => {
    const data = await toListProgramm()
    setobjFromAD(data.data.data)
    setModalActive(2)
}

//@ts-ignore
export const addedToGroupAD = async (setModalActive, toogle, objectToInstallSoft) => {
    const data = await toAddedToGroupAD(objectToInstallSoft)
    setModalActive(0)
    toogle(false)
}
