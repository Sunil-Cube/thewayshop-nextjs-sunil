import React from 'react';

function cartReducer(state=[{'id':1, 'name':''},{'id':2, 'name':''}], action={}) {
    switch (action.type) {    
        default:
            return state;
    }
}

export default cartReducer;