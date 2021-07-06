/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonformModel, PokemonV2PokemonformModelType } from "./PokemonV2PokemonformModel"
import { PokemonV2PokemonformModelSelector } from "./PokemonV2PokemonformModel.base"
import { PokemonV2TypeModel, PokemonV2TypeModelType } from "./PokemonV2TypeModel"
import { PokemonV2TypeModelSelector } from "./PokemonV2TypeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformtypeBase
 * auto generated base class for the model PokemonV2PokemonformtypeModel.
 *
 * columns and relationships of "pokemon_v2_pokemonformtype"
 */
export const PokemonV2PokemonformtypeModelBase = ModelBase
  .named('PokemonV2Pokemonformtype')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformtype"), "pokemon_v2_pokemonformtype"),
    id: types.union(types.undefined, types.integer),
    pokemon_form_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_pokemonform: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformModel)),
    /** An object relationship */
    pokemon_v2_type: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeModel)),
    slot: types.union(types.undefined, types.integer),
    type_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformtypeModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
  get slot() { return this.__attr(`slot`) }
  get type_id() { return this.__attr(`type_id`) }
  pokemon_v2_pokemonform(builder?: string | PokemonV2PokemonformModelSelector | ((selector: PokemonV2PokemonformModelSelector) => PokemonV2PokemonformModelSelector)) { return this.__child(`pokemon_v2_pokemonform`, PokemonV2PokemonformModelSelector, builder) }
  pokemon_v2_type(builder?: string | PokemonV2TypeModelSelector | ((selector: PokemonV2TypeModelSelector) => PokemonV2TypeModelSelector)) { return this.__child(`pokemon_v2_type`, PokemonV2TypeModelSelector, builder) }
}
export function selectFromPokemonV2Pokemonformtype() {
  return new PokemonV2PokemonformtypeModelSelector()
}

export const pokemonV2PokemonformtypeModelPrimitives = selectFromPokemonV2Pokemonformtype().pokemon_form_id.slot.type_id
