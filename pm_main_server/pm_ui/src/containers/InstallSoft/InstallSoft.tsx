import {isEmpty} from 'lodash'
import React, {useState, useEffect} from 'react'
import './InstallSoft.css'
import {Button, Modal, InputGroup, FormControl} from 'react-bootstrap'
import {useFormContext} from 'react-hook-form'
import {IAddedToGroupAD, toAddedToGroupAD} from '../../axios/axiosMethods'
import {EModalInstallSoft} from '../consts'
import {ChoiceComp} from './ChoiceComp/ChoiceComp'
import {ChoiceProgramm} from './ChoiceProgramm/ChoiceProgramm'
import {useFindComputerInAd} from './axiosFunctions'

const InstallSoft = () => {
    const [modalActive, setModalActive] = useState(EModalInstallSoft.MAIN)
    const [inputComputerName, setInputComputerName] = useState('')
    const {watch, reset} = useFormContext()

    const handleClose = () => setModalActive(EModalInstallSoft.MAIN)
    const {refetch, data} = useFindComputerInAd(inputComputerName)

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

    const computerNameAfterPutInput = data?.data?.data ?? {}

    const distinguishedName = watch('distinguishedName')
    const computer_name = watch('computer_name')
    const program_id = watch('program_id')
    const program_name = watch('program_name')

    const dataForStartInstall: IAddedToGroupAD = {
        distinguishedName,
        computer_name,
        program_id,
        program_name,
        methodInputnamePc: false,
    }

    const titleForInstallSoft = {
        [EModalInstallSoft.MAIN]: null,
        [EModalInstallSoft.PC_NAME]: 'Выбери ПК',
        [EModalInstallSoft.PROG_NAME]: 'Выбери софт',
    }

    const textForInstallSoft = {
        [EModalInstallSoft.MAIN]: null,
        [EModalInstallSoft.PC_NAME]: 'К выбору софта',
        [EModalInstallSoft.PROG_NAME]: 'Установить',
    }

    const functionForInstallSoft = {
        [EModalInstallSoft.MAIN]: () => null,
        [EModalInstallSoft.PC_NAME]: () => setModalActive(EModalInstallSoft.PROG_NAME),
        [EModalInstallSoft.PROG_NAME]: () => {
            toAddedToGroupAD(dataForStartInstall)
            setModalActive(EModalInstallSoft.MAIN)
        },
    }

    const putComputerNameInput = () => {
        refetch()
        if (!isEmpty(computerNameAfterPutInput)) {
            reset({
                distinguishedName: [computerNameAfterPutInput.distinguishedname],
                computer_name: [computerNameAfterPutInput.compname],
            })
            setModalActive(EModalInstallSoft.PROG_NAME)
        }
    }

    return (
        <div className="InstallSoft">
            <div>
                <p>Введи имя ПК если нужна установка на один компьютер:</p>
            </div>

            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Введи имя ПК"
                    onChange={(event) => setInputComputerName(event.target.value)}
                />
                <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={putComputerNameInput}
                >
                    Выбрать ПК
                </Button>
            </InputGroup>

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
