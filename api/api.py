from flask import Flask, request, json, render_template, request, url_for, send_from_directory
from flask_pymongo import PyMongo
from flask.json import JSONEncoder
import json
import re
import io
import datetime
from bson.objectid import ObjectId
from werkzeug.utils import secure_filename
from pdfminer.converter import TextConverter
from pdfminer.pdfinterp import PDFPageInterpreter
from pdfminer.pdfinterp import PDFResourceManager
from pdfminer.pdfpage import PDFPage

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabaseCZYT"
mongo = PyMongo(app)

@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']
    text = pdf_export(file)
    resultd = {}
    dbfile= {"name": secure_filename(file.filename),
            "text": "the text",
            "date": datetime.datetime.utcnow()}
    mongo.db.files.insert_one(dbfile)  
    output = list(mongo.db.files.find({}, {'text': False} ))
    for i, record in enumerate(output):
        resultd[i] = make_public_page(record)
    print(resultd)
    return resultd

def make_public_page(page):
    new_page = {}
    for field in page:
        if field == '_id':
            id = page[str(field)]
            string = str(id)
            new_page['_id'] = string
        elif field != '_id':
            new_page[field] = page[field]
    return new_page

def json_response(payload, status=200):
     return (json.dumps(payload), status, {'content-type': 'application/json'})
        
def pdf_export(file):
   rsrcmgr = PDFResourceManager()
   retstr = io.StringIO()
   device = TextConverter(rsrcmgr, retstr, codec = 'utf-8')
   interpreter = PDFPageInterpreter(rsrcmgr, device)
   pagenos = set()
   for page in PDFPage.get_pages(file.stream, pagenos, check_extractable=True):
        interpreter.process_page(page)
   text = retstr.getvalue()
   device.close()
   retstr.close()
   return text

if __name__ == '__main__':
    app.run()