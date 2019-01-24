# Git

Use this file to learn how to create or copy your own Git repository and make your first commit! 

For more information about Git, look at the other files here or the references at the bottom.

- [Concepts](concepts.md) - Covers the terminology and ideas behind using Git.  
- [Advanced](advanced.md) - More information regarding Git usage, such as switching branches and making issues. 

Also learn about our Git workflow using [GitFlow][GutHub GitFlow]! It'll describe where to branch and merge to keep everything organized! 

## What you need

Install Git here: https://www.git-scm.com/downloads

GitHub account here: https://github.com/

## Setting up Git

On Windows open up the Git Bash application. On Linux or OSX open up a terminal.

Set up your name and the email you used for your GitHub account.

```
git config --global user.name "Your Name Here"

git config --global user.email "your_email@youremail.com"
```

## Create local repository

Navigate to where you want the projects to be on your computer.

```
cd path/to/where/you/want/the/code
```

## New Project

Make a folder with the name of the Project

```
mkdir Project-Name
```

**git init** - This will create a new Git repository in the current directory.
```
git init
```

## Project from GitHub

Copy the URL from the repository you want on your computer.

**git clone** - This will create a copy of the designated repository on your computer.

```
git clone https://github.com/ufosc/practice-repo.git
```

### Updating

**git fetch** - Checks if there are updates from a specific branch. It doesn't change anything on your local branch.

```
git fetch origin master
```

**git merge** - This merges changes from the branch specified to your current branch.

```
git merge origin master
```

Always update before trying to commit code

### Status

**git status** - To get the current status of your staged and committed files. It will also show you how many commit ahead or behind the remote repo at the time of your last `git fetch`.

```
git status
```

This is useful to run before starting to commit anything.

### Committing

**git add** - This tells Git you want to stage or add specific files to a branch, this does not actually commit anything.

```
git add helloWorld.txt
```

**git commit** - This wraps the added files with a message ready to push up to the branch. It will open up a text editor in the terminal where you can type the message.

```
git commit
```

Update again!

**git push** - This pushes your committed changes to the branch indicated.

```
git push origin master
```

And now you're changes are on the remote repository!

## References

- [Official GitHub Course](https://lab.github.com/)
- [Interactive GitHub Tutorial](https://www.codeschool.com/courses/try-git)
- [Simple Gitflow][GutHub GitFlow]
- [In Depth Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow/)
- [Git Cheat Sheet](https://services.github.com/kit/downloads/github-git-cheat-sheet.pdf)
- [Saving GitHub login credentials](https://help.github.com/articles/caching-your-github-password-in-git/)

[GutHub GitFlow]: https://guides.github.com/introduction/flow/ "GitHub guide for GitFlow"