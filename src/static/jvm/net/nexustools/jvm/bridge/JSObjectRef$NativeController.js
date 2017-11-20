(function JVM_net_nexustools_jvm_bridge_JSObjectRef_NativeController($JVM, JVM){
	$JVM.ClassLoader.defineClass("net/nexustools/jvm/bridge/JSObjectRef$NativeController", ["net/nexustools/jvm/bridge/JSObjectRef$Controller"], "java/lang/Object", [
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
					"name": "L1614104905"
				},
				{
					"type": "var",
					"opcode": JVM.Opcodes.ALOAD,
					"index": "0"
				},
				{
					"type": "method",
					"opcode": JVM.Opcodes.INVOKESPECIAL,
					"owner": "java/lang/Object",
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
					"name": "L1247709431"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/jvm/bridge/JSObjectRef$NativeController;",
					"index": "0",
					"start": "L1614104905",
					"end": "L1247709431"
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
			"type": "method",
			"name": "getRef",
			"signature": "()Lnet/nexustools/jvm/bridge/JSObjectRef;",
			"sigparts": {
				"return": "Lnet/nexustools/jvm/bridge/JSObjectRef;",
				"args": []
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef$NativeController.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "references",
			"value": [
				"net/nexustools/jvm/bridge/JSObjectRef$Controller",
				"java/lang/Object",
				"net/nexustools/jvm/bridge/JSObjectRef$NativeController",
				"net/nexustools/jvm/bridge/JSObjectRef"
			]
		}
	]);
})($currentJVM, JVM);