import sys
import time
from docx import Document
from database import test_data
a="client/public/files/테스트문서.xlsx"
f = open(a)
f.close()

document = Document()

table = document.add_table(rows=1, cols=3)
table.style = document.styles['Table Grid']

time.sleep(5)

document.save("client/public/covtFiles/테스트문서1.docx")

print (a)