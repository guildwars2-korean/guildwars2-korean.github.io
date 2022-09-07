from multiprocessing import Pool
import json
import os

from dictionary import DICTIONARY_FOR_TRANSLATION


origin_dir_name = 'origin'
translated_dir_name = 'v2'
ignore_file_name = 'index.html'

dictionary_for_translation = DICTIONARY_FOR_TRANSLATION

def main(profession, specialization, type):
    skills = get_skills(profession, specialization, type)
    for skill in skills:  
        id = skill['id']
        name = skill['name']
        print('                    <Skill id={{{}}} /> {{/* {} */}}'.format(id, name))


def get_skill_ids():
    items = os.listdir('./{}/{}'.format(origin_dir_name, 'skills'))
    items.remove(ignore_file_name)
    return items

def get_skills(profession, specialization, type):
    skill_ids = get_skill_ids()
    skills = []
    for skill_id in skill_ids:
        path = './{}/{}/{}'.format(origin_dir_name, 'skills', skill_id)
        skill = read_item(path)
        if not skill:
            continue
        if specialization != skill.get('specialization', None):
            continue
        if type != skill.get('type', None):
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
    # 코어 직업은 specialization = None, 그 외는 각 specialization id 입력
    # Elementalist : [None, 48, 56, 67]
    # Engineer : [None, 43, 57, 70]
    # Guardian : [None, 27, 62, 65]
    # Mesmer : [None, 40, 59, 66]
    # Necromancer : [None, 34, 60, 64]
    # Ranger : [None, 5, 55, 72]
    # Revenant : [None, 52, 63, 69]
    # Thief : [None, 7, 58, 71]
    # Warrior : [None, 18, 61, 68]

    profession = 'Warrior'
    specialization = 68


    types = [('Profession', '직업'), ('Heal', '힐'), ('Utility', '유틸리티'), ('Elite', '엘리트')]
    card_pre_format = '''                <Card style={{{{marginBottom: 10}}}}>
                  <Card.Header>{} 스킬</Card.Header>
                  <Card.Body>'''
    card_post_format = '''                  </Card.Body>
                </Card>'''
    for each in types:
        type = each[0]
        type_kr = each[1]
        print(card_pre_format.format(type_kr))
        skills = main(profession, specialization, type)
        print(card_post_format)
