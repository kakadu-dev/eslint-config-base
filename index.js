module.exports = {
	rules: {
		'global-require':                    'off',
		'import/prefer-default-export':      'off',
		'import/no-named-default':           'off',
		'import/no-webpack-loader-syntax':   'off',
		'import/no-extraneous-dependencies': 'off',
		'react/state-in-constructor':        'off',
		'no-async-promise-executor':         'off',
		'no-use-before-define':              ['error', { 'functions': false }],
		'react/sort-comp':                   [
			2,
			{
				'order':  [
					'static-variables',
					'static-methods',
					'lifecycle',
					'/^on.+$/',
					'getters',
					'setters',
					'/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
					'instance-methods',
					'everything-else',
					'rendering',
				],
				'groups': {
					'lifecycle': [
						'displayName',
						'propTypes',
						'contextTypes',
						'childContextTypes',
						'mixins',
						'statics',
						'defaultProps',
						'constructor',
						'getDefaultProps',
						'getInitialState',
						'state',
						'classProps',
						// 'instance-variables', // class properties
						'getChildContext',
						'componentWillMount',
						'componentDidMount',
						'componentWillReceiveProps',
						'shouldComponentUpdate',
						'componentWillUpdate',
						'componentDidUpdate',
						'componentWillUnmount',
					],
					'rendering': [
						'/^render.+$/',
						'render',
					],
				},
			},
		],
		'react/style-prop-object':           'off',
		'max-len':                           [
			'error',
			120,
			2,
		],
		'camelcase':                         [
			0,
		],
		'indent':                            [
			'error',
			'tab',
			{
				'SwitchCase': 1,
			},
		],
		'no-tabs':                           0,
		'linebreak-style':                   [
			0,
			'unix',
		],
	},

	env: {
		browser: true,
		es6:     true,
		node:    true,
	},

	extends: [
		'airbnb',
		'prettier',
	],

	parserOptions: {
		sourceType:   'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx:                          true,
		},
		ecmaVersion:  6,
	},

	plugins: [
		'prettier',
	],

	// Map from global var to bool specifying if it can be redefined
	globals: {
		__DEV__:                 true,
		__dirname:               false,
		__fbBatchedBridgeConfig: false,
		alert:                   false,
		cancelAnimationFrame:    false,
		cancelIdleCallback:      false,
		clearImmediate:          true,
		clearInterval:           false,
		clearTimeout:            false,
		console:                 false,
		document:                false,
		escape:                  false,
		Event:                   false,
		EventTarget:             false,
		exports:                 false,
		fetch:                   false,
		FormData:                false,
		global:                  false,
		Map:                     true,
		module:                  false,
		navigator:               false,
		process:                 false,
		Promise:                 true,
		requestAnimationFrame:   true,
		requestIdleCallback:     true,
		require:                 false,
		Set:                     true,
		setImmediate:            true,
		setInterval:             false,
		setTimeout:              false,
		window:                  false,
		XMLHttpRequest:          false,
	},
};
