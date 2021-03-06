##Travis CI-CD cycle explained
  1) We assume NO developer can commit directly to master
  
  2) So when a new development comes we will do it in a branch
  
  3) After pushing the branch and creating the PR, travis will jump
     over the commit and will try to make a build
     
  4) The build is controlled by .travis.yml file, it will try to 
     install the dependencies first (Karma, Node, Bower and so on)
     after that, he will do 'npm test', which will call our karma tests,
     if the tests pass he will generate a coverage report in lcov format
     using Istambul, and it will be sent to Code Climate, this whole
     process will be the CI
     
  5) After 4) we know our PR it's 'safe' to merge (assuming we had 100% 
     integration coverage and good e2e test), therefore we can go to 
     github and merge the PR to master, after doing this Travis will jump
     over the commit again, and try to build again, however this time, if
     the build it's ok and the test pass he will do a 'grunt build' to 
     minify static resources and he will deploy the resulting 'dist' folder
     to Firebase, this process is the CD
     
  6) After merging the PR into master another process get fired, this time
     code climate will jump over the commit to master and will run the quality
     code revision, if he finds some decrease in the quality, you can open a
     github issue with 1 click
     
  7) In case of disaster(which it's almost impossible if we assume we have 100%
     coverage and good e2e test) we can always go to Firebase website and undo
     the last release with 1 click
     
  NOTES) 1) Notice that the integration between code climate and github issues 
         must be done manually by you, after that you will be able to open an 
         issue with 1 click, here is how to: 
         http://docs.codeclimate.com/article/226-github-issues-integration
     
         2) Notice that we do not have e2e test yet, I will do this using 
         Protractor but I believe we will have to modify .travis.yml to make 
         it work, however after releasing v0.0.6 my only goal it's to reach 100% 
         coverage and add protractor test, so in the next weeks it will be ready 
         for action, and we will have a truly bullet-proof project that can be 
         used to build anything you want on top of it with the security and 
         confidence provided by our CI-CD cycle

##Prerequisites
  firebase account (free)
  
  bower
  
  npm
  
  grunt-cli
  
  travis account (free)
  
  karma-cli
    
  codeclimate-test-reporter
    
  firebase-tools

##Run angularclient
  grunt serve
  
##Deploy in prod
  grunt build
  
  firebase deploy
  
##Run the dist version (this is running the project like it is in production for debugging purposes)
  from angularclient folder...
  
  cd dist
  
  python -m SimpleHTTPServer


## ng-Notify Advanced Usage

Default Configuration

You can override the default options for all notifications by using the config method. None of these options are required. (For available options, check the definitions below.)

ngNotify.config({
    theme: 'pure',
    position: 'bottom',
    duration: 3000,
    type: 'info',
    sticky: false
});

Individual Configurations

You can also pass an object of options to individual notifications. You can pass through any combination of our available options here as well. (For available options, check the definitions below.) For example:

ngNotify.set('Your first message.', {
    position: 'top',
    sticky: true
});

ngNotify.set('Your second message.', {
    type: 'error',
    duration: 2000
});

ngNotify.set('Your third message.', 'error'); // Original use case still works, too.

ngNotify.set('Your fourth message.', {
    theme: 'pitchy'
});

Sticky Notifications

Sticky notifications allow you to set a persistent notification that doesn't fade away. To do this, simply set the sticky attribute to true:

ngNotify.set('This is sticky.', {
    sticky: true
});

This will give the user the option of closing the notification themselves. If you need to dismiss a notification manually, you can do so with the dismiss method like this:

ngNotify.dismiss();

Any time a notification is set to sticky, the duration attribute will be ignored since the notification will not be automatically fading out.
Roll Your Own

There are two additional methods that allow you to create your own types and themes.
Custom Notification Types

Creating a custom type will allow you to add additional types of notifications to use throughout your application. To create a new type, use the addType method. The first param is the name you'll use to reference your new type. The second param is the class you'll use to style your new notification type.

ngNotify.addType('notice', 'my-notice-type');

Then you can set any of your notifications up to use that type as you would any other, triggering it by using the name you gave it.

ngNotify.set('This notification is using our new type!', 'notice');

To style your new type, pick a color you'd like to use and set it to the background color of your new style.

.my-notice-type
    background-color: #ABC123

Custom Themes

Creating a custom theme will allow you to build an entirely new spectrum of notification messages utilizing the existing notification types. To create a new theme, use the addTheme method. The first param is the name you'll use to reference your new theme. The second param is the class you'll use to style your new theme's notification types.

ngNotify.addTheme('newTheme', 'my-new-theme');

Now you can activate your new theme via the config method, using the name you previously assigned to it.

ngNotify.config({
    theme: 'newTheme'
});

To style your new theme, pick a collection of colors you'd like to use for each notification type and set them to each type's background color.

.my-new-theme.ngn-info
    background-color: #0033CC

.my-new-theme.ngn-error
    background-color: #FF0000

.my-new-theme.ngn-success
    background-color: #00CC00

.my-new-theme.ngn-warn
    background-color: #FF9900

.my-new-theme.ngn-grimace
    background-color: #660099

Custom Styles

The position, size, color, alignment and more are all styled based on the notification's classes and are all specified in the CSS file. See the style definitions below to see which classes can be used to override any of the styles within your own application.
Definitions
Methods
set(message, type)

displays a notification message and sets the formatting/behavioral options for this one notification.

    message: string - required - the message to display in your notification.
    type: string - optional - the type of notification to display.
        info (default)
        error
        success
        warn
        grimace

config(options)

sets default settings for all notifications to take into account when displaying.

    options - object - an object of options that overrides the default settings.
        theme: string - optional - sets the theme to use, altering the styles for each notification type.
            pure (default)
            prime
            pastel
            pitchy
        type: string - optional - sets the default notification type when a type isn't explicitly set.
            info (default)
            error
            success
            warn
            grimace
        position: string - optional - sets where the notifications will be displayed at in the app.
            bottom (default)
            top
        duration: integer - optional - the duration the notification stays visible to the user, in milliseconds.
        sticky: bool - optional - determines whether or not the message will fade at the end of the duration or if the message will persist until the user dismisses it themselves. when true, duration will not be set, even if it has a value. (false by default).

dismiss()

manually dismisses any sticky notifications that may still be set.
addType(name, class)

allows a dev to create a new type of notification to use in their app.

    name: string - required - the name used to trigger this notification type in the set method.
    class: string - required - the class used to target this type in the stylesheet.

addTheme(name, class)

allows a dev to create a whole new set of styles for each notification type.

    name: string - required - the name used when setting the theme in the config object.
    class: string - required - the class used to target this theme in the stylesheet.

Styles

    primary: the class that's present on every notification and controls all of the primary styles.
        .ngn

    position: purely responsible for where notifications are displayed. default is set to bottom, one is present on every notification.
        .ngn-top
        .ngn-bottom

    types: default classes for setting each notification type's background color. default is set to info, one is present on every notification.
        .ngn-info
        .ngn-error
        .ngn-success
        .ngn-warn
        .ngn-grimace

    themes: theme specific classes that are chained together with type classes to override default background colors. not always present, default excludes all of these.
        .ngn-prime
        .ngn-pastel
        .ngn-pitchy

    sticky: styles responsible for displaying the dismissal button for sticky notifications.
        .ngn-sticky - displays the dismissal button when sticky is enabled.
        .ngn-dismiss - styles the dismissal button.
