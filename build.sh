#!/bin/sh
# Zeabur build script

echo "Installing dependencies..."
npm ci

echo "Building application..."
npm run build

echo "Build completed successfully!"
