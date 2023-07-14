import os
import sqlite3
from sqlite3 import Error
import smtplib
import pickle
import time
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

mails_sent_at_once = 2  # please use integer
inter_mail_wait_interval = 60  # seconds
db_file = "instance/pythonsqlite.db"
print("##########################")
print("sending stuff")

conn = None
try:
    conn = sqlite3.connect(db_file)
except Error as e:
    print(e)


""" Query all rows in the table and print them """
cur = conn.cursor()
cur.execute(f"SELECT * FROM newsletter_email")
rows = cur.fetchall()

cur.execute(f"SELECT MAX(id) FROM alerts")

current_id = cur.fetchone()[0]

if current_id is not None:

    print(current_id)

    last_id = int(0)
    if os.path.exists("old_id.pkl"):
        with open("old_id.pkl", 'rb') as f:
            last_id = pickle.load(f)

    if last_id < current_id:
        cur.execute(f"SELECT * FROM alerts WHERE id > ?", (last_id,))
        records = cur.fetchall()
        # for record in records:
            # print(record)
            # print(record[1])
            # print(record[2])

        # Your SMTP settings
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login("hubert.maka02@gmail.com", "tghiihavtzhamgam")
        counter = 0
        for row in rows:
            print(row[1])
            email_body = "Dear recipient,\n\nWe would like to share with you the following news:\n\n"
            for record in records:
                title = record[1]
                text = record[2]
                email_body += f"{title}\n{text}\n\n"
            email_body += f"Best regards,\nYour team\n\n\n\n\n\n\n http://127.0.0.1:5000/unsubscribe/{row[2]}"
            print(email_body)

            msg = MIMEMultipart()
            msg['From'] = 'muchamadplomba@gmail.com'
            msg['To'] = row[1]
            msg['Subject'] = "New alerts form P.I.W.O"
            body = email_body
            msg.attach(MIMEText(body, 'plain'))
            server.sendmail('YOUR_EMAIL@gmail.com', row[1], msg.as_string())

        # now sometimes we wait
            counter += 1
            if counter % mails_sent_at_once == 0:
                time.sleep(inter_mail_wait_interval)
        server.quit()
        print("sent")
    with open("old_id.pkl", "wb") as f:
        pickle.dump(current_id, f)