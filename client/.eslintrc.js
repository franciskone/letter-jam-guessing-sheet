module.exports = {
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	parserOptions: {
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module' // Allows for the use of imports
	},
	extends: [
		'plugin:@typescript-eslint/recommended' // Uses the recommended rules from the @typescript-eslint/eslint-plugin
	],
	rules: {
		'prefer-arrow-callback': 'error',
		'no-multiple-empty-lines': ['error', { 'max':  1 }],
		'padded-blocks': ['error','never'],
		'quotes': ['error', 'single'],
		'object-curly-spacing': ['error', 'always'],
		'max-len': 'error',
		'indent': ['error', 'tab']
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		// e.g. "@typescript-eslint/explicit-function-return-type": "off",
	}
};
