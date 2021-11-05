import {toHistoryDetailData} from '../../axios/axiosMethods'

//@ts-ignore
export const historyDetailData = async (id) => {
    const data = await toHistoryDetailData(id)
    return data.data.data
}
