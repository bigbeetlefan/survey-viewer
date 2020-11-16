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
				<form>
				{state.searchResults.questions.idList.length ? (
					//console.log(state.searchResults),
					console.log(state),
					state.searchResults.questions.idList.map(result => {							
						switch (state.searchResults.questions.idMap[result].type) {
							
							case 'boolean':
								return (
								<div>
									<div>
										<h5>{state.searchResults.questions.idMap[result].label}</h5>
										<x-195529-survey-viewer-radio-buttons fieldId={state.searchResults.questions.idMap[result].name} items={state.searchResults.questions.idMap[result].choices}></x-195529-survey-viewer-radio-buttons>
									</div>
								</div>);
								break;
							case 'choice':
								return (
								<div>
									<now-card>
										<h5>{state.searchResults.questions.idMap[result].label}</h5>
										<x-195529-survey-viewer-drop-down fieldId={state.searchResults.questions.idMap[result].name} items={state.searchResults.questions.idMap[result].choices}></x-195529-survey-viewer-drop-down>
									</now-card>
								</div>);
								break;
							case 'string':
								return (
								<div>
									<now-card>
										<h5>{state.searchResults.questions.idMap[result].label}</h5>
										<x-195529-survey-viewer-textarea fieldId={state.searchResults.questions.idMap[result].name} ></x-195529-survey-viewer-textarea>
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
				<now-button label="Save" append-to-payload={{compType: 'save'}} size="md" icon="" configAria={{}} tooltipContent=""></now-button>
				<now-button label="Submit" append-to-payload={{compType: 'submit'}} variant="primary" size="md" icon="" configAria={{}} tooltipContent=""></now-button>
				</form>
			</div>
		)}
		
	</div>		
			
</div>

)
};

export default view;
