(function JVM_java_util_Map($JVM, JVM){
	$JVM.ClassLoader.defineClass("java/util/Map", [], "java/lang/Object", [
		{
			"type": "method",
			"name": "size",
			"signature": "()I",
			"sigparts": {
				"return": JVM.Types.INT,
				"args": []
			},
			"implementation": [
				{
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.ABSTRACT,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "isEmpty",
			"signature": "()Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": []
			},
			"implementation": [
				{
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.ABSTRACT,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "containsKey",
			"signature": "(Ljava/lang/Object;)Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": [
					"Ljava/lang/Object;"
				]
			},
			"implementation": [
				{
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.ABSTRACT,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "containsValue",
			"signature": "(Ljava/lang/Object;)Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": [
					"Ljava/lang/Object;"
				]
			},
			"implementation": [
				{
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.ABSTRACT,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "get",
			"signature": "(Ljava/lang/Object;)Ljava/lang/Object;",
			"sigparts": {
				"return": "Ljava/lang/Object;",
				"args": [
					"Ljava/lang/Object;"
				]
			},
			"implementation": [
				{
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.ABSTRACT,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "put",
			"signature": "(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;",
			"sigparts": {
				"return": "Ljava/lang/Object;",
				"args": [
					"Ljava/lang/Object;",
					"Ljava/lang/Object;"
				]
			},
			"implementation": [
				{
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.ABSTRACT,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "remove",
			"signature": "(Ljava/lang/Object;)Ljava/lang/Object;",
			"sigparts": {
				"return": "Ljava/lang/Object;",
				"args": [
					"Ljava/lang/Object;"
				]
			},
			"implementation": [
				{
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.ABSTRACT,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "putAll",
			"signature": "(Ljava/util/Map;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Ljava/util/Map;"
				]
			},
			"implementation": [
				{
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.ABSTRACT,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "clear",
			"signature": "()V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": []
			},
			"implementation": [
				{
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.ABSTRACT,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "keySet",
			"signature": "()Ljava/util/Set;",
			"sigparts": {
				"return": "Ljava/util/Set;",
				"args": []
			},
			"implementation": [
				{
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.ABSTRACT,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "values",
			"signature": "()Ljava/util/Collection;",
			"sigparts": {
				"return": "Ljava/util/Collection;",
				"args": []
			},
			"implementation": [
				{
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.ABSTRACT,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "entrySet",
			"signature": "()Ljava/util/Set;",
			"sigparts": {
				"return": "Ljava/util/Set;",
				"args": []
			},
			"implementation": [
				{
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.ABSTRACT,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "equals",
			"signature": "(Ljava/lang/Object;)Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": [
					"Ljava/lang/Object;"
				]
			},
			"implementation": [
				{
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.ABSTRACT,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "hashCode",
			"signature": "()I",
			"sigparts": {
				"return": JVM.Types.INT,
				"args": []
			},
			"implementation": [
				{
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.ABSTRACT,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "references",
			"value": [
				"java/lang/Object",
				"java/util/Map",
				"java/util/Set",
				"java/util/Collection",
			]
		}
	]);
})($currentJVM, JVM);