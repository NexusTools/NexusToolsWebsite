(function(JVM) {
    JVM.RegisterBuiltIn("java/lang/UnsatisfiedLinkError", {
        '$impl': {
            '<init>$()V': function() {
                $.jclass.$super.$impl['<init>$()V'].call(this);
            },
            '<init>$(Ljava/lang/String;)V': function($, msg) {
                $.jclass.$super.$impl['<init>$(Ljava/lang/String;)V'].call(this, msg);
            }
        },
        '$super': 'java/lang/LinkageError'
    });
})(JVM);