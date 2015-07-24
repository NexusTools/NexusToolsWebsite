(function JVM_net_nexustools_website_BasicPageHandler($JVM, JVM){
	$JVM.ClassLoader.defineClass("net/nexustools/website/BasicPageHandler", ["net/nexustools/website/PageHandler"], "java/lang/Object", [
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
					"name": "L598104600"
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
					"name": "L2120544240"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/website/BasicPageHandler;",
					"index": "0",
					"start": "L598104600",
					"end": "L2120544240"
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
			"signature": "(Lnet/nexustools/jvm/webdocument/dom/WebElement;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Lnet/nexustools/jvm/webdocument/dom/WebElement;"
				]
			},
			"implementation": [
				{
					"type": "label",
					"name": "L348436068"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.RETURN
				},
				{
					"type": "label",
					"name": "L2124573154"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/website/BasicPageHandler;",
					"index": "0",
					"start": "L348436068",
					"end": "L2124573154"
				},
				{
					"type": "declare",
					"name": "element",
					"signature": "Lnet/nexustools/jvm/webdocument/dom/WebElement;",
					"index": "1",
					"start": "L348436068",
					"end": "L2124573154"
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
			"signature": "()V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": []
			},
			"implementation": [
				{
					"type": "label",
					"name": "L1490400609"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.RETURN
				},
				{
					"type": "label",
					"name": "L913776855"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/website/BasicPageHandler;",
					"index": "0",
					"start": "L1490400609",
					"end": "L913776855"
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
					"name": "L1192042288"
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
					"name": "L779791553"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.RETURN
				},
				{
					"type": "label",
					"name": "L2011417277"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/website/BasicPageHandler;",
					"index": "0",
					"start": "L1192042288",
					"end": "L2011417277"
				},
				{
					"type": "declare",
					"name": "path",
					"signature": "Ljava/lang/String;",
					"index": "1",
					"start": "L1192042288",
					"end": "L2011417277"
				},
				{
					"type": "declare",
					"name": "pathParams",
					"signature": "[Ljava/lang/String;",
					"index": "2",
					"start": "L1192042288",
					"end": "L2011417277"
				},
				{
					"type": "declare",
					"name": "params",
					"signature": "Ljava/util/Map;",
					"index": "3",
					"start": "L1192042288",
					"end": "L2011417277"
				},
				{
					"type": "declare",
					"name": "callback",
					"signature": "Lnet/nexustools/website/PageHandler$LoadCallback;",
					"index": "4",
					"start": "L1192042288",
					"end": "L2011417277"
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
					"name": "L202603465"
				},
				{
					"type": "var",
					"opcode": JVM.Opcodes.ALOAD,
					"index": "0"
				},
				{
					"type": "var",
					"opcode": JVM.Opcodes.ALOAD,
					"index": "4"
				},
				{
					"type": "method",
					"opcode": JVM.Opcodes.INVOKEVIRTUAL,
					"owner": "net/nexustools/website/BasicPageHandler",
					"name": "onReady",
					"signature": {
						"raw": "(Lnet/nexustools/jvm/webdocument/dom/WebElement;)V",
						"return": JVM.Types.VOID,
						"args": [
							"Lnet/nexustools/jvm/webdocument/dom/WebElement;"
						]
					},
					"interface": false
				},
				{
					"type": "label",
					"name": "L1394855760"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.RETURN
				},
				{
					"type": "label",
					"name": "L1409267668"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/website/BasicPageHandler;",
					"index": "0",
					"start": "L202603465",
					"end": "L1409267668"
				},
				{
					"type": "declare",
					"name": "path",
					"signature": "Ljava/lang/String;",
					"index": "1",
					"start": "L202603465",
					"end": "L1409267668"
				},
				{
					"type": "declare",
					"name": "pathParams",
					"signature": "[Ljava/lang/String;",
					"index": "2",
					"start": "L202603465",
					"end": "L1409267668"
				},
				{
					"type": "declare",
					"name": "params",
					"signature": "Ljava/util/Map;",
					"index": "3",
					"start": "L202603465",
					"end": "L1409267668"
				},
				{
					"type": "declare",
					"name": "element",
					"signature": "Lnet/nexustools/jvm/webdocument/dom/WebElement;",
					"index": "4",
					"start": "L202603465",
					"end": "L1409267668"
				},
				{
					"type": "declare",
					"name": "complete",
					"signature": "Ljava/lang/Runnable;",
					"index": "5",
					"start": "L202603465",
					"end": "L1409267668"
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
					"name": "L964553313"
				},
				{
					"type": "var",
					"opcode": JVM.Opcodes.ALOAD,
					"index": "0"
				},
				{
					"type": "method",
					"opcode": JVM.Opcodes.INVOKEVIRTUAL,
					"owner": "net/nexustools/website/BasicPageHandler",
					"name": "onUnload",
					"signature": {
						"raw": "()V",
						"return": JVM.Types.VOID,
						"args": []
					},
					"interface": false
				},
				{
					"type": "label",
					"name": "L2040964035"
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
					"name": "L726242714"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.RETURN
				},
				{
					"type": "label",
					"name": "L1811728297"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/website/BasicPageHandler;",
					"index": "0",
					"start": "L964553313",
					"end": "L1811728297"
				},
				{
					"type": "declare",
					"name": "complete",
					"signature": "Ljava/lang/Runnable;",
					"index": "1",
					"start": "L964553313",
					"end": "L1811728297"
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
				"net/nexustools/website/PageHandler",
				"java/lang/Object",
				"net/nexustools/website/BasicPageHandler",
				"net/nexustools/jvm/webdocument/dom/WebElement",
				"java/lang/String",
				"java/util/Map",
				"net/nexustools/website/PageHandler$LoadCallback",
				"java/lang/Runnable"
			]
		}
	]);
})($currentJVM, JVM);