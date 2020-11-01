import {createCustomElement, actionTypes} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import '@servicenow/now-icon';
import '@servicenow/now-card';
import '@servicenow/now-textarea';
import view from './view';

const testingFn =  ({properties, dispatch}) => {
	console.log('Hello World');
	dispatch('SOMETHING_HAPPENED', (console.log('properties')))
};

const logFn = ({action, dispatch,updateProperties}) => {
	dispatch('SOMETHING_HAPPENED', updateProperties({answers:'dsafdasfasfasfd'}));
};

createCustomElement('x-195529-survey-viewer-tester', {
	renderer: {type: snabbdom},
	initialState:{
		nanswers : {
			default: ''
		}
	},
	properties: {
		answers : {
			default: ''
		},
		fieldId:{
			default: 'fieldId'
		}
	},
	view,
	actionHandlers: {
		[actionTypes.COMPONENT_PROPERTY_CHANGED]: testingFn,
		'SOMETHING_HAPPENED' : () => { console.log('Properties changed!')},
		// 'NOW_TEXTAREA#INPUT': ({action, updateState}) => updateState(
		// 	{answers: action.payload.fieldValue}
		// )
		// 'NOW_TEXTAREA#INPUT': ({action, updateState}) => updateState(
		// 	{answers: action.payload.fieldValue}
		// )
	},
	styles
});
