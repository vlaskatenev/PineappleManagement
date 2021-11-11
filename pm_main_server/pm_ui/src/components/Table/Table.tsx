import React from 'react'
import {Table} from 'react-bootstrap'

/* <Table 
    nameTable={['Имя ПК', 'Статус', '', 'Дата']}
    content={this.props.historyList}
    keysObj={['computer_name', 'events_id', this.AddTagToTable.bind(this), 'date_time']} /> */
//@ts-ignore
export const TableComponent = ({nameTable, content, keysObj}) => (
    <div>
        <Table responsive>
            <tbody>
                <tr>
                    {/* @ts-ignore */}
                    {nameTable.map((name, index) => (
                        <th key={index}>{name}</th>
                    ))}
                </tr>
                {/* @ts-ignore */}
                {content.map((el, i) => (
                    <tr key={i}>
                        <RowTable keysObj={keysObj} elem={el} />
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
)

//@ts-ignore
const RowTable = ({keysObj, elem}) => {
    //@ts-ignore
    return keysObj.map((keys, i) => {
        if (typeof keys === 'function') {
            const Component = keys()
            return (
                <td key={i}>
                    <Component elem={elem} />
                </td>
            )
        } else if (typeof keys !== 'string') {
            const Component = keys
            return (
                <td key={i}>
                    <Component elem={elem} />
                </td>
            )
        }
        return <td key={i}>{elem[keys]}</td>
    })
}
