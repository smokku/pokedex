/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokedexdescriptionAggregateModel, PokemonV2PokedexdescriptionAggregateModelType } from "./PokemonV2PokedexdescriptionAggregateModel"
import { PokemonV2PokedexdescriptionAggregateModelSelector } from "./PokemonV2PokedexdescriptionAggregateModel.base"
import { PokemonV2PokedexdescriptionModel, PokemonV2PokedexdescriptionModelType } from "./PokemonV2PokedexdescriptionModel"
import { PokemonV2PokedexdescriptionModelSelector } from "./PokemonV2PokedexdescriptionModel.base"
import { PokemonV2PokedexnameAggregateModel, PokemonV2PokedexnameAggregateModelType } from "./PokemonV2PokedexnameAggregateModel"
import { PokemonV2PokedexnameAggregateModelSelector } from "./PokemonV2PokedexnameAggregateModel.base"
import { PokemonV2PokedexnameModel, PokemonV2PokedexnameModelType } from "./PokemonV2PokedexnameModel"
import { PokemonV2PokedexnameModelSelector } from "./PokemonV2PokedexnameModel.base"
import { PokemonV2PokedexversiongroupAggregateModel, PokemonV2PokedexversiongroupAggregateModelType } from "./PokemonV2PokedexversiongroupAggregateModel"
import { PokemonV2PokedexversiongroupAggregateModelSelector } from "./PokemonV2PokedexversiongroupAggregateModel.base"
import { PokemonV2PokedexversiongroupModel, PokemonV2PokedexversiongroupModelType } from "./PokemonV2PokedexversiongroupModel"
import { PokemonV2PokedexversiongroupModelSelector } from "./PokemonV2PokedexversiongroupModel.base"
import { PokemonV2PokemondexnumberAggregateModel, PokemonV2PokemondexnumberAggregateModelType } from "./PokemonV2PokemondexnumberAggregateModel"
import { PokemonV2PokemondexnumberAggregateModelSelector } from "./PokemonV2PokemondexnumberAggregateModel.base"
import { PokemonV2PokemondexnumberModel, PokemonV2PokemondexnumberModelType } from "./PokemonV2PokemondexnumberModel"
import { PokemonV2PokemondexnumberModelSelector } from "./PokemonV2PokemondexnumberModel.base"
import { PokemonV2RegionModel, PokemonV2RegionModelType } from "./PokemonV2RegionModel"
import { PokemonV2RegionModelSelector } from "./PokemonV2RegionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexBase
 * auto generated base class for the model PokemonV2PokedexModel.
 *
 * columns and relationships of "pokemon_v2_pokedex"
 */
export const PokemonV2PokedexModelBase = ModelBase
  .named('PokemonV2Pokedex')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedex"), "pokemon_v2_pokedex"),
    id: types.union(types.undefined, types.integer),
    is_main_series: types.union(types.undefined, types.boolean),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_pokedexdescriptions: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokedexdescriptionModel))),
    /** An aggregate relationship */
    pokemon_v2_pokedexdescriptions_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokedexdescriptionAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokedexnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokedexnameModel))),
    /** An aggregate relationship */
    pokemon_v2_pokedexnames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokedexnameAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokedexversiongroups: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokedexversiongroupModel))),
    /** An aggregate relationship */
    pokemon_v2_pokedexversiongroups_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokedexversiongroupAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemondexnumbers: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemondexnumberModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemondexnumbers_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemondexnumberAggregateModel)),
    /** An object relationship */
    pokemon_v2_region: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionModel)),
    region_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get is_main_series() { return this.__attr(`is_main_series`) }
  get name() { return this.__attr(`name`) }
  get region_id() { return this.__attr(`region_id`) }
  pokemon_v2_pokedexdescriptions(builder?: string | PokemonV2PokedexdescriptionModelSelector | ((selector: PokemonV2PokedexdescriptionModelSelector) => PokemonV2PokedexdescriptionModelSelector)) { return this.__child(`pokemon_v2_pokedexdescriptions`, PokemonV2PokedexdescriptionModelSelector, builder) }
  pokemon_v2_pokedexdescriptions_aggregate(builder?: string | PokemonV2PokedexdescriptionAggregateModelSelector | ((selector: PokemonV2PokedexdescriptionAggregateModelSelector) => PokemonV2PokedexdescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_pokedexdescriptions_aggregate`, PokemonV2PokedexdescriptionAggregateModelSelector, builder) }
  pokemon_v2_pokedexnames(builder?: string | PokemonV2PokedexnameModelSelector | ((selector: PokemonV2PokedexnameModelSelector) => PokemonV2PokedexnameModelSelector)) { return this.__child(`pokemon_v2_pokedexnames`, PokemonV2PokedexnameModelSelector, builder) }
  pokemon_v2_pokedexnames_aggregate(builder?: string | PokemonV2PokedexnameAggregateModelSelector | ((selector: PokemonV2PokedexnameAggregateModelSelector) => PokemonV2PokedexnameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokedexnames_aggregate`, PokemonV2PokedexnameAggregateModelSelector, builder) }
  pokemon_v2_pokedexversiongroups(builder?: string | PokemonV2PokedexversiongroupModelSelector | ((selector: PokemonV2PokedexversiongroupModelSelector) => PokemonV2PokedexversiongroupModelSelector)) { return this.__child(`pokemon_v2_pokedexversiongroups`, PokemonV2PokedexversiongroupModelSelector, builder) }
  pokemon_v2_pokedexversiongroups_aggregate(builder?: string | PokemonV2PokedexversiongroupAggregateModelSelector | ((selector: PokemonV2PokedexversiongroupAggregateModelSelector) => PokemonV2PokedexversiongroupAggregateModelSelector)) { return this.__child(`pokemon_v2_pokedexversiongroups_aggregate`, PokemonV2PokedexversiongroupAggregateModelSelector, builder) }
  pokemon_v2_pokemondexnumbers(builder?: string | PokemonV2PokemondexnumberModelSelector | ((selector: PokemonV2PokemondexnumberModelSelector) => PokemonV2PokemondexnumberModelSelector)) { return this.__child(`pokemon_v2_pokemondexnumbers`, PokemonV2PokemondexnumberModelSelector, builder) }
  pokemon_v2_pokemondexnumbers_aggregate(builder?: string | PokemonV2PokemondexnumberAggregateModelSelector | ((selector: PokemonV2PokemondexnumberAggregateModelSelector) => PokemonV2PokemondexnumberAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemondexnumbers_aggregate`, PokemonV2PokemondexnumberAggregateModelSelector, builder) }
  pokemon_v2_region(builder?: string | PokemonV2RegionModelSelector | ((selector: PokemonV2RegionModelSelector) => PokemonV2RegionModelSelector)) { return this.__child(`pokemon_v2_region`, PokemonV2RegionModelSelector, builder) }
}
export function selectFromPokemonV2Pokedex() {
  return new PokemonV2PokedexModelSelector()
}

export const pokemonV2PokedexModelPrimitives = selectFromPokemonV2Pokedex().is_main_series.name.region_id
