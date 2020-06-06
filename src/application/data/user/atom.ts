import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const usersState = atom({
  key: 'usersState',
  default: [{ firstName: 'Fanie', lastName: 'Venter', email: 'd@a.xcom' }],
});

const currentUsersState = selector({
  key: 'currentUsers',
  get: ({ get }) => {
    const users = get(usersState);

    return users;
  },
});
