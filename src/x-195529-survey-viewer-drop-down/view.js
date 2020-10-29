const view = (state, {updateState}) => {
	//let test = JSON.stringify(state);
	//const {properties} = state;
	return (
		<div class="bing-wrapper">	
			{console.log(state.properties.items)}		
			<now-dropdown items={state.items} selectedItems={["ca"]} select="single" placeholder="" icon="" variant="secondary" size="md" tooltipContent="" panelFitProps={{}} configAria={{}}></now-dropdown>			
		
		</div>
	)
};

export default view;
