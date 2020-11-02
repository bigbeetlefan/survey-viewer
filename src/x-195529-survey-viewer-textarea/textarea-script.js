import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import '@servicenow/now-icon';
import '@servicenow/now-card';
import '@servicenow/now-textarea';
import view from './view';


createCustomElement('x-195529-survey-viewer-textarea', {
	renderer: {type: snabbdom},
	initialState:{
		value: '',		
		answers: {
			default: null
		}
	},
	properties: {
		fieldId: {
			default: ''
		},
		value: '',
		answers:{
			default: null
		}
	},
	view,
	actionHandlers: {
		'NOW_TEXTAREA#INPUT': ({action, updateState}) => updateState({answers: action.payload.fieldValue})
		//'NOW_TEXTAREA#INPUT': ({action, updateState}) => updateState(console.log(action))
	},
	styles
});
