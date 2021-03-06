import xml.etree.ElementTree as ElementTree
import json
tree = ElementTree.parse("cache_yr4.xml")
root = tree.getroot()
def toJSON(elem):
    dct = {}
    for child in elem:
        if not len(child):
            dct[child.tag] = child.text
        else:
            dct[child.tag] = toJSON(child)
    return dct

print json.dumps(toJSON(root), indent=4, separators=(',',':'))
