/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitynameMaxFieldsBase
 * auto generated base class for the model PokemonV2AbilitynameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2AbilitynameMaxFieldsModelBase = ModelBase
  .named('PokemonV2AbilitynameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityname_max_fields"), "pokemon_v2_abilityname_max_fields"),
    ability_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitynameMaxFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2AbilitynameMaxFields() {
  return new PokemonV2AbilitynameMaxFieldsModelSelector()
}

export const pokemonV2AbilitynameMaxFieldsModelPrimitives = selectFromPokemonV2AbilitynameMaxFields().ability_id.language_id.name
