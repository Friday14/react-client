export const PROFILE_CREATE = 'user/PROFILE_CREATE';
export const PROFILE_REQUESTED = 'user/PROFILE_REQUESTED';
export const PROFILE_UPDATE = 'user/PROFILE_UPDATE';
export const PROFILE_SHARED = 'user/PROFILE_SHARED';
export const PROFILE_BIND_EMAIL = 'user/PROFILE_BIND_EMAIL';

const templateInitialState = {
  profile: {
    id: null,
    shared: false,
    email: ''
  },
  isRequested: false
};

const storage = JSON.parse(localStorage.getItem('user'));
const initialState = { ...templateInitialState, profile: storage || templateInitialState.profile };

// localStorage.getItem('ключ')
export default (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_REQUESTED: {
      return {
        ...state,
        isRequested: true
      };
    }
    case PROFILE_CREATE: {
      localStorage.setItem('user', JSON.stringify(action.payload));

      return {
        ...state,
        profile: action.payload,
        isRequested: !state.isRequested
      };
    }
    case PROFILE_UPDATE: {
      localStorage.setItem('user', JSON.stringify(action.payload));

      return {
        ...state,
        profile: action.payload,
        isRequested: !state.isRequested
      };
    }
    case PROFILE_SHARED: {
      return {
        ...state,
        profile: {
          ...state.profile,
          shared: action.payload.shared
        },
        isRequested: !state.isRequested
      };
    }
    case PROFILE_BIND_EMAIL: {
      return {
        ...state,
        profile: {
          ...state.profile,
          email: action.payload.email
        },
        isRequested: !state.isRequested
      };
    }

    default:
      return state;
  }
}