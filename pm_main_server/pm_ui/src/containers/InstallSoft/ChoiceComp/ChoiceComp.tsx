import React, {SyntheticEvent} from 'react'
import './ChoiceComp.css'
import {useFormContext} from 'react-hook-form'
import {SpinnerLoading} from '../../../components/SpinnerLoading/SpinnerLoading'
import {EModalInstallSoft} from '../../consts'
import {changeStateForMainState} from '../pure.functions'
import {useGetListNamePc} from './axiosChoiceComp'

interface IProps {
    modalActive: EModalInstallSoft
}

/**
 * Выводит мадалку для выбора имени ПК
 *
 */
export const ChoiceComp = ({modalActive}: IProps) => {
    const {watch, setValue} = useFormContext()
    const {isFetching, data} = useGetListNamePc()

    const distinguishedName = watch('distinguishedName')
    const computer_name = watch('computer_name')

    if (modalActive !== EModalInstallSoft.PC_NAME) return null

    const listNamePc = data?.data?.data ?? {
        DistinguishedName: [],
        computerName: [],
    }

    /**
     * Добавляем в состояние список имен ПК
     *
     */
    const handleNamePc = (event: SyntheticEvent & {target: HTMLInputElement}) =>
        changeStateForMainState(
            event.target.dataset,
            [distinguishedName, computer_name],
            [
                (distinguishedName: string) => setValue('distinguishedName', distinguishedName),
                (computer_name: string) => setValue('computer_name', computer_name),
            ]
        )

    return (
        <div>
            {isFetching ? (
                <SpinnerLoading />
            ) : (
                listNamePc.computerName.map((compName, index) => (
                    <p key={index}>
                        <input
                            onChange={handleNamePc}
                            type="checkbox"
                            data-distinguishedname={listNamePc.DistinguishedName[index]}
                            data-compname={listNamePc.computerName[index]}
                        />
                        {compName}
                    </p>
                ))
            )}
        </div>
    )
}
