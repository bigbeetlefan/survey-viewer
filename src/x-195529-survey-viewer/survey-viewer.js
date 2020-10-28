import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import '../x-195529-survey-viewer-drop-down';
import '@servicenow/now-button';
import view from './view';

createCustomElement('x-195529-survey-viewer', {
	renderer: {type: snabbdom},
	initialState: {
		searchText: 'email'
	},
	properties: {
		sysId: {
			default: 'default_sys_id'			
		},
		tableName: {
			default: 'kb_knowledge'			
		}
	},
	view,
	styles
});
