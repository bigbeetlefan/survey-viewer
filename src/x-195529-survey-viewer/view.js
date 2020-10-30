const view = (state, {updateState}) => {
	return (
		<div>
			<now-heading label="Survey Viewer v1.0" level="1" variant="header-secondary"></now-heading>
			<div class="bing-wrapper">
			
				
				{state.showLoading ? (<now-loader></now-loader>) : (
					<div>
						{state.searchResults.questions.idList.length ? (
							console.log(state.searchResults),
							state.searchResults.questions.idList.map(result => (
								<now-card>
									<h4>{state.searchResults.questions.idMap[result].label}</h4>														
								
									{(state.searchResults.questions.idMap[result].type == 'boolean') ? (
									<x-195529-survey-viewer-drop-down items={state.searchResults.questions.idMap[result].choices}></x-195529-survey-viewer-drop-down>
									): null}
									{(state.searchResults.questions.idMap[result].type == 'choice') ? (
									<x-195529-survey-viewer-drop-down items={state.searchResults.questions.idMap[result].choices}></x-195529-survey-viewer-drop-down>
									): null}
									{(state.searchResults.questions.idMap[result].type == 'string') ? (
									<x-195529-survey-viewer-textarea answer=''></x-195529-survey-viewer-textarea>
									): null}
																
								</now-card>	
									
								
							))
						) : (
							<h3>NO RESULT FOUND</h3>
							
						)}
					</div>
				)}
				
			</div>		
					
		</div>
		
	)
};

export default view;
