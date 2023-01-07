from flask import Flask, redirect, url_for, render_template, request,jsonify,flash
import mysql.connector

app = Flask(__name__)
app.config['SECRET_KEY'] = "mi sxxxxuper clxxxave secrxxxssseta"


conn=mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    db="votaciones"
)


@app.route('/', methods=['GET', 'POST'])
def home():    
    return redirect('auth')

@app.route('/auth', methods=['GET', 'POST'])
def auth():
    if request.method == 'POST':
        # Handle POST Request here
        email=request.form['email']
        password=request.form['password']
        cur=conn.cursor()
        cur.execute("SELECT email,password FROM coordinator")
        data=cur.fetchall()        
        for dat in data:           
            if email==dat[0]:
                if password==dat[1]:                                      
                    return redirect('form')
                else:
                    flash('Contraseña incorrecta','error') 
                    return redirect('auth')   
            else:
                flash('Email incorrecto','error')  
                return redirect('auth')                      
        # return jsonify({"message":"ada"})
    return render_template('index.html')

@app.route('/form',methods=['GET','POST'])
def form():
    cur=conn.cursor()
    cur.execute("SELECT * FROM county")
    context=cur.fetchall()  
    if request.method == 'POST':
        year=request.form['year']
        Pparty=request.form['Pparty']
        county=request.form['county']
        Vcount=request.form['Vcount']        
        cur=conn.cursor()
        cur.execute("INSERT INTO election (year,politicalParty,voteCount, codeCounty) VALUES (%s,%s,%s,%s)", (year,Pparty,Vcount,county))
        conn.commit()
        flash("Registro agregado.","success")
        cur.execute("SELECT * FROM county")
        context=cur.fetchall()
        return render_template('form.html',context=context)
    return render_template('form.html',context=context)  


if __name__ == '__main__':
    # DEBUG is SET to TRUE. CHANGE FOR PROD
    app.run(port=5000, debug=True)
