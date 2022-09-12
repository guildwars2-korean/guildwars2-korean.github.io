from multiprocessing import Pool
import json
import os

from dictionary import DICTIONARY_FOR_TRANSLATION


origin_dir_name = 'origin'
translated_dir_name = 'v2'
ignore_file_name = 'index.html'

dictionary_for_translation = DICTIONARY_FOR_TRANSLATION

each_weapon_type_pre_format = '''                      <Card style={{{{marginBottom: 10}}}}>
                        <Card.Header>{}</Card.Header>
                        <Card.Body>
                          <Row>'''
each_weapon_type_post_format = '''                          </Row>
                        </Card.Body>
                      </Card>'''
each_slot_pre_format = '''                            <Col>
                              <Card style={{{{marginBottom: 10}}}}>
                                <Card.Header>{}</Card.Header>
                                <Card.Body>'''
each_slot_post_format = '''                                </Card.Body>
                              </Card>
                            </Col>'''


def main(profession, specialization, type):
    skills_by_weapon_type = get_skills(profession, specialization, type)
    weapon_types = sorted(skills_by_weapon_type.keys())
    if 'Downed' in weapon_types:
        weapon_types.remove('Downed')
        weapon_types.insert(0, 'Downed')
    for weapon_type in weapon_types:
        slot_skills = skills_by_weapon_type[weapon_type]
        print(each_weapon_type_pre_format.format(weapon_type))
        for slot in sorted(slot_skills.keys()):
            skills = sorted(slot_skills[slot], key=lambda d: d['id'])
            print(each_slot_pre_format.format(slot.split('_')[1]))
            for skill in skills:
                id = skill['id']
                name = skill['name']
                print('                                  <Skill id={{{}}} /> {{/* {} */}}<br></br>'.format(id, name))
            print(each_slot_post_format)
        print(each_weapon_type_post_format)


def get_skill_ids():
    items = os.listdir('./{}/{}'.format(origin_dir_name, 'skills'))
    items.remove(ignore_file_name)
    return items

def get_skills(profession, specialization, type):
    skill_ids = get_skill_ids()
    skills_by_weapon_type = {}
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
        weapon_type = skill.get('weapon_type', None)
        if weapon_type == 'None':
            weapon_type = 'Downed'
        if weapon_type not in skills_by_weapon_type:
            skills_by_weapon_type[weapon_type] = {}
        slot = skill.get('slot', None)
        if slot not in skills_by_weapon_type[weapon_type]:
            skills_by_weapon_type[weapon_type][slot] = []
        skills_by_weapon_type[weapon_type][slot].append(skill)
    return skills_by_weapon_type

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

    profession = 'Elementalist'
    specialization = 67


    types = [('Weapon', '무기')]
    card_pre_format = '''              <Col xl="12" style={{{{marginBottom: 10}}}}>
                <Card style={{{{marginBottom: 10}}}}>
                  <Card.Header>무기 스킬</Card.Header>
                  <Card.Body>'''
    card_post_format = '''                    </Card.Body>
                  </Card>
              </Col>'''
    for each in types:
        type = each[0]
        type_kr = each[1]
        print(card_pre_format.format(type_kr))
        skills = main(profession, specialization, type)
        print(card_post_format)
