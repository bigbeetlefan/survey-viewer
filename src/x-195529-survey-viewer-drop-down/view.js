const view = (state, {updateState}) => {
	return (
		<div class="bing-wrapper">
			<now-dropdown name={state.properties.fieldId} append-to-payload={{fieldId: state.properties.fieldId, compType: 'textarea'}} items={state.properties.allItems} selectedItems={state.selectedItems} select="single" placeholder="Select an answer" icon="" variant="secondary" size="md" tooltipContent="" panelFitProps={{}} configAria={{}}></now-dropdown>			
			<h4>selectedItems : {state.selectedItems}</h4>	
		</div>
	)
};

export default view;
