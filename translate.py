from multiprocessing import Pool
import json
import os


num_of_processes = 32

origin_dir = 'origin'
translated_dir = 'api'
ignore_file_name = 'index.html'
dictionary_file_name = 'dictionary.json'

def get_dictionary():
    with open('./{}'.format(dictionary_file_name), 'r') as f:
        origin_dictionary = json.load(f)
        post_processed_dictionary = {}
        for k, v in origin_dictionary.items():
            post_processed_dictionary['"{}"'.format(k)] = '"{}"'.format(v)
        return post_processed_dictionary
        

dictionary_for_translation = get_dictionary()

def main():
    resources = get_resources()
    for resource in resources:
        translate_resource(resource)

def get_resources():
    resources = os.listdir('./{}'.format(origin_dir))
    resources.remove(ignore_file_name)
    return resources

def get_item_ids_by_resource(resource):
    items = os.listdir('./{}/{}'.format(origin_dir, resource))
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

    origin_item_path = './{}/{}/{}'.format(origin_dir, resource, item_id)
    origin_item_text = read_item(origin_item_path)

    translated_item_path = './{}/{}/{}'.format(translated_dir, resource, item_id)
    translated_item_text = origin_item_text.translate(dictionary_for_translation)
    save_item(translated_item_path, translated_item_text)

def read_item(item_path):
    with open(item_path, 'r') as f:
        return f.read()

def save_item(item_path, item):
    with open(item_path, 'w') as f:
        json.dump(item, f, indent=4, sort_keys=True)


if __name__ == '__main__':
    main()
