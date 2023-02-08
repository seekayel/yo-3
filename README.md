# starter-micro-api
should fail with 
```
- set root path as `/`
- should fail with:
A package.json file was not found at /package.json in the repository.
Cyclic runs scripts defined "scripts" section to build, test and run your app.

- set root path as `backend`
should fail with
```
FileNotFound: the file "abc.js" is not found in the repository.
To fix, try one of the following:
        - make sure the file "abc.js" exists and is pushed to GitHub
        - remove the "main" entry and create a "scripts" entry with a "start" script instead:
        "scripts": {
            "start": "node index.js"
          }
```
```