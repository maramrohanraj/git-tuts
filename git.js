/* 
git & github part-1 -> vcs and git repors
part-2 -> staging area and commits
part-3 -> working with branches
part-4 -> issues and pull requests

*/

//* version control system(vcs)
/* 
git  means version constrol system
if we are developing a website which have traffic and regularly we are adding updates and again deploy it 
in software development bugs will come when updates come so we want to revert back 
manaki new version lo bugs vunte patha version ni save cheyyali 
to save the project we use vcs using remote server and track the changes 

*/

//*git concepts

/* 
we will have something remote repository (repository means a folder for project)
1)remote repository
2) local repository 
3) staging area
4) working directory


*working directory
for working in git we should use command
1)git init
2)git commit
3) git status -> to check the status
appude create chesi git command emi run cheyyaledhu dhanne working directory antamu
untracked section is called working directory
a.js,git.js,index.html are there in working directory we want to save it for future
 
*/
//* from working directory to staging area we will send one by one files 
/* 
working->staging area --> git add
staging area-> local repo  ---> git commit
local repo -> remote repo ==> git push

git add filename -> we will add to the staging area
git commit -m "message" ==> we will commit to local repository
git remote add origin https://github.com/maramrohanraj/git-tuts.git  ==> adding remote repository
git push -u origin master ==?> for pushing the file to remore repository

git checkout -> jumping between branches
git checkout -b ==> creating a new branch


git ignore is a file where we want to ignore the files that are not used like node_modules in react

*/



//*staging area
/* 
 it is in between the local repository and remote repository
 if we use staging area then we can commit what we need remaining will not be committed

*/


//* branch
/* 
main/master these are two branches ==> dhentlo mana code motham vuntadhi deploy gani redeploy gani chestham 
tree have many branches one is the main one with that one only we can deploy changes 
if 10 developers are in one team all will create one branch each then after completing the work
they will raise a pull request and they will be a team leader is he agress then it will go to master branch othwerwise
team leader will tell you to do some changes

*/

//*github

/* 
one example of storing remote repository hosting service
*/