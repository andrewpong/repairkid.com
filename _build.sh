#!/bin/bash
echo "Compiling with harp to /Users/Hak/Repositories/repairkid.com/www/..."
harp compile /Users/Hak/Repositories/repairkid.com/_harp -o /Users/Hak/Repositories/repairkid.com/www
echo "Compiling complete! Go go Gulp!..."
gulp
echo "JS/CSS/HTML minified, uncssed and concatanated! Committing to GitHub..."
git add -A :/ && git commit -m "Auto-deploy `date`" && git push
echo "Committed! Pushing to Divshot...";
cd /Users/Hak/Repositories/repairkid.com/
divshot push production
echo "Divshotted! Pushing to Firebase...";
firebase deploy
echo -e "Your base is fire!! Project deployed without a hitch.";
echo "Promoted to production! Website is LIVE @ repairkid.com!!";
