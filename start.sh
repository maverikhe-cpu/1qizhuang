#!/bin/sh
set -e

echo "=== Zeabur Start Script ==="
echo "Current directory: $(pwd)"
echo "Listing files:"
ls -la

echo ""
echo "Checking dist directory:"
if [ -d "dist" ]; then
    echo "✓ dist directory exists"
    ls -la dist/
    echo ""
    echo "Starting serve..."
    npx serve -s dist -l 3000 --no-clipboard
else
    echo "✗ dist directory not found!"
    echo "Running build..."
    npm run build
    echo "Starting serve..."
    npx serve -s dist -l 3000 --no-clipboard
fi
