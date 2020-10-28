const view = (state, {updateState}) => {
	//let test = JSON.stringify(state);
	//const {properties} = state;
	return (
		<div class="bing-wrapper">
			<now-card>
			{state.showLoading ? (<now-loader></now-loader>) : (
				<ul>
					{state.searchResults.length ? (
						state.searchResults.map(result => (
							<li>
								<now-button-iconic 
									bare 
									icon='circle-info-outline'
									size='md' 
									on-click={()=> updateState({selectedResult: result})}>

									</now-button-iconic>

								</li>
						))
					) : (
						console.log(state.searchResults)
					)}
				</ul>
			)}
			</now-card>

			<h2>Hello from drop down ! </h2>
			<h2>properties.sysId = {state.properties.sysId} </h2>
			<h2>properties.table = {state.properties.tableName} </h2>
			
			<now-dropdown items={state.items} selectedItems={["ca"]} select="single" placeholder="" icon="" variant="secondary" size="md" tooltipContent="" panelFitProps={{}} configAria={{}}></now-dropdown>			
		
		</div>
	)
};

export default view;
