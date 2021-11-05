//@ts-ignore
const addedToList = (elemName, listElemName) => {
    const newList = [...listElemName]
    newList.includes(elemName)
        ? newList.splice(newList.indexOf(elemName), 1)
        : newList.push(elemName)
    return newList
}

// изменяем сразу несколько состояний в одной функции
// при написании JSX кода data атрибуты должны быть выставлены в соотвествии с нахождением
// в массивах функций и переменных distinguishedName, computer_name
//@ts-ignore
export const changeStateForMainState = (datasetObj, stateList, funcList) => {
    const listDataSet = Object.keys(datasetObj)
    //@ts-ignore
    funcList.forEach((func, index) => {
        func(addedToList(datasetObj[listDataSet[index]], stateList[index]))
    })
}