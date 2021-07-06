/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemontypeVarianceFieldsBase
 * auto generated base class for the model PokemonV2PokemontypeVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemontypeVarianceFieldsModelBase = ModelBase
  .named('PokemonV2PokemontypeVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemontype_variance_fields"), "pokemon_v2_pokemontype_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_id: types.union(types.undefined, types.null, types.number),
    slot: types.union(types.undefined, types.null, types.number),
    type_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemontypeVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get slot() { return this.__attr(`slot`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2PokemontypeVarianceFields() {
  return new PokemonV2PokemontypeVarianceFieldsModelSelector()
}

export const pokemonV2PokemontypeVarianceFieldsModelPrimitives = selectFromPokemonV2PokemontypeVarianceFields().pokemon_id.slot.type_id
