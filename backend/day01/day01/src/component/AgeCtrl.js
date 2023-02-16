import React from 'react';
import { useDispatch } from 'react-redux';

function AgeCtrl(props) {
    const dispatch = useDispatch();
    return (
        <>
            <fieldset>
                <h3>age Controller</h3>
                <button onClick={()=>{
                    dispatch({type:"age증가"});
                }}>증가</button>
                <button onClick={()=>{
                    dispatch({type:"age감소"});
                }}>감소</button>
            </fieldset>
        </>
    );
}

export default AgeCtrl;