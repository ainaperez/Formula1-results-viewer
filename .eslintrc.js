module.exports = {
	extends: ['react-app', 'prettier'],
	plugins: ['cypress'],
	env: {
		'cypress/globals': true,
	},
};
