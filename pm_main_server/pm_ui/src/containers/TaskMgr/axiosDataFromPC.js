import {toResultCelery} from '../../axios/axiosMethods'


export const resultCelery = async taskId => {
    
    // const data = async () => {
    //     const result = await toResultCelery(taskId)
        
    //     if (result.data.task_status === 'SUCCESS') {
    //         return result.data.task_result
    //     } else {
    //         return await new Promise((resolve) => {
    //             setTimeout(() => resolve(data()), 10000)
    //           })
    //     }
    // }
    // return await data()

//  Переписал функцию на промисы, но не проверял. Все что закоментированно выше - рабочий ранее вариант
     const data = async () => {
            return toResultCelery(taskId)
                .then(value => {
                    if (value.data.task_status === 'SUCCESS') {
                        return value.data.task_result
                    } else {
                        return (resolve) => {
                            setTimeout(() => resolve(data()), 10000)
                          }
                    }
                })
                .catch(err => console.error('Error into resultCelery function: ', err))       
        }
        // return await data()

}
