import React from 'react'
import './Table.css'
// import { usePopUp } from '../PopUp/PopUpContex'

/* <Table 
    nameTable={['Имя ПК', 'Статус', '', 'Дата']}
    content={this.props.historyList}
    keysObj={['computer_name', 'events_id', this.AddTagToTable.bind(this), 'date_time']} /> */
//@ts-ignore
export const Table = (props) => {
    return (
        <div>
            <table className="Table">
                <tbody>
                    <TableName nameTable={props.nameTable} />
                    <ContentTable
                        content={props.content}
                        keysObj={props.keysObj}
                        additionalRow={props.additionalRow}
                    />
                </tbody>
            </table>
        </div>
    )
}

//@ts-ignore
const TableName = ({nameTable}) => {
    return (
        <tr>
            {/* @ts-ignore */}
            {nameTable.map((name, index) => (
                <th key={index}>{name}</th>
            ))}
        </tr>
    )
}

{
    /* <tr className="descriptionPercent">
    <th className="description"></th>
    <th className="description">{this.props.average.averageCpu}%</th>
    <th className="description">{this.props.average.averageRam}%</th>
    <th className="description">{this.props.average.averageDisc}%</th>
    <th className="description">{this.props.average.fullyNetworkSpeed}%</th>
</tr> */
}
//@ts-ignore
const AdditionalRow = ({additionalRow}) => {
    // const additionalRow = [index ,'', average.averageCpu, average.averageRam, average.averageDisc, fullyNetworkSpeed]
    return (
        <tr>
            {/* @ts-ignore */}
            {additionalRow.filter((name, index) => {
                if (index === 0) {
                    return false
                } else {
                    console.log('index !== 0: ', index)
                    return <td key={index}>{index}</td>
                }
            })}{' '}
        </tr>
    )
}

//@ts-ignore
const ContentTable = ({content, keysObj, additionalRow}) => {
    //@ts-ignore
    return content.map((el, i) => {
        console.log('i: ', i)
        // if (i === additionalRow[0]) {
        //     return <AdditionalRow additionalRow={additionalRow} />

        // } else {
        console.log('el: ', el)
        return (
            <tr key={i}>
                <RowTable keysObj={keysObj} elem={el} />
            </tr>
        )
        // }
    })
}

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