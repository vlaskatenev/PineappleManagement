import React, {useState} from 'react'
import './History.css'
import InputForm from '../../components/InputForm/InputForm'
import {LoadingProcess} from '../../components/LoadingProcess/LoadingProcess'
import RenderPopUp from '../../components/PopUp/PopUp'
import {usePopUp} from '../../components/PopUp/PopUpContex'
import {Table} from '../../components/Table/Table'
import HistoryDetail from '../HistoryDetail/HistoryDetail'
import {historyData} from './axiosFunction'

const History = () => {
    const [data, setData] = useState(false)
    const [id, setId] = useState(false)

    //@ts-ignore
    const {toogle} = usePopUp()

    return (
        <div>
            <div className="History">
                <InputForm
                    type="date"
                    //@ts-ignore
                    handleClickButton={(textValue) => historyData(setData, textValue)}
                />
                <LoadingProcess loading={data}>
                    <Table
                        nameTable={['Имя ПК', 'Статус', '', 'Дата']}
                        content={data}
                        // additionalRow хотел сюда добавлять доп данные
                        additionalRow={[1, 'g', 55, 55, 55]}
                        keysObj={[
                            'computer_name',
                            'events_id',
                            addTagToTable.bind(this, toogle, setId),
                            'date_time',
                        ]}
                    />
                </LoadingProcess>
            </div>
            <RenderPopUp>
                <HistoryDetail id={id} />
            </RenderPopUp>
        </div>
    )
}

export default History

//@ts-ignore
const addTagToTable = (toogle, setId) => {
    //@ts-ignore
    return ({elem}) => (
        <span
            onClick={() => {
                setId(elem.startnumber)
                toogle(true)
            }}
        >
            Посмотреть лог
        </span>
    )
}
