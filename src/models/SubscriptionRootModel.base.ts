/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonModel, PokemonV2PokemonModelType } from "./PokemonV2PokemonModel"
import { PokemonV2PokemonModelSelector } from "./PokemonV2PokemonModel.base"
import { PokemonV2PokemoncolorModel, PokemonV2PokemoncolorModelType } from "./PokemonV2PokemoncolorModel"
import { PokemonV2PokemoncolorModelSelector } from "./PokemonV2PokemoncolorModel.base"
import { PokemonV2PokemoncolornameModel, PokemonV2PokemoncolornameModelType } from "./PokemonV2PokemoncolornameModel"
import { PokemonV2PokemoncolornameModelSelector } from "./PokemonV2PokemoncolornameModel.base"
import { PokemonV2PokemonspeciesModel, PokemonV2PokemonspeciesModelType } from "./PokemonV2PokemonspeciesModel"
import { PokemonV2PokemonspeciesModelSelector } from "./PokemonV2PokemonspeciesModel.base"
import { PokemonV2PokemonspeciesflavortextModel, PokemonV2PokemonspeciesflavortextModelType } from "./PokemonV2PokemonspeciesflavortextModel"
import { PokemonV2PokemonspeciesflavortextModelSelector } from "./PokemonV2PokemonspeciesflavortextModel.base"
import { PokemonV2PokemonspeciesnameModel, PokemonV2PokemonspeciesnameModelType } from "./PokemonV2PokemonspeciesnameModel"
import { PokemonV2PokemonspeciesnameModelSelector } from "./PokemonV2PokemonspeciesnameModel.base"
import { PokemonV2PokemontypeModel, PokemonV2PokemontypeModelType } from "./PokemonV2PokemontypeModel"
import { PokemonV2PokemontypeModelSelector } from "./PokemonV2PokemontypeModel.base"
import { PokemonV2TypeModel, PokemonV2TypeModelType } from "./PokemonV2TypeModel"
import { PokemonV2TypeModelSelector } from "./PokemonV2TypeModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  pokemon_v2_pokemon: IObservableArray<PokemonV2PokemonModelType>;
  pokemon_v2_pokemon_by_pk: PokemonV2PokemonModelType;
}

/**
 * SubscriptionRootBase
 * auto generated base class for the model SubscriptionRootModel.
 */
