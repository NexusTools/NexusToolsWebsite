(function JVM_net_nexustools_website_pages_ProjectGroup($JVM, JVM){
	$JVM.ClassLoader.defineClass("net/nexustools/website/pages/ProjectGroup", ["net/nexustools/website/PageHandler"], "java/lang/Object", [
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
					"name": "L1324002221"
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
					"name": "L279778133"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/website/pages/ProjectGroup;",
					"index": "0",
					"start": "L1324002221",
					"end": "L279778133"
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
			"name": "onReady",
			"signature": "(Ljava/lang/String;[Ljava/lang/String;Ljava/util/Map;Lnet/nexustools/jvm/webdocument/dom/WebElement;Ljava/lang/Runnable;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Ljava/lang/String;",
					"[Ljava/lang/String;",
					"Ljava/util/Map;",
					"Lnet/nexustools/jvm/webdocument/dom/WebElement;",
					"Ljava/lang/Runnable;"
				]
			},
			"implementation": [
				{
					"type": "label",
					"name": "L1389378048"
				},
				{
					"type": "var",
					"opcode": JVM.Opcodes.ALOAD,
					"index": "5"
				},
				{
					"type": "method",
					"opcode": JVM.Opcodes.INVOKEINTERFACE,
					"owner": "java/lang/Runnable",
					"name": "run",
					"signature": {
						"raw": "()V",
						"return": JVM.Types.VOID,
						"args": []
					},
					"interface": true
				},
				{
					"type": "label",
					"name": "L1687158905"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.RETURN
				},
				{
					"type": "label",
					"name": "L705641347"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/website/pages/ProjectGroup;",
					"index": "0",
					"start": "L1389378048",
					"end": "L705641347"
				},
				{
					"type": "declare",
					"name": "path",
					"signature": "Ljava/lang/String;",
					"index": "1",
					"start": "L1389378048",
					"end": "L705641347"
				},
				{
					"type": "declare",
					"name": "pathParams",
					"signature": "[Ljava/lang/String;",
					"index": "2",
					"start": "L1389378048",
					"end": "L705641347"
				},
				{
					"type": "declare",
					"name": "params",
					"signature": "Ljava/util/Map;",
					"index": "3",
					"start": "L1389378048",
					"end": "L705641347"
				},
				{
					"type": "declare",
					"name": "element",
					"signature": "Lnet/nexustools/jvm/webdocument/dom/WebElement;",
					"index": "4",
					"start": "L1389378048",
					"end": "L705641347"
				},
				{
					"type": "declare",
					"name": "complete",
					"signature": "Ljava/lang/Runnable;",
					"index": "5",
					"start": "L1389378048",
					"end": "L705641347"
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
			"name": "onLoad",
			"signature": "(Ljava/lang/String;[Ljava/lang/String;Ljava/util/Map;Lnet/nexustools/website/PageHandler$LoadCallback;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Ljava/lang/String;",
					"[Ljava/lang/String;",
					"Ljava/util/Map;",
					"Lnet/nexustools/website/PageHandler$LoadCallback;"
				]
			},
			"implementation": [
				{
					"type": "label",
					"name": "L1309420295"
				},
				{
					"type": "var",
					"opcode": JVM.Opcodes.ALOAD,
					"index": "4"
				},
				{
					"type": "method",
					"opcode": JVM.Opcodes.INVOKEINTERFACE,
					"owner": "net/nexustools/website/PageHandler$LoadCallback",
					"name": "ready",
					"signature": {
						"raw": "()V",
						"return": JVM.Types.VOID,
						"args": []
					},
					"interface": true
				},
				{
					"type": "label",
					"name": "L14483609"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.RETURN
				},
				{
					"type": "label",
					"name": "L760364352"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/website/pages/ProjectGroup;",
					"index": "0",
					"start": "L1309420295",
					"end": "L760364352"
				},
				{
					"type": "declare",
					"name": "path",
					"signature": "Ljava/lang/String;",
					"index": "1",
					"start": "L1309420295",
					"end": "L760364352"
				},
				{
					"type": "declare",
					"name": "pathParams",
					"signature": "[Ljava/lang/String;",
					"index": "2",
					"start": "L1309420295",
					"end": "L760364352"
				},
				{
					"type": "declare",
					"name": "params",
					"signature": "Ljava/util/Map;",
					"index": "3",
					"start": "L1309420295",
					"end": "L760364352"
				},
				{
					"type": "declare",
					"name": "callback",
					"signature": "Lnet/nexustools/website/PageHandler$LoadCallback;",
					"index": "4",
					"start": "L1309420295",
					"end": "L760364352"
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
			"name": "onUnload",
			"signature": "(Ljava/lang/Runnable;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Ljava/lang/Runnable;"
				]
			},
			"implementation": [
				{
					"type": "label",
					"name": "L1915964414"
				},
				{
					"type": "var",
					"opcode": JVM.Opcodes.ALOAD,
					"index": "1"
				},
				{
					"type": "method",
					"opcode": JVM.Opcodes.INVOKEINTERFACE,
					"owner": "java/lang/Runnable",
					"name": "run",
					"signature": {
						"raw": "()V",
						"return": JVM.Types.VOID,
						"args": []
					},
					"interface": true
				},
				{
					"type": "label",
					"name": "L96619333"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.RETURN
				},
				{
					"type": "label",
					"name": "L383492599"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/website/pages/ProjectGroup;",
					"index": "0",
					"start": "L1915964414",
					"end": "L383492599"
				},
				{
					"type": "declare",
					"name": "complete",
					"signature": "Ljava/lang/Runnable;",
					"index": "1",
					"start": "L1915964414",
					"end": "L383492599"
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
				"net/nexustools/website/PageHandler",
				"java/lang/Object",
				"net/nexustools/website/pages/ProjectGroup",
				"java/lang/String",
				"java/util/Map",
				"net/nexustools/jvm/webdocument/dom/WebElement",
				"java/lang/Runnable",
				"net/nexustools/website/PageHandler$LoadCallback"
			]
		}
	]);
})($currentJVM, JVM);