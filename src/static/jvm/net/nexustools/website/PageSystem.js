(function JVM_net_nexustools_website_PageSystem($JVM, JVM){
	$JVM.ClassLoader.defineClass("net/nexustools/website/PageSystem", [], "java/lang/Object", [
		{
			"type": "field",
			"name": "GENERIC_HANDLER",
			"signature": JVM.Types.INT,
			"numericValue": 0,
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.STATIC,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "field",
			"name": "PAGE_HANDLER",
			"signature": JVM.Types.INT,
			"numericValue": 1,
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.STATIC,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "field",
			"name": "POPUP_HANDLER",
			"signature": JVM.Types.INT,
			"numericValue": 2,
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.STATIC,
				JVM.Flags.PUBLIC
			]
		},
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
					"name": "L74593862"
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
					"name": "L1716072433"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/website/PageSystem;",
					"index": "0",
					"start": "L74593862",
					"end": "L1716072433"
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
			"name": "navigate",
			"signature": "(Ljava/lang/String;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Ljava/lang/String;"
				]
			},
			"implementation": "net/nexustools/website/PageSystem.native.js",
			"access": [
				JVM.Flags.STATIC,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "references",
			"value": [
				"java/lang/Object",
				"net/nexustools/website/PageSystem",
				"java/lang/String"
			]
		}
	]);
})($currentJVM, JVM);