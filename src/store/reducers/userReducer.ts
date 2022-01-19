import { User, UserAction, UserState } from "../../types/user";

const defaultState: UserState = {
  data: {} as User,
  loading: false,
  error: "",
};

const UserReducer = (state: UserState = defaultState, action: UserAction) => {
  return state;
};

export default UserReducer;
