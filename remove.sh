# Finds and gets rid of all the extra files that were downloaded
find . -name 'index.html' -exec rm -f {} \;
find . -name 'p5.js' -exec rm -f {} \;
find . -name 'p5.sound.min.js' -exec rm -f {} \;
find . -name 'style.css' -exec rm -f {} \;
