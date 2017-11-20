(function JVM_net_nexustools_website_pages_Index($JVM, JVM){
	$JVM.ClassLoader.defineClass("net/nexustools/website/pages/Index", [], "net/nexustools/website/BasicPageHandler", [
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
					"name": "L1519801940"
				},
				{
					"type": "var",
					"opcode": JVM.Opcodes.ALOAD,
					"index": "0"
				},
				{
					"type": "method",
					"opcode": JVM.Opcodes.INVOKESPECIAL,
					"owner": "net/nexustools/website/BasicPageHandler",
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
					"name": "L1173248822"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/website/pages/Index;",
					"index": "0",
					"start": "L1519801940",
					"end": "L1173248822"
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
				"net/nexustools/website/BasicPageHandler",
				"net/nexustools/website/pages/Index"
			]
		}
	]);
})($currentJVM, JVM);