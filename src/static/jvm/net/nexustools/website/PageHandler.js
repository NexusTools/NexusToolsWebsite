(function JVM_net_nexustools_website_PageHandler($JVM, JVM){
	$JVM.ClassLoader.defineClass("net/nexustools/website/PageHandler", [], "java/lang/Object", [
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
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.ABSTRACT,
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
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.ABSTRACT,
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
				"java/lang/String",
				"java/util/Map",
				"net/nexustools/website/PageHandler$LoadCallback",
				"net/nexustools/jvm/webdocument/dom/WebElement",
				"java/lang/Runnable"
			]
		}
	]);
})($currentJVM, JVM);