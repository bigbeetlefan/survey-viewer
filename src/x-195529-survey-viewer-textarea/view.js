const view = (state, {updateState}) => {
	return (
		<div class="bing-wrapper">
			<now-textarea configAria={{}} required={true} name={state.properties.fieldId} append-to-payload={{fieldId: state.properties.fieldId, compType: 'string'}} label="" maxlength={250} messages={[{"status":"info","icon":"circle-info-outline","content":"250 character limit"}]} resize="both" showBorders={true}></now-textarea>
			<h4>selectedItems : {state.answers}</h4>
		</div>
	)
};

export default view;
