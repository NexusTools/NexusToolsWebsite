(function JVM_net_nexustools_jvm_webdocument_WebEvent($JVM, JVM){
	$JVM.ClassLoader.defineClass("net/nexustools/jvm/webdocument/WebEvent", [], "net/nexustools/jvm/bridge/JSObjectRef$NativeController", [
		{
			"type": "method",
			"name": "<init>",
			"signature": "()V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": []
			},
			"implementation": [
				{
					"type": "label",
					"name": "L853992494"
				},
				{
					"type": "var",
					"opcode": JVM.Opcodes.ALOAD,
					"index": "0"
				},
				{
					"type": "method",
					"opcode": JVM.Opcodes.INVOKESPECIAL,
					"owner": "net/nexustools/jvm/bridge/JSObjectRef$NativeController",
					"name": "<init>",
					"signature": {
						"raw": "()V",
						"return": JVM.Types.VOID,
						"args": []
					},
					"interface": false
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.RETURN
				},
				{
					"type": "label",
					"name": "L1418633757"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/jvm/webdocument/WebEvent;",
					"index": "0",
					"start": "L853992494",
					"end": "L1418633757"
				},
				{
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "references",
			"value": [
				"net/nexustools/jvm/bridge/JSObjectRef$NativeController",
				"net/nexustools/jvm/webdocument/WebEvent"
			]
		}
	]);
})($currentJVM, JVM);