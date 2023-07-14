import sqlite3
from sqlite3 import Error


def delete(token):
    db_file = "instance/pythonsqlite.db"

    conn = None
    try:
        conn = sqlite3.connect(db_file)
    except Error as e:
        print(e)
    if not conn:
        return 66
    cur = conn.cursor()
    delete_sql = "DELETE FROM newsletter_email WHERE forget_not=?"
    cur.execute(delete_sql, (token,))

    conn.commit()
    conn.close()
