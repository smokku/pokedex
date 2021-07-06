/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonStddevFieldsBase
 * auto generated base class for the model PokemonV2PokemonStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonStddevFieldsModelBase = ModelBase
  .named('PokemonV2PokemonStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemon_stddev_fields"), "pokemon_v2_pokemon_stddev_fields"),
    base_experience: types.union(types.undefined, types.null, types.number),
    height: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    order: types.union(types.undefined, types.null, types.number),
    pokemon_species_id: types.union(types.undefined, types.null, types.number),
    weight: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonStddevFieldsModelSelector extends QueryBuilder {
  get base_experience() { return this.__attr(`base_experience`) }
  get height() { return this.__attr(`height`) }
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
  get weight() { return this.__attr(`weight`) }
}
export function selectFromPokemonV2PokemonStddevFields() {
  return new PokemonV2PokemonStddevFieldsModelSelector()
}

export const pokemonV2PokemonStddevFieldsModelPrimitives = selectFromPokemonV2PokemonStddevFields().base_experience.height.order.pokemon_species_id.weight
