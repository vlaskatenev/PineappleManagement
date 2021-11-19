import React from 'react'
import {Table} from 'react-bootstrap'
import {GenericObjectType} from '../../containers/consts'

interface IPropsTable {
    titleColumnTable: string[]
    contentTable: GenericObjectType[]
    keysObj: string[] | React.ReactNode[]
}

/**
 * Крмпонент таблицы
 *
 * @param {string[]} titleColumnTable - массив значений заголовков таблицы
 * @param {GenericObjectType[]} contentTable - массив объектов значений таблицы. Один объект - одна строка таблицы
 * @param {string[] | React.ReactNode[]} keysObj - массив ключей, которые будут содержимым таблицы. Так же здесь в качестве содержимого можно передать JSX компонент
 *
 * @example
 *  <TableComponent
 *      titleColumnTable={['Имя ПК', 'Статус', '', 'Дата']}
 *      contentTable={historyList}
 *      keysObj={['computer_name', 'events_id', AddTagToTable, 'date_time']}
 *  />
 *
 */
export const TableComponent = ({titleColumnTable, contentTable, keysObj}: IPropsTable) => (
    <div>
        <Table responsive>
            <tbody>
                <tr>
                    {titleColumnTable.map((name, index) => (
                        <th key={index}>{name}</th>
                    ))}
                </tr>
                {contentTable.map((titleCell, i) => (
                    <tr key={i}>
                        <RowTable keysObj={keysObj} titleCell={titleCell} />
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
)

interface IPropsRowTable {
    keysObj: string[] | React.ReactNode[]
    titleCell: GenericObjectType
}

/**
 * формируем одну строку таблицы
 *
 * @param {string[] | React.ReactNode[]} keysObj массив ключей, которые будут содержимым таблицы. Так же здесь в качестве содержимого можно передать JSX компонент
 * @param {GenericObjectType} titleCell текст ячейки.
 *
 * @example <RowTable keysObj={keysObj} titleCell={titleCell} />
 */
const RowTable = ({keysObj, titleCell}: IPropsRowTable) => (
    <>
        {keysObj.map((keys, i) => {
            if (typeof keys === 'function') {
                const Component = keys
                return (
                    <td key={i}>
                        <Component element={titleCell} />
                    </td>
                )
            }
            return <td key={i}>{titleCell[keys as string]}</td>
        })}
    </>
)
