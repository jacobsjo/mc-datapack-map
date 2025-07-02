import requests
import zipfile
import io
from pathlib import Path
import shutil
from shutil import copytree

TMP_PATH = "/tmp/jacobsjo/createVanillaZips/"
DATAPACK_PATH = TMP_PATH + "data/minecraft/datapacks/"

REQUIRED_STRUCTURE_TEMPLATES = [
    "ancient_city/city_center/city_center_",
    "bastion/units/air_base",
    "bastion/hoglin_stable/air_base",
    "bastion/treasure/big_air_full",
    "bastion/bridge/starting_pieces/entrance_base",
    "pillager_outpost/base_plate",
    "trail_ruins/tower/tower_",
    "village/plains/town_centers/",
    "village/desert/town_centers/",
    "village/savanna/town_centers/",
    "village/snowy/town_centers/",
    "village/taiga/town_centers/",
    "village/plains/zombie/town_centers/",
    "village/desert/zombie/town_centers/",
    "village/savanna/zombie/town_centers/",
    "village/snowy/zombie/town_centers/",
    "village/taiga/zombie/town_centers/",
    "trial_chambers/corridor/end",
]

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
    "tags/worldgen/world_preset",
    "tags/worldgen/biome",
    "tags/worldgen/structure",
]

for path in REQUIRED_STRUCTURE_TEMPLATES:
    REQUIRED_DATA_TYPES.append(f'structures/{path}')
    REQUIRED_DATA_TYPES.append(f'structure/{path}')

REQUIRED_ASSETS_TYPES = [
    "lang/de_de",
    "lang/en_us",
    "lang/fr_fr",
    "lang/pt_br",
    "lang/ru_ru",
    "lang/zh_cn",
    "lang/tr_tr",
    "lang/ja_jp",
    "lang/vi_vn",
    "lang/th_th",
    "lang/he_il"
]

REQUIRED_PATHS = [
    "pack.mcmeta",
    "data/minecraft/datapacks/update_1_20/pack.mcmeta",
    "data/minecraft/datapacks/update_1_21/pack.mcmeta",
    "data/minecraft/datapacks/winter_drop/pack.mcmeta"
]

for path in REQUIRED_DATA_TYPES:
    REQUIRED_PATHS.append(f'data/minecraft/{path}')
    REQUIRED_PATHS.append(f'data/minecraft/datapacks/update_1_20/data/minecraft/{path}')
    REQUIRED_PATHS.append(f'data/minecraft/datapacks/update_1_21/data/minecraft/{path}')
    REQUIRED_PATHS.append(f'data/minecraft/datapacks/winter_drop/data/minecraft/{path}')

for path in REQUIRED_ASSETS_TYPES:
    REQUIRED_PATHS.append("assets/minecraft/" + path)

def download_and_extract(url: str):
    with zipfile.ZipFile(io.BytesIO(requests.get(url).content)) as jar:
        for file in jar.infolist():
            file.filename = file.filename.split('/', 1)[1]
            for path in REQUIRED_PATHS:
                if (file.filename.startswith(path)):
                    jar.extract(file, TMP_PATH)


def main(version: str, include_datapack: str = "", suffix: str = ""):
    # empty temp folder
    print("Emptying temp folder")
    emptyTmp()

    # get client jar
    print("Getting client data")
    download_and_extract(f'https://github.com/misode/mcmeta/archive/refs/{version}assets-json.zip')
    download_and_extract(f'https://github.com/misode/mcmeta/archive/refs/{version}data.zip')

    # add datapack base
    print("Copying base files")
    copytree("vanilla_datapack_base/", TMP_PATH, dirs_exist_ok=True)

    # zip back up
    print("Creating zip files")
    if include_datapack != "":
        shutil.make_archive("public/vanilla_datapacks/vanilla" + suffix + "_" + include_datapack, 'zip', DATAPACK_PATH + include_datapack + "/")
        shutil.rmtree(DATAPACK_PATH + include_datapack + "/")

    shutil.make_archive("public/vanilla_datapacks/vanilla" + suffix, 'zip', TMP_PATH)

    print("Done!")

def emptyTmp():
    tmppath = Path(TMP_PATH)
    if (tmppath.exists() and tmppath.is_dir()):
        shutil.rmtree(tmppath)


if __name__ == "__main__":
    main('tags/1.19.4-', "update_1_20", "_1_19")
    main('tags/1.20.1-', "", "_1_20")
    main('tags/1.20.2-', "", "_1_20_2")
    main('tags/1.20.4-', "update_1_21", "_1_20_4")
    main('tags/1.20.6-', "update_1_21", "_1_20_6")
    main('tags/1.21-', "", "_1_21")
    main('tags/1.21.3-', "winter_drop", "_1_21_3")
    main('tags/1.21.4-', "", "_1_21_4")
    main('tags/1.21.5-', "", "_1_21_5")
    main('tags/1.21.7-', "", "_1_21_7")

