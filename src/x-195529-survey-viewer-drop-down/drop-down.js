import {createCustomElement, actionTypes} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import {createHttpEffect} from '@servicenow/ui-effect-http';
import styles from './styles.scss';
import '@servicenow/now-icon';
import "@servicenow/now-dropdown";
import '@servicenow/now-card';
import '@servicenow/now-loader';
import '@servicenow/now-modal';
import '@servicenow/now-rich-text';
import '@servicenow/now-button';
import view from './view';


const requestSearchResults = ({properties, dispatch}) => {
	if(properties.searchText){
		dispatch('SEARCH_RESULTS_REQUESTED', {
			typeid: '502a2c44d7211100158ba6859e6103a3',
			surveyid: 'd0041b452fcc2010677270682799b6bf'
		
		})
	}
};

createCustomElement('x-195529-survey-viewer-drop-down', {
	renderer: {type: snabbdom},
	initialState:{
		items:[{"id":"bl","label":"Bing"},
			{"id":"al","label":"Alabama"},
			{"id":"ak","label":"Alaska"},
			{"id":"az","label":"Arizona"},
			{"id":"ar","label":"Arkansas"},
			{"id":"ca","label":"California"},
			{"id":"co","label":"Colorado"}],
		showLoading : true,
		searchResults: [],
		selectedResult: null
	},
	properties: {
		searchText: {
			default: 'email'
		},
		sysId: {
			default: '90'			
		},
		tableName: {
			default: 'kb_knowledge'			
		}
	},
	view,
	actionHandlers: {
		[actionTypes.COMPONENT_CONNECTED]:
		requestSearchResults,
	/*	SEARCH_RESULTS_REQUESTED: createHttpEffect('/api/now/table/:table', {
			pathParams: ['table'],
			queryParams: ['sysparm_query'],
			startActionType: 'SEARCH_RESULTS_STARTED',
			successActionType:'SEARCH_RESULTS_FETCHED'
		}), */
		SEARCH_RESULTS_REQUESTED: createHttpEffect('/api/x_195529_dev7141_3/survey_viewer', {
			method: 'GET',
			queryParams: ['typeid','surveyid'],
			startActionType: 'SEARCH_RESULTS_STARTED',
			successActionType:'SEARCH_RESULTS_FETCHED'
		}),
		SEARCH_RESULTS_STARTED: ({updateState}) => updateState({showLoading: true}),
		SEARCH_RESULTS_FETCHED: ({action, updateState}) => updateState({searchResults: action.payload.result, showLoading: false})
	},
	styles
});
