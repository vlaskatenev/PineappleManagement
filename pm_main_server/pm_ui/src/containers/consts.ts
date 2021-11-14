/**
 * Значения статуса модального окна устанвки софта.
 *   MAIN = 0 - окно скрыто
 *   PC_NAME = 1 - открыта модалка с выбором ПК
 *   PROG_NAME = 2 - открыта модалка с выбором софта
 */
export enum EModalInstallSoft {
    MAIN = 0,
    PC_NAME = 1,
    PROG_NAME = 2,
}

/**
 * Универсальный тип для любого объекта.
 *
 */
export type GenericObjectType = {[key: string]: any}
