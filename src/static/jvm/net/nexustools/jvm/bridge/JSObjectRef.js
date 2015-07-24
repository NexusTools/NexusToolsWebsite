(function JVM_net_nexustools_jvm_bridge_JSObjectRef($JVM, JVM){
	$JVM.ClassLoader.defineClass("net/nexustools/jvm/bridge/JSObjectRef", [], "java/lang/Object", [
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
					"name": "L920188392"
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
					"name": "L1576562297"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/jvm/bridge/JSObjectRef;",
					"index": "0",
					"start": "L920188392",
					"end": "L1576562297"
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
			"name": "<init>",
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
					"name": "L1629288993"
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
					"name": "L896122454"
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
					"type": "method",
					"opcode": JVM.Opcodes.INVOKEVIRTUAL,
					"owner": "net/nexustools/jvm/bridge/JSObjectRef",
					"name": "set",
					"signature": {
						"raw": "(Ljava/lang/Runnable;)V",
						"return": JVM.Types.VOID,
						"args": [
							"Ljava/lang/Runnable;"
						]
					},
					"interface": false
				},
				{
					"type": "label",
					"name": "L827267967"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.RETURN
				},
				{
					"type": "label",
					"name": "L1083590691"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/jvm/bridge/JSObjectRef;",
					"index": "0",
					"start": "L1629288993",
					"end": "L1083590691"
				},
				{
					"type": "declare",
					"name": "value",
					"signature": "Ljava/lang/Runnable;",
					"index": "1",
					"start": "L1629288993",
					"end": "L1083590691"
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
			"name": "<init>",
			"signature": "(Lnet/nexustools/jvm/bridge/JSInvokable;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Lnet/nexustools/jvm/bridge/JSInvokable;"
				]
			},
			"implementation": [
				{
					"type": "label",
					"name": "L1247417077"
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
					"name": "L1603451125"
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
					"type": "method",
					"opcode": JVM.Opcodes.INVOKEVIRTUAL,
					"owner": "net/nexustools/jvm/bridge/JSObjectRef",
					"name": "set",
					"signature": {
						"raw": "(Lnet/nexustools/jvm/bridge/JSInvokable;)V",
						"return": JVM.Types.VOID,
						"args": [
							"Lnet/nexustools/jvm/bridge/JSInvokable;"
						]
					},
					"interface": false
				},
				{
					"type": "label",
					"name": "L430771672"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.RETURN
				},
				{
					"type": "label",
					"name": "L812117267"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/jvm/bridge/JSObjectRef;",
					"index": "0",
					"start": "L1247417077",
					"end": "L812117267"
				},
				{
					"type": "declare",
					"name": "value",
					"signature": "Lnet/nexustools/jvm/bridge/JSInvokable;",
					"index": "1",
					"start": "L1247417077",
					"end": "L812117267"
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
			"name": "<init>",
			"signature": "(Ljava/lang/String;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Ljava/lang/String;"
				]
			},
			"implementation": [
				{
					"type": "label",
					"name": "L1996329784"
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
					"name": "L30178960"
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
					"type": "method",
					"opcode": JVM.Opcodes.INVOKEVIRTUAL,
					"owner": "net/nexustools/jvm/bridge/JSObjectRef",
					"name": "set",
					"signature": {
						"raw": "(Ljava/lang/String;)V",
						"return": JVM.Types.VOID,
						"args": [
							"Ljava/lang/String;"
						]
					},
					"interface": false
				},
				{
					"type": "label",
					"name": "L411640028"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.RETURN
				},
				{
					"type": "label",
					"name": "L1389123609"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/jvm/bridge/JSObjectRef;",
					"index": "0",
					"start": "L1996329784",
					"end": "L1389123609"
				},
				{
					"type": "declare",
					"name": "value",
					"signature": "Ljava/lang/String;",
					"index": "1",
					"start": "L1996329784",
					"end": "L1389123609"
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
			"name": "<init>",
			"signature": "(Z)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					JVM.Types.BOOLEAN
				]
			},
			"implementation": [
				{
					"type": "label",
					"name": "L1705769926"
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
					"name": "L2115942479"
				},
				{
					"type": "var",
					"opcode": JVM.Opcodes.ALOAD,
					"index": "0"
				},
				{
					"type": "var",
					"opcode": JVM.Opcodes.ILOAD,
					"index": "1"
				},
				{
					"type": "method",
					"opcode": JVM.Opcodes.INVOKEVIRTUAL,
					"owner": "net/nexustools/jvm/bridge/JSObjectRef",
					"name": "set",
					"signature": {
						"raw": "(Z)V",
						"return": JVM.Types.VOID,
						"args": [
							JVM.Types.BOOLEAN
						]
					},
					"interface": false
				},
				{
					"type": "label",
					"name": "L316050233"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.RETURN
				},
				{
					"type": "label",
					"name": "L1129207000"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/jvm/bridge/JSObjectRef;",
					"index": "0",
					"start": "L1705769926",
					"end": "L1129207000"
				},
				{
					"type": "declare",
					"name": "value",
					"signature": JVM.Types.BOOLEAN,
					"index": "1",
					"start": "L1705769926",
					"end": "L1129207000"
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
			"name": "<init>",
			"signature": "(D)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					JVM.Types.DOUBLE
				]
			},
			"implementation": [
				{
					"type": "label",
					"name": "L1269060461"
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
					"name": "L291586023"
				},
				{
					"type": "var",
					"opcode": JVM.Opcodes.ALOAD,
					"index": "0"
				},
				{
					"type": "var",
					"opcode": JVM.Opcodes.DLOAD,
					"index": "1"
				},
				{
					"type": "method",
					"opcode": JVM.Opcodes.INVOKEVIRTUAL,
					"owner": "net/nexustools/jvm/bridge/JSObjectRef",
					"name": "set",
					"signature": {
						"raw": "(D)V",
						"return": JVM.Types.VOID,
						"args": [
							JVM.Types.DOUBLE
						]
					},
					"interface": false
				},
				{
					"type": "label",
					"name": "L128606107"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.RETURN
				},
				{
					"type": "label",
					"name": "L1114291467"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/jvm/bridge/JSObjectRef;",
					"index": "0",
					"start": "L1269060461",
					"end": "L1114291467"
				},
				{
					"type": "declare",
					"name": "value",
					"signature": JVM.Types.DOUBLE,
					"index": "1",
					"start": "L1269060461",
					"end": "L1114291467"
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
			"name": "setNewArray",
			"signature": "()V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": []
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "setNewObject",
			"signature": "()V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": []
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "setUndefined",
			"signature": "()V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": []
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "setNull",
			"signature": "()V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": []
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "set",
			"signature": "(Ljava/lang/String;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Ljava/lang/String;"
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "set",
			"signature": "(Ljava/lang/Runnable;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Ljava/lang/Runnable;"
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "set",
			"signature": "(Lnet/nexustools/jvm/bridge/JSInvokable;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Lnet/nexustools/jvm/bridge/JSInvokable;"
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "set",
			"signature": "(Z)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					JVM.Types.BOOLEAN
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "set",
			"signature": "(D)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					JVM.Types.DOUBLE
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "isString",
			"signature": "()Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": []
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "isObject",
			"signature": "()Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": []
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "isArray",
			"signature": "()Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": []
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "isBoolean",
			"signature": "()Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": []
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "isNumeric",
			"signature": "()Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": []
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "isUndefined",
			"signature": "()Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": []
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "isFunction",
			"signature": "()Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": []
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "isFalse",
			"signature": "()Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": []
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "isTrue",
			"signature": "()Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": []
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "isNull",
			"signature": "()Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": []
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "isNaN",
			"signature": "()Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": []
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "getKeys",
			"signature": "()[Ljava/lang/String;",
			"sigparts": {
				"return": "[Ljava/lang/String;",
				"args": []
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "contains",
			"signature": "(Ljava/lang/String;)Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": [
					"Ljava/lang/String;"
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "get",
			"signature": "(Ljava/lang/String;)Lnet/nexustools/jvm/bridge/JSObjectRef;",
			"sigparts": {
				"return": "Lnet/nexustools/jvm/bridge/JSObjectRef;",
				"args": [
					"Ljava/lang/String;"
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "getNumber",
			"signature": "(Ljava/lang/String;)D",
			"sigparts": {
				"return": JVM.Types.DOUBLE,
				"args": [
					"Ljava/lang/String;"
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "getString",
			"signature": "(Ljava/lang/String;)Ljava/lang/String;",
			"sigparts": {
				"return": "Ljava/lang/String;",
				"args": [
					"Ljava/lang/String;"
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "getBoolean",
			"signature": "(Ljava/lang/String;)Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": [
					"Ljava/lang/String;"
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "set",
			"signature": "(Ljava/lang/String;Lnet/nexustools/jvm/bridge/JSObjectRef;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Ljava/lang/String;",
					"Lnet/nexustools/jvm/bridge/JSObjectRef;"
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "set",
			"signature": "(Ljava/lang/String;Ljava/lang/String;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Ljava/lang/String;",
					"Ljava/lang/String;"
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "set",
			"signature": "(Ljava/lang/String;D)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Ljava/lang/String;",
					JVM.Types.DOUBLE
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "set",
			"signature": "(Ljava/lang/String;Z)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					"Ljava/lang/String;",
					JVM.Types.BOOLEAN
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "get",
			"signature": "(I)Lnet/nexustools/jvm/bridge/JSObjectRef;",
			"sigparts": {
				"return": "Lnet/nexustools/jvm/bridge/JSObjectRef;",
				"args": [
					JVM.Types.INT
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "getString",
			"signature": "(I)Ljava/lang/String;",
			"sigparts": {
				"return": "Ljava/lang/String;",
				"args": [
					JVM.Types.INT
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "getBoolean",
			"signature": "(I)Ljava/lang/String;",
			"sigparts": {
				"return": "Ljava/lang/String;",
				"args": [
					JVM.Types.INT
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "getNumber",
			"signature": "(I)Ljava/lang/String;",
			"sigparts": {
				"return": "Ljava/lang/String;",
				"args": [
					JVM.Types.INT
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "length",
			"signature": "()I",
			"sigparts": {
				"return": JVM.Types.INT,
				"args": []
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "invoke",
			"signature": "([Lnet/nexustools/jvm/bridge/JSObjectRef;)Lnet/nexustools/jvm/bridge/JSObjectRef;",
			"sigparts": {
				"return": "Lnet/nexustools/jvm/bridge/JSObjectRef;",
				"args": [
					"[Lnet/nexustools/jvm/bridge/JSObjectRef;"
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.VARARGS,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "invokeNew",
			"signature": "([Lnet/nexustools/jvm/bridge/JSObjectRef;)Lnet/nexustools/jvm/bridge/JSObjectRef;",
			"sigparts": {
				"return": "Lnet/nexustools/jvm/bridge/JSObjectRef;",
				"args": [
					"[Lnet/nexustools/jvm/bridge/JSObjectRef;"
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.VARARGS,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "toNumber",
			"signature": "()D",
			"sigparts": {
				"return": JVM.Types.DOUBLE,
				"args": []
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "equals",
			"signature": "(Lnet/nexustools/jvm/bridge/JSObjectRef;)Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": [
					"Lnet/nexustools/jvm/bridge/JSObjectRef;"
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "exactly",
			"signature": "(Lnet/nexustools/jvm/bridge/JSObjectRef;)Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": [
					"Lnet/nexustools/jvm/bridge/JSObjectRef;"
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "wrapList",
			"signature": "()Ljava/util/List;",
			"sigparts": {
				"return": "Ljava/util/List;",
				"args": []
			},
			"implementation": [
				{
					"type": "label",
					"name": "L1839284029"
				},
				{
					"type": "type",
					"opcode": JVM.Opcodes.NEW,
					"signature": "java/lang/UnsupportedOperationException"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.DUP
				},
				{
					"type": "ldc",
					"stringValue": "Not implemented yet."
				},
				{
					"type": "method",
					"opcode": JVM.Opcodes.INVOKESPECIAL,
					"owner": "java/lang/UnsupportedOperationException",
					"name": "<init>",
					"signature": {
						"raw": "(Ljava/lang/String;)V",
						"return": JVM.Types.VOID,
						"args": [
							"Ljava/lang/String;"
						]
					},
					"interface": false
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.ATHROW
				},
				{
					"type": "label",
					"name": "L1967060485"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/jvm/bridge/JSObjectRef;",
					"index": "0",
					"start": "L1839284029",
					"end": "L1967060485"
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
			"name": "wrapMap",
			"signature": "()Ljava/util/Map;",
			"sigparts": {
				"return": "Ljava/util/Map;",
				"args": []
			},
			"implementation": [
				{
					"type": "label",
					"name": "L2022309477"
				},
				{
					"type": "type",
					"opcode": JVM.Opcodes.NEW,
					"signature": "java/lang/UnsupportedOperationException"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.DUP
				},
				{
					"type": "ldc",
					"stringValue": "Not implemented yet."
				},
				{
					"type": "method",
					"opcode": JVM.Opcodes.INVOKESPECIAL,
					"owner": "java/lang/UnsupportedOperationException",
					"name": "<init>",
					"signature": {
						"raw": "(Ljava/lang/String;)V",
						"return": JVM.Types.VOID,
						"args": [
							"Ljava/lang/String;"
						]
					},
					"interface": false
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.ATHROW
				},
				{
					"type": "label",
					"name": "L731698870"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/jvm/bridge/JSObjectRef;",
					"index": "0",
					"start": "L2022309477",
					"end": "L731698870"
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
			"name": "wrapInvoke",
			"signature": "()Ljava/lang/Runnable;",
			"sigparts": {
				"return": "Ljava/lang/Runnable;",
				"args": []
			},
			"implementation": [
				{
					"type": "label",
					"name": "L1171545368"
				},
				{
					"type": "type",
					"opcode": JVM.Opcodes.NEW,
					"signature": "net/nexustools/jvm/bridge/JSObjectRef$1"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.DUP
				},
				{
					"type": "var",
					"opcode": JVM.Opcodes.ALOAD,
					"index": "0"
				},
				{
					"type": "method",
					"opcode": JVM.Opcodes.INVOKESPECIAL,
					"owner": "net/nexustools/jvm/bridge/JSObjectRef$1",
					"name": "<init>",
					"signature": {
						"raw": "(Lnet/nexustools/jvm/bridge/JSObjectRef;)V",
						"return": JVM.Types.VOID,
						"args": [
							"Lnet/nexustools/jvm/bridge/JSObjectRef;"
						]
					},
					"interface": false
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.ARETURN
				},
				{
					"type": "label",
					"name": "L2032924280"
				},
				{
					"type": "declare",
					"name": "this",
					"signature": "Lnet/nexustools/jvm/bridge/JSObjectRef;",
					"index": "0",
					"start": "L1171545368",
					"end": "L2032924280"
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
			"name": "toString",
			"signature": "()Ljava/lang/String;",
			"sigparts": {
				"return": "Ljava/lang/String;",
				"args": []
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.FINAL,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "getGlobal",
			"signature": "(Ljava/lang/String;)Lnet/nexustools/jvm/bridge/JSObjectRef;",
			"sigparts": {
				"return": "Lnet/nexustools/jvm/bridge/JSObjectRef;",
				"args": [
					"Ljava/lang/String;"
				]
			},
			"implementation": "net/nexustools/jvm/bridge/JSObjectRef.native.js",
			"access": [
				JVM.Flags.STATIC,
				JVM.Flags.NATIVE,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "method",
			"name": "valueOf",
			"signature": "(Ljava/util/Map;)Lnet/nexustools/jvm/bridge/JSObjectRef;",
			"sigparts": {
				"return": "Lnet/nexustools/jvm/bridge/JSObjectRef;",
				"args": [
					"Ljava/util/Map;"
				]
			},
			"implementation": [
				{
					"type": "label",
					"name": "L893550190"
				},
				{
					"type": "type",
					"opcode": JVM.Opcodes.NEW,
					"signature": "java/lang/UnsupportedOperationException"
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.DUP
				},
				{
					"type": "ldc",
					"stringValue": "Not implemented yet."
				},
				{
					"type": "method",
					"opcode": JVM.Opcodes.INVOKESPECIAL,
					"owner": "java/lang/UnsupportedOperationException",
					"name": "<init>",
					"signature": {
						"raw": "(Ljava/lang/String;)V",
						"return": JVM.Types.VOID,
						"args": [
							"Ljava/lang/String;"
						]
					},
					"interface": false
				},
				{
					"type": "insn",
					"opcode": JVM.Opcodes.ATHROW
				},
				{
					"type": "label",
					"name": "L544899859"
				},
				{
					"type": "declare",
					"name": "map",
					"signature": "Ljava/util/Map;",
					"index": "0",
					"start": "L893550190",
					"end": "L544899859"
				},
				{
					"type": "end"
				}
			],
			"access": [
				JVM.Flags.STATIC,
				JVM.Flags.PUBLIC
			]
		},
		{
			"type": "references",
			"value": [
				"java/lang/Object",
				"net/nexustools/jvm/bridge/JSObjectRef",
				"java/lang/Runnable",
				"net/nexustools/jvm/bridge/JSInvokable",
				"java/lang/String",
				"java/util/List",
				"java/lang/UnsupportedOperationException",
				"java/util/Map",
				"net/nexustools/jvm/bridge/JSObjectRef$1"
			]
		}
	]);
})($currentJVM, JVM);