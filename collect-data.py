from multiprocessing.pool import Pool
import requests
import json
import os


base_url = 'http://api.guildwars2.com'
api_v2_url = '{}/v2'.format(base_url)
num_of_processes = 32

def main():
    resources = [
        'traits',
        'skills',
    ]

    for resource in resources:
        save_resource_from_api(resource)

def save_resources(resources):
    resources_file_name = './api/index.html'
    create_dir('./api')
    with open(resources_file_name, 'w') as f:
        json.dump(resources, f, indent=4, sort_keys=True)
        print('[Info] Saved : {}'.format(resources_file_name))

def save_resource_from_api(resource):
    resource_url = '{}/{}'.format(api_v2_url, resource)
    resource_response = requests.get(resource_url)
    item_ids = resource_response.json()

    save_resource_with_ids(resource, item_ids)

    params = list(zip([resource] * len(item_ids), item_ids))
    p = Pool(num_of_processes)
    p.map(save_item_from_api, params)

def save_resource_with_ids(resource, item_ids):
    resource_file_name = './api/{}/index.html'.format(resource)
    create_dir('./api/{}'.format(resource))
    with open(resource_file_name, 'w') as f:
        json.dump(item_ids, f, indent=4, sort_keys=True)
        print('[Info] Saved : {}'.format(resource_file_name))

def save_item_from_api(param):
    resource = param[0]
    item_id = param[1]
    file_name = './api/{}/{}'.format(resource, item_id)

    if is_valid_file(file_name):
        print('[info] Skip : {}'.format(file_name))
        return

    item_url = '{}/{}/{}'.format(api_v2_url, resource, item_id)
    item_response = requests.get(item_url)
    item_json = item_response.json()
    save_item_with_id_by_resource(resource, item_json, item_id)

def create_dir(dir_name):
    try:
        if not os.path.exists(dir_name):
            os.makedirs(dir_name)
    except OSError:
        print('[Error] Create directory : {}'.format(dir_name))

def save_json(file_name, data):
    with open(file_name, 'w') as f:
        json.dump(data, f, indent=4, sort_keys=True)

def save_item_with_id_by_resource(resource, item, id):
    dir_name = './api/{}'.format(resource)
    file_name = '{}/{}'.format(dir_name, id)
    create_dir(dir_name)
    save_json(file_name, item)
    print('[Info] Saved : {}'.format(file_name))

def is_valid_file(file_name):
    try:
        if not os.path.exists(file_name):
            return False
        
        with open(file_name, 'r') as f:
            data = json.load(f)
            if ('text' in data) and (data['text'] == 'too many requests'):
                return False
            else:
                return True
    except BaseException:
        return False


if __name__ == '__main__':
    main()
