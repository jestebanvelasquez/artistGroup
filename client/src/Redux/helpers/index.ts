/* ######### NO MODIFICAR NADA DE LOS HELPERS ####### */

import { AnyAction, AsyncThunk } from '@reduxjs/toolkit';

enum AsyncActionStatusesEnum {
    PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected',
}

//eslint-disable-next-line
type GenericAsyncThunk = AsyncThunk<any, any, any>;
type PendingAction = ReturnType<GenericAsyncThunk[AsyncActionStatusesEnum.PENDING]>;
type FulfilledAction = ReturnType<GenericAsyncThunk[AsyncActionStatusesEnum.FULFILLED]>;
type RejectedAction = ReturnType<GenericAsyncThunk[AsyncActionStatusesEnum.REJECTED]>;

// gets a list of asynchronous actions and checks them for the status of at least one === 'pending'
export function isSomeAsyncActionsPending(matchedActionTypes: GenericAsyncThunk[]) {
    return (action: AnyAction): action is PendingAction =>
        matchedActionTypes
            .map(actionType => `${actionType.typePrefix}/${AsyncActionStatusesEnum.PENDING}`)
            .some(actionType => action.type.endsWith(actionType));
}

// gets a list of asynchronous actions and checks them for the status of at least one === 'fulfilled'
export function isSomeAsyncActionsFulfilled(matchedActionTypes: GenericAsyncThunk[]) {
    return (action: AnyAction): action is FulfilledAction =>
        matchedActionTypes
            .map(actionType => `${actionType.typePrefix}/${AsyncActionStatusesEnum.FULFILLED}`)
            .some(actionType => action.type.endsWith(actionType));
}

// gets a list of asynchronous actions and checks them for the status of at least one === 'rejected'
export function isSomeAsyncActionsRejected(matchedActionTypes: GenericAsyncThunk[]) {
    return (action: AnyAction): action is RejectedAction =>
        matchedActionTypes
            .map(actionType => `${actionType.typePrefix}/${AsyncActionStatusesEnum.REJECTED}`)
            .some(actionType => action.type.endsWith(actionType));
}