const view = (state, {updateState}) => {
	//let test = JSON.stringify(state);
	//const {properties} = state;
	return (
		<div class="bing-wrapper">
			<now-dropdown items={state.properties.allItems} selectedItems={state.selectedItems} select="single" placeholder="Select an answer" icon="" variant="secondary" size="md" tooltipContent="" panelFitProps={{}} configAria={{}}></now-dropdown>			
	<h4>selectedItems : {state.selectedItems}</h4>
	
		</div>
	)
};

export default view;
