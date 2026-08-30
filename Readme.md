# Nimbus CI Tester Repository

This repository serves as an integration test target for **Nimbus CI** pipeline verification.

## Architecture & Project Structure

```tree
.
├── .gitignore
├── .nimbus/
│   └── workflows/
│       └── nimbus-ci.yml        # CI pipeline specification (9 Jobs)
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

## CI Jobs Overview (9 Jobs)

1. **`node-app-test` (`node:22`)**:
   - Executes main service and native Node test runner (`node --test`)
2. **`node-syntax-lint` (`node:22`)**:
   - Performs syntax analysis on all JavaScript source files (`node --check`)
3. **`node-matrix-v20` (`node:20`)**:
   - Matrix testing under Node 20 LTS environment
4. **`python-app-test` (`python:3.13`)**:
   - Runs Python entrypoint and `unittest` discovery suite
5. **`python-syntax-lint` (`python:3.13`)**:
   - Verifies bytecode compilation across Python modules (`python -m py_compile`)
6. **`python-matrix-v312` (`python:3.12`)**:
   - Matrix compatibility verification under Python 3.12 runtime
7. **`system-health-check` (`alpine:latest`)**:
   - Runs POSIX shell environment health checks (`scripts/system-check.sh`)
8. **`security-audit` (`alpine:latest`)**:
   - Validates workspace manifest presence and scans for unintended leaked secrets
9. **`build-packaging` (`alpine:latest`)**:
   - Packages distribution tarballs for Node and Python services into `dist/`