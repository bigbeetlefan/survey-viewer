const view = (state, {updateState}) => {
	return (
		<div>
			<h2>Hello 2</h2>
			<h2>properties.sysId = {state.properties.sysId} </h2>
			<h2>properties.tableName = {state.properties.tableName} </h2>		
			<x-195529-survey-viewer-drop-down sysId={state.properties.sysId} table={state.properties.tableName} ></x-195529-survey-viewer-drop-down>			
		</div>
		
	)
};

export default view;
