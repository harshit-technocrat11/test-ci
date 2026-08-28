# Nimbus CI Tester Repository

This repository serves as an integration test target for **Nimbus CI** pipeline verification.

## Architecture & Project Structure

```tree
.
├── .gitignore
├── .nimbus/
│   └── workflows/
│       └── nimbus-ci.yml        # CI pipeline specification
├── node-app/                    # Node.js service
│   ├── package.json
│   ├── src/
│   │   ├── index.js             # Node entrypoint
│   │   └── math.js              # Calculation logic
│   └── test/
│       └── app.test.js          # Native Node test runner
├── python-app/                  # Python service
│   ├── requirements.txt
│   ├── main.py                  # Python entrypoint
│   ├── app/
│   │   ├── __init__.py
│   │   └── calculator.py        # Calculator logic
│   └── tests/
│       ├── __init__.py
│       └── test_calculator.py   # Python unittest suite
├── scripts/
│   └── system-check.sh          # System health check script (Alpine/POSIX)
└── Readme.md
```

## CI Jobs

1. **Node Job (`node:22`)**:
   - Logs environment variables (`APP_ENV`, `NODE_ENV`, `CI_MESSAGE`)
   - Runs `node node-app/src/index.js`
   - Executes native tests: `node --test node-app/test/app.test.js`

2. **Python Job (`python:3.13`)**:
   - Logs environment variables (`APP_ENV`, `PYTHON_ENV`, `CI_MESSAGE`)
   - Runs `python python-app/main.py`
   - Executes test suite: `python -m unittest discover -s python-app/tests -p "test_*.py"`

3. **Alpine Job (`alpine:latest`)**:
   - Verifies POSIX environment & container mount
   - Runs `sh scripts/system-check.sh`