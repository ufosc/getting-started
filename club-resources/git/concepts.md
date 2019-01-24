# Git Concepts

## Terms

**Git** - An open source distributed version control software. It tracks the history of changes to the code. Also helps multiple people easily work on the same project.

**Repository** - Also called repo. A place where the project and it's history is stored. Usually hosted on a server or hosting site.

**Branch** - Is a parallel version of the repository. This allows for bugs and features to be worked on separately without interfering with each other.

**Merge** - Takes the changes from one branch and applies them to another. If nothing conflicts, the merge will happen without issue. If not, see merge-conflicts.md for more.

**Fetch** - The pulls the latest changes from a remote repository without merging them. This allows the user to see if there is a merge conflict before applying the changes to their local copy.

**Commit** - A commit is a change to a set of files. It's like saving your files to Git. Each commit has a unique ID that is used to track the changes. Each message usually has a message with a brief description of those changes.

**Diff** - The difference in changes between two commits. It shows what has been added or removed between the two commits.

**Push** - This sends your local commits to a remote repository, such as Github. This allows everyone working on the project to see you changes. Your local version usually must be up to date to push.

**GitHub** - A web based Git repository hosting service. It's where we host our projects. It has several features that are not part of base Git that are listed below.

**Pull Request** - Github's online merge. In addition to combining branches, it allows user's who don't have write access to a repository to submit changes to it.

**Fork** - A separate copy of another user or organization's repository. It allows the user to make changes without interfering with the original repository. The new repository can be updated from the original, and submit pull request to the original as well.

**Issues** - A bug or feature request you want to let the team know about.

## Ideas

### General Guideline
\* _These are general rules to follow, not set in stone_

1. Fetch often
2. Commit often and in appropriate chunks
3. Test before commit
4. Concise commit messages (No more than 80 characters)
5. Good Workflow (see below)

### Workflow

Usually there are several branches on the main repository.

Master, which is usually a stable version of the software. Normally you don't directly update this.

Development or dev branch is where most feature and bug branches pull from and merge to.

Other branches are made for a variety of reasons. For example, if there is a feature being worked on, create a new branch from dev. Once that feature is working, push it back into the dev branch.

Name the new branch in a way that is short and descriptive, such as Contact-Database.

Once a feature branch is working, make a pull request to the dev branch. Administrators will check it, and confirm the merge. When the dev branch is stable enough, it will be merged into the master branch.

[Click here](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for a good, more in-depth guide.
