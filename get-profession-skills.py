from multiprocessing import Pool
import json
import os

from dictionary import DICTIONARY_FOR_TRANSLATION


origin_dir_name = 'origin'
translated_dir_name = 'v2'
ignore_file_name = 'index.html'

dictionary_for_translation = DICTIONARY_FOR_TRANSLATION

def main(profession, specialization):
    skills = get_skills(profession, specialization)
    for skill in skills:  
        id = skill['id']
        name = skill['name']
        print('<Skill id={{{}}} /> {{/* {} */}}'.format(id, name))


def get_skill_ids():
    items = os.listdir('./{}/{}'.format(origin_dir_name, 'skills'))
    items.remove(ignore_file_name)
    return items

def get_skills(profession, specialization):
    skill_ids = get_skill_ids()
    skills = []
    for skill_id in skill_ids:
        path = './{}/{}/{}'.format(origin_dir_name, 'skills', skill_id)
        skill = read_item(path)
        if not skill:
            continue
        if specialization != skill.get('specialization', None):
                continue
        if skill.get('slot', '') not in ['Heal', 'Utility']:
            continue
        if len(skill.get('professions', [])) > 1:
            continue
        if profession not in skill.get('professions', []):
            continue
        skills.append(skill)
    return skills

def read_item(item_path):
    with open(item_path, 'r') as f:
        return json.load(f)


if __name__ == '__main__':
    profession = 'Warrior'
    # 코어 직업은 specialization = None, 그 외는 각 specialization id 입력
    specialization = 68
    main(profession, specialization)
