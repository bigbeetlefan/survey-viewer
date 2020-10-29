const view = (state, {updateState}) => {
	return (
		<div>
			<now-heading label="Survey Viewer v1.0" level="1" variant="header-secondary"></now-heading>
			<div class="bing-wrapper">
			
				<now-card></now-card>
				{state.showLoading ? (<now-loader></now-loader>) : (
					<ul>
						{state.searchResults.questions.idList.length ? (
							console.log(state.searchResults),
							state.searchResults.questions.idList.map(result => (
								<div>
									{state.searchResults.questions.idMap[result].label}
														
								<li>
									{state.searchResults.questions.idMap[result].type == 'choice' ? (
									<x-195529-survey-viewer-drop-down items={state.searchResults.questions.idMap[result].choices}></x-195529-survey-viewer-drop-down>
									): null}
								</li>								
								</div>	
									
								
							))
						) : (
							<li>NO RESULT FOUND</li>
							
						)}
					</ul>
				)}
				
			</div>		
					
		</div>
		
	)
};

export default view;
