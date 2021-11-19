import React from 'react'
import './HistoryDetail.css'
import {SpinnerLoading} from '../../components/SpinnerLoading/SpinnerLoading'
import {TableComponent} from '../../components/Table/Table'
import {useGetHistoryDetailData} from './axiosFunction'

interface IProps {
    id: string
}

/**
 * Компонет показывает детальную информацию по установке
 *
 */
const HistoryDetail = ({id}: IProps) => {
    const {isFetching, data} = useGetHistoryDetailData(id)

    const historyDetailData = data?.data?.data

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
                    contentTable={historyDetailData}
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
