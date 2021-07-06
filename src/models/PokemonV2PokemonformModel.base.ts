/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonModel, PokemonV2PokemonModelType } from "./PokemonV2PokemonModel"
import { PokemonV2PokemonModelSelector } from "./PokemonV2PokemonModel.base"
import { PokemonV2PokemonformgenerationAggregateModel, PokemonV2PokemonformgenerationAggregateModelType } from "./PokemonV2PokemonformgenerationAggregateModel"
import { PokemonV2PokemonformgenerationAggregateModelSelector } from "./PokemonV2PokemonformgenerationAggregateModel.base"
import { PokemonV2PokemonformgenerationModel, PokemonV2PokemonformgenerationModelType } from "./PokemonV2PokemonformgenerationModel"
import { PokemonV2PokemonformgenerationModelSelector } from "./PokemonV2PokemonformgenerationModel.base"
import { PokemonV2PokemonformnameAggregateModel, PokemonV2PokemonformnameAggregateModelType } from "./PokemonV2PokemonformnameAggregateModel"
import { PokemonV2PokemonformnameAggregateModelSelector } from "./PokemonV2PokemonformnameAggregateModel.base"
import { PokemonV2PokemonformnameModel, PokemonV2PokemonformnameModelType } from "./PokemonV2PokemonformnameModel"
import { PokemonV2PokemonformnameModelSelector } from "./PokemonV2PokemonformnameModel.base"
import { PokemonV2PokemonformspritesAggregateModel, PokemonV2PokemonformspritesAggregateModelType } from "./PokemonV2PokemonformspritesAggregateModel"
import { PokemonV2PokemonformspritesAggregateModelSelector } from "./PokemonV2PokemonformspritesAggregateModel.base"
import { PokemonV2PokemonformspritesModel, PokemonV2PokemonformspritesModelType } from "./PokemonV2PokemonformspritesModel"
import { PokemonV2PokemonformspritesModelSelector } from "./PokemonV2PokemonformspritesModel.base"
import { PokemonV2PokemonformtypeAggregateModel, PokemonV2PokemonformtypeAggregateModelType } from "./PokemonV2PokemonformtypeAggregateModel"
import { PokemonV2PokemonformtypeAggregateModelSelector } from "./PokemonV2PokemonformtypeAggregateModel.base"
import { PokemonV2PokemonformtypeModel, PokemonV2PokemonformtypeModelType } from "./PokemonV2PokemonformtypeModel"
import { PokemonV2PokemonformtypeModelSelector } from "./PokemonV2PokemonformtypeModel.base"
import { PokemonV2VersiongroupModel, PokemonV2VersiongroupModelType } from "./PokemonV2VersiongroupModel"
import { PokemonV2VersiongroupModelSelector } from "./PokemonV2VersiongroupModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformBase
 * auto generated base class for the model PokemonV2PokemonformModel.
 *
 * columns and relationships of "pokemon_v2_pokemonform"
 */
