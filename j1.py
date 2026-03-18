B = int(input("Number of tickets Besa wants to buy: "))
T = int(input("Total number of tickets for the concert: "))
P = int(input("Number of tickets other people have purchased: "))

if B>(T-P):
    print("N")
else:
    print("Y {}".format(T-P-B))