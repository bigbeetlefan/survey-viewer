const view = (state, {updateState}) => {
	//let test = JSON.stringify(state);
	//const {properties} = state;
	return (
		<div class="bing-wrapper">
			<now-textarea label="" maxlength={250}></now-textarea>
			<now-textarea value={state.answers} configAria={{}} label="" maxlength={250} messages={[{"status":"info","icon":"circle-info-outline","content":"100 character limit"}]} resize="both" showBorders={true}></now-textarea>
			<h4>selectedItems : {state.answers} {console.log(state.answers)}</h4>	
		</div>
	)
};

export default view;