export const PokemonV2PokemonformModelBase = ModelBase
  .named('PokemonV2Pokemonform')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonform"), "pokemon_v2_pokemonform"),
    form_name: types.union(types.undefined, types.string),
    form_order: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    is_battle_only: types.union(types.undefined, types.boolean),
    is_default: types.union(types.undefined, types.boolean),
    is_mega: types.union(types.undefined, types.boolean),
    name: types.union(types.undefined, types.string),
    order: types.union(types.undefined, types.null, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_pokemon: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonModel)),
    /** An array relationship */
    pokemon_v2_pokemonformgenerations: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonformgenerationModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonformgenerations_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonformgenerationAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonformnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonformnameModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonformnames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonformnameAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonformsprites: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonformspritesModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonformsprites_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonformspritesAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonformtypes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonformtypeModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonformtypes_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonformtypeAggregateModel)),
    /** An object relationship */
    pokemon_v2_versiongroup: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupModel)),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformModelSelector extends QueryBuilder {
  get form_name() { return this.__attr(`form_name`) }
  get form_order() { return this.__attr(`form_order`) }
  get id() { return this.__attr(`id`) }
  get is_battle_only() { return this.__attr(`is_battle_only`) }
  get is_default() { return this.__attr(`is_default`) }
  get is_mega() { return this.__attr(`is_mega`) }
  get name() { return this.__attr(`name`) }
  get order() { return this.__attr(`order`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
  pokemon_v2_pokemon(builder?: string | PokemonV2PokemonModelSelector | ((selector: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector)) { return this.__child(`pokemon_v2_pokemon`, PokemonV2PokemonModelSelector, builder) }
  pokemon_v2_pokemonformgenerations(builder?: string | PokemonV2PokemonformgenerationModelSelector | ((selector: PokemonV2PokemonformgenerationModelSelector) => PokemonV2PokemonformgenerationModelSelector)) { return this.__child(`pokemon_v2_pokemonformgenerations`, PokemonV2PokemonformgenerationModelSelector, builder) }
  pokemon_v2_pokemonformgenerations_aggregate(builder?: string | PokemonV2PokemonformgenerationAggregateModelSelector | ((selector: PokemonV2PokemonformgenerationAggregateModelSelector) => PokemonV2PokemonformgenerationAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonformgenerations_aggregate`, PokemonV2PokemonformgenerationAggregateModelSelector, builder) }
  pokemon_v2_pokemonformnames(builder?: string | PokemonV2PokemonformnameModelSelector | ((selector: PokemonV2PokemonformnameModelSelector) => PokemonV2PokemonformnameModelSelector)) { return this.__child(`pokemon_v2_pokemonformnames`, PokemonV2PokemonformnameModelSelector, builder) }
  pokemon_v2_pokemonformnames_aggregate(builder?: string | PokemonV2PokemonformnameAggregateModelSelector | ((selector: PokemonV2PokemonformnameAggregateModelSelector) => PokemonV2PokemonformnameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonformnames_aggregate`, PokemonV2PokemonformnameAggregateModelSelector, builder) }
  pokemon_v2_pokemonformsprites(builder?: string | PokemonV2PokemonformspritesModelSelector | ((selector: PokemonV2PokemonformspritesModelSelector) => PokemonV2PokemonformspritesModelSelector)) { return this.__child(`pokemon_v2_pokemonformsprites`, PokemonV2PokemonformspritesModelSelector, builder) }
  pokemon_v2_pokemonformsprites_aggregate(builder?: string | PokemonV2PokemonformspritesAggregateModelSelector | ((selector: PokemonV2PokemonformspritesAggregateModelSelector) => PokemonV2PokemonformspritesAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonformsprites_aggregate`, PokemonV2PokemonformspritesAggregateModelSelector, builder) }
  pokemon_v2_pokemonformtypes(builder?: string | PokemonV2PokemonformtypeModelSelector | ((selector: PokemonV2PokemonformtypeModelSelector) => PokemonV2PokemonformtypeModelSelector)) { return this.__child(`pokemon_v2_pokemonformtypes`, PokemonV2PokemonformtypeModelSelector, builder) }
  pokemon_v2_pokemonformtypes_aggregate(builder?: string | PokemonV2PokemonformtypeAggregateModelSelector | ((selector: PokemonV2PokemonformtypeAggregateModelSelector) => PokemonV2PokemonformtypeAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonformtypes_aggregate`, PokemonV2PokemonformtypeAggregateModelSelector, builder) }
  pokemon_v2_versiongroup(builder?: string | PokemonV2VersiongroupModelSelector | ((selector: PokemonV2VersiongroupModelSelector) => PokemonV2VersiongroupModelSelector)) { return this.__child(`pokemon_v2_versiongroup`, PokemonV2VersiongroupModelSelector, builder) }
}
export function selectFromPokemonV2Pokemonform() {
  return new PokemonV2PokemonformModelSelector()
}

export const pokemonV2PokemonformModelPrimitives = selectFromPokemonV2Pokemonform().form_name.form_order.is_battle_only.is_default.is_mega.name.order.pokemon_id.version_group_id
