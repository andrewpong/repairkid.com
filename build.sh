#!/bin/bash
echo "Compiling with harp to /Users/Hak/Repositories/repairkid.com/www/..."
harp compile /Users/Hak/Repositories/repairkid.com/_harp -o /Users/Hak/Repositories/repairkid.com/www
echo "Compiling complete! Committing to GitHub..."
git add -A && git commit -m 'Auto-deploy date +"%D"' && git push
echo "Committed! Pushing to Firebase...";
cd /Users/Hak/Repositories/repairkid.com/
firebase deploy
echo "Success! Your project was deployed without a hitch.";