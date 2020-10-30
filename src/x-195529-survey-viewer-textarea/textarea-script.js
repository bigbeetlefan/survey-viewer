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
		answers: ''
	},
	properties: {
		answers: [],
	},
	view,
	actionHandlers: {
		'NOW_TEXTAREA#INPUT': ({action, updateState}) => updateState({answers: action.payload.value})
	},
	styles
});
