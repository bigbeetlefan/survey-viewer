const view = (state,{updateState}) => {
	return (
		<div class="bing-wrapper">
			<h4>This is an test please ignore</h4>
			<now-textarea class="bing-wrapper" name={state.properties.fieldId} append-to-payload={{inputId: state.properties.fieldId},{compType: 'textarea'}} configAria={{}} label="" maxlength={250} messages={[{"status":"info","icon":"circle-info-outline","content":"250 character limit"}]} resize="both" showBorders={true}></now-textarea>
			<h4>selectedItems {state.properties.fieldId} : {state.properties.answers}</h4>
		</div>
	)
};

export default view;
