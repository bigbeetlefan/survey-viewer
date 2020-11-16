import {createCustomElement, actionTypes} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import {createHttpEffect} from '@servicenow/ui-effect-http';
import styles from './styles.scss';
import '../x-195529-survey-viewer-drop-down';
import '../x-195529-survey-viewer-textarea';
import '../x-195529-survey-viewer-tester';
import '../x-195529-survey-viewer-radio-buttons';
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

const formReadyToSubmit = ({action, properties, updateProperties}) => {
	//console.log(properties);	
	//console.log(action.payload);
};



createCustomElement('x-195529-survey-viewer', {
	renderer: {type: snabbdom},
	initialState: {		
		showLoading : true,
		searchResults: [],
		/*searchText: 'email',
		
		selectedResult: null,
		answers : 'answers default value',
		testNname : {
			default: ''
		}
		*/
		answers:{
			default: {}
		},
	},
	properties: {		
		sysId: {
			default: 'a49d5cfd9f610200736af84bc42e704d'			
		}
		
	/*	searchText: {
			default: 'email'
		},
		tableName: {
			default: 'kb_knowledge'			
		},
		
		field: {
			default:'hello'
		},
		testNname: {
			default: ''
		} */
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
		SEARCH_RESULTS_FETCHED: ({action, state, updateState}) => {
			const _answer = action.payload.result.questions.idList.map(result => {
				updateState(state['answers'][action.payload.result.questions.idMap[result].name] = '')
			});
			
			updateState({searchResults: action.payload.result, showLoading: false});
		},
		
		//updateState({searchResults: action.payload.result, showLoading: false}),
		'NOW_TEXTAREA#INPUT': ({action, updateState}) => updateState({answer : action.payload.fieldValue}),
		/*
		({action, properties, updateProperties}) => {
            const {fieldId,  fieldValue} = action.payload;
            updateProperties(
				{'answer' : ['fffff']}
			);
			//console.log(action.payload);
		},
		*/
		'NOW_DROPDOWN#SELECTED_ITEMS_SET': ({action, updateProperties}) => {
			const {fieldId,  value} = action.payload;
			updateProperties(
				//{answer: [`${fieldId} : ${value}`]}
				//state.shouldUpdate = true
			);
			//console.log(action.payload);
		},
		'NOW_RADIO_BUTTONS#VALUE_SET':({action, state, updateState}) => {
			const {fieldId, value} = action.payload;
			updateState(
				state.answer = [state.answer, {fieldId : value}]
				//answer.push(`${fieldId} : ${value}`)
			);
			console.log(action.payload);
		},
		'NOW_BUTTON#CLICKED': formReadyToSubmit
	 },
	styles
});
