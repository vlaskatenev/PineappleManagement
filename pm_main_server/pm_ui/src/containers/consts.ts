/**
 * Значения статуса модального окна устанвки софта.
 *   MAIN - окно скрыто
 *   PC_NAME - открыта модалка с выбором ПК
 *   PROG_NAME - открыта модалка с выбором софта
 */
export enum EModalInstallSoft {
    MAIN,
    PC_NAME,
    PROG_NAME,
}

/**
 * Универсальный тип для любого объекта.
 *
 */
export type GenericObjectType = {[key: string]: any}
