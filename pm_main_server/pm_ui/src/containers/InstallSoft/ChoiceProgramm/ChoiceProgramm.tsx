import React from 'react'
import './ChoiceProgramm.css'
import {useFormContext} from 'react-hook-form'
import {SpinnerLoading} from '../../../components/SpinnerLoading/SpinnerLoading'
import {EModalInstallSoft} from '../../consts'
import {changeStateForMainState} from '../pure.functions'
import {useGetListProgramm} from './axiosChoiceProgramm'

//@ts-ignore
export const ChoiceProgramm = ({modalActive}) => {
    const {watch, setValue} = useFormContext()

    const {isFetching, data} = useGetListProgramm()

    const program_id = watch('program_id')
    const program_name = watch('program_name')

    if (modalActive !== EModalInstallSoft.PROG_NAME) return null

    return (
        <>
            {isFetching ? (
                <SpinnerLoading />
            ) : (
                data.map((progObj: any) => (
                    <p key={progObj.id}>
                        <input
                            onClick={(e) => {
                                changeStateForMainState(
                                    //@ts-ignore
                                    e.target.dataset,
                                    [program_id, program_name],
                                    [
                                        (program_id: any) => setValue('program_id', program_id),
                                        (program_name: any) =>
                                            setValue('program_name', program_name),
                                    ]
                                )
                            }}
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
