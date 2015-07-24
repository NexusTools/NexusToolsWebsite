(function JVM_net_nexustools_jvm_bridge_JSObjectRef_1($JVM, JVM){
	$JVM.ClassLoader.defineClass("net/nexustools/jvm/bridge/JSObjectRef$1", ["java/lang/Runnable"], "java/lang/Object", [
		{
			"type": "field",
			"name": "this$0",
			"signature": "Lnet/nexustools/jvm/bridge/JSObjectRef;",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.SYNTHETIC
			]
		},
		{
			"type": "method",
			"name": "<init>",
			"signature": "(Lnet/nexustools/jvm/bridge/JSObjectRef;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Lnet/nexustools/jvm/bridge/JSObjectRef;"
				]
			},
			"implementation": [
				{
					"type": "label",
					"name": "L1261659405"
				},
				{
					"type": "var",
					"opcode": JVM.Opcodes.ALOAD,
					"index": "0"
				},
				{
					"type": "var",
					"opcode": JVM.Opcodes.ALOAD,
					"index": "1"
				},
				{
					"type": "field",
					"opcode": JVM.Opcodes.PUTFIELD,
					"class": "net/nexustools/jvm/bridge/JSObjectRef$1",
					"name": "this$0",
					"signature": "Lnet/nexustools/jvm/bridge/JSObjectRef;"
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
					"name": "L456089357"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/jvm/bridge/JSObjectRef$1;",
					"index": "0",
					"start": "L1261659405",
					"end": "L456089357"
				},
				{
					"type": "declare",
					"name": "this$0",
					"signature": "Lnet/nexustools/jvm/bridge/JSObjectRef;",
					"index": "1",
					"start": "L1261659405",
					"end": "L456089357"
				},
				{
					"type": "end"
				}
			],
			"access": [
			]
		},
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
					"type": "label",
					"name": "L1124686956"
				},
				{
					"type": "var",
					"opcode": JVM.Opcodes.ALOAD,
					"index": "0"
				},
				{
					"type": "field",
					"opcode": JVM.Opcodes.GETFIELD,
					"class": "net/nexustools/jvm/bridge/JSObjectRef$1",
					"name": "this$0",
					"signature": "Lnet/nexustools/jvm/bridge/JSObjectRef;"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.ICONST_0
				},
				{
					"type": "type",
					"opcode": JVM.Opcodes.ANEWARRAY,
					"signature": "net/nexustools/jvm/bridge/JSObjectRef"
				},
				{
					"type": "method",
					"opcode": JVM.Opcodes.INVOKEVIRTUAL,
					"owner": "net/nexustools/jvm/bridge/JSObjectRef",
					"name": "invoke",
					"signature": {
						"raw": "([Lnet/nexustools/jvm/bridge/JSObjectRef;)Lnet/nexustools/jvm/bridge/JSObjectRef;",
						"return": "Lnet/nexustools/jvm/bridge/JSObjectRef;",
						"args": [
							"[Lnet/nexustools/jvm/bridge/JSObjectRef;"
						]
					},
					"interface": false
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.POP
				},
				{
					"type": "label",
					"name": "L462608598"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.RETURN
				},
				{
					"type": "label",
					"name": "L1171904446"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/jvm/bridge/JSObjectRef$1;",
					"index": "0",
					"start": "L1124686956",
					"end": "L1171904446"
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
				"java/lang/Runnable",
				"java/lang/Object",
				"net/nexustools/jvm/bridge/JSObjectRef",
				"net/nexustools/jvm/bridge/JSObjectRef$1"
			]
		}
	]);
})($currentJVM, JVM);