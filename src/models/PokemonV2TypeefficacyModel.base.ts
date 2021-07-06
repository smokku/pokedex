/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2TypeModel, PokemonV2TypeModelType } from "./PokemonV2TypeModel"
import { PokemonV2TypeModelSelector } from "./PokemonV2TypeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypeefficacyBase
 * auto generated base class for the model PokemonV2TypeefficacyModel.
 *
 * columns and relationships of "pokemon_v2_typeefficacy"
 */
export const PokemonV2TypeefficacyModelBase = ModelBase
  .named('PokemonV2Typeefficacy')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typeefficacy"), "pokemon_v2_typeefficacy"),
    damage_factor: types.union(types.undefined, types.integer),
    damage_type_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    /** An object relationship */
    pokemonV2TypeByTargetTypeId: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeModel)),
    /** An object relationship */
    pokemon_v2_type: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeModel)),
    target_type_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypeefficacyModelSelector extends QueryBuilder {
  get damage_factor() { return this.__attr(`damage_factor`) }
  get damage_type_id() { return this.__attr(`damage_type_id`) }
  get id() { return this.__attr(`id`) }
  get target_type_id() { return this.__attr(`target_type_id`) }
  pokemonV2TypeByTargetTypeId(builder?: string | PokemonV2TypeModelSelector | ((selector: PokemonV2TypeModelSelector) => PokemonV2TypeModelSelector)) { return this.__child(`pokemonV2TypeByTargetTypeId`, PokemonV2TypeModelSelector, builder) }
  pokemon_v2_type(builder?: string | PokemonV2TypeModelSelector | ((selector: PokemonV2TypeModelSelector) => PokemonV2TypeModelSelector)) { return this.__child(`pokemon_v2_type`, PokemonV2TypeModelSelector, builder) }
}
export function selectFromPokemonV2Typeefficacy() {
  return new PokemonV2TypeefficacyModelSelector()
}

export const pokemonV2TypeefficacyModelPrimitives = selectFromPokemonV2Typeefficacy().damage_factor.damage_type_id.target_type_id
