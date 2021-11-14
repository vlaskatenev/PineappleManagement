import React from 'react'
import './ChoiceComp.css'
import {useFormContext} from 'react-hook-form'
import {SpinnerLoading} from '../../../components/SpinnerLoading/SpinnerLoading'
import {EModalInstallSoft} from '../../consts'
import {changeStateForMainState} from '../pure.functions'
import {useGetListNamePc} from './axiosChoiceComp'

interface IProps {
    modalActive: EModalInstallSoft
}

export const ChoiceComp = ({modalActive}: IProps) => {
    const {watch, setValue} = useFormContext()
    const {isFetching, data} = useGetListNamePc()

    const distinguishedName = watch('distinguishedName')
    const computer_name = watch('computer_name')

    if (modalActive !== EModalInstallSoft.PC_NAME) return null

    const listNamePc = data ?? {
        DistinguishedName: [],
        computerName: [],
    }

    return (
        <div>
            {isFetching ? (
                <SpinnerLoading />
            ) : (
                listNamePc.computerName.map((compName, index) => (
                    <p key={index}>
                        <input
                            onClick={(e) => {
                                changeStateForMainState(
                                    //@ts-ignore
                                    e.target.dataset,
                                    [distinguishedName, computer_name],
                                    [
                                        (distinguishedName: string) =>
                                            setValue('distinguishedName', distinguishedName),
                                        (computer_name: string) =>
                                            setValue('computer_name', computer_name),
                                    ]
                                )
                            }}
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
