# Rose not Rose


## How to start

This guide will help you put your project on ***Google Play*** and ***App Store***

### Building Standalone Apps

### Install Expo CL
Expo CLI is the tool for developing and building Expo apps. Run `npm install -g expo-cli` (or `yarn global add expo-cli`) to get it.
If you haven't created an Expo account before, you'll be asked to create one when running the build command.
### Start the build
Run `expo build:android` or `expo build:ios`. If you don't already have a development server running for this project, expo will start one for you.

### Loading apps in the Apple App Store and Google Play

1. ### Start the upload
To upload the previously built standalone app to the appropriate app store, you simply run `eas submit -p android` or `eas submit -p`  ios. However, you have a few options for choosing which app binary you want to upload (remember to choose one at the time):
* --latest  - uploads the latest build for the given platform found on Expo Servers
* --url<url> - uploads a build from given URL
* --path <path> - uploads a build from the local file system
* --id <id> - uploads a build with the given ID

2. ### If you choose to upload your Android app to Google Play
   #### Important:
You have to create a Google Service Account and download its JSON private key.
After that, you'll have to create an app on [Google Play Console](https://play.google.com/console/u/0/signup) and upload your app manually at least once. 
#### Creating a Google Service Account
See [expo.fyi/creating-google-service-account](https://github.com/expo/fyi/blob/main/creating-google-service-account.md) to learn more.
#### Manually uploading your app for the first time
Before using `eas submit -p android` for uploading your standalone app builds, you have to upload your app manually at least once.
See [expo.fyi/first-android-submission](https://github.com/expo/fyi/blob/main/first-android-submission.md) to learn more.
#### Using EAS CLI to upload the further builds of your app
After these steps, you can make use of EAS CLI to upload your further app builds to Google Play.
To upload your Android app to Google Play, run `eas submit -p android`.
3. ###  If you choose to upload your iOS app to TestFlight
#### Using EAS CLI
To upload your iOS app to TestFlight, run `eas submit -p ios`
#### Manually uploading your app (without EAS CLI)
`This approach only works on macOS. If you don't have access to a macOS device, use EAS Submit.`
#### Creating an app on App Store Connect
Start by creating an app profile in App Store Connect, if you haven't already:
1. Go to https://appstoreconnect.apple.com/apps and sign in. Make sure you've accepted the terms.
2. Click the blue plus button by the Apps header, then click "New App".
3. Add your app's name, language, bundle identifier, and SKU (this isn't seen by end users, it can be any unique string. A common choice is your app's bundle ID, then something like "_1", e.g. "com.exampleco.appname_1").
4. Click create. If it succeeds, then you've created your application record and you can proceed to .
#### Uploading with Transporter
In order to see your app on Testflight, you will first need to submit your build to Apple using Transporter (previously known as Application Loader), available on the App Store ([link](https://apps.apple.com/app/transporter/id1450874784)). In order to do this:
1. Make sure you have logged into App Store Connect with your Apple ID and accepted any terms and agreements.
2. Download Transporter from the [App Store](https://apps.apple.com/app/transporter/id1450874784).
3. Sign in with your Apple ID.
4. Add the build either by dragging th file directly to the Transporter window or by selecting it from the file dialog opened with + or Add App button.
5. Submit it by clicking the Deliver button
This process can take a few minutes. After this process is complete, you can check the status of your app submission to TestFlight in [App Store Connect](https://appstoreconnect.apple.com/login):
1. Login to https://appstoreconnect.apple.com with your Apple ID and regular password (NOT your app specific password)
2. Select 'My Apps' and you should see your app listed.
3. Click 'TestFlight' from the menu bar at the top.
4. This will show your current app builds that are available for testing.
5. In order to test the app on your device, you will need to install the TestFlight iOS app from the App Store, and sign in using your Apple ID.