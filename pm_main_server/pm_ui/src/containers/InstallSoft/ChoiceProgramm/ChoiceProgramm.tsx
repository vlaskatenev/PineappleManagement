import React, {SyntheticEvent} from 'react'
import './ChoiceProgramm.css'
import {useFormContext} from 'react-hook-form'
import {IListProgramm} from '../../../axios/axiosMethods'
import {SpinnerLoading} from '../../../components/SpinnerLoading/SpinnerLoading'
import {EModalInstallSoft} from '../../consts'
import {changeStateForMainState} from '../pure.functions'
import {useGetListProgramm} from './axiosChoiceProgramm'

interface IProps {
    modalActive: EModalInstallSoft
}

/**
 * Выводит модалку для выбора софта для установки
 *
 */
export const ChoiceProgramm = ({modalActive}: IProps) => {
    const {watch, setValue} = useFormContext()

    const {isFetching, data} = useGetListProgramm()

    const program_id = watch('program_id')
    const program_name = watch('program_name')

    if (modalActive !== EModalInstallSoft.PROG_NAME) return null

    const listProgramm = data?.data?.data ?? []

    /**
     * Добавляем в состояние список софта который выбрали
     *
     */
    const handleProgrammName = (event: SyntheticEvent & {target: HTMLInputElement}) =>
        changeStateForMainState(
            event.target.dataset,
            [program_id, program_name],
            [
                (program_id: string) => setValue('program_id', program_id),
                (program_name: string) => setValue('program_name', program_name),
            ]
        )

    return (
        <>
            {isFetching ? (
                <SpinnerLoading />
            ) : (
                listProgramm.map((progObj: IListProgramm) => (
                    <p key={progObj.id}>
                        <input
                            onChange={handleProgrammName}
                            type="checkbox"
                            data-progid={progObj.id}
                            data-progname={progObj.short_program_name}
                        />
                        {progObj.soft_display_name}
                    </p>
                ))
            )}
        </>
    )
}
