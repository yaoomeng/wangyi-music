// 合并reducer
// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';


import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'

// 在将reducer合并时，cReducer也会出现由于数据的不可变性（每次修改对象需要先复制，然后对复制后的对象进行修改）引起的性能问题
// 我们使用immutable 中的Map对数据进行包裹，但是返回的cReducer此时变成了immutable数据，在index.js中导入时会出现问题
// 解决方法：yarn add redux-immutable,并且从redux-immutable中导出combineReducers
// 由于在recommend组件中使用了state.recommend,但是此时state也变成了immutable数据，因此需要修改
const cReducer = combineReducers({
    recommend: recommendReducer
})
export default cReducer;