/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GrowthratedescriptionMinFieldsBase
 * auto generated base class for the model PokemonV2GrowthratedescriptionMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2GrowthratedescriptionMinFieldsModelBase = ModelBase
  .named('PokemonV2GrowthratedescriptionMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_growthratedescription_min_fields"), "pokemon_v2_growthratedescription_min_fields"),
    description: types.union(types.undefined, types.null, types.string),
    growth_rate_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GrowthratedescriptionMinFieldsModelSelector extends QueryBuilder {
  get description() { return this.__attr(`description`) }
  get growth_rate_id() { return this.__attr(`growth_rate_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2GrowthratedescriptionMinFields() {
  return new PokemonV2GrowthratedescriptionMinFieldsModelSelector()
}

export const pokemonV2GrowthratedescriptionMinFieldsModelPrimitives = selectFromPokemonV2GrowthratedescriptionMinFields().description.growth_rate_id.language_id
