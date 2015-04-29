set JAVA_HOME=C:\Alfresco\java
set JRE_HOME=%JAVA_HOME%
set JAVA_OPTS=++JvmOptions="-XX:+DisableExplicitGC" ++JvmOptions="-XX:+UseConcMarkSweepGC" ++JvmOptions="-XX:+UseParNewGC" ++JvmOptions="-XX:ReservedCodeCacheSize=128m" ++JvmOptions="-Dalfresco.home=C:\Alfresco" ++JvmOptions="-Dcom.sun.management.jmxremote" --JvmMs 512 --JvmMx 3564 %JAVA_OPTS%
