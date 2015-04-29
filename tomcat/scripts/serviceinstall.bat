@echo off
rem -- Check if argument is INSTALL or REMOVE

set "JAVA_HOME=C:\Alfresco\java"
set "CATALINA_HOME=C:\Alfresco\tomcat"
cd "C:\Alfresco\tomcat\bin\"

if not ""%1"" == ""INSTALL"" goto remove

call setenv.bat
set PR_STDOUTPUT=auto
set PR_STDERROR=auto
call "C:\Alfresco\tomcat\bin\service.bat" install alfrescoTomcatnum2

set ACTION=START
rem -- Check if 2th argument is STOP
if ""%2"" == ""STOP"" (
   set ACTION=STOP
   shift  
)

rem -- Check if a 2th argument exists
if not ""%2""=="" goto checkUserPass
goto startService 


:checkUserPass
rem -- Check if there is a password argument

if not ""%3""=="" goto changeAccount
echo If you specify an user account, but not a password, it is understood the password is empty
goto changeAccount2


:changeAccount
rem -- Set a different account owner for the service

set TCUSER=%2
rem -- If this is a local user, make sure it has the .\ prefix
echo %TCUSER% | findstr /R "[\\|@]" >NUL
if %errorlevel%==1 set TCUSER=.\%TCUSER%

set TCPASSWORD=%3

sc config alfrescoTomcatnum2 obj= %TCUSER% password= %TCPASSWORD%
goto startService


:changeAccount2
rem -- Set a different account owner for the service (users without password)

set TCUSER=%2
rem -- If this is a local user, make sure it has the .\ prefix
echo %TCUSER% | findstr /R "[\\|@]" >NUL
if %errorlevel%==1 set TCUSER=.\%TCUSER%



sc config alfrescoTomcatnum2 obj= %TCUSER% password= ""
goto startService


:startService
if ""%ACTION%"" == ""STOP"" goto end 
rem -- Start the service

ping 127.0.0.1 -n 3 >NUL
net start alfrescoTomcatnum2 >NUL
goto end

:remove
rem -- STOP SERVICES BEFORE REMOVING
net stop alfrescoTomcatnum2 >NUL
call "C:\Alfresco\tomcat\bin\service.bat" remove alfrescoTomcatnum2

:end
exit
