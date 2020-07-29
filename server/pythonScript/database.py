#!/usr/bin/env python
# coding: utf-8

# In[ ]:

class Ubion_data:
    name = None
    school = None
    product = None
    charge = None
    request_date = None
    end_date = None
    group = None
    keyword = None
    disposer1 = None
    disposer2 = None
    progress = None
    def __init__(self, name, school, product, charge, request_date, end_date, group, keyword, disposer1, disposer2, progress):
        self.name = name
        self.school = school
        self.product = product
        self.charge = charge
        self.request_date = request_date
        self.end_date = end_date
        self.group = group
        self.keyword = keyword
        self.disposer1 = disposer1
        self.disposer2 = disposer2
        self.progress = progress

           
