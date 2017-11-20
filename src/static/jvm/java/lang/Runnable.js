(function JVM_java_lang_Runnable($JVM, JVM){
	$JVM.ClassLoader.defineClass("java/lang/Runnable", [], "java/lang/Object", [
		{
			"type": "method",
			"name": "run",
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