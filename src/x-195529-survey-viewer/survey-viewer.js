import {createCustomElement, actionTypes} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import {createHttpEffect} from '@servicenow/ui-effect-http';
import styles from './styles.scss';
import '../x-195529-survey-viewer-drop-down';
import '@servicenow/now-button';
import '@servicenow/now-loader';
import '@servicenow/now-heading';
import view from './view';

const requestSearchResults = ({properties, dispatch}) => {
	if(properties.sysId){
		dispatch('SEARCH_RESULTS_REQUESTED', {
			surveyid: properties.sysId		
		})
	}
};

createCustomElement('x-195529-survey-viewer', {
	renderer: {type: snabbdom},
	initialState: {
		searchText: 'email',
		showLoading : true,
		searchResults: [],
		selectedResult: null
	},
	properties: {
		searchText: {
			default: 'email'
		},
		sysId: {
			default: '3763cd642fcca010677270682799b632'			
		},
		tableName: {
			default: 'kb_knowledge'			
		},
		typeId:{
			default: '502a2c44d7211100158ba6859e6103a3'
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
			queryParams: ['surveyid'],
			startActionType: 'SEARCH_RESULTS_STARTED',
			successActionType:'SEARCH_RESULTS_FETCHED'
		}),
		SEARCH_RESULTS_STARTED: ({updateState}) => updateState({showLoading: true}),
		SEARCH_RESULTS_FETCHED: ({action, updateState}) => updateState({searchResults: action.payload.result, showLoading: false})
	},
	styles
});
