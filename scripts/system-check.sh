#!/bin/sh
set -e

echo "=============================================="
echo "       Nimbus CI - System Health Check        "
echo "=============================================="
echo "OS Information:"
cat /etc/os-release || uname -a
echo ""
echo "Current Environment:"
echo "APP_ENV: ${APP_ENV}"
echo "OS_NAME: ${OS_NAME}"
echo "CI_MESSAGE: ${CI_MESSAGE}"
echo ""
echo "Checking Project Directories:"
ls -ld node-app python-app scripts
echo "=============================================="
