import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer' , () => {
    it('handles action with unknow type' ,() => {
        expect(commentReducer(undefined,{}).length).to.equal(0)
    });

    it('handles action of type SAVE_COMMENT' ,() => {
        const action = {type: SAVE_COMMENT ,payload: 'new comment'}
        expect(commentReducer([],action)[0]).to.equal('new comment');
    });
})