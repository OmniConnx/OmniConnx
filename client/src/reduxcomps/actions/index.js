export const SUBMIT_POST = 'SUBMIT_POST';
export const LOGIN_CHECK = 'LOGIN_CHECK';
export const USER_CHECK = 'USER_CHECK';
export const SET_USER = 'SET_USER';

export const submitPost = (title, desc, image, tag1, tag2, tag3) => {
	return {
		type: SUBMIT_POST,
		payload: {
			title,
			desc,
			image,
			tag1,
			tag2,
			tag3,
		},
	};
};

export const loginCheck = (user) => {
	return {
		type: LOGIN_CHECK,
		payload: { user },
	};
};

export const setUser = (user) => {
	return {
		type: SET_USER,
		payload: { user },
	};
};
