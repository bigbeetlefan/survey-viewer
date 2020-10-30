import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import '@servicenow/now-icon';
import "@servicenow/now-dropdown";
import '@servicenow/now-loader';
import '@servicenow/now-button';
import view from './view';


createCustomElement('x-195529-survey-viewer-drop-down', {
	renderer: {type: snabbdom},
	initialState:{
		items:[],
		showLoading : true,
		selectedItems: [],
		searchResults: []
	},
	properties: {
		selectedItems: [],
		items:[],
		allItems:{
			computed({properties: {items}}){
				const newItems = items.sort((a,b) => {
					 (a.order) ? (a.label - b.label) : (a.value - b.value);					
			}).map(item => ({id:item.value, label:item.label}));
				//console.log(newItems);
				return newItems;
			}
		}
	},
	view,
	// transformState(state) {
    //     return {
    //         ...state,
    //         items: updateOptions2(state.properties.items)
    //     };
	// },
	actionHandlers: {
		'NOW_DROPDOWN#SELECTED_ITEMS_SET': ({action, updateState}) => updateState({selectedItems: action.payload.value})
	},
	styles
});
