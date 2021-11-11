import React from 'react'
import './HistoryDetail.css'
import {SpinnerLoading} from '../../components/SpinnerLoading/SpinnerLoading'
import {TableComponent} from '../../components/Table/Table'
import {useGetHistoryDetailData} from './axiosFunction'

//@ts-ignore
const HistoryDetail = ({id}) => {
    const {isFetching, data} = useGetHistoryDetailData(id)

    return (
        <div className="HistoryDetail">
            {isFetching ? (
                <SpinnerLoading />
            ) : (
                <TableComponent
                    nameTable={[
                        'date_time',
                        'computer_name',
                        'program_id_id',
                        'events_id',
                        'result_work',
                    ]}
                    content={data}
                    keysObj={[
                        'date_time',
                        'computer_name',
                        'program_id_id',
                        'events_id',
                        'result_work',
                    ]}
                />
            )}
        </div>
    )
}

export default HistoryDetail
