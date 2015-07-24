/*
 * The MIT License (MIT)
 * 
 * Copyright (c) 2015 NexusTools
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package net.nexustools.website;

import com.google.gson.Gson;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import net.nexustools.jvm.bridge.JSConsole;
import net.nexustools.jvm.compiler.ClassCompiler;
import net.nexustools.jvm.compiler.Config;
import net.nexustools.jvm.webdocument.dom.WebElement;
import net.nexustools.website.pages.Index;
import net.nexustools.website.pages.ProjectGroup;

/**
 *
 * @author kate
 */
public class Compile {
    public static final Class[] PAGE_HANDLERS = new Class[]{
        Index.class,
        ProjectGroup.class
    };
    
    public static final class PageInfo {
        String path;
        String[] params;
        int type;
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws ClassNotFoundException, IOException {
        final Config config = new Config();
        
        System.out.println("Scanning classpath...");
        
        URL url = JSConsole.class.getProtectionDomain().getCodeSource().getLocation();
        if(!url.getProtocol().equals("file"))
            throw new RuntimeException("Cannot resolve directory for JSConsole");
        config.runtimeDirectoryJava = url.getPath();
        System.out.println(config.runtimeDirectoryJava);
        
        File file = new File(config.runtimeDirectoryJava);
        config.runtimeDirectoryJS = new File(file.getParentFile().getParentFile().getParentFile(), "JS").getAbsolutePath();
        System.out.println(config.runtimeDirectoryJS);
        
        url = WebElement.class.getProtectionDomain().getCodeSource().getLocation();
        if(!url.getProtocol().equals("file"))
            throw new RuntimeException("Cannot resolve directory for WebElement");
        config.additionalClassDirectories = new String[]{url.getPath()};
        System.out.println(Arrays.toString(config.additionalClassDirectories));
        
        url = Compile.class.getProtectionDomain().getCodeSource().getLocation();
        if(!url.getProtocol().equals("file"))
            throw new RuntimeException("Cannot resolve directory for myself");
        config.projectDirectory = url.getPath();
        System.out.println(config.projectDirectory);
        
        file = new File(config.projectDirectory);
        
        File staticDir = new File(file.getParentFile().getParentFile().getParentFile().getParentFile(), "static");
        config.outputDirectory = new File(staticDir, "jvm").getAbsolutePath();
        System.out.println(config.outputDirectory);
        
        List<String> toCompile = new ArrayList();
        toCompile.add(PageSystem.class.getName());
        
        for(Class clazz : PAGE_HANDLERS)
            toCompile.add(clazz.getName());
        
        config.additionalClasses = toCompile.toArray(new String[toCompile.size()]);
        
        ClassCompiler compiler = new ClassCompiler(config, new ClassCompiler.ProgressListener() {
            @Override
            public void onProgress(float percent) {}

            @Override
            public void onMessage(String message) {
                System.out.println("[Compiler] " + message);
            }
        });
        compiler.createOutputDirectory();
        compiler.compile();
        List<String> libs = compiler.copyLibraries();
        System.out.println(libs);
        
        File configDirectory = new File(staticDir, "config");
        if(!configDirectory.isDirectory() && !configDirectory.mkdir())
            throw new RuntimeException("Cannot create config directory: " + configDirectory);
        
        Gson gson = new Gson();
        try (FileWriter writer = new FileWriter(new File(configDirectory, "jvmlibs.json"))) {
            gson.toJson(libs, writer);
        }
        
        List<PageInfo> infos = new ArrayList();
        for(Class clazz : PAGE_HANDLERS) {
            Page info = (Page) clazz.getAnnotation(Page.class);
            if(info == null)
                throw new RuntimeException(clazz.getName() + " is missing @Page");
            
            PageInfo newInfo = new PageInfo();
            newInfo.path = info.path();
            newInfo.params = info.params();
            newInfo.type = info.handlerType();
            infos.add(newInfo);
        }
        try (FileWriter writer = new FileWriter(new File(configDirectory, "pages.json"))) {
            gson.toJson(infos, writer);
        }
        
        libs = new ArrayList();
        List<String> builtIn = new ArrayList();
        builtIn.addAll(Arrays.asList(compiler.BUILT_IN));
        
        scanLibs(PageSystem.class.getName().replace('.', '/'), compiler.referenceMap, libs, builtIn);
        scanLibs(PageHandler.class.getName().replace('.', '/'), compiler.referenceMap, libs, builtIn);
        try (FileWriter writer = new FileWriter(new File(configDirectory, "pagelibs.json"))) {
            gson.toJson(libs, writer);
        }
        
        System.out.println(libs);
        builtIn.addAll(libs);
        
        final String pkg = Index.class.getPackage().getName().replace('.', '/') + '/';
        for(Map.Entry<String, ?> entry : compiler.referenceMap.entrySet()) {
            if(entry.getKey().startsWith(pkg)) {
                String className = entry.getKey().substring(pkg.length());
                if(className.contains("/") || className.contains("$"))
                    continue;
                
                libs.clear();
                System.out.println(className);
                scanLibs(entry.getKey(), compiler.referenceMap, libs, builtIn);
                System.out.println(libs);
                
                try (FileWriter writer = new FileWriter(new File(config.outputDirectory, entry.getKey() + ".libs.json"))) {
                    gson.toJson(libs, writer);
                }
            }
        }
    }
    
    public static void scanLibs(String className, Map<String, List<String>> refMap, List<String> libs, List<String> builtIn) {
        if(builtIn.contains(className) || libs.contains(className) || className.startsWith("net/nexustools/jvm/runtime/"))
            return;
        
        libs.add(className);
        try {
            for(String dep : refMap.get(className))
                scanLibs(dep, refMap, libs, builtIn);
        } catch(NullPointerException ex) {}
    }
    
}
