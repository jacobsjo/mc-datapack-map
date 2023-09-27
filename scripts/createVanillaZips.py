import requests
import zipfile
import io
from pathlib import Path
import shutil
from shutil import copytree

TMP_PATH = "/tmp/jacobsjo/createVanillaZips/"
UPDATE_1_20_PATH = TMP_PATH + "data/minecraft/datapacks/update_1_20/"

REQUIRED_DATA_TYPES = [
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
    "structures/ancient_city/city_center/city_center_",
    "structures/bastion/units/air_base",
    "structures/bastion/hoglin_stable/air_base",
    "structures/bastion/treasure/big_air_full",
    "structures/bastion/bridge/starting_pieces/entrance_base",
    "structures/pillager_outpost/base_plate",
    "structures/trail_ruins/tower/tower_",
    "structures/village/plains/town_centers/",
    "structures/village/desert/town_centers/",
    "structures/village/savanna/town_centers/",
    "structures/village/snowy/town_centers/",
    "structures/village/taiga/town_centers/",
    "structures/village/plains/zombie/town_centers/",
    "structures/village/desert/zombie/town_centers/",
    "structures/village/savanna/zombie/town_centers/",
    "structures/village/snowy/zombie/town_centers/",
    "structures/village/taiga/zombie/town_centers/",
    "tags/worldgen/world_preset",
    "tags/worldgen/biome",
    "tags/worldgen/structure",
]

REQUIRED_ASSETS_TYPES = [
    "lang"
]

REQUIRED_PATHS = ["data/minecraft/datapacks/update_1_20/pack.mcmeta"]

for path in REQUIRED_DATA_TYPES:
    REQUIRED_PATHS.append("data/minecraft/" + path)
    REQUIRED_PATHS.append("data/minecraft/datapacks/update_1_20/data/minecraft/" + path)

for path in REQUIRED_ASSETS_TYPES:
    REQUIRED_PATHS.append("assets/minecraft/" + path)

def download_and_extract(url: str):
    with zipfile.ZipFile(io.BytesIO(requests.get(url).content)) as jar:
        for file in jar.infolist():
            file.filename = file.filename.split('/', 1)[1]
            for path in REQUIRED_PATHS:
                if (file.filename.startswith(path)):
                    jar.extract(file, TMP_PATH)


def main(version: str, include_update_1_20: bool, suffix: str = ""):
    # empty temp folder
    print("Emptying temp folder")
    emptyTmp()

    # get client jar
    print("Getting client data")
    download_and_extract(f'https://github.com/misode/mcmeta/archive/refs/tags/{version}-data.zip')
    download_and_extract(f'https://github.com/misode/mcmeta/archive/refs/tags/{version}-assets-json.zip')

    # add datapack base
    print("Copying base files")
    copytree("vanilla_datapack_base/", TMP_PATH, dirs_exist_ok=True)

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
    main('1.20', False, "_1_20")
