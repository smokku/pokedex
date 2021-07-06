/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonegggroupStddevFieldsBase
 * auto generated base class for the model PokemonV2PokemonegggroupStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonegggroupStddevFieldsModelBase = ModelBase
  .named('PokemonV2PokemonegggroupStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonegggroup_stddev_fields"), "pokemon_v2_pokemonegggroup_stddev_fields"),
    egg_group_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_species_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonegggroupStddevFieldsModelSelector extends QueryBuilder {
  get egg_group_id() { return this.__attr(`egg_group_id`) }
  get id() { return this.__attr(`id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
}
export function selectFromPokemonV2PokemonegggroupStddevFields() {
  return new PokemonV2PokemonegggroupStddevFieldsModelSelector()
}

export const pokemonV2PokemonegggroupStddevFieldsModelPrimitives = selectFromPokemonV2PokemonegggroupStddevFields().egg_group_id.pokemon_species_id
