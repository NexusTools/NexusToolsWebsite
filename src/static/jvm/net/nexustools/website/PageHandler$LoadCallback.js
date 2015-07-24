(function JVM_net_nexustools_website_PageHandler_LoadCallback($JVM, JVM){
	$JVM.ClassLoader.defineClass("net/nexustools/website/PageHandler$LoadCallback", [], "java/lang/Object", [
		{
			"type": "method",
			"name": "ready",
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
			"name": "error",
			"signature": "(I)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					JVM.Types.INT
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
				"java/lang/Object"
			]
		}
	]);
})($currentJVM, JVM);