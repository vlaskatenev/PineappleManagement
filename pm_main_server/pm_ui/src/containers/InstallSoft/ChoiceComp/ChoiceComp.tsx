import React from 'react'
import './ChoiceComp.css'
import {useFormContext} from 'react-hook-form'
import {SpinnerLoading} from '../../../components/SpinnerLoading/SpinnerLoading'
import {EModalInstallSoft} from '../../consts'
import {changeStateForMainState} from '../pure.functions'
import {useGetListNamePc} from './axiosChoiceComp'

//@ts-ignore
export const ChoiceComp = ({modalActive}) => {
    const {watch, setValue} = useFormContext()
    const {isFetching, data} = useGetListNamePc()

    const distinguishedName = watch('distinguishedName')
    const computer_name = watch('computer_name')

    if (modalActive !== EModalInstallSoft.PC_NAME) return null

    return (
        <div>
            {isFetching ? (
                <SpinnerLoading />
            ) : (
                //@ts-ignore
                data.computerName.map((compName, index) => (
                    <p key={index}>
                        <input
                            onClick={(e) =>
                                changeStateForMainState(
                                    //@ts-ignore
                                    e.target.dataset,
                                    [distinguishedName, computer_name],
                                    [
                                        (distinguishedName: any) =>
                                            setValue('distinguishedName', distinguishedName),
                                        (computer_name: any) =>
                                            setValue('computer_name', computer_name),
                                    ]
                                )
                            }
                            type="checkbox"
                            //@ts-ignore
                            data-distinguishedname={data.DistinguishedName[index]}
                            //@ts-ignore
                            data-compname={data.computerName[index]}
                        />
                        {compName}
                    </p>
                ))
            )}
        </div>
    )
}
