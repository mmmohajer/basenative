npm install

Copy .env.sample.js => .env.js

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

<AppView isFullHeight={BOOLEAN} isFullWidth={BOOLEAN} direction={row|col|row-reverse|col-reverse} heightInPercentage={0|1|2|...|100} widthInPercentage={0|1|2|...|100} heightInSize={0|1|2|...|500} widthInSize={0|1|2|...|500} brThickness={0|1|2|...|100} brThicknessL={0|1|2|...|100} brThicknessT={0|1|2|...|100} brThicknessR={0|1|2|...|100} brThicknessB={0|1|2|...|100} brColor={red|yellow|themeOne|...} brColorL={red|yellow|themeOne|...} brColoT={red|yellow|themeOne|...} brColorR={red|yellow|themeOne|...} brColorB={red|yellow|themeOne|...} brRad={0|1|2|...|500} brRadTL={0|1|2|...|500} brRadTR={0|1|2|...|500} brRadBR={0|1|2|...|500} brRadBL={0|1|2|...|500} brRadPer={0|1|2|...|100} brRadTLPer={0|1|2|...|100} brRadTRPer={0|1|2|...|100} brRadBRPer={0|1|2|...|100} brRadBRPer={0|1|2|...|100} padding={0|1|2|...|500} paddingL={0|1|2|...|500} paddingT={0|1|2|...|500} paddingR={0|1|2|...|500} paddingB={0|1|2|...|500} margin={0|1|2|...|500} marginL={0|1|2|...|500} marginT={0|1|2|...|500} marginR={0|1|2|...|500} marginB={0|1|2|...|500} isCentralizedInX1Dir={BOOLEAN} isCentralizedInX2Dir={BOOLEAN} isDistributedBetweenInX1Dir={BOOLEAN} isDistributedBetweenInX2Dir={BOOLEAN} isDistributedAroundInX1Dir={BOOLEAN} isDistributedAroundInX2Dir={BOOLEAN} isReversedInX1Dir={BOOLEAN} isReversedInX2Dir={BOOLEAN} bgColor={red|green|themeOne|...} flex_wrap={BOOLEAN} flex_wrap_reverse={BOOLEAN} zIndex={0|1|2|...|100} opacity={0|1|2|...|100} style={{ ...styles.shType1, ...styles.sh50, ...localStyles.test }}></AppView>

<AppText isBold={BOOLEAN} color={red|green|themeOne|...} isCenterAlign={BOOLEAN} isItalic={BOOLEAN} isCapitalize={BOOLEAN} lineHeight={0|1|2|...} textAlign={left|right|center} fontFamily={Poppins|...} fontSize={0|1|2|...} fontWeight={100|200|...} textTransform={upperCase|lowerCase|...}></AppText>
