(function JVM_net_nexustools_jvm_bridge_JSObjectRef_Controller($JVM, JVM){
	$JVM.ClassLoader.defineClass("net/nexustools/jvm/bridge/JSObjectRef$Controller", [], "java/lang/Object", [
		{
			"type": "method",
			"name": "getRef",
			"signature": "()Lnet/nexustools/jvm/bridge/JSObjectRef;",
			"sigparts": {
				"return": "Lnet/nexustools/jvm/bridge/JSObjectRef;",
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
				"net/nexustools/jvm/bridge/JSObjectRef"
			]
		}
	]);
})($currentJVM, JVM);