##Prerequisites
  firebase account
  
  bower
  
  npm
  
  grunt-cli

##Run angularclient
  grunt serve
  
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
     
  NOTES) Notice that we do not have e2e test yet, I will do this using Protractor
         but I believe we will have to modify .travis.yml to make it work, however
         after releasing v0.0.6 my only goal it's to reach 100% coverage and add
         protractor test, so in the next weeks it will be ready for action, and we
         will have a trully bullet-proof project that can be used to build anything
         you want on top of it with the security and confidence provided by our CI-CD
         cycle
  
  
##Run the dist version (this is running the project like it is in production for debugging purposes)
  from angularclient folder...
  
  cd dist
  
  python -m SimpleHTTPServer
  

