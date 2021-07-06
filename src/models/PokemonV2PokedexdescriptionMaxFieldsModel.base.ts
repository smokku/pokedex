/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexdescriptionMaxFieldsBase
 * auto generated base class for the model PokemonV2PokedexdescriptionMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PokedexdescriptionMaxFieldsModelBase = ModelBase
  .named('PokemonV2PokedexdescriptionMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexdescription_max_fields"), "pokemon_v2_pokedexdescription_max_fields"),
    description: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    pokedex_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexdescriptionMaxFieldsModelSelector extends QueryBuilder {
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
}
export function selectFromPokemonV2PokedexdescriptionMaxFields() {
  return new PokemonV2PokedexdescriptionMaxFieldsModelSelector()
}

export const pokemonV2PokedexdescriptionMaxFieldsModelPrimitives = selectFromPokemonV2PokedexdescriptionMaxFields().description.language_id.pokedex_id
