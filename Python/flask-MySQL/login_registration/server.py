from flask import Flask, render_template, request, redirect, flash
import md5
from mysqlconnection import MySQLConnector

app = Flask(__name__)

app.secret_key = "peonies"
salt = "rhododendron"

mysql = 