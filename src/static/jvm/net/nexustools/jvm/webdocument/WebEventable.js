(function JVM_net_nexustools_jvm_webdocument_WebEventable($JVM, JVM){
	$JVM.ClassLoader.defineClass("net/nexustools/jvm/webdocument/WebEventable", [], "java/lang/Object", [
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
					"name": "L1625497285"
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
					"type": "label",
					"name": "L1593395508"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.RETURN
				},
				{
					"type": "label",
					"name": "L1077224866"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/jvm/webdocument/WebEventable;",
					"index": "0",
					"start": "L1625497285",
					"end": "L1077224866"
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
			"name": "addEventListener",
			"signature": "(Ljava/lang/String;Lnet/nexustools/jvm/webdocument/WebEventable$Listener;Z)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Ljava/lang/String;",
					"Lnet/nexustools/jvm/webdocument/WebEventable$Listener;",
					JVM.Types.BOOLEAN
				]
			},
			"implementation": "net/nexustools/jvm/webdocument/WebEventable.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "addEventListener",
			"signature": "(Ljava/lang/String;Lnet/nexustools/jvm/webdocument/WebEventable$Listener;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Ljava/lang/String;",
					"Lnet/nexustools/jvm/webdocument/WebEventable$Listener;"
				]
			},
			"implementation": [
				{
					"type": "label",
					"name": "L1631178652"
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
					"type": "var",
					"opcode": JVM.Opcodes.ALOAD,
					"index": "2"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.ICONST_0
				},
				{
					"type": "method",
					"opcode": JVM.Opcodes.INVOKEVIRTUAL,
					"owner": "net/nexustools/jvm/webdocument/WebEventable",
					"name": "addEventListener",
					"signature": {
						"raw": "(Ljava/lang/String;Lnet/nexustools/jvm/webdocument/WebEventable$Listener;Z)V",
						"return": JVM.Types.VOID,
						"args": [
							"Ljava/lang/String;",
							"Lnet/nexustools/jvm/webdocument/WebEventable$Listener;",
							JVM.Types.BOOLEAN
						]
					},
					"interface": false
				},
				{
					"type": "label",
					"name": "L443366562"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.RETURN
				},
				{
					"type": "label",
					"name": "L2041036091"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/jvm/webdocument/WebEventable;",
					"index": "0",
					"start": "L1631178652",
					"end": "L2041036091"
				},
				{
					"type": "declare",
					"name": "event",
					"signature": "Ljava/lang/String;",
					"index": "1",
					"start": "L1631178652",
					"end": "L2041036091"
				},
				{
					"type": "declare",
					"name": "listener",
					"signature": "Lnet/nexustools/jvm/webdocument/WebEventable$Listener;",
					"index": "2",
					"start": "L1631178652",
					"end": "L2041036091"
				},
				{
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "removeEventListener",
			"signature": "(Ljava/lang/String;Lnet/nexustools/jvm/webdocument/WebEventable$Listener;Z)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Ljava/lang/String;",
					"Lnet/nexustools/jvm/webdocument/WebEventable$Listener;",
					JVM.Types.BOOLEAN
				]
			},
			"implementation": "net/nexustools/jvm/webdocument/WebEventable.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "removeEventListener",
			"signature": "(Ljava/lang/String;Lnet/nexustools/jvm/webdocument/WebEventable$Listener;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Ljava/lang/String;",
					"Lnet/nexustools/jvm/webdocument/WebEventable$Listener;"
				]
			},
			"implementation": [
				{
					"type": "label",
					"name": "L1937287906"
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
					"type": "var",
					"opcode": JVM.Opcodes.ALOAD,
					"index": "2"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.ICONST_0
				},
				{
					"type": "method",
					"opcode": JVM.Opcodes.INVOKEVIRTUAL,
					"owner": "net/nexustools/jvm/webdocument/WebEventable",
					"name": "addEventListener",
					"signature": {
						"raw": "(Ljava/lang/String;Lnet/nexustools/jvm/webdocument/WebEventable$Listener;Z)V",
						"return": JVM.Types.VOID,
						"args": [
							"Ljava/lang/String;",
							"Lnet/nexustools/jvm/webdocument/WebEventable$Listener;",
							JVM.Types.BOOLEAN
						]
					},
					"interface": false
				},
				{
					"type": "label",
					"name": "L1998263975"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.RETURN
				},
				{
					"type": "label",
					"name": "L325872392"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/jvm/webdocument/WebEventable;",
					"index": "0",
					"start": "L1937287906",
					"end": "L325872392"
				},
				{
					"type": "declare",
					"name": "event",
					"signature": "Ljava/lang/String;",
					"index": "1",
					"start": "L1937287906",
					"end": "L325872392"
				},
				{
					"type": "declare",
					"name": "listener",
					"signature": "Lnet/nexustools/jvm/webdocument/WebEventable$Listener;",
					"index": "2",
					"start": "L1937287906",
					"end": "L325872392"
				},
				{
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "references",
			"value": [
				"java/lang/Object",
				"net/nexustools/jvm/webdocument/WebEventable",
				"java/lang/String",
				"net/nexustools/jvm/webdocument/WebEventable$Listener"
			]
		}
	]);
})($currentJVM, JVM);