const view = (state, {updateState}) => {
return (
	<div>
		<now-heading label="Survey Viewer v1.0" level="1" variant="header-secondary"></now-heading>
		<div class="bing-wrapper">
			<div>
			<h4>Tester field : {state.holloday}</h4>
				<x-195529-survey-viewer-tester fieldId='ddddddd'></x-195529-survey-viewer-tester>
			</div>
			{state.showLoading ? (<now-loader></now-loader>) : (
				<div>
					
					{state.searchResults.questions.idList.length ? (
						console.log(state.searchResults),
						state.searchResults.questions.idList.map(result => {							
							switch (state.searchResults.questions.idMap[result].type) {
								
								case 'boolean':
									return (
									<div>
										<now-card>
											<h5>{state.searchResults.questions.idMap[result].label}</h5>
											<x-195529-survey-viewer-drop-down fieldId={state.searchResults.questions.idMap[result].sys_id} items={state.searchResults.questions.idMap[result].choices}></x-195529-survey-viewer-drop-down>
										</now-card>
									</div>);
									break;
								case 'choice':
									return (
									<div>
										<now-card>
											<h5>{state.searchResults.questions.idMap[result].label}</h5>
											<x-195529-survey-viewer-drop-down fieldId={state.searchResults.questions.idMap[result].sys_id} items={state.searchResults.questions.idMap[result].choices}></x-195529-survey-viewer-drop-down>
										</now-card>
									</div>);
									break;
								case 'string':
									return (
									<div>
										<now-card>
											<h5>{state.searchResults.questions.idMap[result].label}</h5>
											<x-195529-survey-viewer-textarea fieldId={state.searchResults.questions.idMap[result].sys_id} ></x-195529-survey-viewer-textarea>
										</now-card>
									</div>);									
									break;
							
								default:
									break;
							}
							return (<span>No Type Matching</span>);

						}

						// 	(
							
						// 	<now-card>
						// 		<h5>{state.searchResults.questions.idMap[result].label}</h5>									
							
						// 		{(state.searchResults.questions.idMap[result].type == 'boolean') ? (
						// 		<x-195529-survey-viewer-drop-down fieldId={state.searchResults.questions.idMap[result].sys_id} items={state.searchResults.questions.idMap[result].choices}></x-195529-survey-viewer-drop-down>
						// 		): null}
						// 		{(state.searchResults.questions.idMap[result].type == 'choice') ? (
						// 		<x-195529-survey-viewer-drop-down fieldId={state.searchResults.questions.idMap[result].sys_id} items={state.searchResults.questions.idMap[result].choices}></x-195529-survey-viewer-drop-down>
						// 		): null}
						// 		{(state.searchResults.questions.idMap[result].type == 'string') ? (
						// 		<x-195529-survey-viewer-textarea fieldId={state.searchResults.questions.idMap[result].sys_id} ></x-195529-survey-viewer-textarea>
						// 		): null}					
						// 	</now-card>	
								
							
						// )
						)
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
