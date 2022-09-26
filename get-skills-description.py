from multiprocessing import Pool
import json
import os

from dictionary import DICTIONARY_FOR_TRANSLATION


origin_dir_name = 'origin'
ignore_file_name = 'index.html'

professions = [
    'Elementalist',
    'Engineer',
    'Guardian',
    'Mesmer',
    'Necromancer',
    'Ranger',
    'Revenant',
    'Thief',
    'Warrior',
    ]

specializations = [
    48, 57, 67,
    43, 57, 70,
    27, 62, 65,
    40, 59, 66,
    34, 60, 64,
    5, 55, 72,
    52, 63, 69,
    7, 58, 71,
    18, 61, 68,
]


def main():
    skills = get_skills()


def get_skill_ids():
    items = os.listdir('./{}/{}'.format(origin_dir_name, 'skills'))
    items.remove(ignore_file_name)
    return items

def get_skills():
    skill_ids = sorted(get_skill_ids())
    for skill_id in skill_ids:
        path = './{}/{}/{}'.format(origin_dir_name, 'skills', skill_id)
        skill = read_item(path)
        if not skill:
            continue
        each_professions = skill.get('professions', [])
        if not each_professions:
            continue
        description = skill.get('description', None)
        if not description:
            continue

        name = skill.get('name', None)
        if not name:
            continue

        description = repr(description)
        description = description[1:]
        description = description[:-1]

        print('{}@{}'.format(name, description))

def read_item(item_path):
    with open(item_path, 'r') as f:
        return json.load(f)


if __name__ == '__main__':
    main()
