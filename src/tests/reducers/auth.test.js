import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'adwadadawf2hw923'
    }
    const state = authReducer({}, action);
    expect(state.uid).toEqual(action.uid);
});
test('should wipe uid on logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const prevState = {
        uid: '123871923'
    }
    const state = authReducer(prevState, action);
    expect(state).toEqual({});
});
