# Guide To Contribution by
Javascript Jellies

### GitHub Workflow

1. Before working on an issue, review the issue and post a comment to clarify if there has been any progress made.
2. Once you've reviewed an issue, feel free to [fork the repo](https://help.github.com/articles/fork-a-repo/).
3. If you follow all of the instructions in the help article above, you'll be able to create a branch. That's `git checkout -b YOUR_BRANCH_NAME` Note that some companies and organizations have branch-naming conventions - we do not.
4. Once you make a branch, you're free to open your preferred text editor and code. If you don't have a preferred text editor, Operation Code recommends [Visual Studio Code](https://code.visualstudio.com/) (more commonly referred to as "VS Code" and not to be confused with Visual Studio). You'll want to follow along with [Development Workflow](#development-workflow) to see how you should go about coding in the repo.
5. When your changes are complete, commit your changes. If your code had changes after formatting, you'll need to re-stage those file(s) and use `git commit --amend` to add the linted/formatted code to your original commit.
6. After committing, push your branch to your forked repo. `git push -u origin YOUR_BRANCH_NAME` should do the trick.
7. Create a pull request within two weeks of working on the issue, [using that branch on your fork](https://help.github.com/articles/creating-a-pull-request-from-a-fork/).
