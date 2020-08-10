# UAFC (Ubion Auto File Converter)

맞춤형 파일변환 프로그램

## 파일변환

* .csv 파일을 .docx파일로 변환
* 파일 변환과 동시에 각각의 항목 별 분류 / 통계처리
* 회사의 요구사항대로 제작



## 사용법

1. 회사 형식대로 알맞게 합쳐진 .csv 파일을 넣으면 변환이 바로 진행됩니다.

2. 변환이 완료된 파일을 클릭하여 다운받아 결과를 확인 합니다.



## 기술정보

### DataBase

* **mongdb**의 **Atlas**와 **mongoose**

### Backend 

* 전체 틀 : **node + express**
* 파일 업로드 및 저장 관련 : [**multer**](https://www.npmjs.com/package/multer)
* 결과 파일 변환/생성 및 통계 : **python**
* node에서 python 실행 : [**Python-Shell**](https://www.npmjs.com/package/python-shell)

### Front 

* 전체 틀 : **create-react-app**

* 전역상태관리 : **redux**
* backend에게 request : **axios** 

### 배포

* heroku
