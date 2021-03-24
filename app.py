from flask import Flask, jsonify, render_template, request
from random import randint
import requests
import json

app = Flask(__name__)


def save_most_recent_pokemon(d):
    with open('most_recent_pokemon.json', 'w') as f:
        json.dump(d, f, indent=4)

def load_most_recent_pokemon():
    with open('most_recent_pokemon.json', 'r') as f:
        return json.load(f)

@app.route('/', methods=['GET'])
def root():
    pokemons = []
    for x in range(10):
        number = str(randint(1,151))
        baseapi = f'https://pokeapi.co/api/v2/pokemon/{number}'
        r = requests.get(baseapi).json()
        d = {
            'number': number,
            'name': r['name'].upper(),
            'speed': r['stats'][-1]['base_stat'],
            'defense': r['stats'][2]['base_stat'],
            'special_defense': r['stats'][4]['base_stat'],
            'attack': r['stats'][1]['base_stat'],
            'special_attack': r['stats'][3]['base_stat'],
            'hp': r['stats'][0]['base_stat'],
            'weight': r['weight'],
            'image_url': r['sprites']['other']['dream_world']['front_default']
        }
        pokemons.append(d)
    recent_pokemon_data = load_most_recent_pokemon()
    return render_template('index.html',pokemons=pokemons, recent_pokemon_data=recent_pokemon_data)

@app.route('/random_pokemon', methods=['GET'])
def random_pokemon():
    number = str(randint(1,151))
    baseapi = f'https://pokeapi.co/api/v2/pokemon/{number}'
    r = requests.get(baseapi).json()
    d = {
        'number': number,
        'name': r['name'].upper(),
        'speed': r['stats'][-1]['base_stat'],
        'defense': r['stats'][2]['base_stat'],
        'special_defense': r['stats'][4]['base_stat'],
        'attack': r['stats'][1]['base_stat'],
        'special_attack': r['stats'][3]['base_stat'],
        'hp': r['stats'][0]['base_stat'],
        'weight': r['weight'],
        'image_url': r['sprites']['other']['dream_world']['front_default']
    }
    save_most_recent_pokemon(d)
    return jsonify(d)


@app.route('/save_recent_pokemon', methods=['POST'])
def save_recent_pokemon():
    request_info = request.get_json(force=True)
    save_most_recent_pokemon(request_info)
    return {'message': 'successful'}


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)