/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2BerryAggregateModel, PokemonV2BerryAggregateModelType } from "./PokemonV2BerryAggregateModel"
import { PokemonV2BerryAggregateModelSelector } from "./PokemonV2BerryAggregateModel.base"
import { PokemonV2BerryModel, PokemonV2BerryModelType } from "./PokemonV2BerryModel"
import { PokemonV2BerryModelSelector } from "./PokemonV2BerryModel.base"
import { PokemonV2EvolutionchainAggregateModel, PokemonV2EvolutionchainAggregateModelType } from "./PokemonV2EvolutionchainAggregateModel"
import { PokemonV2EvolutionchainAggregateModelSelector } from "./PokemonV2EvolutionchainAggregateModel.base"
import { PokemonV2EvolutionchainModel, PokemonV2EvolutionchainModelType } from "./PokemonV2EvolutionchainModel"
import { PokemonV2EvolutionchainModelSelector } from "./PokemonV2EvolutionchainModel.base"
import { PokemonV2ItemattributemapAggregateModel, PokemonV2ItemattributemapAggregateModelType } from "./PokemonV2ItemattributemapAggregateModel"
import { PokemonV2ItemattributemapAggregateModelSelector } from "./PokemonV2ItemattributemapAggregateModel.base"
import { PokemonV2ItemattributemapModel, PokemonV2ItemattributemapModelType } from "./PokemonV2ItemattributemapModel"
import { PokemonV2ItemattributemapModelSelector } from "./PokemonV2ItemattributemapModel.base"
import { PokemonV2ItemcategoryModel, PokemonV2ItemcategoryModelType } from "./PokemonV2ItemcategoryModel"
import { PokemonV2ItemcategoryModelSelector } from "./PokemonV2ItemcategoryModel.base"
import { PokemonV2ItemeffecttextAggregateModel, PokemonV2ItemeffecttextAggregateModelType } from "./PokemonV2ItemeffecttextAggregateModel"
import { PokemonV2ItemeffecttextAggregateModelSelector } from "./PokemonV2ItemeffecttextAggregateModel.base"
import { PokemonV2ItemeffecttextModel, PokemonV2ItemeffecttextModelType } from "./PokemonV2ItemeffecttextModel"
import { PokemonV2ItemeffecttextModelSelector } from "./PokemonV2ItemeffecttextModel.base"
import { PokemonV2ItemflavortextAggregateModel, PokemonV2ItemflavortextAggregateModelType } from "./PokemonV2ItemflavortextAggregateModel"
import { PokemonV2ItemflavortextAggregateModelSelector } from "./PokemonV2ItemflavortextAggregateModel.base"
import { PokemonV2ItemflavortextModel, PokemonV2ItemflavortextModelType } from "./PokemonV2ItemflavortextModel"
import { PokemonV2ItemflavortextModelSelector } from "./PokemonV2ItemflavortextModel.base"
import { PokemonV2ItemflingeffectModel, PokemonV2ItemflingeffectModelType } from "./PokemonV2ItemflingeffectModel"
import { PokemonV2ItemflingeffectModelSelector } from "./PokemonV2ItemflingeffectModel.base"
import { PokemonV2ItemgameindexAggregateModel, PokemonV2ItemgameindexAggregateModelType } from "./PokemonV2ItemgameindexAggregateModel"
import { PokemonV2ItemgameindexAggregateModelSelector } from "./PokemonV2ItemgameindexAggregateModel.base"
import { PokemonV2ItemgameindexModel, PokemonV2ItemgameindexModelType } from "./PokemonV2ItemgameindexModel"
import { PokemonV2ItemgameindexModelSelector } from "./PokemonV2ItemgameindexModel.base"
import { PokemonV2ItemnameAggregateModel, PokemonV2ItemnameAggregateModelType } from "./PokemonV2ItemnameAggregateModel"
import { PokemonV2ItemnameAggregateModelSelector } from "./PokemonV2ItemnameAggregateModel.base"
import { PokemonV2ItemnameModel, PokemonV2ItemnameModelType } from "./PokemonV2ItemnameModel"
import { PokemonV2ItemnameModelSelector } from "./PokemonV2ItemnameModel.base"
import { PokemonV2ItemspritesAggregateModel, PokemonV2ItemspritesAggregateModelType } from "./PokemonV2ItemspritesAggregateModel"
import { PokemonV2ItemspritesAggregateModelSelector } from "./PokemonV2ItemspritesAggregateModel.base"
import { PokemonV2ItemspritesModel, PokemonV2ItemspritesModelType } from "./PokemonV2ItemspritesModel"
import { PokemonV2ItemspritesModelSelector } from "./PokemonV2ItemspritesModel.base"
import { PokemonV2MachineAggregateModel, PokemonV2MachineAggregateModelType } from "./PokemonV2MachineAggregateModel"
import { PokemonV2MachineAggregateModelSelector } from "./PokemonV2MachineAggregateModel.base"
import { PokemonV2MachineModel, PokemonV2MachineModelType } from "./PokemonV2MachineModel"
import { PokemonV2MachineModelSelector } from "./PokemonV2MachineModel.base"
import { PokemonV2PokemonevolutionAggregateModel, PokemonV2PokemonevolutionAggregateModelType } from "./PokemonV2PokemonevolutionAggregateModel"
import { PokemonV2PokemonevolutionAggregateModelSelector } from "./PokemonV2PokemonevolutionAggregateModel.base"
import { PokemonV2PokemonevolutionModel, PokemonV2PokemonevolutionModelType } from "./PokemonV2PokemonevolutionModel"
import { PokemonV2PokemonevolutionModelSelector } from "./PokemonV2PokemonevolutionModel.base"
import { PokemonV2PokemonitemAggregateModel, PokemonV2PokemonitemAggregateModelType } from "./PokemonV2PokemonitemAggregateModel"
import { PokemonV2PokemonitemAggregateModelSelector } from "./PokemonV2PokemonitemAggregateModel.base"
import { PokemonV2PokemonitemModel, PokemonV2PokemonitemModelType } from "./PokemonV2PokemonitemModel"
import { PokemonV2PokemonitemModelSelector } from "./PokemonV2PokemonitemModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemBase
 * auto generated base class for the model PokemonV2ItemModel.
 *
 * columns and relationships of "pokemon_v2_item"
 */
