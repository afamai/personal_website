#!/bin/bash
curl -o cache_yr2.xml 'http://107.170.98.130/yr2/cache_yr2.txt'
curl -o cache_yr4.xml 'http://107.170.98.130/yr4/cache_yr4.txt'
chmod 644 cache_yr4.xml
python xmlToJson.py > cache_yr4.txt
chmod 644 cache_yr2.xml
