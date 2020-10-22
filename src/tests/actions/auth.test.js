import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
    const uid = 'adasdasd132`3';
    const action = login(uid);
    expect(action).toEqual({
       type: 'LOGIN',
       uid: uid
    });
});

test('should generate logout action object', () => {
   const action = logout();
   expect(action).toEqual({
      type: 'LOGOUT'
   });
});