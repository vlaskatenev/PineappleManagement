import React, {useState, useEffect} from 'react'
import './InstallSoft.css'
import {Button, Modal} from 'react-bootstrap'
import {useFormContext} from 'react-hook-form'
import InputForm from '../../components/InputForm/InputForm'
import {EModalInstallSoft} from '../consts'
import {ChoiceComp} from './ChoiceComp/ChoiceComp'
import {ChoiceProgramm} from './ChoiceProgramm/ChoiceProgramm'
import {addedToGroupAD, findComputerInAd} from './axiosFunctions'

const InstallSoft = () => {
    const [modalActive, setModalActive] = useState(0)
    const {watch, reset} = useFormContext()

    // TODO Нужно будет этот state убрать когда перепишу функционал поиска по имени ПК
    const [choiceData, setChoiceData] = useState({})

    const handleClose = () => setModalActive(EModalInstallSoft.MAIN)

    useEffect(() => {
        if (modalActive === EModalInstallSoft.MAIN) {
            reset({
                distinguishedName: [],
                computer_name: [],
                program_id: [],
                program_name: [],
            })
        }
    }, [modalActive])

    const distinguishedName = watch('distinguishedName')
    const computer_name = watch('computer_name')
    const program_id = watch('program_id')
    const program_name = watch('program_name')

    const dataForStartInstall = {
        distinguishedName,
        computer_name,
        program_id,
        program_name,
        methodInputnamePc: false,
    }

    const titleForInstallSoft: any = {
        [EModalInstallSoft.MAIN]: null,
        [EModalInstallSoft.PC_NAME]: 'Выбери ПК',
        [EModalInstallSoft.PROG_NAME]: 'Выбери софт',
    }

    const textForInstallSoft: any = {
        [EModalInstallSoft.MAIN]: null,
        [EModalInstallSoft.PC_NAME]: 'К выбору софта',
        [EModalInstallSoft.PROG_NAME]: 'Установить',
    }

    const functionForInstallSoft: any = {
        [EModalInstallSoft.MAIN]: null,
        [EModalInstallSoft.PC_NAME]: () => setModalActive(EModalInstallSoft.PROG_NAME),
        [EModalInstallSoft.PROG_NAME]: () => {
            addedToGroupAD(dataForStartInstall)
            setModalActive(EModalInstallSoft.MAIN)
        },
    }

    return (
        <div className="InstallSoft">
            <div>
                <p>Введи имя ПК если нужна установка на один компьютер:</p>
            </div>

            <InputForm
                type="text"
                //@ts-ignore
                handleClickButton={(valueText) => {
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    //@ts-ignore
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    if (findComputerInAd(setChoiceData, valueText)) {
                        setModalActive(EModalInstallSoft.PROG_NAME)
                    }
                }}
            />

            <Button
                variant="primary"
                onClick={() => {
                    setModalActive(EModalInstallSoft.PC_NAME)
                }}
            >
                Выбрать ПК
            </Button>

            <Modal show={modalActive} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{titleForInstallSoft[modalActive]}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ChoiceComp modalActive={modalActive} />
                    <ChoiceProgramm modalActive={modalActive} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={functionForInstallSoft[modalActive]}>
                        {textForInstallSoft[modalActive]}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default InstallSoft
