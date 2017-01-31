#!/bin/bash
curl -o /home/a4mai/webdev/labs/lab7/cache_yr2.xml 'http://107.170.98.130/yr2/cache_yr2.txt'
curl -o home/a4mai/webdev/labs/lab7/cache_yr4.xml 'http://107.170.98.130/yr4/cache_yr4.txt'
chmod 644 home/a4mai/webdev/labs/lab7/cache_yr4.xml
python home/a4mai/webdev/labs/lab7/xmlToJson.py > home/a4mai/webdev/labs/lab7/cache_yr4.json
chmod 644 home/a4mai/webdev/labs/lab7/cache_yr2.xml
