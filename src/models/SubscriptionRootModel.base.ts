/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonModel, PokemonV2PokemonModelType } from "./PokemonV2PokemonModel"
import { PokemonV2PokemonModelSelector } from "./PokemonV2PokemonModel.base"
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
    pokemon_v2_pokemoncolor: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemoncolor" */
    pokemon_v2_pokemoncolor_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemoncolor" using primary key columns */
    pokemon_v2_pokemoncolor_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemoncolorname" */
    pokemon_v2_pokemoncolorname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemoncolorname" */
    pokemon_v2_pokemoncolorname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemoncolorname" using primary key columns */
    pokemon_v2_pokemoncolorname_by_pk: types.union(types.undefined, types.null, types.frozen()),
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
    pokemon_v2_pokemonspecies: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_pokemonspecies_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonspecies" using primary key columns */
    pokemon_v2_pokemonspecies_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonspeciesdescription" */
    pokemon_v2_pokemonspeciesdescription: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonspeciesdescription" */
    pokemon_v2_pokemonspeciesdescription_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonspeciesdescription" using primary key columns */
    pokemon_v2_pokemonspeciesdescription_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonspeciesflavortext" */
    pokemon_v2_pokemonspeciesflavortext: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonspeciesflavortext" */
    pokemon_v2_pokemonspeciesflavortext_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonspeciesflavortext" using primary key columns */
    pokemon_v2_pokemonspeciesflavortext_by_pk: types.union(types.undefined, types.null, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonspeciesname" */
    pokemon_v2_pokemonspeciesname: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemonspeciesname" */
    pokemon_v2_pokemonspeciesname_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemonspeciesname" using primary key columns */
    pokemon_v2_pokemonspeciesname_by_pk: types.union(types.undefined, types.null, types.frozen()),
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
    pokemon_v2_pokemontype: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_pokemontype" */
    pokemon_v2_pokemontype_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_pokemontype" using primary key columns */
    pokemon_v2_pokemontype_by_pk: types.union(types.undefined, types.null, types.frozen()),
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
    pokemon_v2_type: types.union(types.undefined, types.array(types.frozen())),
    /** fetch aggregated fields from the table: "pokemon_v2_type" */
    pokemon_v2_type_aggregate: types.union(types.undefined, types.frozen()),
    /** fetch data from the table: "pokemon_v2_type" using primary key columns */
    pokemon_v2_type_by_pk: types.union(types.undefined, types.null, types.frozen()),
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
  pokemon_v2_ability(builder?: string | PokemonV2AbilityModelSelector | ((selector: PokemonV2AbilityModelSelector) => PokemonV2AbilityModelSelector)) { return this.__child(`pokemon_v2_ability`, PokemonV2AbilityModelSelector, builder) }
  pokemon_v2_ability_aggregate(builder?: string | PokemonV2AbilityAggregateModelSelector | ((selector: PokemonV2AbilityAggregateModelSelector) => PokemonV2AbilityAggregateModelSelector)) { return this.__child(`pokemon_v2_ability_aggregate`, PokemonV2AbilityAggregateModelSelector, builder) }
  pokemon_v2_ability_by_pk(builder?: string | PokemonV2AbilityModelSelector | ((selector: PokemonV2AbilityModelSelector) => PokemonV2AbilityModelSelector)) { return this.__child(`pokemon_v2_ability_by_pk`, PokemonV2AbilityModelSelector, builder) }
  pokemon_v2_abilitychange(builder?: string | PokemonV2AbilitychangeModelSelector | ((selector: PokemonV2AbilitychangeModelSelector) => PokemonV2AbilitychangeModelSelector)) { return this.__child(`pokemon_v2_abilitychange`, PokemonV2AbilitychangeModelSelector, builder) }
  pokemon_v2_abilitychange_aggregate(builder?: string | PokemonV2AbilitychangeAggregateModelSelector | ((selector: PokemonV2AbilitychangeAggregateModelSelector) => PokemonV2AbilitychangeAggregateModelSelector)) { return this.__child(`pokemon_v2_abilitychange_aggregate`, PokemonV2AbilitychangeAggregateModelSelector, builder) }
  pokemon_v2_abilitychange_by_pk(builder?: string | PokemonV2AbilitychangeModelSelector | ((selector: PokemonV2AbilitychangeModelSelector) => PokemonV2AbilitychangeModelSelector)) { return this.__child(`pokemon_v2_abilitychange_by_pk`, PokemonV2AbilitychangeModelSelector, builder) }
  pokemon_v2_abilitychangeeffecttext(builder?: string | PokemonV2AbilitychangeeffecttextModelSelector | ((selector: PokemonV2AbilitychangeeffecttextModelSelector) => PokemonV2AbilitychangeeffecttextModelSelector)) { return this.__child(`pokemon_v2_abilitychangeeffecttext`, PokemonV2AbilitychangeeffecttextModelSelector, builder) }
  pokemon_v2_abilitychangeeffecttext_aggregate(builder?: string | PokemonV2AbilitychangeeffecttextAggregateModelSelector | ((selector: PokemonV2AbilitychangeeffecttextAggregateModelSelector) => PokemonV2AbilitychangeeffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_abilitychangeeffecttext_aggregate`, PokemonV2AbilitychangeeffecttextAggregateModelSelector, builder) }
  pokemon_v2_abilitychangeeffecttext_by_pk(builder?: string | PokemonV2AbilitychangeeffecttextModelSelector | ((selector: PokemonV2AbilitychangeeffecttextModelSelector) => PokemonV2AbilitychangeeffecttextModelSelector)) { return this.__child(`pokemon_v2_abilitychangeeffecttext_by_pk`, PokemonV2AbilitychangeeffecttextModelSelector, builder) }
  pokemon_v2_abilityeffecttext(builder?: string | PokemonV2AbilityeffecttextModelSelector | ((selector: PokemonV2AbilityeffecttextModelSelector) => PokemonV2AbilityeffecttextModelSelector)) { return this.__child(`pokemon_v2_abilityeffecttext`, PokemonV2AbilityeffecttextModelSelector, builder) }
  pokemon_v2_abilityeffecttext_aggregate(builder?: string | PokemonV2AbilityeffecttextAggregateModelSelector | ((selector: PokemonV2AbilityeffecttextAggregateModelSelector) => PokemonV2AbilityeffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_abilityeffecttext_aggregate`, PokemonV2AbilityeffecttextAggregateModelSelector, builder) }
  pokemon_v2_abilityeffecttext_by_pk(builder?: string | PokemonV2AbilityeffecttextModelSelector | ((selector: PokemonV2AbilityeffecttextModelSelector) => PokemonV2AbilityeffecttextModelSelector)) { return this.__child(`pokemon_v2_abilityeffecttext_by_pk`, PokemonV2AbilityeffecttextModelSelector, builder) }
  pokemon_v2_abilityflavortext(builder?: string | PokemonV2AbilityflavortextModelSelector | ((selector: PokemonV2AbilityflavortextModelSelector) => PokemonV2AbilityflavortextModelSelector)) { return this.__child(`pokemon_v2_abilityflavortext`, PokemonV2AbilityflavortextModelSelector, builder) }
  pokemon_v2_abilityflavortext_aggregate(builder?: string | PokemonV2AbilityflavortextAggregateModelSelector | ((selector: PokemonV2AbilityflavortextAggregateModelSelector) => PokemonV2AbilityflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_abilityflavortext_aggregate`, PokemonV2AbilityflavortextAggregateModelSelector, builder) }
  pokemon_v2_abilityflavortext_by_pk(builder?: string | PokemonV2AbilityflavortextModelSelector | ((selector: PokemonV2AbilityflavortextModelSelector) => PokemonV2AbilityflavortextModelSelector)) { return this.__child(`pokemon_v2_abilityflavortext_by_pk`, PokemonV2AbilityflavortextModelSelector, builder) }
  pokemon_v2_abilityname(builder?: string | PokemonV2AbilitynameModelSelector | ((selector: PokemonV2AbilitynameModelSelector) => PokemonV2AbilitynameModelSelector)) { return this.__child(`pokemon_v2_abilityname`, PokemonV2AbilitynameModelSelector, builder) }
  pokemon_v2_abilityname_aggregate(builder?: string | PokemonV2AbilitynameAggregateModelSelector | ((selector: PokemonV2AbilitynameAggregateModelSelector) => PokemonV2AbilitynameAggregateModelSelector)) { return this.__child(`pokemon_v2_abilityname_aggregate`, PokemonV2AbilitynameAggregateModelSelector, builder) }
  pokemon_v2_abilityname_by_pk(builder?: string | PokemonV2AbilitynameModelSelector | ((selector: PokemonV2AbilitynameModelSelector) => PokemonV2AbilitynameModelSelector)) { return this.__child(`pokemon_v2_abilityname_by_pk`, PokemonV2AbilitynameModelSelector, builder) }
  pokemon_v2_berry(builder?: string | PokemonV2BerryModelSelector | ((selector: PokemonV2BerryModelSelector) => PokemonV2BerryModelSelector)) { return this.__child(`pokemon_v2_berry`, PokemonV2BerryModelSelector, builder) }
  pokemon_v2_berry_aggregate(builder?: string | PokemonV2BerryAggregateModelSelector | ((selector: PokemonV2BerryAggregateModelSelector) => PokemonV2BerryAggregateModelSelector)) { return this.__child(`pokemon_v2_berry_aggregate`, PokemonV2BerryAggregateModelSelector, builder) }
  pokemon_v2_berry_by_pk(builder?: string | PokemonV2BerryModelSelector | ((selector: PokemonV2BerryModelSelector) => PokemonV2BerryModelSelector)) { return this.__child(`pokemon_v2_berry_by_pk`, PokemonV2BerryModelSelector, builder) }
  pokemon_v2_berryfirmness(builder?: string | PokemonV2BerryfirmnessModelSelector | ((selector: PokemonV2BerryfirmnessModelSelector) => PokemonV2BerryfirmnessModelSelector)) { return this.__child(`pokemon_v2_berryfirmness`, PokemonV2BerryfirmnessModelSelector, builder) }
  pokemon_v2_berryfirmness_aggregate(builder?: string | PokemonV2BerryfirmnessAggregateModelSelector | ((selector: PokemonV2BerryfirmnessAggregateModelSelector) => PokemonV2BerryfirmnessAggregateModelSelector)) { return this.__child(`pokemon_v2_berryfirmness_aggregate`, PokemonV2BerryfirmnessAggregateModelSelector, builder) }
  pokemon_v2_berryfirmness_by_pk(builder?: string | PokemonV2BerryfirmnessModelSelector | ((selector: PokemonV2BerryfirmnessModelSelector) => PokemonV2BerryfirmnessModelSelector)) { return this.__child(`pokemon_v2_berryfirmness_by_pk`, PokemonV2BerryfirmnessModelSelector, builder) }
  pokemon_v2_berryfirmnessname(builder?: string | PokemonV2BerryfirmnessnameModelSelector | ((selector: PokemonV2BerryfirmnessnameModelSelector) => PokemonV2BerryfirmnessnameModelSelector)) { return this.__child(`pokemon_v2_berryfirmnessname`, PokemonV2BerryfirmnessnameModelSelector, builder) }
  pokemon_v2_berryfirmnessname_aggregate(builder?: string | PokemonV2BerryfirmnessnameAggregateModelSelector | ((selector: PokemonV2BerryfirmnessnameAggregateModelSelector) => PokemonV2BerryfirmnessnameAggregateModelSelector)) { return this.__child(`pokemon_v2_berryfirmnessname_aggregate`, PokemonV2BerryfirmnessnameAggregateModelSelector, builder) }
  pokemon_v2_berryfirmnessname_by_pk(builder?: string | PokemonV2BerryfirmnessnameModelSelector | ((selector: PokemonV2BerryfirmnessnameModelSelector) => PokemonV2BerryfirmnessnameModelSelector)) { return this.__child(`pokemon_v2_berryfirmnessname_by_pk`, PokemonV2BerryfirmnessnameModelSelector, builder) }
  pokemon_v2_berryflavor(builder?: string | PokemonV2BerryflavorModelSelector | ((selector: PokemonV2BerryflavorModelSelector) => PokemonV2BerryflavorModelSelector)) { return this.__child(`pokemon_v2_berryflavor`, PokemonV2BerryflavorModelSelector, builder) }
  pokemon_v2_berryflavor_aggregate(builder?: string | PokemonV2BerryflavorAggregateModelSelector | ((selector: PokemonV2BerryflavorAggregateModelSelector) => PokemonV2BerryflavorAggregateModelSelector)) { return this.__child(`pokemon_v2_berryflavor_aggregate`, PokemonV2BerryflavorAggregateModelSelector, builder) }
  pokemon_v2_berryflavor_by_pk(builder?: string | PokemonV2BerryflavorModelSelector | ((selector: PokemonV2BerryflavorModelSelector) => PokemonV2BerryflavorModelSelector)) { return this.__child(`pokemon_v2_berryflavor_by_pk`, PokemonV2BerryflavorModelSelector, builder) }
  pokemon_v2_berryflavormap(builder?: string | PokemonV2BerryflavormapModelSelector | ((selector: PokemonV2BerryflavormapModelSelector) => PokemonV2BerryflavormapModelSelector)) { return this.__child(`pokemon_v2_berryflavormap`, PokemonV2BerryflavormapModelSelector, builder) }
  pokemon_v2_berryflavormap_aggregate(builder?: string | PokemonV2BerryflavormapAggregateModelSelector | ((selector: PokemonV2BerryflavormapAggregateModelSelector) => PokemonV2BerryflavormapAggregateModelSelector)) { return this.__child(`pokemon_v2_berryflavormap_aggregate`, PokemonV2BerryflavormapAggregateModelSelector, builder) }
  pokemon_v2_berryflavormap_by_pk(builder?: string | PokemonV2BerryflavormapModelSelector | ((selector: PokemonV2BerryflavormapModelSelector) => PokemonV2BerryflavormapModelSelector)) { return this.__child(`pokemon_v2_berryflavormap_by_pk`, PokemonV2BerryflavormapModelSelector, builder) }
  pokemon_v2_berryflavorname(builder?: string | PokemonV2BerryflavornameModelSelector | ((selector: PokemonV2BerryflavornameModelSelector) => PokemonV2BerryflavornameModelSelector)) { return this.__child(`pokemon_v2_berryflavorname`, PokemonV2BerryflavornameModelSelector, builder) }
  pokemon_v2_berryflavorname_aggregate(builder?: string | PokemonV2BerryflavornameAggregateModelSelector | ((selector: PokemonV2BerryflavornameAggregateModelSelector) => PokemonV2BerryflavornameAggregateModelSelector)) { return this.__child(`pokemon_v2_berryflavorname_aggregate`, PokemonV2BerryflavornameAggregateModelSelector, builder) }
  pokemon_v2_berryflavorname_by_pk(builder?: string | PokemonV2BerryflavornameModelSelector | ((selector: PokemonV2BerryflavornameModelSelector) => PokemonV2BerryflavornameModelSelector)) { return this.__child(`pokemon_v2_berryflavorname_by_pk`, PokemonV2BerryflavornameModelSelector, builder) }
  pokemon_v2_characteristic(builder?: string | PokemonV2CharacteristicModelSelector | ((selector: PokemonV2CharacteristicModelSelector) => PokemonV2CharacteristicModelSelector)) { return this.__child(`pokemon_v2_characteristic`, PokemonV2CharacteristicModelSelector, builder) }
  pokemon_v2_characteristic_aggregate(builder?: string | PokemonV2CharacteristicAggregateModelSelector | ((selector: PokemonV2CharacteristicAggregateModelSelector) => PokemonV2CharacteristicAggregateModelSelector)) { return this.__child(`pokemon_v2_characteristic_aggregate`, PokemonV2CharacteristicAggregateModelSelector, builder) }
  pokemon_v2_characteristic_by_pk(builder?: string | PokemonV2CharacteristicModelSelector | ((selector: PokemonV2CharacteristicModelSelector) => PokemonV2CharacteristicModelSelector)) { return this.__child(`pokemon_v2_characteristic_by_pk`, PokemonV2CharacteristicModelSelector, builder) }
  pokemon_v2_characteristicdescription(builder?: string | PokemonV2CharacteristicdescriptionModelSelector | ((selector: PokemonV2CharacteristicdescriptionModelSelector) => PokemonV2CharacteristicdescriptionModelSelector)) { return this.__child(`pokemon_v2_characteristicdescription`, PokemonV2CharacteristicdescriptionModelSelector, builder) }
  pokemon_v2_characteristicdescription_aggregate(builder?: string | PokemonV2CharacteristicdescriptionAggregateModelSelector | ((selector: PokemonV2CharacteristicdescriptionAggregateModelSelector) => PokemonV2CharacteristicdescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_characteristicdescription_aggregate`, PokemonV2CharacteristicdescriptionAggregateModelSelector, builder) }
  pokemon_v2_characteristicdescription_by_pk(builder?: string | PokemonV2CharacteristicdescriptionModelSelector | ((selector: PokemonV2CharacteristicdescriptionModelSelector) => PokemonV2CharacteristicdescriptionModelSelector)) { return this.__child(`pokemon_v2_characteristicdescription_by_pk`, PokemonV2CharacteristicdescriptionModelSelector, builder) }
  pokemon_v2_contestcombo(builder?: string | PokemonV2ContestcomboModelSelector | ((selector: PokemonV2ContestcomboModelSelector) => PokemonV2ContestcomboModelSelector)) { return this.__child(`pokemon_v2_contestcombo`, PokemonV2ContestcomboModelSelector, builder) }
  pokemon_v2_contestcombo_aggregate(builder?: string | PokemonV2ContestcomboAggregateModelSelector | ((selector: PokemonV2ContestcomboAggregateModelSelector) => PokemonV2ContestcomboAggregateModelSelector)) { return this.__child(`pokemon_v2_contestcombo_aggregate`, PokemonV2ContestcomboAggregateModelSelector, builder) }
  pokemon_v2_contestcombo_by_pk(builder?: string | PokemonV2ContestcomboModelSelector | ((selector: PokemonV2ContestcomboModelSelector) => PokemonV2ContestcomboModelSelector)) { return this.__child(`pokemon_v2_contestcombo_by_pk`, PokemonV2ContestcomboModelSelector, builder) }
  pokemon_v2_contesteffect(builder?: string | PokemonV2ContesteffectModelSelector | ((selector: PokemonV2ContesteffectModelSelector) => PokemonV2ContesteffectModelSelector)) { return this.__child(`pokemon_v2_contesteffect`, PokemonV2ContesteffectModelSelector, builder) }
  pokemon_v2_contesteffect_aggregate(builder?: string | PokemonV2ContesteffectAggregateModelSelector | ((selector: PokemonV2ContesteffectAggregateModelSelector) => PokemonV2ContesteffectAggregateModelSelector)) { return this.__child(`pokemon_v2_contesteffect_aggregate`, PokemonV2ContesteffectAggregateModelSelector, builder) }
  pokemon_v2_contesteffect_by_pk(builder?: string | PokemonV2ContesteffectModelSelector | ((selector: PokemonV2ContesteffectModelSelector) => PokemonV2ContesteffectModelSelector)) { return this.__child(`pokemon_v2_contesteffect_by_pk`, PokemonV2ContesteffectModelSelector, builder) }
  pokemon_v2_contesteffecteffecttext(builder?: string | PokemonV2ContesteffecteffecttextModelSelector | ((selector: PokemonV2ContesteffecteffecttextModelSelector) => PokemonV2ContesteffecteffecttextModelSelector)) { return this.__child(`pokemon_v2_contesteffecteffecttext`, PokemonV2ContesteffecteffecttextModelSelector, builder) }
  pokemon_v2_contesteffecteffecttext_aggregate(builder?: string | PokemonV2ContesteffecteffecttextAggregateModelSelector | ((selector: PokemonV2ContesteffecteffecttextAggregateModelSelector) => PokemonV2ContesteffecteffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_contesteffecteffecttext_aggregate`, PokemonV2ContesteffecteffecttextAggregateModelSelector, builder) }
  pokemon_v2_contesteffecteffecttext_by_pk(builder?: string | PokemonV2ContesteffecteffecttextModelSelector | ((selector: PokemonV2ContesteffecteffecttextModelSelector) => PokemonV2ContesteffecteffecttextModelSelector)) { return this.__child(`pokemon_v2_contesteffecteffecttext_by_pk`, PokemonV2ContesteffecteffecttextModelSelector, builder) }
  pokemon_v2_contesteffectflavortext(builder?: string | PokemonV2ContesteffectflavortextModelSelector | ((selector: PokemonV2ContesteffectflavortextModelSelector) => PokemonV2ContesteffectflavortextModelSelector)) { return this.__child(`pokemon_v2_contesteffectflavortext`, PokemonV2ContesteffectflavortextModelSelector, builder) }
  pokemon_v2_contesteffectflavortext_aggregate(builder?: string | PokemonV2ContesteffectflavortextAggregateModelSelector | ((selector: PokemonV2ContesteffectflavortextAggregateModelSelector) => PokemonV2ContesteffectflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_contesteffectflavortext_aggregate`, PokemonV2ContesteffectflavortextAggregateModelSelector, builder) }
  pokemon_v2_contesteffectflavortext_by_pk(builder?: string | PokemonV2ContesteffectflavortextModelSelector | ((selector: PokemonV2ContesteffectflavortextModelSelector) => PokemonV2ContesteffectflavortextModelSelector)) { return this.__child(`pokemon_v2_contesteffectflavortext_by_pk`, PokemonV2ContesteffectflavortextModelSelector, builder) }
  pokemon_v2_contesttype(builder?: string | PokemonV2ContesttypeModelSelector | ((selector: PokemonV2ContesttypeModelSelector) => PokemonV2ContesttypeModelSelector)) { return this.__child(`pokemon_v2_contesttype`, PokemonV2ContesttypeModelSelector, builder) }
  pokemon_v2_contesttype_aggregate(builder?: string | PokemonV2ContesttypeAggregateModelSelector | ((selector: PokemonV2ContesttypeAggregateModelSelector) => PokemonV2ContesttypeAggregateModelSelector)) { return this.__child(`pokemon_v2_contesttype_aggregate`, PokemonV2ContesttypeAggregateModelSelector, builder) }
  pokemon_v2_contesttype_by_pk(builder?: string | PokemonV2ContesttypeModelSelector | ((selector: PokemonV2ContesttypeModelSelector) => PokemonV2ContesttypeModelSelector)) { return this.__child(`pokemon_v2_contesttype_by_pk`, PokemonV2ContesttypeModelSelector, builder) }
  pokemon_v2_contesttypename(builder?: string | PokemonV2ContesttypenameModelSelector | ((selector: PokemonV2ContesttypenameModelSelector) => PokemonV2ContesttypenameModelSelector)) { return this.__child(`pokemon_v2_contesttypename`, PokemonV2ContesttypenameModelSelector, builder) }
  pokemon_v2_contesttypename_aggregate(builder?: string | PokemonV2ContesttypenameAggregateModelSelector | ((selector: PokemonV2ContesttypenameAggregateModelSelector) => PokemonV2ContesttypenameAggregateModelSelector)) { return this.__child(`pokemon_v2_contesttypename_aggregate`, PokemonV2ContesttypenameAggregateModelSelector, builder) }
  pokemon_v2_contesttypename_by_pk(builder?: string | PokemonV2ContesttypenameModelSelector | ((selector: PokemonV2ContesttypenameModelSelector) => PokemonV2ContesttypenameModelSelector)) { return this.__child(`pokemon_v2_contesttypename_by_pk`, PokemonV2ContesttypenameModelSelector, builder) }
  pokemon_v2_egggroup(builder?: string | PokemonV2EgggroupModelSelector | ((selector: PokemonV2EgggroupModelSelector) => PokemonV2EgggroupModelSelector)) { return this.__child(`pokemon_v2_egggroup`, PokemonV2EgggroupModelSelector, builder) }
  pokemon_v2_egggroup_aggregate(builder?: string | PokemonV2EgggroupAggregateModelSelector | ((selector: PokemonV2EgggroupAggregateModelSelector) => PokemonV2EgggroupAggregateModelSelector)) { return this.__child(`pokemon_v2_egggroup_aggregate`, PokemonV2EgggroupAggregateModelSelector, builder) }
  pokemon_v2_egggroup_by_pk(builder?: string | PokemonV2EgggroupModelSelector | ((selector: PokemonV2EgggroupModelSelector) => PokemonV2EgggroupModelSelector)) { return this.__child(`pokemon_v2_egggroup_by_pk`, PokemonV2EgggroupModelSelector, builder) }
  pokemon_v2_egggroupname(builder?: string | PokemonV2EgggroupnameModelSelector | ((selector: PokemonV2EgggroupnameModelSelector) => PokemonV2EgggroupnameModelSelector)) { return this.__child(`pokemon_v2_egggroupname`, PokemonV2EgggroupnameModelSelector, builder) }
  pokemon_v2_egggroupname_aggregate(builder?: string | PokemonV2EgggroupnameAggregateModelSelector | ((selector: PokemonV2EgggroupnameAggregateModelSelector) => PokemonV2EgggroupnameAggregateModelSelector)) { return this.__child(`pokemon_v2_egggroupname_aggregate`, PokemonV2EgggroupnameAggregateModelSelector, builder) }
  pokemon_v2_egggroupname_by_pk(builder?: string | PokemonV2EgggroupnameModelSelector | ((selector: PokemonV2EgggroupnameModelSelector) => PokemonV2EgggroupnameModelSelector)) { return this.__child(`pokemon_v2_egggroupname_by_pk`, PokemonV2EgggroupnameModelSelector, builder) }
  pokemon_v2_encounter(builder?: string | PokemonV2EncounterModelSelector | ((selector: PokemonV2EncounterModelSelector) => PokemonV2EncounterModelSelector)) { return this.__child(`pokemon_v2_encounter`, PokemonV2EncounterModelSelector, builder) }
  pokemon_v2_encounter_aggregate(builder?: string | PokemonV2EncounterAggregateModelSelector | ((selector: PokemonV2EncounterAggregateModelSelector) => PokemonV2EncounterAggregateModelSelector)) { return this.__child(`pokemon_v2_encounter_aggregate`, PokemonV2EncounterAggregateModelSelector, builder) }
  pokemon_v2_encounter_by_pk(builder?: string | PokemonV2EncounterModelSelector | ((selector: PokemonV2EncounterModelSelector) => PokemonV2EncounterModelSelector)) { return this.__child(`pokemon_v2_encounter_by_pk`, PokemonV2EncounterModelSelector, builder) }
  pokemon_v2_encountercondition(builder?: string | PokemonV2EncounterconditionModelSelector | ((selector: PokemonV2EncounterconditionModelSelector) => PokemonV2EncounterconditionModelSelector)) { return this.__child(`pokemon_v2_encountercondition`, PokemonV2EncounterconditionModelSelector, builder) }
  pokemon_v2_encountercondition_aggregate(builder?: string | PokemonV2EncounterconditionAggregateModelSelector | ((selector: PokemonV2EncounterconditionAggregateModelSelector) => PokemonV2EncounterconditionAggregateModelSelector)) { return this.__child(`pokemon_v2_encountercondition_aggregate`, PokemonV2EncounterconditionAggregateModelSelector, builder) }
  pokemon_v2_encountercondition_by_pk(builder?: string | PokemonV2EncounterconditionModelSelector | ((selector: PokemonV2EncounterconditionModelSelector) => PokemonV2EncounterconditionModelSelector)) { return this.__child(`pokemon_v2_encountercondition_by_pk`, PokemonV2EncounterconditionModelSelector, builder) }
  pokemon_v2_encounterconditionname(builder?: string | PokemonV2EncounterconditionnameModelSelector | ((selector: PokemonV2EncounterconditionnameModelSelector) => PokemonV2EncounterconditionnameModelSelector)) { return this.__child(`pokemon_v2_encounterconditionname`, PokemonV2EncounterconditionnameModelSelector, builder) }
  pokemon_v2_encounterconditionname_aggregate(builder?: string | PokemonV2EncounterconditionnameAggregateModelSelector | ((selector: PokemonV2EncounterconditionnameAggregateModelSelector) => PokemonV2EncounterconditionnameAggregateModelSelector)) { return this.__child(`pokemon_v2_encounterconditionname_aggregate`, PokemonV2EncounterconditionnameAggregateModelSelector, builder) }
  pokemon_v2_encounterconditionname_by_pk(builder?: string | PokemonV2EncounterconditionnameModelSelector | ((selector: PokemonV2EncounterconditionnameModelSelector) => PokemonV2EncounterconditionnameModelSelector)) { return this.__child(`pokemon_v2_encounterconditionname_by_pk`, PokemonV2EncounterconditionnameModelSelector, builder) }
  pokemon_v2_encounterconditionvalue(builder?: string | PokemonV2EncounterconditionvalueModelSelector | ((selector: PokemonV2EncounterconditionvalueModelSelector) => PokemonV2EncounterconditionvalueModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvalue`, PokemonV2EncounterconditionvalueModelSelector, builder) }
  pokemon_v2_encounterconditionvalue_aggregate(builder?: string | PokemonV2EncounterconditionvalueAggregateModelSelector | ((selector: PokemonV2EncounterconditionvalueAggregateModelSelector) => PokemonV2EncounterconditionvalueAggregateModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvalue_aggregate`, PokemonV2EncounterconditionvalueAggregateModelSelector, builder) }
  pokemon_v2_encounterconditionvalue_by_pk(builder?: string | PokemonV2EncounterconditionvalueModelSelector | ((selector: PokemonV2EncounterconditionvalueModelSelector) => PokemonV2EncounterconditionvalueModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvalue_by_pk`, PokemonV2EncounterconditionvalueModelSelector, builder) }
  pokemon_v2_encounterconditionvaluemap(builder?: string | PokemonV2EncounterconditionvaluemapModelSelector | ((selector: PokemonV2EncounterconditionvaluemapModelSelector) => PokemonV2EncounterconditionvaluemapModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvaluemap`, PokemonV2EncounterconditionvaluemapModelSelector, builder) }
  pokemon_v2_encounterconditionvaluemap_aggregate(builder?: string | PokemonV2EncounterconditionvaluemapAggregateModelSelector | ((selector: PokemonV2EncounterconditionvaluemapAggregateModelSelector) => PokemonV2EncounterconditionvaluemapAggregateModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvaluemap_aggregate`, PokemonV2EncounterconditionvaluemapAggregateModelSelector, builder) }
  pokemon_v2_encounterconditionvaluemap_by_pk(builder?: string | PokemonV2EncounterconditionvaluemapModelSelector | ((selector: PokemonV2EncounterconditionvaluemapModelSelector) => PokemonV2EncounterconditionvaluemapModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvaluemap_by_pk`, PokemonV2EncounterconditionvaluemapModelSelector, builder) }
  pokemon_v2_encounterconditionvaluename(builder?: string | PokemonV2EncounterconditionvaluenameModelSelector | ((selector: PokemonV2EncounterconditionvaluenameModelSelector) => PokemonV2EncounterconditionvaluenameModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvaluename`, PokemonV2EncounterconditionvaluenameModelSelector, builder) }
  pokemon_v2_encounterconditionvaluename_aggregate(builder?: string | PokemonV2EncounterconditionvaluenameAggregateModelSelector | ((selector: PokemonV2EncounterconditionvaluenameAggregateModelSelector) => PokemonV2EncounterconditionvaluenameAggregateModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvaluename_aggregate`, PokemonV2EncounterconditionvaluenameAggregateModelSelector, builder) }
  pokemon_v2_encounterconditionvaluename_by_pk(builder?: string | PokemonV2EncounterconditionvaluenameModelSelector | ((selector: PokemonV2EncounterconditionvaluenameModelSelector) => PokemonV2EncounterconditionvaluenameModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvaluename_by_pk`, PokemonV2EncounterconditionvaluenameModelSelector, builder) }
  pokemon_v2_encountermethod(builder?: string | PokemonV2EncountermethodModelSelector | ((selector: PokemonV2EncountermethodModelSelector) => PokemonV2EncountermethodModelSelector)) { return this.__child(`pokemon_v2_encountermethod`, PokemonV2EncountermethodModelSelector, builder) }
  pokemon_v2_encountermethod_aggregate(builder?: string | PokemonV2EncountermethodAggregateModelSelector | ((selector: PokemonV2EncountermethodAggregateModelSelector) => PokemonV2EncountermethodAggregateModelSelector)) { return this.__child(`pokemon_v2_encountermethod_aggregate`, PokemonV2EncountermethodAggregateModelSelector, builder) }
  pokemon_v2_encountermethod_by_pk(builder?: string | PokemonV2EncountermethodModelSelector | ((selector: PokemonV2EncountermethodModelSelector) => PokemonV2EncountermethodModelSelector)) { return this.__child(`pokemon_v2_encountermethod_by_pk`, PokemonV2EncountermethodModelSelector, builder) }
  pokemon_v2_encountermethodname(builder?: string | PokemonV2EncountermethodnameModelSelector | ((selector: PokemonV2EncountermethodnameModelSelector) => PokemonV2EncountermethodnameModelSelector)) { return this.__child(`pokemon_v2_encountermethodname`, PokemonV2EncountermethodnameModelSelector, builder) }
  pokemon_v2_encountermethodname_aggregate(builder?: string | PokemonV2EncountermethodnameAggregateModelSelector | ((selector: PokemonV2EncountermethodnameAggregateModelSelector) => PokemonV2EncountermethodnameAggregateModelSelector)) { return this.__child(`pokemon_v2_encountermethodname_aggregate`, PokemonV2EncountermethodnameAggregateModelSelector, builder) }
  pokemon_v2_encountermethodname_by_pk(builder?: string | PokemonV2EncountermethodnameModelSelector | ((selector: PokemonV2EncountermethodnameModelSelector) => PokemonV2EncountermethodnameModelSelector)) { return this.__child(`pokemon_v2_encountermethodname_by_pk`, PokemonV2EncountermethodnameModelSelector, builder) }
  pokemon_v2_encounterslot(builder?: string | PokemonV2EncounterslotModelSelector | ((selector: PokemonV2EncounterslotModelSelector) => PokemonV2EncounterslotModelSelector)) { return this.__child(`pokemon_v2_encounterslot`, PokemonV2EncounterslotModelSelector, builder) }
  pokemon_v2_encounterslot_aggregate(builder?: string | PokemonV2EncounterslotAggregateModelSelector | ((selector: PokemonV2EncounterslotAggregateModelSelector) => PokemonV2EncounterslotAggregateModelSelector)) { return this.__child(`pokemon_v2_encounterslot_aggregate`, PokemonV2EncounterslotAggregateModelSelector, builder) }
  pokemon_v2_encounterslot_by_pk(builder?: string | PokemonV2EncounterslotModelSelector | ((selector: PokemonV2EncounterslotModelSelector) => PokemonV2EncounterslotModelSelector)) { return this.__child(`pokemon_v2_encounterslot_by_pk`, PokemonV2EncounterslotModelSelector, builder) }
  pokemon_v2_evolutionchain(builder?: string | PokemonV2EvolutionchainModelSelector | ((selector: PokemonV2EvolutionchainModelSelector) => PokemonV2EvolutionchainModelSelector)) { return this.__child(`pokemon_v2_evolutionchain`, PokemonV2EvolutionchainModelSelector, builder) }
  pokemon_v2_evolutionchain_aggregate(builder?: string | PokemonV2EvolutionchainAggregateModelSelector | ((selector: PokemonV2EvolutionchainAggregateModelSelector) => PokemonV2EvolutionchainAggregateModelSelector)) { return this.__child(`pokemon_v2_evolutionchain_aggregate`, PokemonV2EvolutionchainAggregateModelSelector, builder) }
  pokemon_v2_evolutionchain_by_pk(builder?: string | PokemonV2EvolutionchainModelSelector | ((selector: PokemonV2EvolutionchainModelSelector) => PokemonV2EvolutionchainModelSelector)) { return this.__child(`pokemon_v2_evolutionchain_by_pk`, PokemonV2EvolutionchainModelSelector, builder) }
  pokemon_v2_evolutiontrigger(builder?: string | PokemonV2EvolutiontriggerModelSelector | ((selector: PokemonV2EvolutiontriggerModelSelector) => PokemonV2EvolutiontriggerModelSelector)) { return this.__child(`pokemon_v2_evolutiontrigger`, PokemonV2EvolutiontriggerModelSelector, builder) }
  pokemon_v2_evolutiontrigger_aggregate(builder?: string | PokemonV2EvolutiontriggerAggregateModelSelector | ((selector: PokemonV2EvolutiontriggerAggregateModelSelector) => PokemonV2EvolutiontriggerAggregateModelSelector)) { return this.__child(`pokemon_v2_evolutiontrigger_aggregate`, PokemonV2EvolutiontriggerAggregateModelSelector, builder) }
  pokemon_v2_evolutiontrigger_by_pk(builder?: string | PokemonV2EvolutiontriggerModelSelector | ((selector: PokemonV2EvolutiontriggerModelSelector) => PokemonV2EvolutiontriggerModelSelector)) { return this.__child(`pokemon_v2_evolutiontrigger_by_pk`, PokemonV2EvolutiontriggerModelSelector, builder) }
  pokemon_v2_evolutiontriggername(builder?: string | PokemonV2EvolutiontriggernameModelSelector | ((selector: PokemonV2EvolutiontriggernameModelSelector) => PokemonV2EvolutiontriggernameModelSelector)) { return this.__child(`pokemon_v2_evolutiontriggername`, PokemonV2EvolutiontriggernameModelSelector, builder) }
  pokemon_v2_evolutiontriggername_aggregate(builder?: string | PokemonV2EvolutiontriggernameAggregateModelSelector | ((selector: PokemonV2EvolutiontriggernameAggregateModelSelector) => PokemonV2EvolutiontriggernameAggregateModelSelector)) { return this.__child(`pokemon_v2_evolutiontriggername_aggregate`, PokemonV2EvolutiontriggernameAggregateModelSelector, builder) }
  pokemon_v2_evolutiontriggername_by_pk(builder?: string | PokemonV2EvolutiontriggernameModelSelector | ((selector: PokemonV2EvolutiontriggernameModelSelector) => PokemonV2EvolutiontriggernameModelSelector)) { return this.__child(`pokemon_v2_evolutiontriggername_by_pk`, PokemonV2EvolutiontriggernameModelSelector, builder) }
  pokemon_v2_experience(builder?: string | PokemonV2ExperienceModelSelector | ((selector: PokemonV2ExperienceModelSelector) => PokemonV2ExperienceModelSelector)) { return this.__child(`pokemon_v2_experience`, PokemonV2ExperienceModelSelector, builder) }
  pokemon_v2_experience_aggregate(builder?: string | PokemonV2ExperienceAggregateModelSelector | ((selector: PokemonV2ExperienceAggregateModelSelector) => PokemonV2ExperienceAggregateModelSelector)) { return this.__child(`pokemon_v2_experience_aggregate`, PokemonV2ExperienceAggregateModelSelector, builder) }
  pokemon_v2_experience_by_pk(builder?: string | PokemonV2ExperienceModelSelector | ((selector: PokemonV2ExperienceModelSelector) => PokemonV2ExperienceModelSelector)) { return this.__child(`pokemon_v2_experience_by_pk`, PokemonV2ExperienceModelSelector, builder) }
  pokemon_v2_gender(builder?: string | PokemonV2GenderModelSelector | ((selector: PokemonV2GenderModelSelector) => PokemonV2GenderModelSelector)) { return this.__child(`pokemon_v2_gender`, PokemonV2GenderModelSelector, builder) }
  pokemon_v2_gender_aggregate(builder?: string | PokemonV2GenderAggregateModelSelector | ((selector: PokemonV2GenderAggregateModelSelector) => PokemonV2GenderAggregateModelSelector)) { return this.__child(`pokemon_v2_gender_aggregate`, PokemonV2GenderAggregateModelSelector, builder) }
  pokemon_v2_gender_by_pk(builder?: string | PokemonV2GenderModelSelector | ((selector: PokemonV2GenderModelSelector) => PokemonV2GenderModelSelector)) { return this.__child(`pokemon_v2_gender_by_pk`, PokemonV2GenderModelSelector, builder) }
  pokemon_v2_generation(builder?: string | PokemonV2GenerationModelSelector | ((selector: PokemonV2GenerationModelSelector) => PokemonV2GenerationModelSelector)) { return this.__child(`pokemon_v2_generation`, PokemonV2GenerationModelSelector, builder) }
  pokemon_v2_generation_aggregate(builder?: string | PokemonV2GenerationAggregateModelSelector | ((selector: PokemonV2GenerationAggregateModelSelector) => PokemonV2GenerationAggregateModelSelector)) { return this.__child(`pokemon_v2_generation_aggregate`, PokemonV2GenerationAggregateModelSelector, builder) }
  pokemon_v2_generation_by_pk(builder?: string | PokemonV2GenerationModelSelector | ((selector: PokemonV2GenerationModelSelector) => PokemonV2GenerationModelSelector)) { return this.__child(`pokemon_v2_generation_by_pk`, PokemonV2GenerationModelSelector, builder) }
  pokemon_v2_generationname(builder?: string | PokemonV2GenerationnameModelSelector | ((selector: PokemonV2GenerationnameModelSelector) => PokemonV2GenerationnameModelSelector)) { return this.__child(`pokemon_v2_generationname`, PokemonV2GenerationnameModelSelector, builder) }
  pokemon_v2_generationname_aggregate(builder?: string | PokemonV2GenerationnameAggregateModelSelector | ((selector: PokemonV2GenerationnameAggregateModelSelector) => PokemonV2GenerationnameAggregateModelSelector)) { return this.__child(`pokemon_v2_generationname_aggregate`, PokemonV2GenerationnameAggregateModelSelector, builder) }
  pokemon_v2_generationname_by_pk(builder?: string | PokemonV2GenerationnameModelSelector | ((selector: PokemonV2GenerationnameModelSelector) => PokemonV2GenerationnameModelSelector)) { return this.__child(`pokemon_v2_generationname_by_pk`, PokemonV2GenerationnameModelSelector, builder) }
  pokemon_v2_growthrate(builder?: string | PokemonV2GrowthrateModelSelector | ((selector: PokemonV2GrowthrateModelSelector) => PokemonV2GrowthrateModelSelector)) { return this.__child(`pokemon_v2_growthrate`, PokemonV2GrowthrateModelSelector, builder) }
  pokemon_v2_growthrate_aggregate(builder?: string | PokemonV2GrowthrateAggregateModelSelector | ((selector: PokemonV2GrowthrateAggregateModelSelector) => PokemonV2GrowthrateAggregateModelSelector)) { return this.__child(`pokemon_v2_growthrate_aggregate`, PokemonV2GrowthrateAggregateModelSelector, builder) }
  pokemon_v2_growthrate_by_pk(builder?: string | PokemonV2GrowthrateModelSelector | ((selector: PokemonV2GrowthrateModelSelector) => PokemonV2GrowthrateModelSelector)) { return this.__child(`pokemon_v2_growthrate_by_pk`, PokemonV2GrowthrateModelSelector, builder) }
  pokemon_v2_growthratedescription(builder?: string | PokemonV2GrowthratedescriptionModelSelector | ((selector: PokemonV2GrowthratedescriptionModelSelector) => PokemonV2GrowthratedescriptionModelSelector)) { return this.__child(`pokemon_v2_growthratedescription`, PokemonV2GrowthratedescriptionModelSelector, builder) }
  pokemon_v2_growthratedescription_aggregate(builder?: string | PokemonV2GrowthratedescriptionAggregateModelSelector | ((selector: PokemonV2GrowthratedescriptionAggregateModelSelector) => PokemonV2GrowthratedescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_growthratedescription_aggregate`, PokemonV2GrowthratedescriptionAggregateModelSelector, builder) }
  pokemon_v2_growthratedescription_by_pk(builder?: string | PokemonV2GrowthratedescriptionModelSelector | ((selector: PokemonV2GrowthratedescriptionModelSelector) => PokemonV2GrowthratedescriptionModelSelector)) { return this.__child(`pokemon_v2_growthratedescription_by_pk`, PokemonV2GrowthratedescriptionModelSelector, builder) }
  pokemon_v2_item(builder?: string | PokemonV2ItemModelSelector | ((selector: PokemonV2ItemModelSelector) => PokemonV2ItemModelSelector)) { return this.__child(`pokemon_v2_item`, PokemonV2ItemModelSelector, builder) }
  pokemon_v2_item_aggregate(builder?: string | PokemonV2ItemAggregateModelSelector | ((selector: PokemonV2ItemAggregateModelSelector) => PokemonV2ItemAggregateModelSelector)) { return this.__child(`pokemon_v2_item_aggregate`, PokemonV2ItemAggregateModelSelector, builder) }
  pokemon_v2_item_by_pk(builder?: string | PokemonV2ItemModelSelector | ((selector: PokemonV2ItemModelSelector) => PokemonV2ItemModelSelector)) { return this.__child(`pokemon_v2_item_by_pk`, PokemonV2ItemModelSelector, builder) }
  pokemon_v2_itemattribute(builder?: string | PokemonV2ItemattributeModelSelector | ((selector: PokemonV2ItemattributeModelSelector) => PokemonV2ItemattributeModelSelector)) { return this.__child(`pokemon_v2_itemattribute`, PokemonV2ItemattributeModelSelector, builder) }
  pokemon_v2_itemattribute_aggregate(builder?: string | PokemonV2ItemattributeAggregateModelSelector | ((selector: PokemonV2ItemattributeAggregateModelSelector) => PokemonV2ItemattributeAggregateModelSelector)) { return this.__child(`pokemon_v2_itemattribute_aggregate`, PokemonV2ItemattributeAggregateModelSelector, builder) }
  pokemon_v2_itemattribute_by_pk(builder?: string | PokemonV2ItemattributeModelSelector | ((selector: PokemonV2ItemattributeModelSelector) => PokemonV2ItemattributeModelSelector)) { return this.__child(`pokemon_v2_itemattribute_by_pk`, PokemonV2ItemattributeModelSelector, builder) }
  pokemon_v2_itemattributedescription(builder?: string | PokemonV2ItemattributedescriptionModelSelector | ((selector: PokemonV2ItemattributedescriptionModelSelector) => PokemonV2ItemattributedescriptionModelSelector)) { return this.__child(`pokemon_v2_itemattributedescription`, PokemonV2ItemattributedescriptionModelSelector, builder) }
  pokemon_v2_itemattributedescription_aggregate(builder?: string | PokemonV2ItemattributedescriptionAggregateModelSelector | ((selector: PokemonV2ItemattributedescriptionAggregateModelSelector) => PokemonV2ItemattributedescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_itemattributedescription_aggregate`, PokemonV2ItemattributedescriptionAggregateModelSelector, builder) }
  pokemon_v2_itemattributedescription_by_pk(builder?: string | PokemonV2ItemattributedescriptionModelSelector | ((selector: PokemonV2ItemattributedescriptionModelSelector) => PokemonV2ItemattributedescriptionModelSelector)) { return this.__child(`pokemon_v2_itemattributedescription_by_pk`, PokemonV2ItemattributedescriptionModelSelector, builder) }
  pokemon_v2_itemattributemap(builder?: string | PokemonV2ItemattributemapModelSelector | ((selector: PokemonV2ItemattributemapModelSelector) => PokemonV2ItemattributemapModelSelector)) { return this.__child(`pokemon_v2_itemattributemap`, PokemonV2ItemattributemapModelSelector, builder) }
  pokemon_v2_itemattributemap_aggregate(builder?: string | PokemonV2ItemattributemapAggregateModelSelector | ((selector: PokemonV2ItemattributemapAggregateModelSelector) => PokemonV2ItemattributemapAggregateModelSelector)) { return this.__child(`pokemon_v2_itemattributemap_aggregate`, PokemonV2ItemattributemapAggregateModelSelector, builder) }
  pokemon_v2_itemattributemap_by_pk(builder?: string | PokemonV2ItemattributemapModelSelector | ((selector: PokemonV2ItemattributemapModelSelector) => PokemonV2ItemattributemapModelSelector)) { return this.__child(`pokemon_v2_itemattributemap_by_pk`, PokemonV2ItemattributemapModelSelector, builder) }
  pokemon_v2_itemattributename(builder?: string | PokemonV2ItemattributenameModelSelector | ((selector: PokemonV2ItemattributenameModelSelector) => PokemonV2ItemattributenameModelSelector)) { return this.__child(`pokemon_v2_itemattributename`, PokemonV2ItemattributenameModelSelector, builder) }
  pokemon_v2_itemattributename_aggregate(builder?: string | PokemonV2ItemattributenameAggregateModelSelector | ((selector: PokemonV2ItemattributenameAggregateModelSelector) => PokemonV2ItemattributenameAggregateModelSelector)) { return this.__child(`pokemon_v2_itemattributename_aggregate`, PokemonV2ItemattributenameAggregateModelSelector, builder) }
  pokemon_v2_itemattributename_by_pk(builder?: string | PokemonV2ItemattributenameModelSelector | ((selector: PokemonV2ItemattributenameModelSelector) => PokemonV2ItemattributenameModelSelector)) { return this.__child(`pokemon_v2_itemattributename_by_pk`, PokemonV2ItemattributenameModelSelector, builder) }
  pokemon_v2_itemcategory(builder?: string | PokemonV2ItemcategoryModelSelector | ((selector: PokemonV2ItemcategoryModelSelector) => PokemonV2ItemcategoryModelSelector)) { return this.__child(`pokemon_v2_itemcategory`, PokemonV2ItemcategoryModelSelector, builder) }
  pokemon_v2_itemcategory_aggregate(builder?: string | PokemonV2ItemcategoryAggregateModelSelector | ((selector: PokemonV2ItemcategoryAggregateModelSelector) => PokemonV2ItemcategoryAggregateModelSelector)) { return this.__child(`pokemon_v2_itemcategory_aggregate`, PokemonV2ItemcategoryAggregateModelSelector, builder) }
  pokemon_v2_itemcategory_by_pk(builder?: string | PokemonV2ItemcategoryModelSelector | ((selector: PokemonV2ItemcategoryModelSelector) => PokemonV2ItemcategoryModelSelector)) { return this.__child(`pokemon_v2_itemcategory_by_pk`, PokemonV2ItemcategoryModelSelector, builder) }
  pokemon_v2_itemcategoryname(builder?: string | PokemonV2ItemcategorynameModelSelector | ((selector: PokemonV2ItemcategorynameModelSelector) => PokemonV2ItemcategorynameModelSelector)) { return this.__child(`pokemon_v2_itemcategoryname`, PokemonV2ItemcategorynameModelSelector, builder) }
  pokemon_v2_itemcategoryname_aggregate(builder?: string | PokemonV2ItemcategorynameAggregateModelSelector | ((selector: PokemonV2ItemcategorynameAggregateModelSelector) => PokemonV2ItemcategorynameAggregateModelSelector)) { return this.__child(`pokemon_v2_itemcategoryname_aggregate`, PokemonV2ItemcategorynameAggregateModelSelector, builder) }
  pokemon_v2_itemcategoryname_by_pk(builder?: string | PokemonV2ItemcategorynameModelSelector | ((selector: PokemonV2ItemcategorynameModelSelector) => PokemonV2ItemcategorynameModelSelector)) { return this.__child(`pokemon_v2_itemcategoryname_by_pk`, PokemonV2ItemcategorynameModelSelector, builder) }
  pokemon_v2_itemeffecttext(builder?: string | PokemonV2ItemeffecttextModelSelector | ((selector: PokemonV2ItemeffecttextModelSelector) => PokemonV2ItemeffecttextModelSelector)) { return this.__child(`pokemon_v2_itemeffecttext`, PokemonV2ItemeffecttextModelSelector, builder) }
  pokemon_v2_itemeffecttext_aggregate(builder?: string | PokemonV2ItemeffecttextAggregateModelSelector | ((selector: PokemonV2ItemeffecttextAggregateModelSelector) => PokemonV2ItemeffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_itemeffecttext_aggregate`, PokemonV2ItemeffecttextAggregateModelSelector, builder) }
  pokemon_v2_itemeffecttext_by_pk(builder?: string | PokemonV2ItemeffecttextModelSelector | ((selector: PokemonV2ItemeffecttextModelSelector) => PokemonV2ItemeffecttextModelSelector)) { return this.__child(`pokemon_v2_itemeffecttext_by_pk`, PokemonV2ItemeffecttextModelSelector, builder) }
  pokemon_v2_itemflavortext(builder?: string | PokemonV2ItemflavortextModelSelector | ((selector: PokemonV2ItemflavortextModelSelector) => PokemonV2ItemflavortextModelSelector)) { return this.__child(`pokemon_v2_itemflavortext`, PokemonV2ItemflavortextModelSelector, builder) }
  pokemon_v2_itemflavortext_aggregate(builder?: string | PokemonV2ItemflavortextAggregateModelSelector | ((selector: PokemonV2ItemflavortextAggregateModelSelector) => PokemonV2ItemflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_itemflavortext_aggregate`, PokemonV2ItemflavortextAggregateModelSelector, builder) }
  pokemon_v2_itemflavortext_by_pk(builder?: string | PokemonV2ItemflavortextModelSelector | ((selector: PokemonV2ItemflavortextModelSelector) => PokemonV2ItemflavortextModelSelector)) { return this.__child(`pokemon_v2_itemflavortext_by_pk`, PokemonV2ItemflavortextModelSelector, builder) }
  pokemon_v2_itemflingeffect(builder?: string | PokemonV2ItemflingeffectModelSelector | ((selector: PokemonV2ItemflingeffectModelSelector) => PokemonV2ItemflingeffectModelSelector)) { return this.__child(`pokemon_v2_itemflingeffect`, PokemonV2ItemflingeffectModelSelector, builder) }
  pokemon_v2_itemflingeffect_aggregate(builder?: string | PokemonV2ItemflingeffectAggregateModelSelector | ((selector: PokemonV2ItemflingeffectAggregateModelSelector) => PokemonV2ItemflingeffectAggregateModelSelector)) { return this.__child(`pokemon_v2_itemflingeffect_aggregate`, PokemonV2ItemflingeffectAggregateModelSelector, builder) }
  pokemon_v2_itemflingeffect_by_pk(builder?: string | PokemonV2ItemflingeffectModelSelector | ((selector: PokemonV2ItemflingeffectModelSelector) => PokemonV2ItemflingeffectModelSelector)) { return this.__child(`pokemon_v2_itemflingeffect_by_pk`, PokemonV2ItemflingeffectModelSelector, builder) }
  pokemon_v2_itemflingeffecteffecttext(builder?: string | PokemonV2ItemflingeffecteffecttextModelSelector | ((selector: PokemonV2ItemflingeffecteffecttextModelSelector) => PokemonV2ItemflingeffecteffecttextModelSelector)) { return this.__child(`pokemon_v2_itemflingeffecteffecttext`, PokemonV2ItemflingeffecteffecttextModelSelector, builder) }
  pokemon_v2_itemflingeffecteffecttext_aggregate(builder?: string | PokemonV2ItemflingeffecteffecttextAggregateModelSelector | ((selector: PokemonV2ItemflingeffecteffecttextAggregateModelSelector) => PokemonV2ItemflingeffecteffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_itemflingeffecteffecttext_aggregate`, PokemonV2ItemflingeffecteffecttextAggregateModelSelector, builder) }
  pokemon_v2_itemflingeffecteffecttext_by_pk(builder?: string | PokemonV2ItemflingeffecteffecttextModelSelector | ((selector: PokemonV2ItemflingeffecteffecttextModelSelector) => PokemonV2ItemflingeffecteffecttextModelSelector)) { return this.__child(`pokemon_v2_itemflingeffecteffecttext_by_pk`, PokemonV2ItemflingeffecteffecttextModelSelector, builder) }
  pokemon_v2_itemgameindex(builder?: string | PokemonV2ItemgameindexModelSelector | ((selector: PokemonV2ItemgameindexModelSelector) => PokemonV2ItemgameindexModelSelector)) { return this.__child(`pokemon_v2_itemgameindex`, PokemonV2ItemgameindexModelSelector, builder) }
  pokemon_v2_itemgameindex_aggregate(builder?: string | PokemonV2ItemgameindexAggregateModelSelector | ((selector: PokemonV2ItemgameindexAggregateModelSelector) => PokemonV2ItemgameindexAggregateModelSelector)) { return this.__child(`pokemon_v2_itemgameindex_aggregate`, PokemonV2ItemgameindexAggregateModelSelector, builder) }
  pokemon_v2_itemgameindex_by_pk(builder?: string | PokemonV2ItemgameindexModelSelector | ((selector: PokemonV2ItemgameindexModelSelector) => PokemonV2ItemgameindexModelSelector)) { return this.__child(`pokemon_v2_itemgameindex_by_pk`, PokemonV2ItemgameindexModelSelector, builder) }
  pokemon_v2_itemname(builder?: string | PokemonV2ItemnameModelSelector | ((selector: PokemonV2ItemnameModelSelector) => PokemonV2ItemnameModelSelector)) { return this.__child(`pokemon_v2_itemname`, PokemonV2ItemnameModelSelector, builder) }
  pokemon_v2_itemname_aggregate(builder?: string | PokemonV2ItemnameAggregateModelSelector | ((selector: PokemonV2ItemnameAggregateModelSelector) => PokemonV2ItemnameAggregateModelSelector)) { return this.__child(`pokemon_v2_itemname_aggregate`, PokemonV2ItemnameAggregateModelSelector, builder) }
  pokemon_v2_itemname_by_pk(builder?: string | PokemonV2ItemnameModelSelector | ((selector: PokemonV2ItemnameModelSelector) => PokemonV2ItemnameModelSelector)) { return this.__child(`pokemon_v2_itemname_by_pk`, PokemonV2ItemnameModelSelector, builder) }
  pokemon_v2_itempocket(builder?: string | PokemonV2ItempocketModelSelector | ((selector: PokemonV2ItempocketModelSelector) => PokemonV2ItempocketModelSelector)) { return this.__child(`pokemon_v2_itempocket`, PokemonV2ItempocketModelSelector, builder) }
  pokemon_v2_itempocket_aggregate(builder?: string | PokemonV2ItempocketAggregateModelSelector | ((selector: PokemonV2ItempocketAggregateModelSelector) => PokemonV2ItempocketAggregateModelSelector)) { return this.__child(`pokemon_v2_itempocket_aggregate`, PokemonV2ItempocketAggregateModelSelector, builder) }
  pokemon_v2_itempocket_by_pk(builder?: string | PokemonV2ItempocketModelSelector | ((selector: PokemonV2ItempocketModelSelector) => PokemonV2ItempocketModelSelector)) { return this.__child(`pokemon_v2_itempocket_by_pk`, PokemonV2ItempocketModelSelector, builder) }
  pokemon_v2_itempocketname(builder?: string | PokemonV2ItempocketnameModelSelector | ((selector: PokemonV2ItempocketnameModelSelector) => PokemonV2ItempocketnameModelSelector)) { return this.__child(`pokemon_v2_itempocketname`, PokemonV2ItempocketnameModelSelector, builder) }
  pokemon_v2_itempocketname_aggregate(builder?: string | PokemonV2ItempocketnameAggregateModelSelector | ((selector: PokemonV2ItempocketnameAggregateModelSelector) => PokemonV2ItempocketnameAggregateModelSelector)) { return this.__child(`pokemon_v2_itempocketname_aggregate`, PokemonV2ItempocketnameAggregateModelSelector, builder) }
  pokemon_v2_itempocketname_by_pk(builder?: string | PokemonV2ItempocketnameModelSelector | ((selector: PokemonV2ItempocketnameModelSelector) => PokemonV2ItempocketnameModelSelector)) { return this.__child(`pokemon_v2_itempocketname_by_pk`, PokemonV2ItempocketnameModelSelector, builder) }
  pokemon_v2_itemsprites(builder?: string | PokemonV2ItemspritesModelSelector | ((selector: PokemonV2ItemspritesModelSelector) => PokemonV2ItemspritesModelSelector)) { return this.__child(`pokemon_v2_itemsprites`, PokemonV2ItemspritesModelSelector, builder) }
  pokemon_v2_itemsprites_aggregate(builder?: string | PokemonV2ItemspritesAggregateModelSelector | ((selector: PokemonV2ItemspritesAggregateModelSelector) => PokemonV2ItemspritesAggregateModelSelector)) { return this.__child(`pokemon_v2_itemsprites_aggregate`, PokemonV2ItemspritesAggregateModelSelector, builder) }
  pokemon_v2_itemsprites_by_pk(builder?: string | PokemonV2ItemspritesModelSelector | ((selector: PokemonV2ItemspritesModelSelector) => PokemonV2ItemspritesModelSelector)) { return this.__child(`pokemon_v2_itemsprites_by_pk`, PokemonV2ItemspritesModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_language_aggregate(builder?: string | PokemonV2LanguageAggregateModelSelector | ((selector: PokemonV2LanguageAggregateModelSelector) => PokemonV2LanguageAggregateModelSelector)) { return this.__child(`pokemon_v2_language_aggregate`, PokemonV2LanguageAggregateModelSelector, builder) }
  pokemon_v2_language_by_pk(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language_by_pk`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_languagename(builder?: string | PokemonV2LanguagenameModelSelector | ((selector: PokemonV2LanguagenameModelSelector) => PokemonV2LanguagenameModelSelector)) { return this.__child(`pokemon_v2_languagename`, PokemonV2LanguagenameModelSelector, builder) }
  pokemon_v2_languagename_aggregate(builder?: string | PokemonV2LanguagenameAggregateModelSelector | ((selector: PokemonV2LanguagenameAggregateModelSelector) => PokemonV2LanguagenameAggregateModelSelector)) { return this.__child(`pokemon_v2_languagename_aggregate`, PokemonV2LanguagenameAggregateModelSelector, builder) }
  pokemon_v2_languagename_by_pk(builder?: string | PokemonV2LanguagenameModelSelector | ((selector: PokemonV2LanguagenameModelSelector) => PokemonV2LanguagenameModelSelector)) { return this.__child(`pokemon_v2_languagename_by_pk`, PokemonV2LanguagenameModelSelector, builder) }
  pokemon_v2_location(builder?: string | PokemonV2LocationModelSelector | ((selector: PokemonV2LocationModelSelector) => PokemonV2LocationModelSelector)) { return this.__child(`pokemon_v2_location`, PokemonV2LocationModelSelector, builder) }
  pokemon_v2_location_aggregate(builder?: string | PokemonV2LocationAggregateModelSelector | ((selector: PokemonV2LocationAggregateModelSelector) => PokemonV2LocationAggregateModelSelector)) { return this.__child(`pokemon_v2_location_aggregate`, PokemonV2LocationAggregateModelSelector, builder) }
  pokemon_v2_location_by_pk(builder?: string | PokemonV2LocationModelSelector | ((selector: PokemonV2LocationModelSelector) => PokemonV2LocationModelSelector)) { return this.__child(`pokemon_v2_location_by_pk`, PokemonV2LocationModelSelector, builder) }
  pokemon_v2_locationarea(builder?: string | PokemonV2LocationareaModelSelector | ((selector: PokemonV2LocationareaModelSelector) => PokemonV2LocationareaModelSelector)) { return this.__child(`pokemon_v2_locationarea`, PokemonV2LocationareaModelSelector, builder) }
  pokemon_v2_locationarea_aggregate(builder?: string | PokemonV2LocationareaAggregateModelSelector | ((selector: PokemonV2LocationareaAggregateModelSelector) => PokemonV2LocationareaAggregateModelSelector)) { return this.__child(`pokemon_v2_locationarea_aggregate`, PokemonV2LocationareaAggregateModelSelector, builder) }
  pokemon_v2_locationarea_by_pk(builder?: string | PokemonV2LocationareaModelSelector | ((selector: PokemonV2LocationareaModelSelector) => PokemonV2LocationareaModelSelector)) { return this.__child(`pokemon_v2_locationarea_by_pk`, PokemonV2LocationareaModelSelector, builder) }
  pokemon_v2_locationareaencounterrate(builder?: string | PokemonV2LocationareaencounterrateModelSelector | ((selector: PokemonV2LocationareaencounterrateModelSelector) => PokemonV2LocationareaencounterrateModelSelector)) { return this.__child(`pokemon_v2_locationareaencounterrate`, PokemonV2LocationareaencounterrateModelSelector, builder) }
  pokemon_v2_locationareaencounterrate_aggregate(builder?: string | PokemonV2LocationareaencounterrateAggregateModelSelector | ((selector: PokemonV2LocationareaencounterrateAggregateModelSelector) => PokemonV2LocationareaencounterrateAggregateModelSelector)) { return this.__child(`pokemon_v2_locationareaencounterrate_aggregate`, PokemonV2LocationareaencounterrateAggregateModelSelector, builder) }
  pokemon_v2_locationareaencounterrate_by_pk(builder?: string | PokemonV2LocationareaencounterrateModelSelector | ((selector: PokemonV2LocationareaencounterrateModelSelector) => PokemonV2LocationareaencounterrateModelSelector)) { return this.__child(`pokemon_v2_locationareaencounterrate_by_pk`, PokemonV2LocationareaencounterrateModelSelector, builder) }
  pokemon_v2_locationareaname(builder?: string | PokemonV2LocationareanameModelSelector | ((selector: PokemonV2LocationareanameModelSelector) => PokemonV2LocationareanameModelSelector)) { return this.__child(`pokemon_v2_locationareaname`, PokemonV2LocationareanameModelSelector, builder) }
  pokemon_v2_locationareaname_aggregate(builder?: string | PokemonV2LocationareanameAggregateModelSelector | ((selector: PokemonV2LocationareanameAggregateModelSelector) => PokemonV2LocationareanameAggregateModelSelector)) { return this.__child(`pokemon_v2_locationareaname_aggregate`, PokemonV2LocationareanameAggregateModelSelector, builder) }
  pokemon_v2_locationareaname_by_pk(builder?: string | PokemonV2LocationareanameModelSelector | ((selector: PokemonV2LocationareanameModelSelector) => PokemonV2LocationareanameModelSelector)) { return this.__child(`pokemon_v2_locationareaname_by_pk`, PokemonV2LocationareanameModelSelector, builder) }
  pokemon_v2_locationgameindex(builder?: string | PokemonV2LocationgameindexModelSelector | ((selector: PokemonV2LocationgameindexModelSelector) => PokemonV2LocationgameindexModelSelector)) { return this.__child(`pokemon_v2_locationgameindex`, PokemonV2LocationgameindexModelSelector, builder) }
  pokemon_v2_locationgameindex_aggregate(builder?: string | PokemonV2LocationgameindexAggregateModelSelector | ((selector: PokemonV2LocationgameindexAggregateModelSelector) => PokemonV2LocationgameindexAggregateModelSelector)) { return this.__child(`pokemon_v2_locationgameindex_aggregate`, PokemonV2LocationgameindexAggregateModelSelector, builder) }
  pokemon_v2_locationgameindex_by_pk(builder?: string | PokemonV2LocationgameindexModelSelector | ((selector: PokemonV2LocationgameindexModelSelector) => PokemonV2LocationgameindexModelSelector)) { return this.__child(`pokemon_v2_locationgameindex_by_pk`, PokemonV2LocationgameindexModelSelector, builder) }
  pokemon_v2_locationname(builder?: string | PokemonV2LocationnameModelSelector | ((selector: PokemonV2LocationnameModelSelector) => PokemonV2LocationnameModelSelector)) { return this.__child(`pokemon_v2_locationname`, PokemonV2LocationnameModelSelector, builder) }
  pokemon_v2_locationname_aggregate(builder?: string | PokemonV2LocationnameAggregateModelSelector | ((selector: PokemonV2LocationnameAggregateModelSelector) => PokemonV2LocationnameAggregateModelSelector)) { return this.__child(`pokemon_v2_locationname_aggregate`, PokemonV2LocationnameAggregateModelSelector, builder) }
  pokemon_v2_locationname_by_pk(builder?: string | PokemonV2LocationnameModelSelector | ((selector: PokemonV2LocationnameModelSelector) => PokemonV2LocationnameModelSelector)) { return this.__child(`pokemon_v2_locationname_by_pk`, PokemonV2LocationnameModelSelector, builder) }
  pokemon_v2_machine(builder?: string | PokemonV2MachineModelSelector | ((selector: PokemonV2MachineModelSelector) => PokemonV2MachineModelSelector)) { return this.__child(`pokemon_v2_machine`, PokemonV2MachineModelSelector, builder) }
  pokemon_v2_machine_aggregate(builder?: string | PokemonV2MachineAggregateModelSelector | ((selector: PokemonV2MachineAggregateModelSelector) => PokemonV2MachineAggregateModelSelector)) { return this.__child(`pokemon_v2_machine_aggregate`, PokemonV2MachineAggregateModelSelector, builder) }
  pokemon_v2_machine_by_pk(builder?: string | PokemonV2MachineModelSelector | ((selector: PokemonV2MachineModelSelector) => PokemonV2MachineModelSelector)) { return this.__child(`pokemon_v2_machine_by_pk`, PokemonV2MachineModelSelector, builder) }
  pokemon_v2_move(builder?: string | PokemonV2MoveModelSelector | ((selector: PokemonV2MoveModelSelector) => PokemonV2MoveModelSelector)) { return this.__child(`pokemon_v2_move`, PokemonV2MoveModelSelector, builder) }
  pokemon_v2_move_aggregate(builder?: string | PokemonV2MoveAggregateModelSelector | ((selector: PokemonV2MoveAggregateModelSelector) => PokemonV2MoveAggregateModelSelector)) { return this.__child(`pokemon_v2_move_aggregate`, PokemonV2MoveAggregateModelSelector, builder) }
  pokemon_v2_move_by_pk(builder?: string | PokemonV2MoveModelSelector | ((selector: PokemonV2MoveModelSelector) => PokemonV2MoveModelSelector)) { return this.__child(`pokemon_v2_move_by_pk`, PokemonV2MoveModelSelector, builder) }
  pokemon_v2_moveattribute(builder?: string | PokemonV2MoveattributeModelSelector | ((selector: PokemonV2MoveattributeModelSelector) => PokemonV2MoveattributeModelSelector)) { return this.__child(`pokemon_v2_moveattribute`, PokemonV2MoveattributeModelSelector, builder) }
  pokemon_v2_moveattribute_aggregate(builder?: string | PokemonV2MoveattributeAggregateModelSelector | ((selector: PokemonV2MoveattributeAggregateModelSelector) => PokemonV2MoveattributeAggregateModelSelector)) { return this.__child(`pokemon_v2_moveattribute_aggregate`, PokemonV2MoveattributeAggregateModelSelector, builder) }
  pokemon_v2_moveattribute_by_pk(builder?: string | PokemonV2MoveattributeModelSelector | ((selector: PokemonV2MoveattributeModelSelector) => PokemonV2MoveattributeModelSelector)) { return this.__child(`pokemon_v2_moveattribute_by_pk`, PokemonV2MoveattributeModelSelector, builder) }
  pokemon_v2_moveattributedescription(builder?: string | PokemonV2MoveattributedescriptionModelSelector | ((selector: PokemonV2MoveattributedescriptionModelSelector) => PokemonV2MoveattributedescriptionModelSelector)) { return this.__child(`pokemon_v2_moveattributedescription`, PokemonV2MoveattributedescriptionModelSelector, builder) }
  pokemon_v2_moveattributedescription_aggregate(builder?: string | PokemonV2MoveattributedescriptionAggregateModelSelector | ((selector: PokemonV2MoveattributedescriptionAggregateModelSelector) => PokemonV2MoveattributedescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_moveattributedescription_aggregate`, PokemonV2MoveattributedescriptionAggregateModelSelector, builder) }
  pokemon_v2_moveattributedescription_by_pk(builder?: string | PokemonV2MoveattributedescriptionModelSelector | ((selector: PokemonV2MoveattributedescriptionModelSelector) => PokemonV2MoveattributedescriptionModelSelector)) { return this.__child(`pokemon_v2_moveattributedescription_by_pk`, PokemonV2MoveattributedescriptionModelSelector, builder) }
  pokemon_v2_moveattributemap(builder?: string | PokemonV2MoveattributemapModelSelector | ((selector: PokemonV2MoveattributemapModelSelector) => PokemonV2MoveattributemapModelSelector)) { return this.__child(`pokemon_v2_moveattributemap`, PokemonV2MoveattributemapModelSelector, builder) }
  pokemon_v2_moveattributemap_aggregate(builder?: string | PokemonV2MoveattributemapAggregateModelSelector | ((selector: PokemonV2MoveattributemapAggregateModelSelector) => PokemonV2MoveattributemapAggregateModelSelector)) { return this.__child(`pokemon_v2_moveattributemap_aggregate`, PokemonV2MoveattributemapAggregateModelSelector, builder) }
  pokemon_v2_moveattributemap_by_pk(builder?: string | PokemonV2MoveattributemapModelSelector | ((selector: PokemonV2MoveattributemapModelSelector) => PokemonV2MoveattributemapModelSelector)) { return this.__child(`pokemon_v2_moveattributemap_by_pk`, PokemonV2MoveattributemapModelSelector, builder) }
  pokemon_v2_moveattributename(builder?: string | PokemonV2MoveattributenameModelSelector | ((selector: PokemonV2MoveattributenameModelSelector) => PokemonV2MoveattributenameModelSelector)) { return this.__child(`pokemon_v2_moveattributename`, PokemonV2MoveattributenameModelSelector, builder) }
  pokemon_v2_moveattributename_aggregate(builder?: string | PokemonV2MoveattributenameAggregateModelSelector | ((selector: PokemonV2MoveattributenameAggregateModelSelector) => PokemonV2MoveattributenameAggregateModelSelector)) { return this.__child(`pokemon_v2_moveattributename_aggregate`, PokemonV2MoveattributenameAggregateModelSelector, builder) }
  pokemon_v2_moveattributename_by_pk(builder?: string | PokemonV2MoveattributenameModelSelector | ((selector: PokemonV2MoveattributenameModelSelector) => PokemonV2MoveattributenameModelSelector)) { return this.__child(`pokemon_v2_moveattributename_by_pk`, PokemonV2MoveattributenameModelSelector, builder) }
  pokemon_v2_movebattlestyle(builder?: string | PokemonV2MovebattlestyleModelSelector | ((selector: PokemonV2MovebattlestyleModelSelector) => PokemonV2MovebattlestyleModelSelector)) { return this.__child(`pokemon_v2_movebattlestyle`, PokemonV2MovebattlestyleModelSelector, builder) }
  pokemon_v2_movebattlestyle_aggregate(builder?: string | PokemonV2MovebattlestyleAggregateModelSelector | ((selector: PokemonV2MovebattlestyleAggregateModelSelector) => PokemonV2MovebattlestyleAggregateModelSelector)) { return this.__child(`pokemon_v2_movebattlestyle_aggregate`, PokemonV2MovebattlestyleAggregateModelSelector, builder) }
  pokemon_v2_movebattlestyle_by_pk(builder?: string | PokemonV2MovebattlestyleModelSelector | ((selector: PokemonV2MovebattlestyleModelSelector) => PokemonV2MovebattlestyleModelSelector)) { return this.__child(`pokemon_v2_movebattlestyle_by_pk`, PokemonV2MovebattlestyleModelSelector, builder) }
  pokemon_v2_movebattlestylename(builder?: string | PokemonV2MovebattlestylenameModelSelector | ((selector: PokemonV2MovebattlestylenameModelSelector) => PokemonV2MovebattlestylenameModelSelector)) { return this.__child(`pokemon_v2_movebattlestylename`, PokemonV2MovebattlestylenameModelSelector, builder) }
  pokemon_v2_movebattlestylename_aggregate(builder?: string | PokemonV2MovebattlestylenameAggregateModelSelector | ((selector: PokemonV2MovebattlestylenameAggregateModelSelector) => PokemonV2MovebattlestylenameAggregateModelSelector)) { return this.__child(`pokemon_v2_movebattlestylename_aggregate`, PokemonV2MovebattlestylenameAggregateModelSelector, builder) }
  pokemon_v2_movebattlestylename_by_pk(builder?: string | PokemonV2MovebattlestylenameModelSelector | ((selector: PokemonV2MovebattlestylenameModelSelector) => PokemonV2MovebattlestylenameModelSelector)) { return this.__child(`pokemon_v2_movebattlestylename_by_pk`, PokemonV2MovebattlestylenameModelSelector, builder) }
  pokemon_v2_movechange(builder?: string | PokemonV2MovechangeModelSelector | ((selector: PokemonV2MovechangeModelSelector) => PokemonV2MovechangeModelSelector)) { return this.__child(`pokemon_v2_movechange`, PokemonV2MovechangeModelSelector, builder) }
  pokemon_v2_movechange_aggregate(builder?: string | PokemonV2MovechangeAggregateModelSelector | ((selector: PokemonV2MovechangeAggregateModelSelector) => PokemonV2MovechangeAggregateModelSelector)) { return this.__child(`pokemon_v2_movechange_aggregate`, PokemonV2MovechangeAggregateModelSelector, builder) }
  pokemon_v2_movechange_by_pk(builder?: string | PokemonV2MovechangeModelSelector | ((selector: PokemonV2MovechangeModelSelector) => PokemonV2MovechangeModelSelector)) { return this.__child(`pokemon_v2_movechange_by_pk`, PokemonV2MovechangeModelSelector, builder) }
  pokemon_v2_movedamageclass(builder?: string | PokemonV2MovedamageclassModelSelector | ((selector: PokemonV2MovedamageclassModelSelector) => PokemonV2MovedamageclassModelSelector)) { return this.__child(`pokemon_v2_movedamageclass`, PokemonV2MovedamageclassModelSelector, builder) }
  pokemon_v2_movedamageclass_aggregate(builder?: string | PokemonV2MovedamageclassAggregateModelSelector | ((selector: PokemonV2MovedamageclassAggregateModelSelector) => PokemonV2MovedamageclassAggregateModelSelector)) { return this.__child(`pokemon_v2_movedamageclass_aggregate`, PokemonV2MovedamageclassAggregateModelSelector, builder) }
  pokemon_v2_movedamageclass_by_pk(builder?: string | PokemonV2MovedamageclassModelSelector | ((selector: PokemonV2MovedamageclassModelSelector) => PokemonV2MovedamageclassModelSelector)) { return this.__child(`pokemon_v2_movedamageclass_by_pk`, PokemonV2MovedamageclassModelSelector, builder) }
  pokemon_v2_movedamageclassdescription(builder?: string | PokemonV2MovedamageclassdescriptionModelSelector | ((selector: PokemonV2MovedamageclassdescriptionModelSelector) => PokemonV2MovedamageclassdescriptionModelSelector)) { return this.__child(`pokemon_v2_movedamageclassdescription`, PokemonV2MovedamageclassdescriptionModelSelector, builder) }
  pokemon_v2_movedamageclassdescription_aggregate(builder?: string | PokemonV2MovedamageclassdescriptionAggregateModelSelector | ((selector: PokemonV2MovedamageclassdescriptionAggregateModelSelector) => PokemonV2MovedamageclassdescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_movedamageclassdescription_aggregate`, PokemonV2MovedamageclassdescriptionAggregateModelSelector, builder) }
  pokemon_v2_movedamageclassdescription_by_pk(builder?: string | PokemonV2MovedamageclassdescriptionModelSelector | ((selector: PokemonV2MovedamageclassdescriptionModelSelector) => PokemonV2MovedamageclassdescriptionModelSelector)) { return this.__child(`pokemon_v2_movedamageclassdescription_by_pk`, PokemonV2MovedamageclassdescriptionModelSelector, builder) }
  pokemon_v2_movedamageclassname(builder?: string | PokemonV2MovedamageclassnameModelSelector | ((selector: PokemonV2MovedamageclassnameModelSelector) => PokemonV2MovedamageclassnameModelSelector)) { return this.__child(`pokemon_v2_movedamageclassname`, PokemonV2MovedamageclassnameModelSelector, builder) }
  pokemon_v2_movedamageclassname_aggregate(builder?: string | PokemonV2MovedamageclassnameAggregateModelSelector | ((selector: PokemonV2MovedamageclassnameAggregateModelSelector) => PokemonV2MovedamageclassnameAggregateModelSelector)) { return this.__child(`pokemon_v2_movedamageclassname_aggregate`, PokemonV2MovedamageclassnameAggregateModelSelector, builder) }
  pokemon_v2_movedamageclassname_by_pk(builder?: string | PokemonV2MovedamageclassnameModelSelector | ((selector: PokemonV2MovedamageclassnameModelSelector) => PokemonV2MovedamageclassnameModelSelector)) { return this.__child(`pokemon_v2_movedamageclassname_by_pk`, PokemonV2MovedamageclassnameModelSelector, builder) }
  pokemon_v2_moveeffect(builder?: string | PokemonV2MoveeffectModelSelector | ((selector: PokemonV2MoveeffectModelSelector) => PokemonV2MoveeffectModelSelector)) { return this.__child(`pokemon_v2_moveeffect`, PokemonV2MoveeffectModelSelector, builder) }
  pokemon_v2_moveeffect_aggregate(builder?: string | PokemonV2MoveeffectAggregateModelSelector | ((selector: PokemonV2MoveeffectAggregateModelSelector) => PokemonV2MoveeffectAggregateModelSelector)) { return this.__child(`pokemon_v2_moveeffect_aggregate`, PokemonV2MoveeffectAggregateModelSelector, builder) }
  pokemon_v2_moveeffect_by_pk(builder?: string | PokemonV2MoveeffectModelSelector | ((selector: PokemonV2MoveeffectModelSelector) => PokemonV2MoveeffectModelSelector)) { return this.__child(`pokemon_v2_moveeffect_by_pk`, PokemonV2MoveeffectModelSelector, builder) }
  pokemon_v2_moveeffectchange(builder?: string | PokemonV2MoveeffectchangeModelSelector | ((selector: PokemonV2MoveeffectchangeModelSelector) => PokemonV2MoveeffectchangeModelSelector)) { return this.__child(`pokemon_v2_moveeffectchange`, PokemonV2MoveeffectchangeModelSelector, builder) }
  pokemon_v2_moveeffectchange_aggregate(builder?: string | PokemonV2MoveeffectchangeAggregateModelSelector | ((selector: PokemonV2MoveeffectchangeAggregateModelSelector) => PokemonV2MoveeffectchangeAggregateModelSelector)) { return this.__child(`pokemon_v2_moveeffectchange_aggregate`, PokemonV2MoveeffectchangeAggregateModelSelector, builder) }
  pokemon_v2_moveeffectchange_by_pk(builder?: string | PokemonV2MoveeffectchangeModelSelector | ((selector: PokemonV2MoveeffectchangeModelSelector) => PokemonV2MoveeffectchangeModelSelector)) { return this.__child(`pokemon_v2_moveeffectchange_by_pk`, PokemonV2MoveeffectchangeModelSelector, builder) }
  pokemon_v2_moveeffectchangeeffecttext(builder?: string | PokemonV2MoveeffectchangeeffecttextModelSelector | ((selector: PokemonV2MoveeffectchangeeffecttextModelSelector) => PokemonV2MoveeffectchangeeffecttextModelSelector)) { return this.__child(`pokemon_v2_moveeffectchangeeffecttext`, PokemonV2MoveeffectchangeeffecttextModelSelector, builder) }
  pokemon_v2_moveeffectchangeeffecttext_aggregate(builder?: string | PokemonV2MoveeffectchangeeffecttextAggregateModelSelector | ((selector: PokemonV2MoveeffectchangeeffecttextAggregateModelSelector) => PokemonV2MoveeffectchangeeffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_moveeffectchangeeffecttext_aggregate`, PokemonV2MoveeffectchangeeffecttextAggregateModelSelector, builder) }
  pokemon_v2_moveeffectchangeeffecttext_by_pk(builder?: string | PokemonV2MoveeffectchangeeffecttextModelSelector | ((selector: PokemonV2MoveeffectchangeeffecttextModelSelector) => PokemonV2MoveeffectchangeeffecttextModelSelector)) { return this.__child(`pokemon_v2_moveeffectchangeeffecttext_by_pk`, PokemonV2MoveeffectchangeeffecttextModelSelector, builder) }
  pokemon_v2_moveeffecteffecttext(builder?: string | PokemonV2MoveeffecteffecttextModelSelector | ((selector: PokemonV2MoveeffecteffecttextModelSelector) => PokemonV2MoveeffecteffecttextModelSelector)) { return this.__child(`pokemon_v2_moveeffecteffecttext`, PokemonV2MoveeffecteffecttextModelSelector, builder) }
  pokemon_v2_moveeffecteffecttext_aggregate(builder?: string | PokemonV2MoveeffecteffecttextAggregateModelSelector | ((selector: PokemonV2MoveeffecteffecttextAggregateModelSelector) => PokemonV2MoveeffecteffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_moveeffecteffecttext_aggregate`, PokemonV2MoveeffecteffecttextAggregateModelSelector, builder) }
  pokemon_v2_moveeffecteffecttext_by_pk(builder?: string | PokemonV2MoveeffecteffecttextModelSelector | ((selector: PokemonV2MoveeffecteffecttextModelSelector) => PokemonV2MoveeffecteffecttextModelSelector)) { return this.__child(`pokemon_v2_moveeffecteffecttext_by_pk`, PokemonV2MoveeffecteffecttextModelSelector, builder) }
  pokemon_v2_moveflavortext(builder?: string | PokemonV2MoveflavortextModelSelector | ((selector: PokemonV2MoveflavortextModelSelector) => PokemonV2MoveflavortextModelSelector)) { return this.__child(`pokemon_v2_moveflavortext`, PokemonV2MoveflavortextModelSelector, builder) }
  pokemon_v2_moveflavortext_aggregate(builder?: string | PokemonV2MoveflavortextAggregateModelSelector | ((selector: PokemonV2MoveflavortextAggregateModelSelector) => PokemonV2MoveflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_moveflavortext_aggregate`, PokemonV2MoveflavortextAggregateModelSelector, builder) }
  pokemon_v2_moveflavortext_by_pk(builder?: string | PokemonV2MoveflavortextModelSelector | ((selector: PokemonV2MoveflavortextModelSelector) => PokemonV2MoveflavortextModelSelector)) { return this.__child(`pokemon_v2_moveflavortext_by_pk`, PokemonV2MoveflavortextModelSelector, builder) }
  pokemon_v2_movelearnmethod(builder?: string | PokemonV2MovelearnmethodModelSelector | ((selector: PokemonV2MovelearnmethodModelSelector) => PokemonV2MovelearnmethodModelSelector)) { return this.__child(`pokemon_v2_movelearnmethod`, PokemonV2MovelearnmethodModelSelector, builder) }
  pokemon_v2_movelearnmethod_aggregate(builder?: string | PokemonV2MovelearnmethodAggregateModelSelector | ((selector: PokemonV2MovelearnmethodAggregateModelSelector) => PokemonV2MovelearnmethodAggregateModelSelector)) { return this.__child(`pokemon_v2_movelearnmethod_aggregate`, PokemonV2MovelearnmethodAggregateModelSelector, builder) }
  pokemon_v2_movelearnmethod_by_pk(builder?: string | PokemonV2MovelearnmethodModelSelector | ((selector: PokemonV2MovelearnmethodModelSelector) => PokemonV2MovelearnmethodModelSelector)) { return this.__child(`pokemon_v2_movelearnmethod_by_pk`, PokemonV2MovelearnmethodModelSelector, builder) }
  pokemon_v2_movelearnmethoddescription(builder?: string | PokemonV2MovelearnmethoddescriptionModelSelector | ((selector: PokemonV2MovelearnmethoddescriptionModelSelector) => PokemonV2MovelearnmethoddescriptionModelSelector)) { return this.__child(`pokemon_v2_movelearnmethoddescription`, PokemonV2MovelearnmethoddescriptionModelSelector, builder) }
  pokemon_v2_movelearnmethoddescription_aggregate(builder?: string | PokemonV2MovelearnmethoddescriptionAggregateModelSelector | ((selector: PokemonV2MovelearnmethoddescriptionAggregateModelSelector) => PokemonV2MovelearnmethoddescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_movelearnmethoddescription_aggregate`, PokemonV2MovelearnmethoddescriptionAggregateModelSelector, builder) }
  pokemon_v2_movelearnmethoddescription_by_pk(builder?: string | PokemonV2MovelearnmethoddescriptionModelSelector | ((selector: PokemonV2MovelearnmethoddescriptionModelSelector) => PokemonV2MovelearnmethoddescriptionModelSelector)) { return this.__child(`pokemon_v2_movelearnmethoddescription_by_pk`, PokemonV2MovelearnmethoddescriptionModelSelector, builder) }
  pokemon_v2_movelearnmethodname(builder?: string | PokemonV2MovelearnmethodnameModelSelector | ((selector: PokemonV2MovelearnmethodnameModelSelector) => PokemonV2MovelearnmethodnameModelSelector)) { return this.__child(`pokemon_v2_movelearnmethodname`, PokemonV2MovelearnmethodnameModelSelector, builder) }
  pokemon_v2_movelearnmethodname_aggregate(builder?: string | PokemonV2MovelearnmethodnameAggregateModelSelector | ((selector: PokemonV2MovelearnmethodnameAggregateModelSelector) => PokemonV2MovelearnmethodnameAggregateModelSelector)) { return this.__child(`pokemon_v2_movelearnmethodname_aggregate`, PokemonV2MovelearnmethodnameAggregateModelSelector, builder) }
  pokemon_v2_movelearnmethodname_by_pk(builder?: string | PokemonV2MovelearnmethodnameModelSelector | ((selector: PokemonV2MovelearnmethodnameModelSelector) => PokemonV2MovelearnmethodnameModelSelector)) { return this.__child(`pokemon_v2_movelearnmethodname_by_pk`, PokemonV2MovelearnmethodnameModelSelector, builder) }
  pokemon_v2_movemeta(builder?: string | PokemonV2MovemetaModelSelector | ((selector: PokemonV2MovemetaModelSelector) => PokemonV2MovemetaModelSelector)) { return this.__child(`pokemon_v2_movemeta`, PokemonV2MovemetaModelSelector, builder) }
  pokemon_v2_movemeta_aggregate(builder?: string | PokemonV2MovemetaAggregateModelSelector | ((selector: PokemonV2MovemetaAggregateModelSelector) => PokemonV2MovemetaAggregateModelSelector)) { return this.__child(`pokemon_v2_movemeta_aggregate`, PokemonV2MovemetaAggregateModelSelector, builder) }
  pokemon_v2_movemeta_by_pk(builder?: string | PokemonV2MovemetaModelSelector | ((selector: PokemonV2MovemetaModelSelector) => PokemonV2MovemetaModelSelector)) { return this.__child(`pokemon_v2_movemeta_by_pk`, PokemonV2MovemetaModelSelector, builder) }
  pokemon_v2_movemetaailment(builder?: string | PokemonV2MovemetaailmentModelSelector | ((selector: PokemonV2MovemetaailmentModelSelector) => PokemonV2MovemetaailmentModelSelector)) { return this.__child(`pokemon_v2_movemetaailment`, PokemonV2MovemetaailmentModelSelector, builder) }
  pokemon_v2_movemetaailment_aggregate(builder?: string | PokemonV2MovemetaailmentAggregateModelSelector | ((selector: PokemonV2MovemetaailmentAggregateModelSelector) => PokemonV2MovemetaailmentAggregateModelSelector)) { return this.__child(`pokemon_v2_movemetaailment_aggregate`, PokemonV2MovemetaailmentAggregateModelSelector, builder) }
  pokemon_v2_movemetaailment_by_pk(builder?: string | PokemonV2MovemetaailmentModelSelector | ((selector: PokemonV2MovemetaailmentModelSelector) => PokemonV2MovemetaailmentModelSelector)) { return this.__child(`pokemon_v2_movemetaailment_by_pk`, PokemonV2MovemetaailmentModelSelector, builder) }
  pokemon_v2_movemetaailmentname(builder?: string | PokemonV2MovemetaailmentnameModelSelector | ((selector: PokemonV2MovemetaailmentnameModelSelector) => PokemonV2MovemetaailmentnameModelSelector)) { return this.__child(`pokemon_v2_movemetaailmentname`, PokemonV2MovemetaailmentnameModelSelector, builder) }
  pokemon_v2_movemetaailmentname_aggregate(builder?: string | PokemonV2MovemetaailmentnameAggregateModelSelector | ((selector: PokemonV2MovemetaailmentnameAggregateModelSelector) => PokemonV2MovemetaailmentnameAggregateModelSelector)) { return this.__child(`pokemon_v2_movemetaailmentname_aggregate`, PokemonV2MovemetaailmentnameAggregateModelSelector, builder) }
  pokemon_v2_movemetaailmentname_by_pk(builder?: string | PokemonV2MovemetaailmentnameModelSelector | ((selector: PokemonV2MovemetaailmentnameModelSelector) => PokemonV2MovemetaailmentnameModelSelector)) { return this.__child(`pokemon_v2_movemetaailmentname_by_pk`, PokemonV2MovemetaailmentnameModelSelector, builder) }
  pokemon_v2_movemetacategory(builder?: string | PokemonV2MovemetacategoryModelSelector | ((selector: PokemonV2MovemetacategoryModelSelector) => PokemonV2MovemetacategoryModelSelector)) { return this.__child(`pokemon_v2_movemetacategory`, PokemonV2MovemetacategoryModelSelector, builder) }
  pokemon_v2_movemetacategory_aggregate(builder?: string | PokemonV2MovemetacategoryAggregateModelSelector | ((selector: PokemonV2MovemetacategoryAggregateModelSelector) => PokemonV2MovemetacategoryAggregateModelSelector)) { return this.__child(`pokemon_v2_movemetacategory_aggregate`, PokemonV2MovemetacategoryAggregateModelSelector, builder) }
  pokemon_v2_movemetacategory_by_pk(builder?: string | PokemonV2MovemetacategoryModelSelector | ((selector: PokemonV2MovemetacategoryModelSelector) => PokemonV2MovemetacategoryModelSelector)) { return this.__child(`pokemon_v2_movemetacategory_by_pk`, PokemonV2MovemetacategoryModelSelector, builder) }
  pokemon_v2_movemetacategorydescription(builder?: string | PokemonV2MovemetacategorydescriptionModelSelector | ((selector: PokemonV2MovemetacategorydescriptionModelSelector) => PokemonV2MovemetacategorydescriptionModelSelector)) { return this.__child(`pokemon_v2_movemetacategorydescription`, PokemonV2MovemetacategorydescriptionModelSelector, builder) }
  pokemon_v2_movemetacategorydescription_aggregate(builder?: string | PokemonV2MovemetacategorydescriptionAggregateModelSelector | ((selector: PokemonV2MovemetacategorydescriptionAggregateModelSelector) => PokemonV2MovemetacategorydescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_movemetacategorydescription_aggregate`, PokemonV2MovemetacategorydescriptionAggregateModelSelector, builder) }
  pokemon_v2_movemetacategorydescription_by_pk(builder?: string | PokemonV2MovemetacategorydescriptionModelSelector | ((selector: PokemonV2MovemetacategorydescriptionModelSelector) => PokemonV2MovemetacategorydescriptionModelSelector)) { return this.__child(`pokemon_v2_movemetacategorydescription_by_pk`, PokemonV2MovemetacategorydescriptionModelSelector, builder) }
  pokemon_v2_movemetastatchange(builder?: string | PokemonV2MovemetastatchangeModelSelector | ((selector: PokemonV2MovemetastatchangeModelSelector) => PokemonV2MovemetastatchangeModelSelector)) { return this.__child(`pokemon_v2_movemetastatchange`, PokemonV2MovemetastatchangeModelSelector, builder) }
  pokemon_v2_movemetastatchange_aggregate(builder?: string | PokemonV2MovemetastatchangeAggregateModelSelector | ((selector: PokemonV2MovemetastatchangeAggregateModelSelector) => PokemonV2MovemetastatchangeAggregateModelSelector)) { return this.__child(`pokemon_v2_movemetastatchange_aggregate`, PokemonV2MovemetastatchangeAggregateModelSelector, builder) }
  pokemon_v2_movemetastatchange_by_pk(builder?: string | PokemonV2MovemetastatchangeModelSelector | ((selector: PokemonV2MovemetastatchangeModelSelector) => PokemonV2MovemetastatchangeModelSelector)) { return this.__child(`pokemon_v2_movemetastatchange_by_pk`, PokemonV2MovemetastatchangeModelSelector, builder) }
  pokemon_v2_movename(builder?: string | PokemonV2MovenameModelSelector | ((selector: PokemonV2MovenameModelSelector) => PokemonV2MovenameModelSelector)) { return this.__child(`pokemon_v2_movename`, PokemonV2MovenameModelSelector, builder) }
  pokemon_v2_movename_aggregate(builder?: string | PokemonV2MovenameAggregateModelSelector | ((selector: PokemonV2MovenameAggregateModelSelector) => PokemonV2MovenameAggregateModelSelector)) { return this.__child(`pokemon_v2_movename_aggregate`, PokemonV2MovenameAggregateModelSelector, builder) }
  pokemon_v2_movename_by_pk(builder?: string | PokemonV2MovenameModelSelector | ((selector: PokemonV2MovenameModelSelector) => PokemonV2MovenameModelSelector)) { return this.__child(`pokemon_v2_movename_by_pk`, PokemonV2MovenameModelSelector, builder) }
  pokemon_v2_movetarget(builder?: string | PokemonV2MovetargetModelSelector | ((selector: PokemonV2MovetargetModelSelector) => PokemonV2MovetargetModelSelector)) { return this.__child(`pokemon_v2_movetarget`, PokemonV2MovetargetModelSelector, builder) }
  pokemon_v2_movetarget_aggregate(builder?: string | PokemonV2MovetargetAggregateModelSelector | ((selector: PokemonV2MovetargetAggregateModelSelector) => PokemonV2MovetargetAggregateModelSelector)) { return this.__child(`pokemon_v2_movetarget_aggregate`, PokemonV2MovetargetAggregateModelSelector, builder) }
  pokemon_v2_movetarget_by_pk(builder?: string | PokemonV2MovetargetModelSelector | ((selector: PokemonV2MovetargetModelSelector) => PokemonV2MovetargetModelSelector)) { return this.__child(`pokemon_v2_movetarget_by_pk`, PokemonV2MovetargetModelSelector, builder) }
  pokemon_v2_movetargetdescription(builder?: string | PokemonV2MovetargetdescriptionModelSelector | ((selector: PokemonV2MovetargetdescriptionModelSelector) => PokemonV2MovetargetdescriptionModelSelector)) { return this.__child(`pokemon_v2_movetargetdescription`, PokemonV2MovetargetdescriptionModelSelector, builder) }
  pokemon_v2_movetargetdescription_aggregate(builder?: string | PokemonV2MovetargetdescriptionAggregateModelSelector | ((selector: PokemonV2MovetargetdescriptionAggregateModelSelector) => PokemonV2MovetargetdescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_movetargetdescription_aggregate`, PokemonV2MovetargetdescriptionAggregateModelSelector, builder) }
  pokemon_v2_movetargetdescription_by_pk(builder?: string | PokemonV2MovetargetdescriptionModelSelector | ((selector: PokemonV2MovetargetdescriptionModelSelector) => PokemonV2MovetargetdescriptionModelSelector)) { return this.__child(`pokemon_v2_movetargetdescription_by_pk`, PokemonV2MovetargetdescriptionModelSelector, builder) }
  pokemon_v2_movetargetname(builder?: string | PokemonV2MovetargetnameModelSelector | ((selector: PokemonV2MovetargetnameModelSelector) => PokemonV2MovetargetnameModelSelector)) { return this.__child(`pokemon_v2_movetargetname`, PokemonV2MovetargetnameModelSelector, builder) }
  pokemon_v2_movetargetname_aggregate(builder?: string | PokemonV2MovetargetnameAggregateModelSelector | ((selector: PokemonV2MovetargetnameAggregateModelSelector) => PokemonV2MovetargetnameAggregateModelSelector)) { return this.__child(`pokemon_v2_movetargetname_aggregate`, PokemonV2MovetargetnameAggregateModelSelector, builder) }
  pokemon_v2_movetargetname_by_pk(builder?: string | PokemonV2MovetargetnameModelSelector | ((selector: PokemonV2MovetargetnameModelSelector) => PokemonV2MovetargetnameModelSelector)) { return this.__child(`pokemon_v2_movetargetname_by_pk`, PokemonV2MovetargetnameModelSelector, builder) }
  pokemon_v2_nature(builder?: string | PokemonV2NatureModelSelector | ((selector: PokemonV2NatureModelSelector) => PokemonV2NatureModelSelector)) { return this.__child(`pokemon_v2_nature`, PokemonV2NatureModelSelector, builder) }
  pokemon_v2_nature_aggregate(builder?: string | PokemonV2NatureAggregateModelSelector | ((selector: PokemonV2NatureAggregateModelSelector) => PokemonV2NatureAggregateModelSelector)) { return this.__child(`pokemon_v2_nature_aggregate`, PokemonV2NatureAggregateModelSelector, builder) }
  pokemon_v2_nature_by_pk(builder?: string | PokemonV2NatureModelSelector | ((selector: PokemonV2NatureModelSelector) => PokemonV2NatureModelSelector)) { return this.__child(`pokemon_v2_nature_by_pk`, PokemonV2NatureModelSelector, builder) }
  pokemon_v2_naturebattlestylepreference(builder?: string | PokemonV2NaturebattlestylepreferenceModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceModelSelector) => PokemonV2NaturebattlestylepreferenceModelSelector)) { return this.__child(`pokemon_v2_naturebattlestylepreference`, PokemonV2NaturebattlestylepreferenceModelSelector, builder) }
  pokemon_v2_naturebattlestylepreference_aggregate(builder?: string | PokemonV2NaturebattlestylepreferenceAggregateModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceAggregateModelSelector) => PokemonV2NaturebattlestylepreferenceAggregateModelSelector)) { return this.__child(`pokemon_v2_naturebattlestylepreference_aggregate`, PokemonV2NaturebattlestylepreferenceAggregateModelSelector, builder) }
  pokemon_v2_naturebattlestylepreference_by_pk(builder?: string | PokemonV2NaturebattlestylepreferenceModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceModelSelector) => PokemonV2NaturebattlestylepreferenceModelSelector)) { return this.__child(`pokemon_v2_naturebattlestylepreference_by_pk`, PokemonV2NaturebattlestylepreferenceModelSelector, builder) }
  pokemon_v2_naturename(builder?: string | PokemonV2NaturenameModelSelector | ((selector: PokemonV2NaturenameModelSelector) => PokemonV2NaturenameModelSelector)) { return this.__child(`pokemon_v2_naturename`, PokemonV2NaturenameModelSelector, builder) }
  pokemon_v2_naturename_aggregate(builder?: string | PokemonV2NaturenameAggregateModelSelector | ((selector: PokemonV2NaturenameAggregateModelSelector) => PokemonV2NaturenameAggregateModelSelector)) { return this.__child(`pokemon_v2_naturename_aggregate`, PokemonV2NaturenameAggregateModelSelector, builder) }
  pokemon_v2_naturename_by_pk(builder?: string | PokemonV2NaturenameModelSelector | ((selector: PokemonV2NaturenameModelSelector) => PokemonV2NaturenameModelSelector)) { return this.__child(`pokemon_v2_naturename_by_pk`, PokemonV2NaturenameModelSelector, builder) }
  pokemon_v2_naturepokeathlonstat(builder?: string | PokemonV2NaturepokeathlonstatModelSelector | ((selector: PokemonV2NaturepokeathlonstatModelSelector) => PokemonV2NaturepokeathlonstatModelSelector)) { return this.__child(`pokemon_v2_naturepokeathlonstat`, PokemonV2NaturepokeathlonstatModelSelector, builder) }
  pokemon_v2_naturepokeathlonstat_aggregate(builder?: string | PokemonV2NaturepokeathlonstatAggregateModelSelector | ((selector: PokemonV2NaturepokeathlonstatAggregateModelSelector) => PokemonV2NaturepokeathlonstatAggregateModelSelector)) { return this.__child(`pokemon_v2_naturepokeathlonstat_aggregate`, PokemonV2NaturepokeathlonstatAggregateModelSelector, builder) }
  pokemon_v2_naturepokeathlonstat_by_pk(builder?: string | PokemonV2NaturepokeathlonstatModelSelector | ((selector: PokemonV2NaturepokeathlonstatModelSelector) => PokemonV2NaturepokeathlonstatModelSelector)) { return this.__child(`pokemon_v2_naturepokeathlonstat_by_pk`, PokemonV2NaturepokeathlonstatModelSelector, builder) }
  pokemon_v2_palpark(builder?: string | PokemonV2PalparkModelSelector | ((selector: PokemonV2PalparkModelSelector) => PokemonV2PalparkModelSelector)) { return this.__child(`pokemon_v2_palpark`, PokemonV2PalparkModelSelector, builder) }
  pokemon_v2_palpark_aggregate(builder?: string | PokemonV2PalparkAggregateModelSelector | ((selector: PokemonV2PalparkAggregateModelSelector) => PokemonV2PalparkAggregateModelSelector)) { return this.__child(`pokemon_v2_palpark_aggregate`, PokemonV2PalparkAggregateModelSelector, builder) }
  pokemon_v2_palpark_by_pk(builder?: string | PokemonV2PalparkModelSelector | ((selector: PokemonV2PalparkModelSelector) => PokemonV2PalparkModelSelector)) { return this.__child(`pokemon_v2_palpark_by_pk`, PokemonV2PalparkModelSelector, builder) }
  pokemon_v2_palparkarea(builder?: string | PokemonV2PalparkareaModelSelector | ((selector: PokemonV2PalparkareaModelSelector) => PokemonV2PalparkareaModelSelector)) { return this.__child(`pokemon_v2_palparkarea`, PokemonV2PalparkareaModelSelector, builder) }
  pokemon_v2_palparkarea_aggregate(builder?: string | PokemonV2PalparkareaAggregateModelSelector | ((selector: PokemonV2PalparkareaAggregateModelSelector) => PokemonV2PalparkareaAggregateModelSelector)) { return this.__child(`pokemon_v2_palparkarea_aggregate`, PokemonV2PalparkareaAggregateModelSelector, builder) }
  pokemon_v2_palparkarea_by_pk(builder?: string | PokemonV2PalparkareaModelSelector | ((selector: PokemonV2PalparkareaModelSelector) => PokemonV2PalparkareaModelSelector)) { return this.__child(`pokemon_v2_palparkarea_by_pk`, PokemonV2PalparkareaModelSelector, builder) }
  pokemon_v2_palparkareaname(builder?: string | PokemonV2PalparkareanameModelSelector | ((selector: PokemonV2PalparkareanameModelSelector) => PokemonV2PalparkareanameModelSelector)) { return this.__child(`pokemon_v2_palparkareaname`, PokemonV2PalparkareanameModelSelector, builder) }
  pokemon_v2_palparkareaname_aggregate(builder?: string | PokemonV2PalparkareanameAggregateModelSelector | ((selector: PokemonV2PalparkareanameAggregateModelSelector) => PokemonV2PalparkareanameAggregateModelSelector)) { return this.__child(`pokemon_v2_palparkareaname_aggregate`, PokemonV2PalparkareanameAggregateModelSelector, builder) }
  pokemon_v2_palparkareaname_by_pk(builder?: string | PokemonV2PalparkareanameModelSelector | ((selector: PokemonV2PalparkareanameModelSelector) => PokemonV2PalparkareanameModelSelector)) { return this.__child(`pokemon_v2_palparkareaname_by_pk`, PokemonV2PalparkareanameModelSelector, builder) }
  pokemon_v2_pokeathlonstat(builder?: string | PokemonV2PokeathlonstatModelSelector | ((selector: PokemonV2PokeathlonstatModelSelector) => PokemonV2PokeathlonstatModelSelector)) { return this.__child(`pokemon_v2_pokeathlonstat`, PokemonV2PokeathlonstatModelSelector, builder) }
  pokemon_v2_pokeathlonstat_aggregate(builder?: string | PokemonV2PokeathlonstatAggregateModelSelector | ((selector: PokemonV2PokeathlonstatAggregateModelSelector) => PokemonV2PokeathlonstatAggregateModelSelector)) { return this.__child(`pokemon_v2_pokeathlonstat_aggregate`, PokemonV2PokeathlonstatAggregateModelSelector, builder) }
  pokemon_v2_pokeathlonstat_by_pk(builder?: string | PokemonV2PokeathlonstatModelSelector | ((selector: PokemonV2PokeathlonstatModelSelector) => PokemonV2PokeathlonstatModelSelector)) { return this.__child(`pokemon_v2_pokeathlonstat_by_pk`, PokemonV2PokeathlonstatModelSelector, builder) }
  pokemon_v2_pokeathlonstatname(builder?: string | PokemonV2PokeathlonstatnameModelSelector | ((selector: PokemonV2PokeathlonstatnameModelSelector) => PokemonV2PokeathlonstatnameModelSelector)) { return this.__child(`pokemon_v2_pokeathlonstatname`, PokemonV2PokeathlonstatnameModelSelector, builder) }
  pokemon_v2_pokeathlonstatname_aggregate(builder?: string | PokemonV2PokeathlonstatnameAggregateModelSelector | ((selector: PokemonV2PokeathlonstatnameAggregateModelSelector) => PokemonV2PokeathlonstatnameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokeathlonstatname_aggregate`, PokemonV2PokeathlonstatnameAggregateModelSelector, builder) }
  pokemon_v2_pokeathlonstatname_by_pk(builder?: string | PokemonV2PokeathlonstatnameModelSelector | ((selector: PokemonV2PokeathlonstatnameModelSelector) => PokemonV2PokeathlonstatnameModelSelector)) { return this.__child(`pokemon_v2_pokeathlonstatname_by_pk`, PokemonV2PokeathlonstatnameModelSelector, builder) }
  pokemon_v2_pokedex(builder?: string | PokemonV2PokedexModelSelector | ((selector: PokemonV2PokedexModelSelector) => PokemonV2PokedexModelSelector)) { return this.__child(`pokemon_v2_pokedex`, PokemonV2PokedexModelSelector, builder) }
  pokemon_v2_pokedex_aggregate(builder?: string | PokemonV2PokedexAggregateModelSelector | ((selector: PokemonV2PokedexAggregateModelSelector) => PokemonV2PokedexAggregateModelSelector)) { return this.__child(`pokemon_v2_pokedex_aggregate`, PokemonV2PokedexAggregateModelSelector, builder) }
  pokemon_v2_pokedex_by_pk(builder?: string | PokemonV2PokedexModelSelector | ((selector: PokemonV2PokedexModelSelector) => PokemonV2PokedexModelSelector)) { return this.__child(`pokemon_v2_pokedex_by_pk`, PokemonV2PokedexModelSelector, builder) }
  pokemon_v2_pokedexdescription(builder?: string | PokemonV2PokedexdescriptionModelSelector | ((selector: PokemonV2PokedexdescriptionModelSelector) => PokemonV2PokedexdescriptionModelSelector)) { return this.__child(`pokemon_v2_pokedexdescription`, PokemonV2PokedexdescriptionModelSelector, builder) }
  pokemon_v2_pokedexdescription_aggregate(builder?: string | PokemonV2PokedexdescriptionAggregateModelSelector | ((selector: PokemonV2PokedexdescriptionAggregateModelSelector) => PokemonV2PokedexdescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_pokedexdescription_aggregate`, PokemonV2PokedexdescriptionAggregateModelSelector, builder) }
  pokemon_v2_pokedexdescription_by_pk(builder?: string | PokemonV2PokedexdescriptionModelSelector | ((selector: PokemonV2PokedexdescriptionModelSelector) => PokemonV2PokedexdescriptionModelSelector)) { return this.__child(`pokemon_v2_pokedexdescription_by_pk`, PokemonV2PokedexdescriptionModelSelector, builder) }
  pokemon_v2_pokedexname(builder?: string | PokemonV2PokedexnameModelSelector | ((selector: PokemonV2PokedexnameModelSelector) => PokemonV2PokedexnameModelSelector)) { return this.__child(`pokemon_v2_pokedexname`, PokemonV2PokedexnameModelSelector, builder) }
  pokemon_v2_pokedexname_aggregate(builder?: string | PokemonV2PokedexnameAggregateModelSelector | ((selector: PokemonV2PokedexnameAggregateModelSelector) => PokemonV2PokedexnameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokedexname_aggregate`, PokemonV2PokedexnameAggregateModelSelector, builder) }
  pokemon_v2_pokedexname_by_pk(builder?: string | PokemonV2PokedexnameModelSelector | ((selector: PokemonV2PokedexnameModelSelector) => PokemonV2PokedexnameModelSelector)) { return this.__child(`pokemon_v2_pokedexname_by_pk`, PokemonV2PokedexnameModelSelector, builder) }
  pokemon_v2_pokedexversiongroup(builder?: string | PokemonV2PokedexversiongroupModelSelector | ((selector: PokemonV2PokedexversiongroupModelSelector) => PokemonV2PokedexversiongroupModelSelector)) { return this.__child(`pokemon_v2_pokedexversiongroup`, PokemonV2PokedexversiongroupModelSelector, builder) }
  pokemon_v2_pokedexversiongroup_aggregate(builder?: string | PokemonV2PokedexversiongroupAggregateModelSelector | ((selector: PokemonV2PokedexversiongroupAggregateModelSelector) => PokemonV2PokedexversiongroupAggregateModelSelector)) { return this.__child(`pokemon_v2_pokedexversiongroup_aggregate`, PokemonV2PokedexversiongroupAggregateModelSelector, builder) }
  pokemon_v2_pokedexversiongroup_by_pk(builder?: string | PokemonV2PokedexversiongroupModelSelector | ((selector: PokemonV2PokedexversiongroupModelSelector) => PokemonV2PokedexversiongroupModelSelector)) { return this.__child(`pokemon_v2_pokedexversiongroup_by_pk`, PokemonV2PokedexversiongroupModelSelector, builder) }
  pokemon_v2_pokemon(builder?: string | PokemonV2PokemonModelSelector | ((selector: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector)) { return this.__child(`pokemon_v2_pokemon`, PokemonV2PokemonModelSelector, builder) }
  pokemon_v2_pokemon_aggregate(builder?: string | PokemonV2PokemonAggregateModelSelector | ((selector: PokemonV2PokemonAggregateModelSelector) => PokemonV2PokemonAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemon_aggregate`, PokemonV2PokemonAggregateModelSelector, builder) }
  pokemon_v2_pokemon_by_pk(builder?: string | PokemonV2PokemonModelSelector | ((selector: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector)) { return this.__child(`pokemon_v2_pokemon_by_pk`, PokemonV2PokemonModelSelector, builder) }
  pokemon_v2_pokemonability(builder?: string | PokemonV2PokemonabilityModelSelector | ((selector: PokemonV2PokemonabilityModelSelector) => PokemonV2PokemonabilityModelSelector)) { return this.__child(`pokemon_v2_pokemonability`, PokemonV2PokemonabilityModelSelector, builder) }
  pokemon_v2_pokemonability_aggregate(builder?: string | PokemonV2PokemonabilityAggregateModelSelector | ((selector: PokemonV2PokemonabilityAggregateModelSelector) => PokemonV2PokemonabilityAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonability_aggregate`, PokemonV2PokemonabilityAggregateModelSelector, builder) }
  pokemon_v2_pokemonability_by_pk(builder?: string | PokemonV2PokemonabilityModelSelector | ((selector: PokemonV2PokemonabilityModelSelector) => PokemonV2PokemonabilityModelSelector)) { return this.__child(`pokemon_v2_pokemonability_by_pk`, PokemonV2PokemonabilityModelSelector, builder) }
  pokemon_v2_pokemoncolor(builder?: string | PokemonV2PokemoncolorModelSelector | ((selector: PokemonV2PokemoncolorModelSelector) => PokemonV2PokemoncolorModelSelector)) { return this.__child(`pokemon_v2_pokemoncolor`, PokemonV2PokemoncolorModelSelector, builder) }
  pokemon_v2_pokemoncolor_aggregate(builder?: string | PokemonV2PokemoncolorAggregateModelSelector | ((selector: PokemonV2PokemoncolorAggregateModelSelector) => PokemonV2PokemoncolorAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemoncolor_aggregate`, PokemonV2PokemoncolorAggregateModelSelector, builder) }
  pokemon_v2_pokemoncolor_by_pk(builder?: string | PokemonV2PokemoncolorModelSelector | ((selector: PokemonV2PokemoncolorModelSelector) => PokemonV2PokemoncolorModelSelector)) { return this.__child(`pokemon_v2_pokemoncolor_by_pk`, PokemonV2PokemoncolorModelSelector, builder) }
  pokemon_v2_pokemoncolorname(builder?: string | PokemonV2PokemoncolornameModelSelector | ((selector: PokemonV2PokemoncolornameModelSelector) => PokemonV2PokemoncolornameModelSelector)) { return this.__child(`pokemon_v2_pokemoncolorname`, PokemonV2PokemoncolornameModelSelector, builder) }
  pokemon_v2_pokemoncolorname_aggregate(builder?: string | PokemonV2PokemoncolornameAggregateModelSelector | ((selector: PokemonV2PokemoncolornameAggregateModelSelector) => PokemonV2PokemoncolornameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemoncolorname_aggregate`, PokemonV2PokemoncolornameAggregateModelSelector, builder) }
  pokemon_v2_pokemoncolorname_by_pk(builder?: string | PokemonV2PokemoncolornameModelSelector | ((selector: PokemonV2PokemoncolornameModelSelector) => PokemonV2PokemoncolornameModelSelector)) { return this.__child(`pokemon_v2_pokemoncolorname_by_pk`, PokemonV2PokemoncolornameModelSelector, builder) }
  pokemon_v2_pokemondexnumber(builder?: string | PokemonV2PokemondexnumberModelSelector | ((selector: PokemonV2PokemondexnumberModelSelector) => PokemonV2PokemondexnumberModelSelector)) { return this.__child(`pokemon_v2_pokemondexnumber`, PokemonV2PokemondexnumberModelSelector, builder) }
  pokemon_v2_pokemondexnumber_aggregate(builder?: string | PokemonV2PokemondexnumberAggregateModelSelector | ((selector: PokemonV2PokemondexnumberAggregateModelSelector) => PokemonV2PokemondexnumberAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemondexnumber_aggregate`, PokemonV2PokemondexnumberAggregateModelSelector, builder) }
  pokemon_v2_pokemondexnumber_by_pk(builder?: string | PokemonV2PokemondexnumberModelSelector | ((selector: PokemonV2PokemondexnumberModelSelector) => PokemonV2PokemondexnumberModelSelector)) { return this.__child(`pokemon_v2_pokemondexnumber_by_pk`, PokemonV2PokemondexnumberModelSelector, builder) }
  pokemon_v2_pokemonegggroup(builder?: string | PokemonV2PokemonegggroupModelSelector | ((selector: PokemonV2PokemonegggroupModelSelector) => PokemonV2PokemonegggroupModelSelector)) { return this.__child(`pokemon_v2_pokemonegggroup`, PokemonV2PokemonegggroupModelSelector, builder) }
  pokemon_v2_pokemonegggroup_aggregate(builder?: string | PokemonV2PokemonegggroupAggregateModelSelector | ((selector: PokemonV2PokemonegggroupAggregateModelSelector) => PokemonV2PokemonegggroupAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonegggroup_aggregate`, PokemonV2PokemonegggroupAggregateModelSelector, builder) }
  pokemon_v2_pokemonegggroup_by_pk(builder?: string | PokemonV2PokemonegggroupModelSelector | ((selector: PokemonV2PokemonegggroupModelSelector) => PokemonV2PokemonegggroupModelSelector)) { return this.__child(`pokemon_v2_pokemonegggroup_by_pk`, PokemonV2PokemonegggroupModelSelector, builder) }
  pokemon_v2_pokemonevolution(builder?: string | PokemonV2PokemonevolutionModelSelector | ((selector: PokemonV2PokemonevolutionModelSelector) => PokemonV2PokemonevolutionModelSelector)) { return this.__child(`pokemon_v2_pokemonevolution`, PokemonV2PokemonevolutionModelSelector, builder) }
  pokemon_v2_pokemonevolution_aggregate(builder?: string | PokemonV2PokemonevolutionAggregateModelSelector | ((selector: PokemonV2PokemonevolutionAggregateModelSelector) => PokemonV2PokemonevolutionAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonevolution_aggregate`, PokemonV2PokemonevolutionAggregateModelSelector, builder) }
  pokemon_v2_pokemonevolution_by_pk(builder?: string | PokemonV2PokemonevolutionModelSelector | ((selector: PokemonV2PokemonevolutionModelSelector) => PokemonV2PokemonevolutionModelSelector)) { return this.__child(`pokemon_v2_pokemonevolution_by_pk`, PokemonV2PokemonevolutionModelSelector, builder) }
  pokemon_v2_pokemonform(builder?: string | PokemonV2PokemonformModelSelector | ((selector: PokemonV2PokemonformModelSelector) => PokemonV2PokemonformModelSelector)) { return this.__child(`pokemon_v2_pokemonform`, PokemonV2PokemonformModelSelector, builder) }
  pokemon_v2_pokemonform_aggregate(builder?: string | PokemonV2PokemonformAggregateModelSelector | ((selector: PokemonV2PokemonformAggregateModelSelector) => PokemonV2PokemonformAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonform_aggregate`, PokemonV2PokemonformAggregateModelSelector, builder) }
  pokemon_v2_pokemonform_by_pk(builder?: string | PokemonV2PokemonformModelSelector | ((selector: PokemonV2PokemonformModelSelector) => PokemonV2PokemonformModelSelector)) { return this.__child(`pokemon_v2_pokemonform_by_pk`, PokemonV2PokemonformModelSelector, builder) }
  pokemon_v2_pokemonformgeneration(builder?: string | PokemonV2PokemonformgenerationModelSelector | ((selector: PokemonV2PokemonformgenerationModelSelector) => PokemonV2PokemonformgenerationModelSelector)) { return this.__child(`pokemon_v2_pokemonformgeneration`, PokemonV2PokemonformgenerationModelSelector, builder) }
  pokemon_v2_pokemonformgeneration_aggregate(builder?: string | PokemonV2PokemonformgenerationAggregateModelSelector | ((selector: PokemonV2PokemonformgenerationAggregateModelSelector) => PokemonV2PokemonformgenerationAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonformgeneration_aggregate`, PokemonV2PokemonformgenerationAggregateModelSelector, builder) }
  pokemon_v2_pokemonformgeneration_by_pk(builder?: string | PokemonV2PokemonformgenerationModelSelector | ((selector: PokemonV2PokemonformgenerationModelSelector) => PokemonV2PokemonformgenerationModelSelector)) { return this.__child(`pokemon_v2_pokemonformgeneration_by_pk`, PokemonV2PokemonformgenerationModelSelector, builder) }
  pokemon_v2_pokemonformname(builder?: string | PokemonV2PokemonformnameModelSelector | ((selector: PokemonV2PokemonformnameModelSelector) => PokemonV2PokemonformnameModelSelector)) { return this.__child(`pokemon_v2_pokemonformname`, PokemonV2PokemonformnameModelSelector, builder) }
  pokemon_v2_pokemonformname_aggregate(builder?: string | PokemonV2PokemonformnameAggregateModelSelector | ((selector: PokemonV2PokemonformnameAggregateModelSelector) => PokemonV2PokemonformnameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonformname_aggregate`, PokemonV2PokemonformnameAggregateModelSelector, builder) }
  pokemon_v2_pokemonformname_by_pk(builder?: string | PokemonV2PokemonformnameModelSelector | ((selector: PokemonV2PokemonformnameModelSelector) => PokemonV2PokemonformnameModelSelector)) { return this.__child(`pokemon_v2_pokemonformname_by_pk`, PokemonV2PokemonformnameModelSelector, builder) }
  pokemon_v2_pokemonformsprites(builder?: string | PokemonV2PokemonformspritesModelSelector | ((selector: PokemonV2PokemonformspritesModelSelector) => PokemonV2PokemonformspritesModelSelector)) { return this.__child(`pokemon_v2_pokemonformsprites`, PokemonV2PokemonformspritesModelSelector, builder) }
  pokemon_v2_pokemonformsprites_aggregate(builder?: string | PokemonV2PokemonformspritesAggregateModelSelector | ((selector: PokemonV2PokemonformspritesAggregateModelSelector) => PokemonV2PokemonformspritesAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonformsprites_aggregate`, PokemonV2PokemonformspritesAggregateModelSelector, builder) }
  pokemon_v2_pokemonformsprites_by_pk(builder?: string | PokemonV2PokemonformspritesModelSelector | ((selector: PokemonV2PokemonformspritesModelSelector) => PokemonV2PokemonformspritesModelSelector)) { return this.__child(`pokemon_v2_pokemonformsprites_by_pk`, PokemonV2PokemonformspritesModelSelector, builder) }
  pokemon_v2_pokemonformtype(builder?: string | PokemonV2PokemonformtypeModelSelector | ((selector: PokemonV2PokemonformtypeModelSelector) => PokemonV2PokemonformtypeModelSelector)) { return this.__child(`pokemon_v2_pokemonformtype`, PokemonV2PokemonformtypeModelSelector, builder) }
  pokemon_v2_pokemonformtype_aggregate(builder?: string | PokemonV2PokemonformtypeAggregateModelSelector | ((selector: PokemonV2PokemonformtypeAggregateModelSelector) => PokemonV2PokemonformtypeAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonformtype_aggregate`, PokemonV2PokemonformtypeAggregateModelSelector, builder) }
  pokemon_v2_pokemonformtype_by_pk(builder?: string | PokemonV2PokemonformtypeModelSelector | ((selector: PokemonV2PokemonformtypeModelSelector) => PokemonV2PokemonformtypeModelSelector)) { return this.__child(`pokemon_v2_pokemonformtype_by_pk`, PokemonV2PokemonformtypeModelSelector, builder) }
  pokemon_v2_pokemongameindex(builder?: string | PokemonV2PokemongameindexModelSelector | ((selector: PokemonV2PokemongameindexModelSelector) => PokemonV2PokemongameindexModelSelector)) { return this.__child(`pokemon_v2_pokemongameindex`, PokemonV2PokemongameindexModelSelector, builder) }
  pokemon_v2_pokemongameindex_aggregate(builder?: string | PokemonV2PokemongameindexAggregateModelSelector | ((selector: PokemonV2PokemongameindexAggregateModelSelector) => PokemonV2PokemongameindexAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemongameindex_aggregate`, PokemonV2PokemongameindexAggregateModelSelector, builder) }
  pokemon_v2_pokemongameindex_by_pk(builder?: string | PokemonV2PokemongameindexModelSelector | ((selector: PokemonV2PokemongameindexModelSelector) => PokemonV2PokemongameindexModelSelector)) { return this.__child(`pokemon_v2_pokemongameindex_by_pk`, PokemonV2PokemongameindexModelSelector, builder) }
  pokemon_v2_pokemonhabitat(builder?: string | PokemonV2PokemonhabitatModelSelector | ((selector: PokemonV2PokemonhabitatModelSelector) => PokemonV2PokemonhabitatModelSelector)) { return this.__child(`pokemon_v2_pokemonhabitat`, PokemonV2PokemonhabitatModelSelector, builder) }
  pokemon_v2_pokemonhabitat_aggregate(builder?: string | PokemonV2PokemonhabitatAggregateModelSelector | ((selector: PokemonV2PokemonhabitatAggregateModelSelector) => PokemonV2PokemonhabitatAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonhabitat_aggregate`, PokemonV2PokemonhabitatAggregateModelSelector, builder) }
  pokemon_v2_pokemonhabitat_by_pk(builder?: string | PokemonV2PokemonhabitatModelSelector | ((selector: PokemonV2PokemonhabitatModelSelector) => PokemonV2PokemonhabitatModelSelector)) { return this.__child(`pokemon_v2_pokemonhabitat_by_pk`, PokemonV2PokemonhabitatModelSelector, builder) }
  pokemon_v2_pokemonhabitatname(builder?: string | PokemonV2PokemonhabitatnameModelSelector | ((selector: PokemonV2PokemonhabitatnameModelSelector) => PokemonV2PokemonhabitatnameModelSelector)) { return this.__child(`pokemon_v2_pokemonhabitatname`, PokemonV2PokemonhabitatnameModelSelector, builder) }
  pokemon_v2_pokemonhabitatname_aggregate(builder?: string | PokemonV2PokemonhabitatnameAggregateModelSelector | ((selector: PokemonV2PokemonhabitatnameAggregateModelSelector) => PokemonV2PokemonhabitatnameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonhabitatname_aggregate`, PokemonV2PokemonhabitatnameAggregateModelSelector, builder) }
  pokemon_v2_pokemonhabitatname_by_pk(builder?: string | PokemonV2PokemonhabitatnameModelSelector | ((selector: PokemonV2PokemonhabitatnameModelSelector) => PokemonV2PokemonhabitatnameModelSelector)) { return this.__child(`pokemon_v2_pokemonhabitatname_by_pk`, PokemonV2PokemonhabitatnameModelSelector, builder) }
  pokemon_v2_pokemonitem(builder?: string | PokemonV2PokemonitemModelSelector | ((selector: PokemonV2PokemonitemModelSelector) => PokemonV2PokemonitemModelSelector)) { return this.__child(`pokemon_v2_pokemonitem`, PokemonV2PokemonitemModelSelector, builder) }
  pokemon_v2_pokemonitem_aggregate(builder?: string | PokemonV2PokemonitemAggregateModelSelector | ((selector: PokemonV2PokemonitemAggregateModelSelector) => PokemonV2PokemonitemAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonitem_aggregate`, PokemonV2PokemonitemAggregateModelSelector, builder) }
  pokemon_v2_pokemonitem_by_pk(builder?: string | PokemonV2PokemonitemModelSelector | ((selector: PokemonV2PokemonitemModelSelector) => PokemonV2PokemonitemModelSelector)) { return this.__child(`pokemon_v2_pokemonitem_by_pk`, PokemonV2PokemonitemModelSelector, builder) }
  pokemon_v2_pokemonmove(builder?: string | PokemonV2PokemonmoveModelSelector | ((selector: PokemonV2PokemonmoveModelSelector) => PokemonV2PokemonmoveModelSelector)) { return this.__child(`pokemon_v2_pokemonmove`, PokemonV2PokemonmoveModelSelector, builder) }
  pokemon_v2_pokemonmove_aggregate(builder?: string | PokemonV2PokemonmoveAggregateModelSelector | ((selector: PokemonV2PokemonmoveAggregateModelSelector) => PokemonV2PokemonmoveAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonmove_aggregate`, PokemonV2PokemonmoveAggregateModelSelector, builder) }
  pokemon_v2_pokemonmove_by_pk(builder?: string | PokemonV2PokemonmoveModelSelector | ((selector: PokemonV2PokemonmoveModelSelector) => PokemonV2PokemonmoveModelSelector)) { return this.__child(`pokemon_v2_pokemonmove_by_pk`, PokemonV2PokemonmoveModelSelector, builder) }
  pokemon_v2_pokemonshape(builder?: string | PokemonV2PokemonshapeModelSelector | ((selector: PokemonV2PokemonshapeModelSelector) => PokemonV2PokemonshapeModelSelector)) { return this.__child(`pokemon_v2_pokemonshape`, PokemonV2PokemonshapeModelSelector, builder) }
  pokemon_v2_pokemonshape_aggregate(builder?: string | PokemonV2PokemonshapeAggregateModelSelector | ((selector: PokemonV2PokemonshapeAggregateModelSelector) => PokemonV2PokemonshapeAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonshape_aggregate`, PokemonV2PokemonshapeAggregateModelSelector, builder) }
  pokemon_v2_pokemonshape_by_pk(builder?: string | PokemonV2PokemonshapeModelSelector | ((selector: PokemonV2PokemonshapeModelSelector) => PokemonV2PokemonshapeModelSelector)) { return this.__child(`pokemon_v2_pokemonshape_by_pk`, PokemonV2PokemonshapeModelSelector, builder) }
  pokemon_v2_pokemonshapename(builder?: string | PokemonV2PokemonshapenameModelSelector | ((selector: PokemonV2PokemonshapenameModelSelector) => PokemonV2PokemonshapenameModelSelector)) { return this.__child(`pokemon_v2_pokemonshapename`, PokemonV2PokemonshapenameModelSelector, builder) }
  pokemon_v2_pokemonshapename_aggregate(builder?: string | PokemonV2PokemonshapenameAggregateModelSelector | ((selector: PokemonV2PokemonshapenameAggregateModelSelector) => PokemonV2PokemonshapenameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonshapename_aggregate`, PokemonV2PokemonshapenameAggregateModelSelector, builder) }
  pokemon_v2_pokemonshapename_by_pk(builder?: string | PokemonV2PokemonshapenameModelSelector | ((selector: PokemonV2PokemonshapenameModelSelector) => PokemonV2PokemonshapenameModelSelector)) { return this.__child(`pokemon_v2_pokemonshapename_by_pk`, PokemonV2PokemonshapenameModelSelector, builder) }
  pokemon_v2_pokemonspecies(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecies`, PokemonV2PokemonspeciesModelSelector, builder) }
  pokemon_v2_pokemonspecies_aggregate(builder?: string | PokemonV2PokemonspeciesAggregateModelSelector | ((selector: PokemonV2PokemonspeciesAggregateModelSelector) => PokemonV2PokemonspeciesAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonspecies_aggregate`, PokemonV2PokemonspeciesAggregateModelSelector, builder) }
  pokemon_v2_pokemonspecies_by_pk(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecies_by_pk`, PokemonV2PokemonspeciesModelSelector, builder) }
  pokemon_v2_pokemonspeciesdescription(builder?: string | PokemonV2PokemonspeciesdescriptionModelSelector | ((selector: PokemonV2PokemonspeciesdescriptionModelSelector) => PokemonV2PokemonspeciesdescriptionModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesdescription`, PokemonV2PokemonspeciesdescriptionModelSelector, builder) }
  pokemon_v2_pokemonspeciesdescription_aggregate(builder?: string | PokemonV2PokemonspeciesdescriptionAggregateModelSelector | ((selector: PokemonV2PokemonspeciesdescriptionAggregateModelSelector) => PokemonV2PokemonspeciesdescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesdescription_aggregate`, PokemonV2PokemonspeciesdescriptionAggregateModelSelector, builder) }
  pokemon_v2_pokemonspeciesdescription_by_pk(builder?: string | PokemonV2PokemonspeciesdescriptionModelSelector | ((selector: PokemonV2PokemonspeciesdescriptionModelSelector) => PokemonV2PokemonspeciesdescriptionModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesdescription_by_pk`, PokemonV2PokemonspeciesdescriptionModelSelector, builder) }
  pokemon_v2_pokemonspeciesflavortext(builder?: string | PokemonV2PokemonspeciesflavortextModelSelector | ((selector: PokemonV2PokemonspeciesflavortextModelSelector) => PokemonV2PokemonspeciesflavortextModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesflavortext`, PokemonV2PokemonspeciesflavortextModelSelector, builder) }
  pokemon_v2_pokemonspeciesflavortext_aggregate(builder?: string | PokemonV2PokemonspeciesflavortextAggregateModelSelector | ((selector: PokemonV2PokemonspeciesflavortextAggregateModelSelector) => PokemonV2PokemonspeciesflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesflavortext_aggregate`, PokemonV2PokemonspeciesflavortextAggregateModelSelector, builder) }
  pokemon_v2_pokemonspeciesflavortext_by_pk(builder?: string | PokemonV2PokemonspeciesflavortextModelSelector | ((selector: PokemonV2PokemonspeciesflavortextModelSelector) => PokemonV2PokemonspeciesflavortextModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesflavortext_by_pk`, PokemonV2PokemonspeciesflavortextModelSelector, builder) }
  pokemon_v2_pokemonspeciesname(builder?: string | PokemonV2PokemonspeciesnameModelSelector | ((selector: PokemonV2PokemonspeciesnameModelSelector) => PokemonV2PokemonspeciesnameModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesname`, PokemonV2PokemonspeciesnameModelSelector, builder) }
  pokemon_v2_pokemonspeciesname_aggregate(builder?: string | PokemonV2PokemonspeciesnameAggregateModelSelector | ((selector: PokemonV2PokemonspeciesnameAggregateModelSelector) => PokemonV2PokemonspeciesnameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesname_aggregate`, PokemonV2PokemonspeciesnameAggregateModelSelector, builder) }
  pokemon_v2_pokemonspeciesname_by_pk(builder?: string | PokemonV2PokemonspeciesnameModelSelector | ((selector: PokemonV2PokemonspeciesnameModelSelector) => PokemonV2PokemonspeciesnameModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesname_by_pk`, PokemonV2PokemonspeciesnameModelSelector, builder) }
  pokemon_v2_pokemonsprites(builder?: string | PokemonV2PokemonspritesModelSelector | ((selector: PokemonV2PokemonspritesModelSelector) => PokemonV2PokemonspritesModelSelector)) { return this.__child(`pokemon_v2_pokemonsprites`, PokemonV2PokemonspritesModelSelector, builder) }
  pokemon_v2_pokemonsprites_aggregate(builder?: string | PokemonV2PokemonspritesAggregateModelSelector | ((selector: PokemonV2PokemonspritesAggregateModelSelector) => PokemonV2PokemonspritesAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonsprites_aggregate`, PokemonV2PokemonspritesAggregateModelSelector, builder) }
  pokemon_v2_pokemonsprites_by_pk(builder?: string | PokemonV2PokemonspritesModelSelector | ((selector: PokemonV2PokemonspritesModelSelector) => PokemonV2PokemonspritesModelSelector)) { return this.__child(`pokemon_v2_pokemonsprites_by_pk`, PokemonV2PokemonspritesModelSelector, builder) }
  pokemon_v2_pokemonstat(builder?: string | PokemonV2PokemonstatModelSelector | ((selector: PokemonV2PokemonstatModelSelector) => PokemonV2PokemonstatModelSelector)) { return this.__child(`pokemon_v2_pokemonstat`, PokemonV2PokemonstatModelSelector, builder) }
  pokemon_v2_pokemonstat_aggregate(builder?: string | PokemonV2PokemonstatAggregateModelSelector | ((selector: PokemonV2PokemonstatAggregateModelSelector) => PokemonV2PokemonstatAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonstat_aggregate`, PokemonV2PokemonstatAggregateModelSelector, builder) }
  pokemon_v2_pokemonstat_by_pk(builder?: string | PokemonV2PokemonstatModelSelector | ((selector: PokemonV2PokemonstatModelSelector) => PokemonV2PokemonstatModelSelector)) { return this.__child(`pokemon_v2_pokemonstat_by_pk`, PokemonV2PokemonstatModelSelector, builder) }
  pokemon_v2_pokemontype(builder?: string | PokemonV2PokemontypeModelSelector | ((selector: PokemonV2PokemontypeModelSelector) => PokemonV2PokemontypeModelSelector)) { return this.__child(`pokemon_v2_pokemontype`, PokemonV2PokemontypeModelSelector, builder) }
  pokemon_v2_pokemontype_aggregate(builder?: string | PokemonV2PokemontypeAggregateModelSelector | ((selector: PokemonV2PokemontypeAggregateModelSelector) => PokemonV2PokemontypeAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemontype_aggregate`, PokemonV2PokemontypeAggregateModelSelector, builder) }
  pokemon_v2_pokemontype_by_pk(builder?: string | PokemonV2PokemontypeModelSelector | ((selector: PokemonV2PokemontypeModelSelector) => PokemonV2PokemontypeModelSelector)) { return this.__child(`pokemon_v2_pokemontype_by_pk`, PokemonV2PokemontypeModelSelector, builder) }
  pokemon_v2_pokemontypepast(builder?: string | PokemonV2PokemontypepastModelSelector | ((selector: PokemonV2PokemontypepastModelSelector) => PokemonV2PokemontypepastModelSelector)) { return this.__child(`pokemon_v2_pokemontypepast`, PokemonV2PokemontypepastModelSelector, builder) }
  pokemon_v2_pokemontypepast_aggregate(builder?: string | PokemonV2PokemontypepastAggregateModelSelector | ((selector: PokemonV2PokemontypepastAggregateModelSelector) => PokemonV2PokemontypepastAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemontypepast_aggregate`, PokemonV2PokemontypepastAggregateModelSelector, builder) }
  pokemon_v2_pokemontypepast_by_pk(builder?: string | PokemonV2PokemontypepastModelSelector | ((selector: PokemonV2PokemontypepastModelSelector) => PokemonV2PokemontypepastModelSelector)) { return this.__child(`pokemon_v2_pokemontypepast_by_pk`, PokemonV2PokemontypepastModelSelector, builder) }
  pokemon_v2_region(builder?: string | PokemonV2RegionModelSelector | ((selector: PokemonV2RegionModelSelector) => PokemonV2RegionModelSelector)) { return this.__child(`pokemon_v2_region`, PokemonV2RegionModelSelector, builder) }
  pokemon_v2_region_aggregate(builder?: string | PokemonV2RegionAggregateModelSelector | ((selector: PokemonV2RegionAggregateModelSelector) => PokemonV2RegionAggregateModelSelector)) { return this.__child(`pokemon_v2_region_aggregate`, PokemonV2RegionAggregateModelSelector, builder) }
  pokemon_v2_region_by_pk(builder?: string | PokemonV2RegionModelSelector | ((selector: PokemonV2RegionModelSelector) => PokemonV2RegionModelSelector)) { return this.__child(`pokemon_v2_region_by_pk`, PokemonV2RegionModelSelector, builder) }
  pokemon_v2_regionname(builder?: string | PokemonV2RegionnameModelSelector | ((selector: PokemonV2RegionnameModelSelector) => PokemonV2RegionnameModelSelector)) { return this.__child(`pokemon_v2_regionname`, PokemonV2RegionnameModelSelector, builder) }
  pokemon_v2_regionname_aggregate(builder?: string | PokemonV2RegionnameAggregateModelSelector | ((selector: PokemonV2RegionnameAggregateModelSelector) => PokemonV2RegionnameAggregateModelSelector)) { return this.__child(`pokemon_v2_regionname_aggregate`, PokemonV2RegionnameAggregateModelSelector, builder) }
  pokemon_v2_regionname_by_pk(builder?: string | PokemonV2RegionnameModelSelector | ((selector: PokemonV2RegionnameModelSelector) => PokemonV2RegionnameModelSelector)) { return this.__child(`pokemon_v2_regionname_by_pk`, PokemonV2RegionnameModelSelector, builder) }
  pokemon_v2_stat(builder?: string | PokemonV2StatModelSelector | ((selector: PokemonV2StatModelSelector) => PokemonV2StatModelSelector)) { return this.__child(`pokemon_v2_stat`, PokemonV2StatModelSelector, builder) }
  pokemon_v2_stat_aggregate(builder?: string | PokemonV2StatAggregateModelSelector | ((selector: PokemonV2StatAggregateModelSelector) => PokemonV2StatAggregateModelSelector)) { return this.__child(`pokemon_v2_stat_aggregate`, PokemonV2StatAggregateModelSelector, builder) }
  pokemon_v2_stat_by_pk(builder?: string | PokemonV2StatModelSelector | ((selector: PokemonV2StatModelSelector) => PokemonV2StatModelSelector)) { return this.__child(`pokemon_v2_stat_by_pk`, PokemonV2StatModelSelector, builder) }
  pokemon_v2_statname(builder?: string | PokemonV2StatnameModelSelector | ((selector: PokemonV2StatnameModelSelector) => PokemonV2StatnameModelSelector)) { return this.__child(`pokemon_v2_statname`, PokemonV2StatnameModelSelector, builder) }
  pokemon_v2_statname_aggregate(builder?: string | PokemonV2StatnameAggregateModelSelector | ((selector: PokemonV2StatnameAggregateModelSelector) => PokemonV2StatnameAggregateModelSelector)) { return this.__child(`pokemon_v2_statname_aggregate`, PokemonV2StatnameAggregateModelSelector, builder) }
  pokemon_v2_statname_by_pk(builder?: string | PokemonV2StatnameModelSelector | ((selector: PokemonV2StatnameModelSelector) => PokemonV2StatnameModelSelector)) { return this.__child(`pokemon_v2_statname_by_pk`, PokemonV2StatnameModelSelector, builder) }
  pokemon_v2_supercontestcombo(builder?: string | PokemonV2SupercontestcomboModelSelector | ((selector: PokemonV2SupercontestcomboModelSelector) => PokemonV2SupercontestcomboModelSelector)) { return this.__child(`pokemon_v2_supercontestcombo`, PokemonV2SupercontestcomboModelSelector, builder) }
  pokemon_v2_supercontestcombo_aggregate(builder?: string | PokemonV2SupercontestcomboAggregateModelSelector | ((selector: PokemonV2SupercontestcomboAggregateModelSelector) => PokemonV2SupercontestcomboAggregateModelSelector)) { return this.__child(`pokemon_v2_supercontestcombo_aggregate`, PokemonV2SupercontestcomboAggregateModelSelector, builder) }
  pokemon_v2_supercontestcombo_by_pk(builder?: string | PokemonV2SupercontestcomboModelSelector | ((selector: PokemonV2SupercontestcomboModelSelector) => PokemonV2SupercontestcomboModelSelector)) { return this.__child(`pokemon_v2_supercontestcombo_by_pk`, PokemonV2SupercontestcomboModelSelector, builder) }
  pokemon_v2_supercontesteffect(builder?: string | PokemonV2SupercontesteffectModelSelector | ((selector: PokemonV2SupercontesteffectModelSelector) => PokemonV2SupercontesteffectModelSelector)) { return this.__child(`pokemon_v2_supercontesteffect`, PokemonV2SupercontesteffectModelSelector, builder) }
  pokemon_v2_supercontesteffect_aggregate(builder?: string | PokemonV2SupercontesteffectAggregateModelSelector | ((selector: PokemonV2SupercontesteffectAggregateModelSelector) => PokemonV2SupercontesteffectAggregateModelSelector)) { return this.__child(`pokemon_v2_supercontesteffect_aggregate`, PokemonV2SupercontesteffectAggregateModelSelector, builder) }
  pokemon_v2_supercontesteffect_by_pk(builder?: string | PokemonV2SupercontesteffectModelSelector | ((selector: PokemonV2SupercontesteffectModelSelector) => PokemonV2SupercontesteffectModelSelector)) { return this.__child(`pokemon_v2_supercontesteffect_by_pk`, PokemonV2SupercontesteffectModelSelector, builder) }
  pokemon_v2_supercontesteffectflavortext(builder?: string | PokemonV2SupercontesteffectflavortextModelSelector | ((selector: PokemonV2SupercontesteffectflavortextModelSelector) => PokemonV2SupercontesteffectflavortextModelSelector)) { return this.__child(`pokemon_v2_supercontesteffectflavortext`, PokemonV2SupercontesteffectflavortextModelSelector, builder) }
  pokemon_v2_supercontesteffectflavortext_aggregate(builder?: string | PokemonV2SupercontesteffectflavortextAggregateModelSelector | ((selector: PokemonV2SupercontesteffectflavortextAggregateModelSelector) => PokemonV2SupercontesteffectflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_supercontesteffectflavortext_aggregate`, PokemonV2SupercontesteffectflavortextAggregateModelSelector, builder) }
  pokemon_v2_supercontesteffectflavortext_by_pk(builder?: string | PokemonV2SupercontesteffectflavortextModelSelector | ((selector: PokemonV2SupercontesteffectflavortextModelSelector) => PokemonV2SupercontesteffectflavortextModelSelector)) { return this.__child(`pokemon_v2_supercontesteffectflavortext_by_pk`, PokemonV2SupercontesteffectflavortextModelSelector, builder) }
  pokemon_v2_type(builder?: string | PokemonV2TypeModelSelector | ((selector: PokemonV2TypeModelSelector) => PokemonV2TypeModelSelector)) { return this.__child(`pokemon_v2_type`, PokemonV2TypeModelSelector, builder) }
  pokemon_v2_type_aggregate(builder?: string | PokemonV2TypeAggregateModelSelector | ((selector: PokemonV2TypeAggregateModelSelector) => PokemonV2TypeAggregateModelSelector)) { return this.__child(`pokemon_v2_type_aggregate`, PokemonV2TypeAggregateModelSelector, builder) }
  pokemon_v2_type_by_pk(builder?: string | PokemonV2TypeModelSelector | ((selector: PokemonV2TypeModelSelector) => PokemonV2TypeModelSelector)) { return this.__child(`pokemon_v2_type_by_pk`, PokemonV2TypeModelSelector, builder) }
  pokemon_v2_typeefficacy(builder?: string | PokemonV2TypeefficacyModelSelector | ((selector: PokemonV2TypeefficacyModelSelector) => PokemonV2TypeefficacyModelSelector)) { return this.__child(`pokemon_v2_typeefficacy`, PokemonV2TypeefficacyModelSelector, builder) }
  pokemon_v2_typeefficacy_aggregate(builder?: string | PokemonV2TypeefficacyAggregateModelSelector | ((selector: PokemonV2TypeefficacyAggregateModelSelector) => PokemonV2TypeefficacyAggregateModelSelector)) { return this.__child(`pokemon_v2_typeefficacy_aggregate`, PokemonV2TypeefficacyAggregateModelSelector, builder) }
  pokemon_v2_typeefficacy_by_pk(builder?: string | PokemonV2TypeefficacyModelSelector | ((selector: PokemonV2TypeefficacyModelSelector) => PokemonV2TypeefficacyModelSelector)) { return this.__child(`pokemon_v2_typeefficacy_by_pk`, PokemonV2TypeefficacyModelSelector, builder) }
  pokemon_v2_typegameindex(builder?: string | PokemonV2TypegameindexModelSelector | ((selector: PokemonV2TypegameindexModelSelector) => PokemonV2TypegameindexModelSelector)) { return this.__child(`pokemon_v2_typegameindex`, PokemonV2TypegameindexModelSelector, builder) }
  pokemon_v2_typegameindex_aggregate(builder?: string | PokemonV2TypegameindexAggregateModelSelector | ((selector: PokemonV2TypegameindexAggregateModelSelector) => PokemonV2TypegameindexAggregateModelSelector)) { return this.__child(`pokemon_v2_typegameindex_aggregate`, PokemonV2TypegameindexAggregateModelSelector, builder) }
  pokemon_v2_typegameindex_by_pk(builder?: string | PokemonV2TypegameindexModelSelector | ((selector: PokemonV2TypegameindexModelSelector) => PokemonV2TypegameindexModelSelector)) { return this.__child(`pokemon_v2_typegameindex_by_pk`, PokemonV2TypegameindexModelSelector, builder) }
  pokemon_v2_typename(builder?: string | PokemonV2TypenameModelSelector | ((selector: PokemonV2TypenameModelSelector) => PokemonV2TypenameModelSelector)) { return this.__child(`pokemon_v2_typename`, PokemonV2TypenameModelSelector, builder) }
  pokemon_v2_typename_aggregate(builder?: string | PokemonV2TypenameAggregateModelSelector | ((selector: PokemonV2TypenameAggregateModelSelector) => PokemonV2TypenameAggregateModelSelector)) { return this.__child(`pokemon_v2_typename_aggregate`, PokemonV2TypenameAggregateModelSelector, builder) }
  pokemon_v2_typename_by_pk(builder?: string | PokemonV2TypenameModelSelector | ((selector: PokemonV2TypenameModelSelector) => PokemonV2TypenameModelSelector)) { return this.__child(`pokemon_v2_typename_by_pk`, PokemonV2TypenameModelSelector, builder) }
  pokemon_v2_version(builder?: string | PokemonV2VersionModelSelector | ((selector: PokemonV2VersionModelSelector) => PokemonV2VersionModelSelector)) { return this.__child(`pokemon_v2_version`, PokemonV2VersionModelSelector, builder) }
  pokemon_v2_version_aggregate(builder?: string | PokemonV2VersionAggregateModelSelector | ((selector: PokemonV2VersionAggregateModelSelector) => PokemonV2VersionAggregateModelSelector)) { return this.__child(`pokemon_v2_version_aggregate`, PokemonV2VersionAggregateModelSelector, builder) }
  pokemon_v2_version_by_pk(builder?: string | PokemonV2VersionModelSelector | ((selector: PokemonV2VersionModelSelector) => PokemonV2VersionModelSelector)) { return this.__child(`pokemon_v2_version_by_pk`, PokemonV2VersionModelSelector, builder) }
  pokemon_v2_versiongroup(builder?: string | PokemonV2VersiongroupModelSelector | ((selector: PokemonV2VersiongroupModelSelector) => PokemonV2VersiongroupModelSelector)) { return this.__child(`pokemon_v2_versiongroup`, PokemonV2VersiongroupModelSelector, builder) }
  pokemon_v2_versiongroup_aggregate(builder?: string | PokemonV2VersiongroupAggregateModelSelector | ((selector: PokemonV2VersiongroupAggregateModelSelector) => PokemonV2VersiongroupAggregateModelSelector)) { return this.__child(`pokemon_v2_versiongroup_aggregate`, PokemonV2VersiongroupAggregateModelSelector, builder) }
  pokemon_v2_versiongroup_by_pk(builder?: string | PokemonV2VersiongroupModelSelector | ((selector: PokemonV2VersiongroupModelSelector) => PokemonV2VersiongroupModelSelector)) { return this.__child(`pokemon_v2_versiongroup_by_pk`, PokemonV2VersiongroupModelSelector, builder) }
  pokemon_v2_versiongroupmovelearnmethod(builder?: string | PokemonV2VersiongroupmovelearnmethodModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodModelSelector) => PokemonV2VersiongroupmovelearnmethodModelSelector)) { return this.__child(`pokemon_v2_versiongroupmovelearnmethod`, PokemonV2VersiongroupmovelearnmethodModelSelector, builder) }
  pokemon_v2_versiongroupmovelearnmethod_aggregate(builder?: string | PokemonV2VersiongroupmovelearnmethodAggregateModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodAggregateModelSelector) => PokemonV2VersiongroupmovelearnmethodAggregateModelSelector)) { return this.__child(`pokemon_v2_versiongroupmovelearnmethod_aggregate`, PokemonV2VersiongroupmovelearnmethodAggregateModelSelector, builder) }
  pokemon_v2_versiongroupmovelearnmethod_by_pk(builder?: string | PokemonV2VersiongroupmovelearnmethodModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodModelSelector) => PokemonV2VersiongroupmovelearnmethodModelSelector)) { return this.__child(`pokemon_v2_versiongroupmovelearnmethod_by_pk`, PokemonV2VersiongroupmovelearnmethodModelSelector, builder) }
  pokemon_v2_versiongroupregion(builder?: string | PokemonV2VersiongroupregionModelSelector | ((selector: PokemonV2VersiongroupregionModelSelector) => PokemonV2VersiongroupregionModelSelector)) { return this.__child(`pokemon_v2_versiongroupregion`, PokemonV2VersiongroupregionModelSelector, builder) }
  pokemon_v2_versiongroupregion_aggregate(builder?: string | PokemonV2VersiongroupregionAggregateModelSelector | ((selector: PokemonV2VersiongroupregionAggregateModelSelector) => PokemonV2VersiongroupregionAggregateModelSelector)) { return this.__child(`pokemon_v2_versiongroupregion_aggregate`, PokemonV2VersiongroupregionAggregateModelSelector, builder) }
  pokemon_v2_versiongroupregion_by_pk(builder?: string | PokemonV2VersiongroupregionModelSelector | ((selector: PokemonV2VersiongroupregionModelSelector) => PokemonV2VersiongroupregionModelSelector)) { return this.__child(`pokemon_v2_versiongroupregion_by_pk`, PokemonV2VersiongroupregionModelSelector, builder) }
  pokemon_v2_versionname(builder?: string | PokemonV2VersionnameModelSelector | ((selector: PokemonV2VersionnameModelSelector) => PokemonV2VersionnameModelSelector)) { return this.__child(`pokemon_v2_versionname`, PokemonV2VersionnameModelSelector, builder) }
  pokemon_v2_versionname_aggregate(builder?: string | PokemonV2VersionnameAggregateModelSelector | ((selector: PokemonV2VersionnameAggregateModelSelector) => PokemonV2VersionnameAggregateModelSelector)) { return this.__child(`pokemon_v2_versionname_aggregate`, PokemonV2VersionnameAggregateModelSelector, builder) }
  pokemon_v2_versionname_by_pk(builder?: string | PokemonV2VersionnameModelSelector | ((selector: PokemonV2VersionnameModelSelector) => PokemonV2VersionnameModelSelector)) { return this.__child(`pokemon_v2_versionname_by_pk`, PokemonV2VersionnameModelSelector, builder) }
}
export function selectFromSubscriptionRoot() {
  return new SubscriptionRootModelSelector()
}

export const subscriptionRootModelPrimitives = selectFromSubscriptionRoot()
