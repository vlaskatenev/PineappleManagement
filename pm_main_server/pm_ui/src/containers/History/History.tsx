import React, {useEffect, useState} from 'react'
import './History.css'
import {Button, Modal} from 'react-bootstrap'
import InputForm from '../../components/InputForm/InputForm'
import {SpinnerLoading} from '../../components/SpinnerLoading/SpinnerLoading'
import {TableComponent} from '../../components/Table/Table'
import HistoryDetail from '../HistoryDetail/HistoryDetail'
import {useGetHistoryData} from './axiosFunction'

const History = () => {
    const [idTask, setIdTask] = useState('')
    const [modalActive, setModalActive] = useState(false)
    const [selectHistoryData, setSelectHistoryData] = useState('')
    const {isFetching, refetch, data} = useGetHistoryData(selectHistoryData)

    const handleClose = () => setModalActive(!modalActive)

    const historyList = data?.data?.data ?? []

    useEffect(() => {
        if (selectHistoryData) {
            // При первом рендере компонента запрос не делаем
            // выполняем запрос при каждом измнении selectHistoryData
            refetch()
        }
    }, [selectHistoryData])

    const AddTagToTable = ({element}: {element: {startnumber: string}}) => (
        <span
            onClick={() => {
                setIdTask(element.startnumber)
                handleClose()
            }}
        >
            Посмотреть лог
        </span>
    )

    return (
        <div>
            <div className="History">
                <InputForm type="date" handleClickButton={setSelectHistoryData} />
                {isFetching ? (
                    <SpinnerLoading />
                ) : (
                    <TableComponent
                        titleColumnTable={['Имя ПК', 'Статус', '', 'Дата']}
                        contentTable={historyList}
                        keysObj={['computer_name', 'events_id', AddTagToTable, 'date_time']}
                    />
                )}
            </div>

            <Modal
                show={modalActive}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>История установки</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <HistoryDetail id={idTask} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default History
