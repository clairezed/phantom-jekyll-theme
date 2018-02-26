import csv

with open('../stats/sirene_20170812.csv', 'rb') as csvfile:
    # handle header line, save it for writing to output file
    header = next(csvfile).strip("\n").split(";")
    print header[76]
    reader = csv.reader(csvfile, delimiter=';')
    # print("Nb de lignes initial :", len(list(reader)))
    # for row in reader:
    #     print row[76] == 'O'
    results = filter(lambda row: row[76] == 'O', reader)
    # print results
    # print("Nb de lignes final :", len(list(results)))


with open('output.csv', 'wb') as outfile:
    writer = csv.writer(outfile)
    writer.writerow(header)
    for result in results:
        writer.writerow(result)
