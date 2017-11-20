(function JVM_java_util_List($JVM, JVM){
	$JVM.ClassLoader.defineClass("java/util/List", ["java/util/Collection"], "java/lang/Object", [
		{
			"type": "method",
			"name": "size",
			"signature": "()I",
			"sigparts": {
				"return": JVM.Types.INT,
				"args": []
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
			"name": "isEmpty",
			"signature": "()Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": []
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
			"name": "contains",
			"signature": "(Ljava/lang/Object;)Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": [
					"Ljava/lang/Object;"
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
			"name": "iterator",
			"signature": "()Ljava/util/Iterator;",
			"sigparts": {
				"return": "Ljava/util/Iterator;",
				"args": []
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
			"name": "toArray",
			"signature": "()[Ljava/lang/Object;",
			"sigparts": {
				"return": "[Ljava/lang/Object;",
				"args": []
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
			"name": "toArray",
			"signature": "([Ljava/lang/Object;)[Ljava/lang/Object;",
			"sigparts": {
				"return": "[Ljava/lang/Object;",
				"args": [
					"[Ljava/lang/Object;"
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
			"name": "add",
			"signature": "(Ljava/lang/Object;)Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": [
					"Ljava/lang/Object;"
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
			"name": "remove",
			"signature": "(Ljava/lang/Object;)Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": [
					"Ljava/lang/Object;"
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
			"name": "containsAll",
			"signature": "(Ljava/util/Collection;)Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": [
					"Ljava/util/Collection;"
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
			"name": "addAll",
			"signature": "(Ljava/util/Collection;)Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": [
					"Ljava/util/Collection;"
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
			"name": "addAll",
			"signature": "(ILjava/util/Collection;)Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": [
					JVM.Types.INT,
					"Ljava/util/Collection;"
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
			"name": "removeAll",
			"signature": "(Ljava/util/Collection;)Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": [
					"Ljava/util/Collection;"
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
			"name": "retainAll",
			"signature": "(Ljava/util/Collection;)Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": [
					"Ljava/util/Collection;"
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
			"name": "clear",
			"signature": "()V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": []
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
			"name": "equals",
			"signature": "(Ljava/lang/Object;)Z",
			"sigparts": {
				"return": JVM.Types.BOOLEAN,
				"args": [
					"Ljava/lang/Object;"
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
			"name": "hashCode",
			"signature": "()I",
			"sigparts": {
				"return": JVM.Types.INT,
				"args": []
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
			"name": "get",
			"signature": "(I)Ljava/lang/Object;",
			"sigparts": {
				"return": "Ljava/lang/Object;",
				"args": [
					JVM.Types.INT
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
			"name": "set",
			"signature": "(ILjava/lang/Object;)Ljava/lang/Object;",
			"sigparts": {
				"return": "Ljava/lang/Object;",
				"args": [
					JVM.Types.INT,
					"Ljava/lang/Object;"
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
			"name": "add",
			"signature": "(ILjava/lang/Object;)V",
			"sigparts": {
				"return": JVM.Types.VOID,
				"args": [
					JVM.Types.INT,
					"Ljava/lang/Object;"
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
			"name": "remove",
			"signature": "(I)Ljava/lang/Object;",
			"sigparts": {
				"return": "Ljava/lang/Object;",
				"args": [
					JVM.Types.INT
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
			"name": "indexOf",
			"signature": "(Ljava/lang/Object;)I",
			"sigparts": {
				"return": JVM.Types.INT,
				"args": [
					"Ljava/lang/Object;"
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
			"name": "lastIndexOf",
			"signature": "(Ljava/lang/Object;)I",
			"sigparts": {
				"return": JVM.Types.INT,
				"args": [
					"Ljava/lang/Object;"
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
			"name": "listIterator",
			"signature": "()Ljava/util/ListIterator;",
			"sigparts": {
				"return": "Ljava/util/ListIterator;",
				"args": []
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
			"name": "listIterator",
			"signature": "(I)Ljava/util/ListIterator;",
			"sigparts": {
				"return": "Ljava/util/ListIterator;",
				"args": [
					JVM.Types.INT
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
			"name": "subList",
			"signature": "(II)Ljava/util/List;",
			"sigparts": {
				"return": "Ljava/util/List;",
				"args": [
					JVM.Types.INT,
					JVM.Types.INT
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
				"java/util/Collection",
				"java/lang/Object",
				"java/util/Iterator",
				"java/util/ListIterator",
				"java/util/List",
			]
		}
	]);
})($currentJVM, JVM);