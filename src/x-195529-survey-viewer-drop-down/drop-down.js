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
	styles
});
