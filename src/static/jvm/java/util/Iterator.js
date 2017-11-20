(function JVM_java_util_Iterator($JVM, JVM){
	$JVM.ClassLoader.defineClass("java/util/Iterator", [], "java/lang/Object", [
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
			"type": "references",
			"value": [
				"java/lang/Object"
			]
		}
	]);
})($currentJVM, JVM);