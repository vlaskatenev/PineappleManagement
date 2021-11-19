import {useQuery} from 'react-query'
import {toFindComputerInAd} from '../../axios/axiosMethods'
import {EQueryKeys} from './EQueryKeys'

/**
 * Хук для поиска компьютера в AD.
 *
 */
export const useFindComputerInAd = (computerName: string) =>
    useQuery([EQueryKeys.FIND_IN_AD, computerName], () => toFindComputerInAd(computerName), {
        enabled: false,
    })
