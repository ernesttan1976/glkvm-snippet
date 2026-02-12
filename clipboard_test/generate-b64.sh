#!/bin/bash

# Script to generate a text file with X number of characters filled with random base64 text
# Usage: ./generate-base64-file.sh <num_characters> [output_file]

if [ $# -lt 1 ]; then
    echo "Usage: $0 <num_characters> [output_file]"
    echo "Example: $0 1000 output.txt"
    exit 1
fi

NUM_CHARS=$1
OUTPUT_FILE=${2:-"random-base64.txt"}

# Validate that NUM_CHARS is a positive integer
if ! [[ "$NUM_CHARS" =~ ^[0-9]+$ ]] || [ "$NUM_CHARS" -le 0 ]; then
    echo "Error: Number of characters must be a positive integer"
    exit 1
fi

# Calculate how many bytes we need to generate
# Base64 encoding increases size by ~33%, so we need roughly 3/4 of the target size in bytes
# We'll generate a bit more and trim to exact size
BYTES_NEEDED=$((NUM_CHARS * 3 / 4 + 100))

# Generate random base64 text
# We generate enough random bytes, convert to base64, and take exactly NUM_CHARS characters
dd if=/dev/urandom bs=1 count=$BYTES_NEEDED 2>/dev/null | base64 | tr -d '\n' | head -c "$NUM_CHARS" > "$OUTPUT_FILE"

# Verify the file size
ACTUAL_SIZE=$(wc -c < "$OUTPUT_FILE" | tr -d ' ')
echo "Generated file: $OUTPUT_FILE"
echo "Requested characters: $NUM_CHARS"
echo "Actual characters: $ACTUAL_SIZE"

if [ "$ACTUAL_SIZE" -eq "$NUM_CHARS" ]; then
    echo "✓ Successfully generated file with exactly $NUM_CHARS characters"
else
    echo "⚠ Warning: File has $ACTUAL_SIZE characters instead of $NUM_CHARS"
fi
