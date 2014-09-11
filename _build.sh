#!/bin/bash
echo ${project_path:${folder}}
echo "Compiling with harp to /Users/Hak/Repositories/repairkid.com/www/..."
harp compile /Users/Hak/Repositories/repairkid.com/_harp -o /Users/Hak/Repositories/repairkid.com/www
echo "Compiling complete! Committing to GitHub..."
git add -A :/ && git commit -m "Auto-deploy `date`" && git push
echo "Committed! Pushing to Divshot...";
cd /Users/Hak/Repositories/repairkid.com/
divshot push
echo "Divshotted! Pushing to Firebase...";
firebase deploy
echo -e "Your base is fire!! Project deployed without a hitch.";