export const SubscriptionRootModelBase = withTypedRefs<Refs>()(ModelBase
  .named('SubscriptionRoot')
  .props({
    __typename: types.optional(types.literal("subscription_root"), "subscription_root"),
    /** fetch data from the table: "pokemon_v2_ability" */
    pokemon_v2_ability: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_ability" */
    pokemon_v2_ability_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_ability" using primary key columns */
    pokemon_v2_ability_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_abilitychange" */
    pokemon_v2_abilitychange: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_abilitychange" */
    pokemon_v2_abilitychange_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_abilitychange" using primary key columns */
    pokemon_v2_abilitychange_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_abilitychangeeffecttext" */
    pokemon_v2_abilitychangeeffecttext: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_abilitychangeeffecttext" */
    pokemon_v2_abilitychangeeffecttext_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_abilitychangeeffecttext" using primary key columns */
    pokemon_v2_abilitychangeeffecttext_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_abilityeffecttext" */
    pokemon_v2_abilityeffecttext: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_abilityeffecttext" */
    pokemon_v2_abilityeffecttext_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_abilityeffecttext" using primary key columns */
    pokemon_v2_abilityeffecttext_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_abilityflavortext" */
    pokemon_v2_abilityflavortext: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_abilityflavortext" */
    pokemon_v2_abilityflavortext_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_abilityflavortext" using primary key columns */
    pokemon_v2_abilityflavortext_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_abilityname" */
    pokemon_v2_abilityname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_abilityname" */
    pokemon_v2_abilityname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_abilityname" using primary key columns */
    pokemon_v2_abilityname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_berry" */
    pokemon_v2_berry: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_berry" */
    pokemon_v2_berry_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_berry" using primary key columns */
    pokemon_v2_berry_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_berryfirmness" */
    pokemon_v2_berryfirmness: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_berryfirmness" */
    pokemon_v2_berryfirmness_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_berryfirmness" using primary key columns */
    pokemon_v2_berryfirmness_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_berryfirmnessname" */
    pokemon_v2_berryfirmnessname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_berryfirmnessname" */
    pokemon_v2_berryfirmnessname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_berryfirmnessname" using primary key columns */
    pokemon_v2_berryfirmnessname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_berryflavor" */
    pokemon_v2_berryflavor: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_berryflavor" */
    pokemon_v2_berryflavor_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_berryflavor" using primary key columns */
    pokemon_v2_berryflavor_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_berryflavormap" */
    pokemon_v2_berryflavormap: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_berryflavormap" */
    pokemon_v2_berryflavormap_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_berryflavormap" using primary key columns */
    pokemon_v2_berryflavormap_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_berryflavorname" */
    pokemon_v2_berryflavorname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_berryflavorname" */
    pokemon_v2_berryflavorname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_berryflavorname" using primary key columns */
    pokemon_v2_berryflavorname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_characteristic" */
    pokemon_v2_characteristic: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_characteristic" */
    pokemon_v2_characteristic_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_characteristic" using primary key columns */
    pokemon_v2_characteristic_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_characteristicdescription" */
    pokemon_v2_characteristicdescription: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_characteristicdescription" */
    pokemon_v2_characteristicdescription_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_characteristicdescription" using primary key columns */
    pokemon_v2_characteristicdescription_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_contestcombo" */
    pokemon_v2_contestcombo: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_contestcombo" */
    pokemon_v2_contestcombo_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_contestcombo" using primary key columns */
    pokemon_v2_contestcombo_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_contesteffect" */
    pokemon_v2_contesteffect: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_contesteffect" */
    pokemon_v2_contesteffect_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_contesteffect" using primary key columns */
    pokemon_v2_contesteffect_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_contesteffecteffecttext" */
    pokemon_v2_contesteffecteffecttext: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_contesteffecteffecttext" */
    pokemon_v2_contesteffecteffecttext_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_contesteffecteffecttext" using primary key columns */
    pokemon_v2_contesteffecteffecttext_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_contesteffectflavortext" */
    pokemon_v2_contesteffectflavortext: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_contesteffectflavortext" */
    pokemon_v2_contesteffectflavortext_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_contesteffectflavortext" using primary key columns */
    pokemon_v2_contesteffectflavortext_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_contesttype" */
    pokemon_v2_contesttype: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_contesttype" */
    pokemon_v2_contesttype_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_contesttype" using primary key columns */
    pokemon_v2_contesttype_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_contesttypename" */
    pokemon_v2_contesttypename: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_contesttypename" */
    pokemon_v2_contesttypename_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_contesttypename" using primary key columns */
    pokemon_v2_contesttypename_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_egggroup" */
    pokemon_v2_egggroup: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_egggroup" */
    pokemon_v2_egggroup_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_egggroup" using primary key columns */
    pokemon_v2_egggroup_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_egggroupname" */
    pokemon_v2_egggroupname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_egggroupname" */
    pokemon_v2_egggroupname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_egggroupname" using primary key columns */
    pokemon_v2_egggroupname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_encounter" */
    pokemon_v2_encounter: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_encounter" */
    pokemon_v2_encounter_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_encounter" using primary key columns */
    pokemon_v2_encounter_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_encountercondition" */
    pokemon_v2_encountercondition: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_encountercondition" */
    pokemon_v2_encountercondition_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_encountercondition" using primary key columns */
    pokemon_v2_encountercondition_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_encounterconditionname" */
    pokemon_v2_encounterconditionname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_encounterconditionname" */
    pokemon_v2_encounterconditionname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_encounterconditionname" using primary key columns */
    pokemon_v2_encounterconditionname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_encounterconditionvalue" */
    pokemon_v2_encounterconditionvalue: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_encounterconditionvalue" */
    pokemon_v2_encounterconditionvalue_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_encounterconditionvalue" using primary key columns */
    pokemon_v2_encounterconditionvalue_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_encounterconditionvaluemap" */
    pokemon_v2_encounterconditionvaluemap: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_encounterconditionvaluemap" */
    pokemon_v2_encounterconditionvaluemap_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_encounterconditionvaluemap" using primary key columns */
    pokemon_v2_encounterconditionvaluemap_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_encounterconditionvaluename" */
    pokemon_v2_encounterconditionvaluename: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_encounterconditionvaluename" */
    pokemon_v2_encounterconditionvaluename_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_encounterconditionvaluename" using primary key columns */
    pokemon_v2_encounterconditionvaluename_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_encountermethod" */
    pokemon_v2_encountermethod: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_encountermethod" */
    pokemon_v2_encountermethod_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_encountermethod" using primary key columns */
    pokemon_v2_encountermethod_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_encountermethodname" */
    pokemon_v2_encountermethodname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_encountermethodname" */
    pokemon_v2_encountermethodname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_encountermethodname" using primary key columns */
    pokemon_v2_encountermethodname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_encounterslot" */
    pokemon_v2_encounterslot: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_encounterslot" */
    pokemon_v2_encounterslot_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_encounterslot" using primary key columns */
    pokemon_v2_encounterslot_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_evolutionchain" */
    pokemon_v2_evolutionchain: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_evolutionchain" */
    pokemon_v2_evolutionchain_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_evolutionchain" using primary key columns */
    pokemon_v2_evolutionchain_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_evolutiontrigger" */
    pokemon_v2_evolutiontrigger: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_evolutiontrigger" */
    pokemon_v2_evolutiontrigger_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_evolutiontrigger" using primary key columns */
    pokemon_v2_evolutiontrigger_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_evolutiontriggername" */
    pokemon_v2_evolutiontriggername: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_evolutiontriggername" */
    pokemon_v2_evolutiontriggername_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_evolutiontriggername" using primary key columns */
    pokemon_v2_evolutiontriggername_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_experience" */
    pokemon_v2_experience: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_experience" */
    pokemon_v2_experience_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_experience" using primary key columns */
    pokemon_v2_experience_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_gender" */
    pokemon_v2_gender: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_gender" */
    pokemon_v2_gender_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_gender" using primary key columns */
    pokemon_v2_gender_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_generation" */
    pokemon_v2_generation: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_generation" */
    pokemon_v2_generation_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_generation" using primary key columns */
    pokemon_v2_generation_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_generationname" */
    pokemon_v2_generationname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_generationname" */
    pokemon_v2_generationname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_generationname" using primary key columns */
    pokemon_v2_generationname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_growthrate" */
    pokemon_v2_growthrate: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_growthrate" */
    pokemon_v2_growthrate_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_growthrate" using primary key columns */
    pokemon_v2_growthrate_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_growthratedescription" */
    pokemon_v2_growthratedescription: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_growthratedescription" */
    pokemon_v2_growthratedescription_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_growthratedescription" using primary key columns */
    pokemon_v2_growthratedescription_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_item" */
    pokemon_v2_item: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_item" */
    pokemon_v2_item_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_item" using primary key columns */
    pokemon_v2_item_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemattribute" */
    pokemon_v2_itemattribute: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_itemattribute" */
    pokemon_v2_itemattribute_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemattribute" using primary key columns */
    pokemon_v2_itemattribute_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemattributedescription" */
    pokemon_v2_itemattributedescription: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_itemattributedescription" */
    pokemon_v2_itemattributedescription_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemattributedescription" using primary key columns */
    pokemon_v2_itemattributedescription_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemattributemap" */
    pokemon_v2_itemattributemap: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_itemattributemap" */
    pokemon_v2_itemattributemap_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemattributemap" using primary key columns */
    pokemon_v2_itemattributemap_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemattributename" */
    pokemon_v2_itemattributename: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_itemattributename" */
    pokemon_v2_itemattributename_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemattributename" using primary key columns */
    pokemon_v2_itemattributename_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemcategory" */
    pokemon_v2_itemcategory: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_itemcategory" */
    pokemon_v2_itemcategory_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemcategory" using primary key columns */
    pokemon_v2_itemcategory_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemcategoryname" */
    pokemon_v2_itemcategoryname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_itemcategoryname" */
    pokemon_v2_itemcategoryname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemcategoryname" using primary key columns */
    pokemon_v2_itemcategoryname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemeffecttext" */
    pokemon_v2_itemeffecttext: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_itemeffecttext" */
    pokemon_v2_itemeffecttext_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemeffecttext" using primary key columns */
    pokemon_v2_itemeffecttext_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemflavortext" */
    pokemon_v2_itemflavortext: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_itemflavortext" */
    pokemon_v2_itemflavortext_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemflavortext" using primary key columns */
    pokemon_v2_itemflavortext_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemflingeffect" */
    pokemon_v2_itemflingeffect: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_itemflingeffect" */
    pokemon_v2_itemflingeffect_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemflingeffect" using primary key columns */
    pokemon_v2_itemflingeffect_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemflingeffecteffecttext" */
    pokemon_v2_itemflingeffecteffecttext: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_itemflingeffecteffecttext" */
    pokemon_v2_itemflingeffecteffecttext_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemflingeffecteffecttext" using primary key columns */
    pokemon_v2_itemflingeffecteffecttext_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemgameindex" */
    pokemon_v2_itemgameindex: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_itemgameindex" */
    pokemon_v2_itemgameindex_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemgameindex" using primary key columns */
    pokemon_v2_itemgameindex_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemname" */
    pokemon_v2_itemname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_itemname" */
    pokemon_v2_itemname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemname" using primary key columns */
    pokemon_v2_itemname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itempocket" */
    pokemon_v2_itempocket: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_itempocket" */
    pokemon_v2_itempocket_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itempocket" using primary key columns */
    pokemon_v2_itempocket_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itempocketname" */
    pokemon_v2_itempocketname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_itempocketname" */
    pokemon_v2_itempocketname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itempocketname" using primary key columns */
    pokemon_v2_itempocketname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** An array relationship */
    pokemon_v2_itemsprites: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_itemsprites_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_itemsprites" using primary key columns */
    pokemon_v2_itemsprites_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_language" */
    pokemon_v2_language: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_language" */
    pokemon_v2_language_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_language" using primary key columns */
    pokemon_v2_language_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_languagename" */
    pokemon_v2_languagename: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_languagename" */
    pokemon_v2_languagename_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_languagename" using primary key columns */
    pokemon_v2_languagename_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_location" */
    pokemon_v2_location: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_location" */
    pokemon_v2_location_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_location" using primary key columns */
    pokemon_v2_location_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_locationarea" */
    pokemon_v2_locationarea: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_locationarea" */
    pokemon_v2_locationarea_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_locationarea" using primary key columns */
    pokemon_v2_locationarea_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_locationareaencounterrate" */
    pokemon_v2_locationareaencounterrate: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_locationareaencounterrate" */
    pokemon_v2_locationareaencounterrate_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_locationareaencounterrate" using primary key columns */
    pokemon_v2_locationareaencounterrate_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_locationareaname" */
    pokemon_v2_locationareaname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_locationareaname" */
    pokemon_v2_locationareaname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_locationareaname" using primary key columns */
    pokemon_v2_locationareaname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_locationgameindex" */
    pokemon_v2_locationgameindex: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_locationgameindex" */
    pokemon_v2_locationgameindex_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_locationgameindex" using primary key columns */
    pokemon_v2_locationgameindex_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_locationname" */
    pokemon_v2_locationname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_locationname" */
    pokemon_v2_locationname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_locationname" using primary key columns */
    pokemon_v2_locationname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_machine" */
    pokemon_v2_machine: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_machine" */
    pokemon_v2_machine_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_machine" using primary key columns */
    pokemon_v2_machine_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_move" */
    pokemon_v2_move: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_move" */
    pokemon_v2_move_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_move" using primary key columns */
    pokemon_v2_move_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_moveattribute" */
    pokemon_v2_moveattribute: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_moveattribute" */
    pokemon_v2_moveattribute_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_moveattribute" using primary key columns */
    pokemon_v2_moveattribute_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_moveattributedescription" */
    pokemon_v2_moveattributedescription: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_moveattributedescription" */
    pokemon_v2_moveattributedescription_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_moveattributedescription" using primary key columns */
    pokemon_v2_moveattributedescription_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_moveattributemap" */
    pokemon_v2_moveattributemap: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_moveattributemap" */
    pokemon_v2_moveattributemap_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_moveattributemap" using primary key columns */
    pokemon_v2_moveattributemap_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_moveattributename" */
    pokemon_v2_moveattributename: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_moveattributename" */
    pokemon_v2_moveattributename_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_moveattributename" using primary key columns */
    pokemon_v2_moveattributename_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movebattlestyle" */
    pokemon_v2_movebattlestyle: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_movebattlestyle" */
    pokemon_v2_movebattlestyle_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movebattlestyle" using primary key columns */
    pokemon_v2_movebattlestyle_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movebattlestylename" */
    pokemon_v2_movebattlestylename: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_movebattlestylename" */
    pokemon_v2_movebattlestylename_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movebattlestylename" using primary key columns */
    pokemon_v2_movebattlestylename_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movechange" */
    pokemon_v2_movechange: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_movechange" */
    pokemon_v2_movechange_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movechange" using primary key columns */
    pokemon_v2_movechange_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movedamageclass" */
    pokemon_v2_movedamageclass: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_movedamageclass" */
    pokemon_v2_movedamageclass_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movedamageclass" using primary key columns */
    pokemon_v2_movedamageclass_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movedamageclassdescription" */
    pokemon_v2_movedamageclassdescription: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_movedamageclassdescription" */
    pokemon_v2_movedamageclassdescription_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movedamageclassdescription" using primary key columns */
    pokemon_v2_movedamageclassdescription_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movedamageclassname" */
    pokemon_v2_movedamageclassname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_movedamageclassname" */
    pokemon_v2_movedamageclassname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movedamageclassname" using primary key columns */
    pokemon_v2_movedamageclassname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_moveeffect" */
    pokemon_v2_moveeffect: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_moveeffect" */
    pokemon_v2_moveeffect_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_moveeffect" using primary key columns */
    pokemon_v2_moveeffect_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_moveeffectchange" */
    pokemon_v2_moveeffectchange: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_moveeffectchange" */
    pokemon_v2_moveeffectchange_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_moveeffectchange" using primary key columns */
    pokemon_v2_moveeffectchange_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_moveeffectchangeeffecttext" */
    pokemon_v2_moveeffectchangeeffecttext: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_moveeffectchangeeffecttext" */
    pokemon_v2_moveeffectchangeeffecttext_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_moveeffectchangeeffecttext" using primary key columns */
    pokemon_v2_moveeffectchangeeffecttext_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_moveeffecteffecttext" */
    pokemon_v2_moveeffecteffecttext: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_moveeffecteffecttext" */
    pokemon_v2_moveeffecteffecttext_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_moveeffecteffecttext" using primary key columns */
    pokemon_v2_moveeffecteffecttext_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_moveflavortext" */
    pokemon_v2_moveflavortext: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_moveflavortext" */
    pokemon_v2_moveflavortext_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_moveflavortext" using primary key columns */
    pokemon_v2_moveflavortext_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movelearnmethod" */
    pokemon_v2_movelearnmethod: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_movelearnmethod" */
    pokemon_v2_movelearnmethod_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movelearnmethod" using primary key columns */
    pokemon_v2_movelearnmethod_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movelearnmethoddescription" */
    pokemon_v2_movelearnmethoddescription: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_movelearnmethoddescription" */
    pokemon_v2_movelearnmethoddescription_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movelearnmethoddescription" using primary key columns */
    pokemon_v2_movelearnmethoddescription_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movelearnmethodname" */
    pokemon_v2_movelearnmethodname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_movelearnmethodname" */
    pokemon_v2_movelearnmethodname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movelearnmethodname" using primary key columns */
    pokemon_v2_movelearnmethodname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** An array relationship */
    pokemon_v2_movemeta: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_movemeta_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movemeta" using primary key columns */
    pokemon_v2_movemeta_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movemetaailment" */
    pokemon_v2_movemetaailment: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_movemetaailment" */
    pokemon_v2_movemetaailment_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movemetaailment" using primary key columns */
    pokemon_v2_movemetaailment_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movemetaailmentname" */
    pokemon_v2_movemetaailmentname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_movemetaailmentname" */
    pokemon_v2_movemetaailmentname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movemetaailmentname" using primary key columns */
    pokemon_v2_movemetaailmentname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movemetacategory" */
    pokemon_v2_movemetacategory: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_movemetacategory" */
    pokemon_v2_movemetacategory_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movemetacategory" using primary key columns */
    pokemon_v2_movemetacategory_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movemetacategorydescription" */
    pokemon_v2_movemetacategorydescription: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_movemetacategorydescription" */
    pokemon_v2_movemetacategorydescription_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movemetacategorydescription" using primary key columns */
    pokemon_v2_movemetacategorydescription_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movemetastatchange" */
    pokemon_v2_movemetastatchange: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_movemetastatchange" */
    pokemon_v2_movemetastatchange_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movemetastatchange" using primary key columns */
    pokemon_v2_movemetastatchange_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movename" */
    pokemon_v2_movename: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_movename" */
    pokemon_v2_movename_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movename" using primary key columns */
    pokemon_v2_movename_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movetarget" */
    pokemon_v2_movetarget: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_movetarget" */
    pokemon_v2_movetarget_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movetarget" using primary key columns */
    pokemon_v2_movetarget_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movetargetdescription" */
    pokemon_v2_movetargetdescription: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_movetargetdescription" */
    pokemon_v2_movetargetdescription_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movetargetdescription" using primary key columns */
    pokemon_v2_movetargetdescription_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movetargetname" */
    pokemon_v2_movetargetname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_movetargetname" */
    pokemon_v2_movetargetname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_movetargetname" using primary key columns */
    pokemon_v2_movetargetname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_nature" */
    pokemon_v2_nature: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_nature" */
    pokemon_v2_nature_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_nature" using primary key columns */
    pokemon_v2_nature_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_naturebattlestylepreference" */
    pokemon_v2_naturebattlestylepreference: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_naturebattlestylepreference" */
    pokemon_v2_naturebattlestylepreference_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_naturebattlestylepreference" using primary key columns */
    pokemon_v2_naturebattlestylepreference_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_naturename" */
    pokemon_v2_naturename: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_naturename" */
    pokemon_v2_naturename_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_naturename" using primary key columns */
    pokemon_v2_naturename_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_naturepokeathlonstat" */
    pokemon_v2_naturepokeathlonstat: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_naturepokeathlonstat" */
    pokemon_v2_naturepokeathlonstat_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_naturepokeathlonstat" using primary key columns */
    pokemon_v2_naturepokeathlonstat_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_palpark" */
    pokemon_v2_palpark: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_palpark" */
    pokemon_v2_palpark_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_palpark" using primary key columns */
    pokemon_v2_palpark_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_palparkarea" */
    pokemon_v2_palparkarea: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_palparkarea" */
    pokemon_v2_palparkarea_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_palparkarea" using primary key columns */
    pokemon_v2_palparkarea_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_palparkareaname" */
    pokemon_v2_palparkareaname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_palparkareaname" */
    pokemon_v2_palparkareaname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_palparkareaname" using primary key columns */
    pokemon_v2_palparkareaname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokeathlonstat" */
    pokemon_v2_pokeathlonstat: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokeathlonstat" */
    pokemon_v2_pokeathlonstat_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokeathlonstat" using primary key columns */
    pokemon_v2_pokeathlonstat_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokeathlonstatname" */
    pokemon_v2_pokeathlonstatname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokeathlonstatname" */
    pokemon_v2_pokeathlonstatname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokeathlonstatname" using primary key columns */
    pokemon_v2_pokeathlonstatname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokedex" */
    pokemon_v2_pokedex: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokedex" */
    pokemon_v2_pokedex_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokedex" using primary key columns */
    pokemon_v2_pokedex_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokedexdescription" */
    pokemon_v2_pokedexdescription: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokedexdescription" */
    pokemon_v2_pokedexdescription_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokedexdescription" using primary key columns */
    pokemon_v2_pokedexdescription_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokedexname" */
    pokemon_v2_pokedexname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokedexname" */
    pokemon_v2_pokedexname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokedexname" using primary key columns */
    pokemon_v2_pokedexname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokedexversiongroup" */
    pokemon_v2_pokedexversiongroup: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokedexversiongroup" */
    pokemon_v2_pokedexversiongroup_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokedexversiongroup" using primary key columns */
    pokemon_v2_pokedexversiongroup_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemon" */
    pokemon_v2_pokemon: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => PokemonV2PokemonModel)))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemon" */
    pokemon_v2_pokemon_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemon" using primary key columns */
    pokemon_v2_pokemon_by_pk: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PokemonV2PokemonModel))),
    /** fetch data from the table: "pokemon_v2_pokemonability" */
    pokemon_v2_pokemonability: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonability" */
    pokemon_v2_pokemonability_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonability" using primary key columns */
    pokemon_v2_pokemonability_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemoncolor" */
    pokemon_v2_pokemoncolor: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemoncolorModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemoncolor" */
    pokemon_v2_pokemoncolor_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemoncolor" using primary key columns */
    pokemon_v2_pokemoncolor_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolorModel)),
    /** fetch data from the table: "pokemon_v2_pokemoncolorname" */
    pokemon_v2_pokemoncolorname: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemoncolornameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemoncolorname" */
    pokemon_v2_pokemoncolorname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemoncolorname" using primary key columns */
    pokemon_v2_pokemoncolorname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolornameModel)),
    /** fetch data from the table: "pokemon_v2_pokemondexnumber" */
    pokemon_v2_pokemondexnumber: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemondexnumber" */
    pokemon_v2_pokemondexnumber_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemondexnumber" using primary key columns */
    pokemon_v2_pokemondexnumber_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonegggroup" */
    pokemon_v2_pokemonegggroup: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonegggroup" */
    pokemon_v2_pokemonegggroup_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonegggroup" using primary key columns */
    pokemon_v2_pokemonegggroup_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonevolution" */
    pokemon_v2_pokemonevolution: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonevolution" */
    pokemon_v2_pokemonevolution_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonevolution" using primary key columns */
    pokemon_v2_pokemonevolution_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonform" */
    pokemon_v2_pokemonform: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonform" */
    pokemon_v2_pokemonform_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonform" using primary key columns */
    pokemon_v2_pokemonform_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonformgeneration" */
    pokemon_v2_pokemonformgeneration: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonformgeneration" */
    pokemon_v2_pokemonformgeneration_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonformgeneration" using primary key columns */
    pokemon_v2_pokemonformgeneration_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonformname" */
    pokemon_v2_pokemonformname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonformname" */
    pokemon_v2_pokemonformname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonformname" using primary key columns */
    pokemon_v2_pokemonformname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemonformsprites: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_pokemonformsprites_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonformsprites" using primary key columns */
    pokemon_v2_pokemonformsprites_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonformtype" */
    pokemon_v2_pokemonformtype: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonformtype" */
    pokemon_v2_pokemonformtype_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonformtype" using primary key columns */
    pokemon_v2_pokemonformtype_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemongameindex" */
    pokemon_v2_pokemongameindex: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemongameindex" */
    pokemon_v2_pokemongameindex_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemongameindex" using primary key columns */
    pokemon_v2_pokemongameindex_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonhabitat" */
    pokemon_v2_pokemonhabitat: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonhabitat" */
    pokemon_v2_pokemonhabitat_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonhabitat" using primary key columns */
    pokemon_v2_pokemonhabitat_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonhabitatname" */
    pokemon_v2_pokemonhabitatname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonhabitatname" */
    pokemon_v2_pokemonhabitatname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonhabitatname" using primary key columns */
    pokemon_v2_pokemonhabitatname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonitem" */
    pokemon_v2_pokemonitem: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonitem" */
    pokemon_v2_pokemonitem_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonitem" using primary key columns */
    pokemon_v2_pokemonitem_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonmove" */
    pokemon_v2_pokemonmove: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonmove" */
    pokemon_v2_pokemonmove_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonmove" using primary key columns */
    pokemon_v2_pokemonmove_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonshape" */
    pokemon_v2_pokemonshape: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonshape" */
    pokemon_v2_pokemonshape_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonshape" using primary key columns */
    pokemon_v2_pokemonshape_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonshapename" */
    pokemon_v2_pokemonshapename: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonshapename" */
    pokemon_v2_pokemonshapename_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonshapename" using primary key columns */
    pokemon_v2_pokemonshapename_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemonspecies: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonspecies_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonspecies" using primary key columns */
    pokemon_v2_pokemonspecies_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesModel)),
    /** fetch data from the table: "pokemon_v2_pokemonspeciesdescription" */
    pokemon_v2_pokemonspeciesdescription: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonspeciesdescription" */
    pokemon_v2_pokemonspeciesdescription_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonspeciesdescription" using primary key columns */
    pokemon_v2_pokemonspeciesdescription_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonspeciesflavortext" */
    pokemon_v2_pokemonspeciesflavortext: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesflavortextModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonspeciesflavortext" */
    pokemon_v2_pokemonspeciesflavortext_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonspeciesflavortext" using primary key columns */
    pokemon_v2_pokemonspeciesflavortext_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesflavortextModel)),
    /** fetch data from the table: "pokemon_v2_pokemonspeciesname" */
    pokemon_v2_pokemonspeciesname: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesnameModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonspeciesname" */
    pokemon_v2_pokemonspeciesname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonspeciesname" using primary key columns */
    pokemon_v2_pokemonspeciesname_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesnameModel)),
    /** An array relationship */
    pokemon_v2_pokemonsprites: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_pokemonsprites_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonsprites" using primary key columns */
    pokemon_v2_pokemonsprites_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonstat" */
    pokemon_v2_pokemonstat: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonstat" */
    pokemon_v2_pokemonstat_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonstat" using primary key columns */
    pokemon_v2_pokemonstat_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemontype" */
    pokemon_v2_pokemontype: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemontypeModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemontype" */
    pokemon_v2_pokemontype_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemontype" using primary key columns */
    pokemon_v2_pokemontype_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypeModel)),
    /** fetch data from the table: "pokemon_v2_pokemontypepast" */
    pokemon_v2_pokemontypepast: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemontypepast" */
    pokemon_v2_pokemontypepast_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemontypepast" using primary key columns */
    pokemon_v2_pokemontypepast_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_region" */
    pokemon_v2_region: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_region" */
    pokemon_v2_region_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_region" using primary key columns */
    pokemon_v2_region_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_regionname" */
    pokemon_v2_regionname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_regionname" */
    pokemon_v2_regionname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_regionname" using primary key columns */
    pokemon_v2_regionname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_stat" */
    pokemon_v2_stat: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_stat" */
    pokemon_v2_stat_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_stat" using primary key columns */
    pokemon_v2_stat_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_statname" */
    pokemon_v2_statname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_statname" */
    pokemon_v2_statname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_statname" using primary key columns */
    pokemon_v2_statname_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_supercontestcombo" */
    pokemon_v2_supercontestcombo: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_supercontestcombo" */
    pokemon_v2_supercontestcombo_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_supercontestcombo" using primary key columns */
    pokemon_v2_supercontestcombo_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_supercontesteffect" */
    pokemon_v2_supercontesteffect: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_supercontesteffect" */
    pokemon_v2_supercontesteffect_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_supercontesteffect" using primary key columns */
    pokemon_v2_supercontesteffect_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_supercontesteffectflavortext" */
    pokemon_v2_supercontesteffectflavortext: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_supercontesteffectflavortext" */
    pokemon_v2_supercontesteffectflavortext_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_supercontesteffectflavortext" using primary key columns */
    pokemon_v2_supercontesteffectflavortext_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_type" */
    pokemon_v2_type: types.union(types.undefined, types.array(types.late((): any => PokemonV2TypeModel))),
    /** fetch aggregated fields from the table: "pokemon_v2_type" */
    pokemon_v2_type_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_type" using primary key columns */
    pokemon_v2_type_by_pk: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeModel)),
    /** fetch data from the table: "pokemon_v2_typeefficacy" */
    pokemon_v2_typeefficacy: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_typeefficacy" */
    pokemon_v2_typeefficacy_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_typeefficacy" using primary key columns */
    pokemon_v2_typeefficacy_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_typegameindex" */
    pokemon_v2_typegameindex: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_typegameindex" */
    pokemon_v2_typegameindex_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_typegameindex" using primary key columns */
    pokemon_v2_typegameindex_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_typename" */
    pokemon_v2_typename: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_typename" */
    pokemon_v2_typename_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_typename" using primary key columns */
    pokemon_v2_typename_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_version" */
    pokemon_v2_version: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_version" */
    pokemon_v2_version_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_version" using primary key columns */
    pokemon_v2_version_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_versiongroup" */
    pokemon_v2_versiongroup: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_versiongroup" */
    pokemon_v2_versiongroup_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_versiongroup" using primary key columns */
    pokemon_v2_versiongroup_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_versiongroupmovelearnmethod" */
    pokemon_v2_versiongroupmovelearnmethod: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_versiongroupmovelearnmethod" */
    pokemon_v2_versiongroupmovelearnmethod_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_versiongroupmovelearnmethod" using primary key columns */
    pokemon_v2_versiongroupmovelearnmethod_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_versiongroupregion" */
    pokemon_v2_versiongroupregion: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_versiongroupregion" */
    pokemon_v2_versiongroupregion_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_versiongroupregion" using primary key columns */
    pokemon_v2_versiongroupregion_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_versionname" */
    pokemon_v2_versionname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_versionname" */
    pokemon_v2_versionname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_versionname" using primary key columns */
    pokemon_v2_versionname_by_pk: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class SubscriptionRootModelSelector extends QueryBuilder {
}
export function selectFromSubscriptionRoot() {
  return new SubscriptionRootModelSelector()
}

export const subscriptionRootModelPrimitives = selectFromSubscriptionRoot()
