import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import '@servicenow/now-icon';
import "@servicenow/now-dropdown";
import '@servicenow/now-card';
import '@servicenow/now-loader';
import '@servicenow/now-modal';
import '@servicenow/now-rich-text';
import '@servicenow/now-button';
import view from './view';
//import {updateOptions} from './update-options';


const updateOptions = (items) => {	
	{const items = allItems.map(item => (
		{'id' : item.value, 'label' : item.label})
		)
	}
	return items;

}

createCustomElement('x-195529-survey-viewer-drop-down', {
	renderer: {type: snabbdom},
	initialState:{
		items:[],
		showLoading : true,
		searchResults: [],
		selectedResult: null
	},
	properties: {
		items:[],
	},
	view,
	transformState(state) {
        return {
            ...state,
            user: updateOptions(state.properties.items)
        };
    },
	styles
});
