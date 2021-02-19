const filterTables = () => {
	const quizzesBar = document.querySelector("body > div > div:nth-child(3) > div > div:nth-child(1)")

	if (quizzesBar) {
		const labelAndInput = `
			<div class="m-3">
				<label for="filter">Which status are you looking for?</label>
				<select id="filter">
				  <option value="Started">Both</option>
				  <option value="Not Started">Not Started</option>
				</select>
			</div>
		`

		const filterTables = (event) => {
			const filterParams = event.currentTarget.value
			const regexp = new RegExp(filterParams, "i")
			const studentRows = document.querySelectorAll("tbody .quiz-row")
			studentRows.forEach((studentRow) => {
				const started = studentRow.querySelector("td.quiz-status").innerText
				studentRow.style.display = regexp.test(started) ? "" : "none"
			});
		}


		quizzesBar.insertAdjacentHTML('afterbegin', labelAndInput)
		const input = document.getElementById('filter')
		input.addEventListener('change', filterTables)
	}
}

filterTables();