# #PART1:
# students = [
#     {
#         "first_name": "Michael",
#         "last_name": "Jordan"
#     },
#     {
#         "first_name": "John",
#         "last_name": "Rosales"
#     },
#     {
#         "first_name": "Mark",
#         "last_name": "Guillen"
#     },
#     {
#         "first_name": "KB",
#         "last_name": "Tonel"
#     }
# ]
#
# def names(studentsName):
#     for val in studentsName:
#         print " ".join(val.values())
#
# names(students)
#

#PART2:
users = {
    "students": [
        {
            "first_name": "Michael",
            "last_name": "Jordan"
        },
        {
            "first_name": "John",
            "last_name": "Rosales"
        },
        {
            "first_name": "Mark",
            "last_name": "Guillen"
        },
        {
            "first_name": "KB",
            "last_name": "Tonel"
        }
    ],
    "instructors": [
        {
            "first_name": "Michael",
            "last_name": "Choi"
        },
        {
            "first_name": "Martin",
            "last_name": "Puryear"
        }
    ]
}

# def num():
#     for i in range(7):
#         # print number
#         return number

def allnames(staff):
    for key, data  in staff.items():
        # print value, data
        for value in data:
            print value["first_name"] + " " + value["last_name"]

allnames(users)
