# shopping-lists/compile_sass.sh
#!/bin/bash

echo "Starting SCSS compilation..."

# Get the directory of the script
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
echo "Script directory: $SCRIPT_DIR"

# Define output directory
OUTPUT_DIR="$SCRIPT_DIR/assets/css"  # Output directory for the compiled CSS
echo "Output directory: $OUTPUT_DIR"

# Check if the output directory exists, create it if it doesn't
if [ ! -d "$OUTPUT_DIR" ]; then
    echo "Output directory does not exist. Creating: $OUTPUT_DIR"
    mkdir -p "$OUTPUT_DIR"
else
    echo "Output directory already exists: $OUTPUT_DIR"
fi

# Check if the SCSS input file exists
SCSS_FILE="$SCRIPT_DIR/assets/scss/main.scss"
if [ -f "$SCSS_FILE" ]; then
    echo "SCSS file found: $SCSS_FILE"
else
    echo "SCSS file does not exist: $SCSS_FILE"
    exit 1  # Exit if the SCSS file doesn't exist
fi

# Check if the sass command is available
if command -v sass > /dev/null; then
    echo "Sass is installed: $(sass --version)"
else
    echo "Sass is not installed or not found in PATH."
    exit 1  # Exit if sass command is not available
fi

# Confirm the current working directory
echo "Current working directory: $(pwd)"

# List the contents of the current directory for verification
echo "Contents of the current directory:"
ls -la

# List the contents of the assets directory
echo "Contents of the assets directory:"
ls -la "$SCRIPT_DIR/assets"

# List the contents of the assets/scss directory
echo "Contents of the assets/scss directory:"
ls -la "$SCRIPT_DIR/assets/scss"

# Compiling SCSS
echo "Compiling SCSS..."
sass "$SCSS_FILE" "$OUTPUT_DIR/main.min.css" --style compressed

# Check for errors during compilation
if [ $? -eq 0 ]; then
    echo "SCSS compiled successfully! Output saved to $OUTPUT_DIR/main.min.css"
else
    echo "Error compiling SCSS."
    exit 1
fi