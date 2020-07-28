import sys
import time
from docx import Document
from database import test_data
# a="client/public/files/테스트문서.xlsx"
# f = open(a)
# f.close()

document = Document()

table = document.add_table(rows=1, cols=3)
table.style = document.styles['Table Grid']

# args= ['test.py', '데이터수집보드.xlsx', '1595898595436_데이터수집보드.xlsx' ]

fileName = sys.argv[2]
# fileName = "1595895773631_test1 (1).xlsx"
ffile = fileName.split(".")
document.save("client/public/covtFiles/"+ffile[0]+".docx")

# print (sys.argv[2])
print(ffile[0]+".docx")