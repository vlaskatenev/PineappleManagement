import React from 'react'

//@ts-ignore
export const LoadingProcess = (props) => {
    if (props.loading) {
        return props.children
    } else {
        return (
            <div>
                <h3>Загрузка</h3>
            </div>
        )
    }
}
