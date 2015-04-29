@echo off
rem START or STOP Tomcat
rem ------------------------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop

set "JAVA_HOME=C:\Alfresco\java"
set "CATALINA_HOME=C:\Alfresco\tomcat"

net start "alfrescoTomcatnum2"

goto end

:stop
net stop "alfrescoTomcatnum2"

:end
exit
