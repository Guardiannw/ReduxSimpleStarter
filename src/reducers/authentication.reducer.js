import { SIGN_IN, SIGN_OUT } from '../actions/types'

export default function(state = false, action) {
	switch(action.type) {
		case SIGN_IN:
			return true
		case SIGN_OUT:
			return false
		default:
			return state
	}
}