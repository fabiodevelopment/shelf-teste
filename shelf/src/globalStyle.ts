import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

	* {
		padding: 0;
		margin: 0;
		font-family: 'Inter', sans-serif;
	}
	body {
		background-color: #E5E5E5;
	}
	section {
		display: block;
	}
	.container {
		width: 80%;
		margin: 0 auto;
		padding: 20px 0;
	}
	.shelf {
		display: flex;
		flex-wrap: wrap;
		margin: 4rem 0;
	}
`