(function JVM_net_nexustools_jvm_webdocument_WebEventable_Listener($JVM, JVM){
	$JVM.ClassLoader.defineClass("net/nexustools/jvm/webdocument/WebEventable$Listener", [], "java/lang/Object", [
		{
			"type": "method",
			"name": "onEvent",
			"signature": "(Lnet/nexustools/jvm/webdocument/WebEvent;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Lnet/nexustools/jvm/webdocument/WebEvent;"
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
				"java/lang/Object",
				"net/nexustools/jvm/webdocument/WebEvent"
			]
		}
	]);
})($currentJVM, JVM);