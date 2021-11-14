import React from 'react'
import './HistoryDetail.css'
import {SpinnerLoading} from '../../components/SpinnerLoading/SpinnerLoading'
import {TableComponent} from '../../components/Table/Table'
import {useGetHistoryDetailData} from './axiosFunction'

interface IProps {
    id: string
}

const HistoryDetail = ({id}: IProps) => {
    const {isFetching, data} = useGetHistoryDetailData(id)

    return (
        <div className="HistoryDetail">
            {isFetching ? (
                <SpinnerLoading />
            ) : (
                <TableComponent
                    titleColumnTable={[
                        'date_time',
                        'computer_name',
                        'program_id_id',
                        'events_id',
                        'result_work',
                    ]}
                    contentTable={data}
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
