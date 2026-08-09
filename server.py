from flask import Flask, send_from_directory, request, jsonify
import os

app = Flask(__name__)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

@app.route('/')
def home():
    return send_from_directory(BASE_DIR, 'index.html')

@app.route('/<path:filename>')
def serve_static(filename):
    # Барои ҳамаи файлҳои дигар (events.html, heroes.html, css, js ва ғайра)
    return send_from_directory(BASE_DIR, filename)

@app.route('/api/site_search', methods=['POST'])
def site_search():
    data = request.get_json()
    query = data.get('query', '').strip().lower()

    search_results = {
        'исмоили сомонӣ': 'heroes.html',
        'сомониён': 'periods.html',
        'рудакӣ': 'heroes.html',
        'ибни сино': 'heroes.html',
        'фирдавсӣ': 'heroes.html',
        'конститутсия': 'konstitutsia.html',
        'президент': 'prezident.html',
        'эмомалӣ раҳмон': 'prezident.html',
        'китоб': 'kitobho.html',
        'китобҳо': 'kitobho.html',
        'ҳуқуқ': 'thelaw.html',
        'олимпиада': 'thelaw.html',
    }

    for key, page in search_results.items():
        if key in query:
            return jsonify({'success': True, 'redirect': page})

    return jsonify({'success': False, 'message': 'Натиҷа ёфт нашуд'})

if __name__ == '__main__':
    print("Сервер дар http://127.0.0.1:5000/ оғоз мешавад...")
    print("Барои боздоштан → Ctrl + C дар терминал")
    app.run(debug=True, host='0.0.0.0', port=5000)