(function JVM_java_util_ListIterator($JVM, JVM){
	$JVM.ClassLoader.defineClass("java/util/ListIterator", ["java/util/Iterator"], "java/lang/Object", [
		{
			"type": "method",
			"name": "hasNext",
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
			"name": "next",
			"signature": "()Ljava/lang/Object;",
			"sigparts": {
				"return": "Ljava/lang/Object;",
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
			"name": "hasPrevious",
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
			"name": "previous",
			"signature": "()Ljava/lang/Object;",
			"sigparts": {
				"return": "Ljava/lang/Object;",
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
			"name": "nextIndex",
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
			"name": "previousIndex",
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
			"name": "remove",
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
			"name": "set",
			"signature": "(Ljava/lang/Object;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
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
			"name": "add",
			"signature": "(Ljava/lang/Object;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
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
			"type": "references",
			"value": [
				"java/util/Iterator",
				"java/lang/Object"
			]
		}
	]);
})($currentJVM, JVM);