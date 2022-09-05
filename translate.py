import copy
from multiprocessing import Pool
import json
import os

from dictionary import DICTIONARY_FOR_TRANSLATION


num_of_processes = 32

origin_dir_name = 'origin'
translated_dir_name = 'v2'
ignore_file_name = 'index.html'

dictionary_for_translation = DICTIONARY_FOR_TRANSLATION

def main():
    translated_dir = './{}'.format(translated_dir_name)
    create_dir(translated_dir)
    resources = get_resources()
    for resource in resources:
        translate_resource(resource)

def get_resources():
    resources = os.listdir('./{}'.format(origin_dir_name))
    resources.remove(ignore_file_name)
    return resources

def get_item_ids_by_resource(resource):
    items = os.listdir('./{}/{}'.format(origin_dir_name, resource))
    items.remove(ignore_file_name)
    return items

def translate_resource(resource):
    item_ids = get_item_ids_by_resource(resource)
    params = list(zip([resource] * len(item_ids), item_ids))
    p = Pool(num_of_processes)
    p.map(translate_item, params)

def translate_item(param):
    resource = param[0]
    item_id = param[1]

    origin_item_path = './{}/{}/{}'.format(origin_dir_name, resource, item_id)
    origin_item_text = read_item(origin_item_path)

    translated_item_path = './{}/{}/{}'.format(translated_dir_name, resource, item_id)
    translated_item_text = [json.loads(get_custom_transalted_text(origin_item_text, dictionary_for_translation))]
    translated_resource_dir = './{}/{}'.format(translated_dir_name, resource)
    create_dir(translated_resource_dir)
    save_item(translated_item_path, translated_item_text)

def get_custom_transalted_text(origin_text, dictionary):
    copied_text = copy.deepcopy(origin_text)
    for k, v in dictionary.items():
        copied_text = copied_text.replace('{}'.format(k), '{}'.format(v))
    return copied_text

def read_item(item_path):
    with open(item_path, 'r') as f:
        return f.read()

def save_item(item_path, item):
    with open(item_path, 'w', encoding='UTF-8') as f:
        json.dump(item, f, indent=4, sort_keys=True, ensure_ascii=False)

def create_dir(dir_name):
    try:
        if not os.path.exists(dir_name):
            os.makedirs(dir_name)
    except OSError:
        print('[Error] Create directory : {}'.format(dir_name))


if __name__ == '__main__':
    main()