export const PokemonV2ItemModelBase = ModelBase
  .named('PokemonV2Item')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_item"), "pokemon_v2_item"),
    cost: types.union(types.undefined, types.null, types.integer),
    fling_power: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    item_category_id: types.union(types.undefined, types.null, types.integer),
    item_fling_effect_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemonV2PokemonevolutionsByHeldItemId: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonevolutionModel))),
    /** An aggregate relationship */
    pokemonV2PokemonevolutionsByHeldItemId_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonevolutionAggregateModel)),
    /** An array relationship */
    pokemon_v2_berries: types.union(types.undefined, types.array(types.late((): any => PokemonV2BerryModel))),
    /** An aggregate relationship */
    pokemon_v2_berries_aggregate: types.union(types.undefined, types.late((): any => PokemonV2BerryAggregateModel)),
    /** An array relationship */
    pokemon_v2_evolutionchains: types.union(types.undefined, types.array(types.late((): any => PokemonV2EvolutionchainModel))),
    /** An aggregate relationship */
    pokemon_v2_evolutionchains_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EvolutionchainAggregateModel)),
    /** An array relationship */
    pokemon_v2_itemattributemaps: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemattributemapModel))),
    /** An aggregate relationship */
    pokemon_v2_itemattributemaps_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemattributemapAggregateModel)),
    /** An object relationship */
    pokemon_v2_itemcategory: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategoryModel)),
    /** An array relationship */
    pokemon_v2_itemeffecttexts: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemeffecttextModel))),
    /** An aggregate relationship */
    pokemon_v2_itemeffecttexts_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemeffecttextAggregateModel)),
    /** An array relationship */
    pokemon_v2_itemflavortexts: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemflavortextModel))),
    /** An aggregate relationship */
    pokemon_v2_itemflavortexts_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemflavortextAggregateModel)),
    /** An object relationship */
    pokemon_v2_itemflingeffect: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffectModel)),
    /** An array relationship */
    pokemon_v2_itemgameindices: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemgameindexModel))),
    /** An aggregate relationship */
    pokemon_v2_itemgameindices_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemgameindexAggregateModel)),
    /** An array relationship */
    pokemon_v2_itemnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemnameModel))),
    /** An aggregate relationship */
    pokemon_v2_itemnames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemnameAggregateModel)),
    /** An array relationship */
    pokemon_v2_itemsprites: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemspritesModel))),
    /** An aggregate relationship */
    pokemon_v2_itemsprites_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemspritesAggregateModel)),
    /** An array relationship */
    pokemon_v2_machines: types.union(types.undefined, types.array(types.late((): any => PokemonV2MachineModel))),
    /** An aggregate relationship */
    pokemon_v2_machines_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MachineAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonevolutions: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonevolutionModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonevolutions_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonevolutionAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonitems: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonitemModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonitems_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonitemAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemModelSelector extends QueryBuilder {
  get cost() { return this.__attr(`cost`) }
  get fling_power() { return this.__attr(`fling_power`) }
  get id() { return this.__attr(`id`) }
  get item_category_id() { return this.__attr(`item_category_id`) }
  get item_fling_effect_id() { return this.__attr(`item_fling_effect_id`) }
  get name() { return this.__attr(`name`) }
  pokemonV2PokemonevolutionsByHeldItemId(builder?: string | PokemonV2PokemonevolutionModelSelector | ((selector: PokemonV2PokemonevolutionModelSelector) => PokemonV2PokemonevolutionModelSelector)) { return this.__child(`pokemonV2PokemonevolutionsByHeldItemId`, PokemonV2PokemonevolutionModelSelector, builder) }
  pokemonV2PokemonevolutionsByHeldItemId_aggregate(builder?: string | PokemonV2PokemonevolutionAggregateModelSelector | ((selector: PokemonV2PokemonevolutionAggregateModelSelector) => PokemonV2PokemonevolutionAggregateModelSelector)) { return this.__child(`pokemonV2PokemonevolutionsByHeldItemId_aggregate`, PokemonV2PokemonevolutionAggregateModelSelector, builder) }
  pokemon_v2_berries(builder?: string | PokemonV2BerryModelSelector | ((selector: PokemonV2BerryModelSelector) => PokemonV2BerryModelSelector)) { return this.__child(`pokemon_v2_berries`, PokemonV2BerryModelSelector, builder) }
  pokemon_v2_berries_aggregate(builder?: string | PokemonV2BerryAggregateModelSelector | ((selector: PokemonV2BerryAggregateModelSelector) => PokemonV2BerryAggregateModelSelector)) { return this.__child(`pokemon_v2_berries_aggregate`, PokemonV2BerryAggregateModelSelector, builder) }
  pokemon_v2_evolutionchains(builder?: string | PokemonV2EvolutionchainModelSelector | ((selector: PokemonV2EvolutionchainModelSelector) => PokemonV2EvolutionchainModelSelector)) { return this.__child(`pokemon_v2_evolutionchains`, PokemonV2EvolutionchainModelSelector, builder) }
  pokemon_v2_evolutionchains_aggregate(builder?: string | PokemonV2EvolutionchainAggregateModelSelector | ((selector: PokemonV2EvolutionchainAggregateModelSelector) => PokemonV2EvolutionchainAggregateModelSelector)) { return this.__child(`pokemon_v2_evolutionchains_aggregate`, PokemonV2EvolutionchainAggregateModelSelector, builder) }
  pokemon_v2_itemattributemaps(builder?: string | PokemonV2ItemattributemapModelSelector | ((selector: PokemonV2ItemattributemapModelSelector) => PokemonV2ItemattributemapModelSelector)) { return this.__child(`pokemon_v2_itemattributemaps`, PokemonV2ItemattributemapModelSelector, builder) }
  pokemon_v2_itemattributemaps_aggregate(builder?: string | PokemonV2ItemattributemapAggregateModelSelector | ((selector: PokemonV2ItemattributemapAggregateModelSelector) => PokemonV2ItemattributemapAggregateModelSelector)) { return this.__child(`pokemon_v2_itemattributemaps_aggregate`, PokemonV2ItemattributemapAggregateModelSelector, builder) }
  pokemon_v2_itemcategory(builder?: string | PokemonV2ItemcategoryModelSelector | ((selector: PokemonV2ItemcategoryModelSelector) => PokemonV2ItemcategoryModelSelector)) { return this.__child(`pokemon_v2_itemcategory`, PokemonV2ItemcategoryModelSelector, builder) }
  pokemon_v2_itemeffecttexts(builder?: string | PokemonV2ItemeffecttextModelSelector | ((selector: PokemonV2ItemeffecttextModelSelector) => PokemonV2ItemeffecttextModelSelector)) { return this.__child(`pokemon_v2_itemeffecttexts`, PokemonV2ItemeffecttextModelSelector, builder) }
  pokemon_v2_itemeffecttexts_aggregate(builder?: string | PokemonV2ItemeffecttextAggregateModelSelector | ((selector: PokemonV2ItemeffecttextAggregateModelSelector) => PokemonV2ItemeffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_itemeffecttexts_aggregate`, PokemonV2ItemeffecttextAggregateModelSelector, builder) }
  pokemon_v2_itemflavortexts(builder?: string | PokemonV2ItemflavortextModelSelector | ((selector: PokemonV2ItemflavortextModelSelector) => PokemonV2ItemflavortextModelSelector)) { return this.__child(`pokemon_v2_itemflavortexts`, PokemonV2ItemflavortextModelSelector, builder) }
  pokemon_v2_itemflavortexts_aggregate(builder?: string | PokemonV2ItemflavortextAggregateModelSelector | ((selector: PokemonV2ItemflavortextAggregateModelSelector) => PokemonV2ItemflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_itemflavortexts_aggregate`, PokemonV2ItemflavortextAggregateModelSelector, builder) }
  pokemon_v2_itemflingeffect(builder?: string | PokemonV2ItemflingeffectModelSelector | ((selector: PokemonV2ItemflingeffectModelSelector) => PokemonV2ItemflingeffectModelSelector)) { return this.__child(`pokemon_v2_itemflingeffect`, PokemonV2ItemflingeffectModelSelector, builder) }
  pokemon_v2_itemgameindices(builder?: string | PokemonV2ItemgameindexModelSelector | ((selector: PokemonV2ItemgameindexModelSelector) => PokemonV2ItemgameindexModelSelector)) { return this.__child(`pokemon_v2_itemgameindices`, PokemonV2ItemgameindexModelSelector, builder) }
  pokemon_v2_itemgameindices_aggregate(builder?: string | PokemonV2ItemgameindexAggregateModelSelector | ((selector: PokemonV2ItemgameindexAggregateModelSelector) => PokemonV2ItemgameindexAggregateModelSelector)) { return this.__child(`pokemon_v2_itemgameindices_aggregate`, PokemonV2ItemgameindexAggregateModelSelector, builder) }
  pokemon_v2_itemnames(builder?: string | PokemonV2ItemnameModelSelector | ((selector: PokemonV2ItemnameModelSelector) => PokemonV2ItemnameModelSelector)) { return this.__child(`pokemon_v2_itemnames`, PokemonV2ItemnameModelSelector, builder) }
  pokemon_v2_itemnames_aggregate(builder?: string | PokemonV2ItemnameAggregateModelSelector | ((selector: PokemonV2ItemnameAggregateModelSelector) => PokemonV2ItemnameAggregateModelSelector)) { return this.__child(`pokemon_v2_itemnames_aggregate`, PokemonV2ItemnameAggregateModelSelector, builder) }
  pokemon_v2_itemsprites(builder?: string | PokemonV2ItemspritesModelSelector | ((selector: PokemonV2ItemspritesModelSelector) => PokemonV2ItemspritesModelSelector)) { return this.__child(`pokemon_v2_itemsprites`, PokemonV2ItemspritesModelSelector, builder) }
  pokemon_v2_itemsprites_aggregate(builder?: string | PokemonV2ItemspritesAggregateModelSelector | ((selector: PokemonV2ItemspritesAggregateModelSelector) => PokemonV2ItemspritesAggregateModelSelector)) { return this.__child(`pokemon_v2_itemsprites_aggregate`, PokemonV2ItemspritesAggregateModelSelector, builder) }
  pokemon_v2_machines(builder?: string | PokemonV2MachineModelSelector | ((selector: PokemonV2MachineModelSelector) => PokemonV2MachineModelSelector)) { return this.__child(`pokemon_v2_machines`, PokemonV2MachineModelSelector, builder) }
  pokemon_v2_machines_aggregate(builder?: string | PokemonV2MachineAggregateModelSelector | ((selector: PokemonV2MachineAggregateModelSelector) => PokemonV2MachineAggregateModelSelector)) { return this.__child(`pokemon_v2_machines_aggregate`, PokemonV2MachineAggregateModelSelector, builder) }
  pokemon_v2_pokemonevolutions(builder?: string | PokemonV2PokemonevolutionModelSelector | ((selector: PokemonV2PokemonevolutionModelSelector) => PokemonV2PokemonevolutionModelSelector)) { return this.__child(`pokemon_v2_pokemonevolutions`, PokemonV2PokemonevolutionModelSelector, builder) }
  pokemon_v2_pokemonevolutions_aggregate(builder?: string | PokemonV2PokemonevolutionAggregateModelSelector | ((selector: PokemonV2PokemonevolutionAggregateModelSelector) => PokemonV2PokemonevolutionAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonevolutions_aggregate`, PokemonV2PokemonevolutionAggregateModelSelector, builder) }
  pokemon_v2_pokemonitems(builder?: string | PokemonV2PokemonitemModelSelector | ((selector: PokemonV2PokemonitemModelSelector) => PokemonV2PokemonitemModelSelector)) { return this.__child(`pokemon_v2_pokemonitems`, PokemonV2PokemonitemModelSelector, builder) }
  pokemon_v2_pokemonitems_aggregate(builder?: string | PokemonV2PokemonitemAggregateModelSelector | ((selector: PokemonV2PokemonitemAggregateModelSelector) => PokemonV2PokemonitemAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonitems_aggregate`, PokemonV2PokemonitemAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Item() {
  return new PokemonV2ItemModelSelector()
}

export const pokemonV2ItemModelPrimitives = selectFromPokemonV2Item().cost.fling_power.item_category_id.item_fling_effect_id.name
