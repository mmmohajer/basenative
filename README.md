npm install

Go to ios folder:
Remove Podfile.lock
pod deintegrate
pod install

Go to android/app folder:
keytool -genkeypair -v -keystore debug.keystore -alias androiddebugkey -storepass android -keypass android -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Android Debug,O=Android,C=US" -storetype JKS

Go to android folder:
Open the android device
adb uninstall com.app
./gradlew clean
./gradlew assembleDebug

Install icons: watch this video: https://www.youtube.com/watch?v=VKDkYe7gEMo
Or do the followings:
Open the project in xcode (right click on ios/app.xcworkspace on open with xcode)
Drag nodemodules/react-native-vector-icons/fonts under the project name =>
Select create Groups and check the app name

npx react-native start
