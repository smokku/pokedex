/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonshapenameVarianceFieldsBase
 * auto generated base class for the model PokemonV2PokemonshapenameVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonshapenameVarianceFieldsModelBase = ModelBase
  .named('PokemonV2PokemonshapenameVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonshapename_variance_fields"), "pokemon_v2_pokemonshapename_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_shape_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonshapenameVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_shape_id() { return this.__attr(`pokemon_shape_id`) }
}
export function selectFromPokemonV2PokemonshapenameVarianceFields() {
  return new PokemonV2PokemonshapenameVarianceFieldsModelSelector()
}

export const pokemonV2PokemonshapenameVarianceFieldsModelPrimitives = selectFromPokemonV2PokemonshapenameVarianceFields().language_id.pokemon_shape_id
