(function JVM_net_nexustools_jvm_bridge_JSInvokable($JVM, JVM){
	$JVM.ClassLoader.defineClass("net/nexustools/jvm/bridge/JSInvokable", [], "java/lang/Object", [
		{
			"type": "method",
			"name": "invoke",
			"signature": "([Lnet/nexustools/jvm/bridge/JSObjectRef;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"[Lnet/nexustools/jvm/bridge/JSObjectRef;"
				]
			},
			"implementation": [
				{
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.VARARGS,
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