/**
 * Проверяем значение в массиве и удаляем/добавляем элемент в массив
 *
 */
const addedToList = (elemName: string, listElemName: string[]) => {
    const newList = [...listElemName]
    newList.includes(elemName)
        ? newList.splice(newList.indexOf(elemName), 1)
        : newList.push(elemName)
    return newList
}

/**
 * изменяем сразу несколько состояний в одной функции
 * при написании JSX кода data атрибуты должны быть выставлены в соотвествии с нахождением
 * в массивах функций и переменных distinguishedName, computer_name
 *
 */
export const changeStateForMainState = (
    datasetObj: any,
    stateList: string[][],
    funcList: Function[]
) => {
    const listDataSet = Object.keys(datasetObj)

    funcList.forEach((func, index) => {
        func(addedToList(datasetObj[listDataSet[index]], stateList[index]))
    })
}
