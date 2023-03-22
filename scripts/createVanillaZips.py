import requests
import zipfile
import io
from pathlib import Path
import shutil
from distutils.dir_util import copy_tree

TMP_PATH = "/tmp/jacobsjo/createVanillaZips/"
UPDATE_1_20_PATH = TMP_PATH + "data/minecraft/datapacks/update_1_20/"

REQUIRED_TYPES = [
    "worldgen/world_preset",
    "worldgen/density_function",
    "worldgen/noise",
    "worldgen/noise_settings",
    "worldgen/biome",
    "worldgen/structure",
    "worldgen/structure_set",
    "worldgen/template_pool",
    "worldgen/multi_noise_biome_source_parameter_list",
    "dimension_type",
    "structures",
    "tags/worldgen/world_preset",
    "tags/worldgen/biome",
]

REQUIRED_PATHS = ["data/minecraft/datapacks/update_1_20/pack.mcmeta"]

for path in REQUIRED_TYPES:
    REQUIRED_PATHS.append("data/minecraft/" + path)
    REQUIRED_PATHS.append("data/minecraft/datapacks/update_1_20/data/minecraft/" + path)


def main(version: str, include_update_1_20: bool, suffix: str = ""):
    # empty temp folder
    print("Emptying temp folder")
    emptyTmp()

    # get client jar
    print("Getting client jar")
    manifest = requests.get('https://piston-meta.mojang.com/mc/game/version_manifest_v2.json').json()
    version_entry = next((e for e in manifest['versions'] if e['id'] == version))
    version_json = requests.get(version_entry['url']).json()
    client_link = version_json['downloads']['client']['url']

    # extract required parts of client jar
    print("Extracting client jar")
    with zipfile.ZipFile(io.BytesIO(requests.get(client_link).content)) as jar:
        for file in jar.namelist():
            for path in REQUIRED_PATHS:
                if (file.startswith(path)):
                    jar.extract(file, TMP_PATH)

    # add datapack base
    print("Copying base files")
    copy_tree("vanilla_datapack_base/", TMP_PATH)

    # zip back up
    print("Creating fip files")
    if include_update_1_20:
        shutil.make_archive("public/vanilla_datapacks/update_1_20", 'zip', UPDATE_1_20_PATH)
        shutil.rmtree(UPDATE_1_20_PATH)

    shutil.make_archive("public/vanilla_datapacks/vanilla" + suffix, 'zip', TMP_PATH)

    print("Done!")

def emptyTmp():
    tmppath = Path(TMP_PATH)
    if (tmppath.exists() and tmppath.is_dir()):
        shutil.rmtree(tmppath)


if __name__ == "__main__":
    main('1.19.4', True, "_1_19")
    main('23w12a', False, "_1_20")
