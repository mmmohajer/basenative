npm install
Go to ios folder:
pod install
Go to android/app folder:
keytool -genkeypair -v -keystore debug.keystore -alias androiddebugkey -storepass android -keypass android -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Android Debug,O=Android,C=US" -storetype JKS
Go to android folder:
./gradlew clean
./gradlew assembleDebug

Open the project in xcode, and build it
npx react-native start
