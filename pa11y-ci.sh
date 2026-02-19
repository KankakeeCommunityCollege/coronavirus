#!/usr/bin/env bash

# The sitemap file used for pa11y-ci
SITEMAP='https://coronavirus.kcc.edu/pa11y-ci-sitemap.xml'
# Folder to keep logs in
LOGFOLDER="./pa11y-ci-logs"

echo "## ===================================== ##"
echo "##   Checking if Pa11y CI is installed.  ##"
echo "## ===================================== ##"
echo ""
if command -v pa11y-ci >/dev/null 2>&1; then
  echo "## ===================================== ##"
  echo "##        Pa11y CI is installed.         ##"
  echo "## ===================================== ##"
else
  echo "## ===================================== ##"
  echo "##      Pa11y CI is not installed.       ##"
  echo "##                ...                    ##"
  echo "##         installing pa11y.             ##"
  echo "## ===================================== ##"
  npm install -g pa11y-ci
fi
echo ""

OUTPUT_ARG_PASSED=false
# SITEMAP_ARG_PASSED=false

while getopts ":os" opt; do
  case $opt in
    o)
      OUTPUT_ARG_PASSED=true
      ;;
    # s)
    #   SITEMAP_ARG_PASSED=true
    #   ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
  esac
done
shift $((OPTIND-1))

echo "## ===================================== ##"
echo "##            Running Pa11y CI           ##"
echo "## ===================================== ##"
echo ""

if $OUTPUT_ARG_PASSED; then
  # Add commands for when the specific argument is passed
  echo ""
  echo "Argument '-o' was passed. Writing Pa11y output to log file."
  echo ""
  
  timestamp=$(date +"%Y-%m-%dT%H_%M_%S")
  filename="pa11y-ci-log.$timestamp.txt"
  filepath="$LOGFOLDER/$filename"

  echo "Creating log folder ($LOGFOLDER) if it doesn't exist."

  mkdir -p "$LOGFOLDER"

  echo "Creating log file: $filepath"
  echo ""

  echo "##############################" > $filepath
  echo "##     Pa11y CI results     ##" >> $filepath
  echo "##############################" >> $filepath
  echo "" >> $filepath

  echo "##     Running Pa11y CI:" >> $filepath
  echo "##         DATETIME: $timestamp" >> $filepath
  echo "##         SITEMAP:  $SITEMAP" >> $filepath
  echo "" >> $filepath
  echo "" >> $filepath

  pa11y-ci --sitemap "$SITEMAP" 2>&1 | tee -a $filepath
else
  # Add commands for when the argument is missing
  echo ""
  echo "Argument '-o' was missing. Pa11y will output to stdout."
  echo ""

  pa11y-ci --sitemap "$SITEMAP"
fi

echo ""
echo "## ================================== ##"
echo "##               DONE                 ##"
echo "## ================================== ##"
echo ""
