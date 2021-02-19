const filterTables = () => {
	const quizzesBar = document.querySelector("body > div > div:nth-child(3) > div > div:nth-child(1)")

	if (quizzesBar) {
		const labelAndInput = `
			<div class="m-3">
				<label for="filter">Which status are you looking for?</label>
				<select id="filter">
				  <option value="All">All</option>
				  <option value="Not Started">Not Started</option>
				  <option value="Finished">Finished</option>
				</select>
			</div>
		`

		// Need to refactor this
		const filterTables = (event) => {
			const filterParams = event.currentTarget.value
			const studentRows = document.querySelectorAll(".table tbody .quiz-row")
			if (filterParams === 'Finished') {
				studentRows.forEach((studentRow) => {
					const started = studentRow.querySelector("td:nth-child(2)").innerText
					studentRow.style.display = !/-/.test(started) ? "" : "none"
				});
			} else if (filterParams === 'All') {
				studentRows.forEach((studentRow) => {
					studentRow.style.display = "";
				});
			} else {
				const regexp = new RegExp(filterParams, "i")
				studentRows.forEach((studentRow) => {
					const started = studentRow.querySelector("td.quiz-status").innerText
					studentRow.style.display = regexp.test(started) ? "" : "none"
				});
			}
		}


		quizzesBar.insertAdjacentHTML('afterbegin', labelAndInput)
		const input = document.getElementById('filter')
		input.addEventListener('change', filterTables)
	}
}

filterTables();