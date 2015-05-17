##Prerequisites
  firebase account
  bower
  npm
  grunt-cli

##Run angularclient
  grunt serve
  
##Deploy in prod
  grunt build
  
  firebase deploy (you need to do 'firebase init' first and put your credentials if it's your first deploy)
  
##Run the dist version (this is running the project like it is in production for debugging purposes)
  from angularclient folder...
  
  cd dist
  
  python -m SimpleHTTPServer
