import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import '@servicenow/now-icon';
import '@servicenow/now-card';
import '@servicenow/now-radio-buttons';
import view from './view';


createCustomElement('x-195529-survey-viewer-radio-buttons', {
	renderer: {type: snabbdom},
	initialState:{
		value: '',
		items:[],		
		answers: {
			default: ''
		},
		shouldUpdate: true
	},
	properties: {
		fieldId: {
			default: ''
		},
		selectedItems: [],
		items:[],
		allItems:{
			computed({properties: {items}}){
				const newItems = items.sort((a,b) => a.value - b.value					
			).map(item => ({id:item.label, label:item.label, checked: false}));
				//console.log(newItems);
				return newItems;
			}
		},
		answers:{
			default: ''
		},
		shouldUpdate: true
	},
	view,
	actionHandlers: {
		'NOW_RADIO_BUTTONS#VALUE_SET': ({action, updateState}) => updateState({answers: action.payload.value})
		//'NOW_TEXTAREA#INPUT': ({action, updateState}) => updateState(console.log(action))
	},
	styles
});
