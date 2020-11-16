const view = (state, {updateState}) => {
	return (
		<div class="bing-wrapper">
			<now-radio-buttons required={true} label="Select an answer" value={state.properties.answers} layout="vertical" name={state.properties.fieldId} options={state.properties.allItems} append-to-payload={{fieldId: state.properties.fieldId, compType: 'boolean'}}></now-radio-buttons>
			<h4>selectedItems : {state.answers}</h4>
		</div>
	)
};

export default view;
