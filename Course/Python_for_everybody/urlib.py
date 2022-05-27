import urllib.request, urllib.parse, urllib.error

counts = dict()
fhand = urllib.request.urlopen('https://en.wikipedia.org/wiki/Cristiano_Ronaldo')
for line in fhand:
    data = line.decode().strip()
    print(data)
