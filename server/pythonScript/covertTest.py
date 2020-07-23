from database import test_data
import xlrd
import csv
from docx import Document
from docx.oxml.ns import nsdecls 
from docx.oxml import parse_xml 
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.table import WD_ALIGN_VERTICAL
from docx.enum.section import WD_SECTION
from docx.enum.section import WD_ORIENT
from docx.shared import Inches, Cm, Pt, Mm
from docx.enum.section import WD_ORIENT
from docx.oxml.ns import qn, nsdecls


def csv_from_Excel_Sheet1(xls_filename):
    # 엑셀파일명을 입력해줍니다.
    strPathName = xls_filename

    #엑셀의 열어 workbook을 얻어옵니다.
    wb = xlrd.open_workbook(strPathName)
    #workbook의 전체 시트 목록을 얻어옵니다.
    lst = wb._sheet_list
    for SheetT in lst :
        #시트명 출력
        print(SheetT.name)    
        FileName = SheetT.name.replace(" ", "")
        #엑셀의 시트명에 따라 파일을 각각 생성하여 저장해줍니다
        SaveCsvFile = open(str(FileName) + '.csv', 'w', newline='')
        wr = csv.writer(SaveCsvFile, quoting=csv.QUOTE_ALL)

        #해당 시트의 데이터를 csv에 입력해줍니다
        for rownum in range(SheetT.nrows):
            wr.writerow(SheetT.row_values(rownum))

        SaveCsvFile.close()
        
csv_from_Excel_Sheet1('테스트문서.xlsx')

f = open('Sheet1.csv', 'r')
lines = csv.reader(f)
#for문에 들어가기전에, 모든 인스턴스들을 관리할 리스트 생성
menu_list = list()
main_list = list()
#for문에 들어가기전에, 첫 줄에서는 작업안하도록 매개변수 생성
i = 0
for line in lines:
    #첫줄에서는 작업안하도록 if문 걸어주기
    if i > 0:
        main_list.append(test_data(line[0], line[1], line[2]))
    #첫줄 따로 저장
    elif i == 0:
        menu_list.append(test_data(line[0], line[1], line[2]))
    i += 1
f.close()

document = Document()

table = document.add_table(rows=1, cols=3)
table.style = document.styles['Table Grid']

hdr_cells = table.rows[0].cells
for i in menu_list:
    hdr_cells[0].text = str(i.name)
    hdr_cells[1].text = str(i.age)
    hdr_cells[2].text = str(i.gender)
    
for i in main_list:
    row_cells = table.add_row().cells    
    row_cells[0].text = str(i.name)
    row_cells[1].text = str(i.age)
    row_cells[2].text = str(i.gender)

document.save('테스트문서.docx')

