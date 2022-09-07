import copy
from multiprocessing import Pool
import json
import os

from dictionary import DICTIONARY_FOR_TRANSLATION

origin_dir_name = 'origin'
ignore_file_name = 'index.html'


def main():
    get_trait_descriptions()

def pre_translate_item(origin_text):
    copied_text = copy.deepcopy(origin_text)
    ignore_texts = [
        '<c=@abilitytype> ',
        '<c =@reminder> ',
        '<c =@activetype> ',
        '<c =@ablection> ',
        '<c=@abilitytype> ',
        '<c =@ablectionType> '
        '<c =@ablection -type> ',
        '<c=@reminder> ',
        '<c=@abilitytype>',
        '<c=@reminder>',
        '<c=@warning>',
        '<c=@skill>',
        '<c=@AbilityType>',
        ' <c/>',
        '<c/>',
        '</c>',
    ]
    for ignore_text in ignore_texts:
        copied_text = copied_text.replace(ignore_text, '')
    return copied_text

def get_trait_ids():
    items = os.listdir('./{}/{}'.format(origin_dir_name, 'traits'))
    items.remove(ignore_file_name)
    return items

def get_trait_descriptions():
    trait_ids = get_trait_ids()
    for trait_id in trait_ids:
        path = './{}/{}/{}'.format(origin_dir_name, 'traits', trait_id)
        trait = read_item(path)
        if not trait:
            continue
        
        description = trait.get('description', None)
        if not description:
            continue

        name = trait.get('name', None)
        if not name:
            continue

        description = pre_translate_item(description)
        description = repr(description)
        description = description[1:]
        description = description[:-1]

        print('{}@{}'.format(name, description))

def read_item(item_path):
    with open(item_path, 'r') as f:
        return json.load(f)


if __name__ == '__main__':
    main()
