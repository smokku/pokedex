/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EgggroupStddevPopFieldsBase
 * auto generated base class for the model PokemonV2EgggroupStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2EgggroupStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2EgggroupStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_egggroup_stddev_pop_fields"), "pokemon_v2_egggroup_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EgggroupStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EgggroupStddevPopFields() {
  return new PokemonV2EgggroupStddevPopFieldsModelSelector()
}

export const pokemonV2EgggroupStddevPopFieldsModelPrimitives = selectFromPokemonV2EgggroupStddevPopFields()
