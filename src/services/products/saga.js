import productsSaga from './productsSaga';
import { all } from 'redux-saga/effects'

export default function* rootSaga(){
    yield all([
        productsSaga()
    ])
}