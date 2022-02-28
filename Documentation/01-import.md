# Import Documentation

1. first you should add an organization:
    1. login as Admin;
    2. select add organization from the sidebar.
2. Add procedure to the organization:
    1. login as Admin;
    2. select organizations from the sidebar;
    3. in organizations table, select show procedures for this organization;
    4. you will see a table of the procedures that belong to this organization;
    5. in the caption of the table select the plus (+) button to add a new procedure;
3. the status of the procedure is: ‘not imported’, ‘imported’, ‘partial calculated’, ‘calculated’
4. after adding a new procedure it will have the status ‘not imported’;
5. now you can import files:
    1. login as Admin;
    2. select import from the sidebar;
    3. select an organization;
    4. select a procedure;
    5. select a template for the the files; don’t worry you can change the mapping fields later if the template don’t match your needs; and you can select `other` if you don’t want a template at all;
    6. you must import accounts files first then posting files;
    7. select file format, if it excel or CSV/text file;
    8. select file type, accounts, posting or helper file;
    9. if you choose csv posting, then you should choose the localization (DE| EN) for date and currency localization;
    10. if you choose accounts file, you should determine the account type of the file or select other if the account type is existed in the file, and then in the mapping stage you must determine the column which contains the type, otherwise the import operation will fails!
    11. After upload, if you choose a wrong file, you can delete the uploaded file and select another one;
    12. select next to go to next step;
    13. in step 3, if you choose a template in the first step, it will be mapped the field as the template default mapping and you can change it; if you select `other` then no mapped fields by default.
    14. In step 4, you can go back to correct some mapping fields or start the import operation, and a progress spinner will appears till the operation ends.
    15. After import operation done, you can continue to import another file;
    16. notice that the date in the file should be:
        1. in excel file:
            1. a valid date;
            2. or a string that can be parsed correctly as the below list;
        2. in CSV/text file should be a string that can be parsed correctly as the below list;
        3. the date string should be on of these formats:
            1. 'Today'
            2. 'Friday'
            3. '2016-07-01'
            4. 'Jul 01 2016'
            5. '6/10/2018'
            6. 'An appointment on Sep 12-13'
            7. '17 August 2013'
            8. 'This Friday from 13:00 - 16.00'
            9. '5 days ago'
            10. '2 weeks from now'
            11. 'Sat Aug 17 2013 18:40:39 GMT+0900 (JST)'
            12. '2014-11-30T08:15:30-05:30'
        4. any other format like ‘3.3.13’ not accepted and the import operation will be fail;
        5. the currency format should be number or a string conforms the localization selected in the first step, other wise the import operation will be fail, so if ‘de’ selected and a currency field is  a string, it should be like: `1.111,00` and if ‘en’ localization selected and a currency field is a string in the file, it should be as `1,111.00`.
        6. after import operation done, the status of the procedure will be ‘imported’; and you can’t view the analysis till the status of the procedure be ‘partial calculated’ or ‘calculated’.
